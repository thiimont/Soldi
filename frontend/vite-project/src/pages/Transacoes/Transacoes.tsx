import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transacoes.css';
import { Nav } from '../../components/Sidebar/Sidebar';
import AddTransactionButton from '../../components/AddTransactionButton/AddTransactionButton';
import EditTransactionModal from '../../components/EditTransactionModal/EditTransactionModal';
import transacaoService from '../../services/transacao.service';
import authService from '../../services/auth.service';
import type { TransacaoResumo } from '../../types/api.types';

export default function Transacoes() {
  const navigate = useNavigate();
  const [transacoes, setTransacoes] = useState<TransacaoResumo[]>([]);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState<TransacaoResumo | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    carregarTransacoes();
  }, [navigate]);

  const carregarTransacoes = async () => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
      return;
    }

    try {
      setCarregando(true);
      const dados = await transacaoService.listarTodas();
      // Ordenar por data (mais recente primeiro)
      const ordenadas = dados.sort((a, b) => 
        new Date(b.dataTransacao).getTime() - new Date(a.dataTransacao).getTime()
      );
      setTransacoes(ordenadas);
    } catch (error: any) {
      console.error('Erro ao carregar transações:', error);
      setErro('Erro ao carregar transações. Tente novamente.');
      
      if (error.response?.status === 401) {
        authService.logout();
        navigate('/login');
      }
    } finally {
      setCarregando(false);
    }
  };

  const handleEditar = (transacao: TransacaoResumo) => {
    setTransacaoSelecionada(transacao);
    setIsEditModalOpen(true);
  };

  const handleDeletar = async (uuid: string) => {
    if (!window.confirm('Tem certeza que deseja deletar esta transação?')) {
      return;
    }

    try {
      await transacaoService.deletar(uuid);
      await carregarTransacoes();
    } catch (error: any) {
      console.error('Erro ao deletar transação:', error);
      alert('Erro ao deletar transação. Tente novamente.');
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTransacaoSelecionada(null);
  };

  const handleUpdateSuccess = async () => {
    setIsEditModalOpen(false);
    setTransacaoSelecionada(null);
    await carregarTransacoes();
  };

  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  if (carregando) {
    return (
      <div className="App">
        <Nav />
        <main className="transacoes-main">
          <div className="loading-container">
            <h2>Carregando transações...</h2>
          </div>
        </main>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="App">
        <Nav />
        <main className="transacoes-main">
          <div className="error-container">
            <h2 style={{ color: 'red' }}>{erro}</h2>
            <button onClick={carregarTransacoes}>Tentar Novamente</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <Nav />
      <main className="transacoes-main">
        <div className="transacoes-header">
          <h1>Todas as Transações</h1>
          <p className="transacoes-count">
            {transacoes.length} {transacoes.length === 1 ? 'transação' : 'transações'}
          </p>
        </div>

        {transacoes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📊</div>
            <h2>Nenhuma transação encontrada</h2>
            <p>Comece adicionando sua primeira transação clicando no botão +</p>
          </div>
        ) : (
          <div className="transacoes-grid">
            {transacoes.map((transacao) => (
              <div 
                key={transacao.uuidTransacao} 
                className={`transacao-card ${transacao.tipo.toLowerCase()}`}
              >
                <div className="transacao-header">
                  <span className={`tipo-badge ${transacao.tipo.toLowerCase()}`}>
                    {transacao.tipo === 'RECEITA' ? '💰' : '💸'} {transacao.tipo}
                  </span>
                  <span className="transacao-data">{formatarData(transacao.dataTransacao)}</span>
                </div>

                <div className="transacao-body">
                  <h3 className="transacao-descricao">{transacao.descricao}</h3>
                  <p className="transacao-categoria">📁 {transacao.categoria}</p>
                  <p className={`transacao-valor ${transacao.tipo.toLowerCase()}`}>
                    {formatarMoeda(transacao.valor)}
                  </p>
                </div>

                <div className="transacao-actions">
                  <button 
                    className="btn-edit" 
                    onClick={() => handleEditar(transacao)}
                    title="Editar"
                  >
                    ✏️ Editar
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDeletar(transacao.uuidTransacao)}
                    title="Deletar"
                  >
                    🗑️ Deletar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <AddTransactionButton />

        {isEditModalOpen && transacaoSelecionada && (
          <EditTransactionModal
            transacao={transacaoSelecionada}
            onClose={handleCloseEditModal}
            onSuccess={handleUpdateSuccess}
          />
        )}
      </main>
    </div>
  );
}