import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate('/home');
    }
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => navigate('/register');
  const handleLogin = () => navigate('/login');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-icon">$</div>
            <span className="logo-text">Soldi</span>
          </div>

          <div className="navbar-links">
            <button onClick={() => scrollToSection('features')} className="nav-link">Funcionalidades</button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link">Como Funciona</button>
            <button onClick={() => scrollToSection('stats')} className="nav-link">Sobre</button>
          </div>

          <div className="navbar-actions">
            <button onClick={handleLogin} className="btn-nav btn-outline">Entrar</button>
            <button onClick={handleGetStarted} className="btn-nav btn-primary">Cadastrar</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Gestão Financeira Inteligente</div>
            <h1 className="hero-title">Transforme sua Relação com o Dinheiro</h1>
            <p className="hero-subtitle">
              Gestão financeira inteligente com análise por IA. Controle total das suas finanças em um só lugar.
            </p>
            <div className="hero-buttons">
              <button onClick={handleGetStarted} className="btn btn-primary btn-large">
                Começar Grátis
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="btn btn-secondary btn-large">
                Ver Demonstração
              </button>
            </div>
            <div className="hero-features">
              <div className="hero-feature-item">
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Grátis para sempre</span>
              </div>
              <div className="hero-feature-item">
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="hero-feature-item">
                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>100% seguro</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-card">
                  <div className="mockup-label">Saldo Total</div>
                  <div className="mockup-value">R$ 12.450,00</div>
                  <div className="mockup-trend positive">+12.5% este mês</div>
                </div>
                <div className="mockup-chart">
                  <svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 120 Q 50 80, 100 90 T 200 60 T 300 40"
                          stroke="#99CD85" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M 0 120 Q 50 80, 100 90 T 200 60 T 300 40 L 300 150 L 0 150 Z"
                          fill="url(#gradient)" opacity="0.3"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#99CD85" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#99CD85" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Tudo que você precisa em um só lugar</h2>
            <p className="section-subtitle">Ferramentas completas para gerenciar suas finanças com inteligência</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16V8M12 16V4M17 16v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Dashboard Interativo</h3>
              <p className="feature-description">
                Visualize seu saldo, receitas e despesas em tempo real com gráficos intuitivos
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Controle Total</h3>
              <p className="feature-description">
                Cadastre e gerencie todas suas transações de forma rápida e organizada
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Análise por IA</h3>
              <p className="feature-description">
                Receba insights personalizados e recomendações para otimizar seus gastos
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13l4-4 4 4 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8h3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Relatórios Detalhados</h3>
              <p className="feature-description">
                Gráficos por categoria, período e tipo de transação para decisões informadas
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Segurança Total</h3>
              <p className="feature-description">
                Seus dados protegidos com criptografia e autenticação JWT
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Acesso Anywhere</h3>
              <p className="feature-description">
                Interface responsiva que funciona perfeitamente em qualquer dispositivo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="how-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Comece em 3 passos simples</h2>
            <p className="section-subtitle">Configure sua conta e comece a gerenciar suas finanças em minutos</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="step-title">Crie sua conta grátis</h3>
              <p className="step-description">Cadastro rápido em menos de 1 minuto</p>
            </div>

            <div className="step-connector"></div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="step-title">Adicione suas transações</h3>
              <p className="step-description">Registre receitas e despesas facilmente</p>
            </div>

            <div className="step-connector"></div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="step-title">Acompanhe e otimize</h3>
              <p className="step-description">Visualize relatórios e receba insights da IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Usuários Ativos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">R$ 1M+</div>
              <div className="stat-label">Gerenciados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfação</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Pronto para tomar controle das suas finanças?</h2>
          <p className="cta-subtitle">Junte-se a centenas de usuários que já transformaram sua vida financeira</p>
          <button onClick={handleGetStarted} className="btn btn-cta btn-large">
            Criar Conta Grátis
          </button>
          <div className="cta-badges">
            <span className="cta-badge">Grátis</span>
            <span className="cta-badge">Sem cartão de crédito</span>
            <span className="cta-badge">100% seguro</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">$</div>
                <span className="logo-text">Soldi</span>
              </div>
              <p className="footer-tagline">Seu aliado na gestão financeira pessoal</p>
            </div>

            <div className="footer-links-group">
              <div className="footer-column">
                <h4 className="footer-column-title">Produto</h4>
                <button onClick={() => scrollToSection('features')} className="footer-link">Funcionalidades</button>
                <button onClick={() => scrollToSection('how-it-works')} className="footer-link">Como Funciona</button>
                <button onClick={handleGetStarted} className="footer-link">Começar</button>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Empresa</h4>
                <a href="#" className="footer-link">Sobre</a>
                <a href="#" className="footer-link">Contato</a>
                <a href="#" className="footer-link">Blog</a>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Legal</h4>
                <a href="#" className="footer-link">Privacidade</a>
                <a href="#" className="footer-link">Termos</a>
                <a href="#" className="footer-link">Segurança</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Soldi. Desenvolvido por estudantes da FATEC Praia Grande
            </p>
            <div className="footer-social">
              {/* <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a> */}
              {/* <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
