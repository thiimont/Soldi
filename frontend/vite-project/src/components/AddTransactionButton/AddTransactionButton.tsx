import { useState } from 'react';
import './AddTransactionButton.css';
import AddTransactionModal from '../AddTransactionModal/AddTransactionModal';

export default function AddTransactionButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    // Recarregar página para atualizar dados
    window.location.reload();
  };

  return (
    <>
      <button 
        className="add-transaction-btn" 
        onClick={handleOpenModal}
        aria-label="Adicionar transação"
        title="Adicionar transação"
      >
        <span className="plus-icon">+</span>
      </button>

      {isModalOpen && (
        <AddTransactionModal 
          onClose={handleCloseModal}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
}