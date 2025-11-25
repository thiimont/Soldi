import api from '../config/api';
import type { 
  SaldoResponse, 
  GastoPorCategoria, 
  ChatResponse 
} from '../types/api.types';

class UsuarioService {

  async getSaldo(): Promise<SaldoResponse> {
    const response = await api.get<SaldoResponse>('/usuarios/me/saldo');
    return response.data;
  }

  
  async getGastosPorCategoria(): Promise<GastoPorCategoria[]> {
    const response = await api.get<GastoPorCategoria[]>('/usuarios/me/analytics/gastos-categoria');
    return response.data;
  }

  async getAiInsight(): Promise<ChatResponse> {
  const response = await api.get<ChatResponse>('/usuarios/me/transacoes/ai-insight');
  return response.data;
}
}

export default new UsuarioService();