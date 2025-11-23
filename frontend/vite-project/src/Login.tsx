import { useState } from 'react';
import type { FormEvent } from 'react';
import "./styles/global.css";
import './App.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/cardLogin.tsx"
import { Input } from './components/input.tsx'
import { Label } from './components/label.tsx'
import { Button } from './components/button.tsx'
import Logo from './assets/logoSoldi.png';
import authService from './services/auth.service';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      await authService.login({ email, senha });
      // Login com sucesso! Redirecionar para dashboard
      alert('Login realizado com sucesso!');
      // TODO: Adicionar navegação para o dashboard
      // window.location.href = '/dashboard';
    } catch (error: any) {
      const mensagemErro = error.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.';
      setErro(mensagemErro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <main className="container">
        <div className="login-box">
          <section className="login-form">
            <img src={Logo} alt="Imagem de login" className="logo-image" />
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking tighter">
                  Entre com sua conta
                </CardTitle>
                <CardDescription>
                  Utilize seu e-mail e senha
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin}>
                  <div>
                    <Label className="label-base" htmlFor="email">E-mail</Label>
                    <Input
                      className="input-base"
                      id="email"
                      placeholder="user@email.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <br />
                    <Label className="label-base" htmlFor="password">Senha</Label>
                    <Input
                      className=""
                      id="password"
                      placeholder="user123"
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </div>
                  
                  {erro && (
                    <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
                      {erro}
                    </p>
                  )}

                  <br />
                  <a href="#" className="link">
                    Cadastre-se
                  </a>
                  <Button
                    className="btn-login"
                    type="submit"
                    disabled={carregando}
                  >
                    {carregando ? 'Entrando...' : 'Entrar'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  )
}

export default Login