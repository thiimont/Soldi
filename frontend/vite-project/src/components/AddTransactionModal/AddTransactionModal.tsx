import { useState, type FormEvent } from 'react';
import './AddTransactionModal.css';
import transacaoService from '../../services/transacao.service';
import type { TipoTransacao } from '../../types/api.types';

interface AddTransactionModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddTransactionModal({ onClose, onSuccess }: AddTransactionModalProps) {
  const [tipo, setTipo] = useState<TipoTransacao>('DESPESA');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const categorias = {
    DESPESA: ['Alimentação', 'Transporte', 'Moradia', 'Educação', 'Saúde', 'Lazer', 'Compras', 'Contas', 'Outros'],
    RECEITA: ['Salário', 'Freelance', 'Investimentos', 'Vendas', 'Bônus', 'Projetos', 'Outros']
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErro('');

    // Validações
    if (!valor || parseFloat(valor) <= 0) {
      setErro('Valor deve ser maior que zero');
      return;
    }

    if (!descricao.trim()) {
      setErro('Descrição é obrigatória');
      return;
    }

    if (!categoria) {
      setErro('Selecione uma categoria');
      return;
    }

    setCarregando(true);

    try {
      await transacaoService.criar({
        tipo,
        valor: parseFloat(valor),
        descricao: descricao.trim(),
        categoria
      });

      onSuccess();
    } catch (error: any) {
      console.error('Erro ao criar transação:', error);
      setErro(error.response?.data?.message || 'Erro ao criar transação. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.,]/g, '');
    setValor(value);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Adicionar Transação</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="transaction-form">
          
          {/* Tipo */}
          <div className="form-group">
            <label className="form-label">Tipo</label>
            <div className="radio-group">
              <label className={`radio-label ${tipo === 'RECEITA' ? 'active receita' : ''}`}>
                <input
                  type="radio"
                  value="RECEITA"
                  checked={tipo === 'RECEITA'}
                  onChange={(e) => setTipo(e.target.value as TipoTransacao)}
                />
                <span>💰 Receita</span>
              </label>
              <label className={`radio-label ${tipo === 'DESPESA' ? 'active despesa' : ''}`}>
                <input
                  type="radio"
                  value="DESPESA"
                  checked={tipo === 'DESPESA'}
                  onChange={(e) => setTipo(e.target.value as TipoTransacao)}
                />
                <span>💸 Despesa</span>
              </label>
            </div>
          </div>

          {/* Valor */}
          <div className="form-group">
            <label className="form-label" htmlFor="valor">Valor (R$)</label>
            <input
              type="text"
              id="valor"
              className="form-input"
              placeholder="0,00"
              value={valor}
              onChange={handleValorChange}
              required
            />
          </div>

          {/* Descrição */}
          <div className="form-group">
            <label className="form-label" htmlFor="descricao">Descrição</label>
            <input
              type="text"
              id="descricao"
              className="form-input"
              placeholder="Ex: Compra no supermercado"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              maxLength={100}
            />
          </div>

          {/* Categoria */}
          <div className="form-group">
            <label className="form-label" htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias[tipo].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Erro */}
          {erro && (
            <div className="error-message">
              ⚠️ {erro}
            </div>
          )}

          {/* Botões */}
          <div className="form-actions">
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={onClose}
              disabled={carregando}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="btn-submit"
              disabled={carregando}
            >
              {carregando ? 'Adicionando...' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}