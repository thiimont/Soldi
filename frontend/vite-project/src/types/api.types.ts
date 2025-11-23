// Tipos de Transação
export const TipoTransacao = {
  RECEITA: 'RECEITA',
  DESPESA: 'DESPESA'
} as const;

export type TipoTransacao = typeof TipoTransacao[keyof typeof TipoTransacao];

// REQUEST - Login
export interface LoginRequest {
  email: string;
  senha: string;
}

// REQUEST - Registro
export interface RegistrarRequest {
  nome: string;
  email: string;
  senha: string;
}

// RESPONSE - Login
export interface LoginResponse {
  token: string;
}

// RESPONSE - Registro
export interface RegistrarResponse {
  nome: string;
  email: string;
}

// RESPONSE - Transação
export interface TransacaoResumo {
  uuidTransacao: string;
  tipo: TipoTransacao;
  valor: number;
  descricao: string;
  categoria: string;
  dataTransacao: string;
}

// RESPONSE - Saldo
export interface SaldoResponse {
  saldoTotal: number;
  totalReceitas: number;
  totalDespesas: number;
}