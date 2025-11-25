import api from '../config/api';
import type { LoginRequest, LoginResponse, RegistrarRequest, RegistrarResponse } from '../types/api.types';

class AuthService {
  // Fazer login
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', credentials);
    
    // Salvar token no localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response.data;
  }

  // Fazer registro
  async registrar(data: RegistrarRequest): Promise<RegistrarResponse> {
    const response = await api.post<RegistrarResponse>('/auth/registrar', data);
    return response.data;
  }

  // Fazer logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName'); // Limpa nome do usuário também
  }

  // Verificar se está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Pegar nome do usuário (extrair do token JWT)
  getUserName(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      // Decodificar JWT (payload está na segunda parte)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sub || payload.nome || payload.email || 'Usuário';
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      return 'Usuário';
    }
  }

  // Pegar iniciais do nome
  getUserInitials(): string {
    const name = this.getUserName();
    if (!name) return 'U';
    
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
}

export default new AuthService();