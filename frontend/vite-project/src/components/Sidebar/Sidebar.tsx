import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import authService from '../../services/auth.service';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userInitials, setUserInitials] = useState<string>('U');
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar nome do usuário ao montar componente
    const name = authService.getUserName();
    const initials = authService.getUserInitials();
    
    if (name) {
      setUserName(name);
      setUserInitials(initials);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <>
      <button 
        className={styles.hamburger} 
        onClick={toggleSidebar} 
        aria-label="Abrir menu"
      >
        <img src="/src/assets/hamburgericon.png" alt="Ícone do menu hambúrguer" />
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.content}>
          
          {/* Perfil do usuário */}
          <div className={styles.userProfile}>
            <div className={styles.avatar}>
              {userInitials}
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{userName}</span>
              <span className={styles.userRole}>Usuário</span>
            </div>
          </div>

          <ul className={styles.links}>
            <li>
              <a href="#saldo-total" className={styles.link}> 
                <img src="/src/assets/saldo.png" alt="Ícone do Saldo"/>
                Saldo
              </a>
            </li>
            <li>
              <a href="#transacao" className={styles.link}>
                <img src="/src/assets/transacoes.png" alt="Ícone das Transações"/>
                Transações
              </a>
            </li>
            <li>
              <a href="#grafico" className={styles.link}>
                <img src="/src/assets/grafico.png" alt="Ícone do Gráfico"/>
                Gráfico
              </a>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.link}>
                <img src="/src/assets/logout.png" alt="Ícone de Logout"/>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};