import { useState, useEffect } from "react";
import "./Modal.css";
import usuarioService from "../../services/usuario.service";
import type { ChatResponse } from "../../types/api.types";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [aiInsight, setAiInsight] = useState<ChatResponse | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const buscarInsight = async () => {
      try {
        setCarregando(true);
        const dados = await usuarioService.getAiInsight();
        setAiInsight(dados);
      } catch (error: any) {
        console.error('Erro ao buscar insight da IA:', error);
        setErro('Não foi possível carregar a análise. Tente novamente.');
      } finally {
        setCarregando(false);
      }
    };

    buscarInsight();
  }, []);

  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Formatar resposta da IA com HTML
  const formatarResposta = (texto: string) => {
    // Substituir **negrito** por <strong>
    let formatted = texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Adicionar quebras de linha duplas como parágrafos
    formatted = formatted.split('\n\n').map(paragrafo => {
      if (paragrafo.trim()) {
        // Se começa com número seguido de ponto, é um tópico principal
        if (/^\d+\./.test(paragrafo.trim())) {
          return `<div class="topic">${paragrafo}</div>`;
        }
        // Se começa com hífen ou asterisco, é um item de lista
        if (/^[-*]/.test(paragrafo.trim())) {
          return `<div class="list-item">${paragrafo.replace(/^[-*]\s*/, '• ')}</div>`;
        }
        return `<p>${paragrafo}</p>`;
      }
      return '';
    }).join('');

    return formatted;
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <div className="chatbox-header">
          <div className="header-content">
            <span className="chatbox-title">🤖 SoldIA</span>
            <span className="chatbox-subtitle">Assistente Financeiro</span>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="chatbox-body">
          {carregando && (
            <div className="message bot-message loading">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="message-text">
                Analisando suas transações...
              </p>
            </div>
          )}

          {erro && (
            <div className="message bot-message error">
              <p className="message-text">
                ❌ {erro}
              </p>
            </div>
          )}

          {aiInsight && !carregando && (
            <>
              <div className="message bot-message">
                <div 
                  className="message-text formatted"
                  dangerouslySetInnerHTML={{ __html: formatarResposta(aiInsight.resposta) }}
                />
              </div>
              <div className="message-timestamp">
                📅 {formatarData(aiInsight.dataResposta)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}