import "./Modal.css";

// type ChatSidebarProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

export function ChatBot({}) {
  return (
    <div className="container-modal">
      <div className="chatbot-popup">
        {/* Header */}
        <div className="chat-header">
          <div className="header-info">
            <h2>ChatBot</h2>
          </div> 
          <button className="material-symbols">v</button>   
        </div>
      </div>
      {/* CHAT Body */}
      <div className="chat-body">
        <div className="message bot-message">
        <p className="message-text">
          Olá! eu sou o SoldIA
        </p>
      </div>
      <div className="message user-message">
        <p className="message-text">
          Gostaria de organizar minhas finanças
        </p>
      </div>
    </div>
  
    {/* CHAT Footer */}
    <div className="chat-footer">
      <form action="" className="chat-form" id="">
          <button className="material-symbols">Ver histórico de Transação</button>
      </form>
    </div>
  </div>
  

  );
}
