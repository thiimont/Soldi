import "../styles/Home.css";
import { Card } from "../components/Card/Card";
import { Nav } from "../components/Sidebar/Sidebar"; 

function App() {
  return (
    <div className="App">
      <Nav/> 
      <main style={{ padding: '20px' }}>
      <div className="cards">
        <Card 
          title="Saldo Total"
          description="seu saldo é..."
        />
        <Card 
          title="..."
          description="..."
        />
        <Card 
          title="..."
          description="..."
        />
        <Card 
          title="..."
          description="..."
        />
      </div>
     </main>
    </div>
  );
}
export default App;