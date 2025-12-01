import "./Grafico.css";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import type { GastoMensal } from "../../types/api.types";

interface GraficoProps {
  dados?: GastoMensal[];
}

export default function FluxoCaixaChart({ dados = [] }: GraficoProps) {
  
  console.log('=== DEBUG GRAFICO ===');
  console.log('Dados recebidos:', dados);
  console.log('Quantidade:', dados.length);
  console.log('====================');

  const chartData = dados.map((item) => ({
    name: item.label,       // mudou de item.mes
    entrada: item.revenuea, // mudou de item.receita
    saida: item.cost,       // mudou de item.despesa
  }));

  if (chartData.length === 0) {
    return (
      <div className="fluxo-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '300px'
      }}>
        <p>Nenhum dado disponível para exibir o gráfico.</p>
      </div>
    );
  }

  return (
    <div className="fluxo-container">
      <h2>Fluxo de Caixa Mensal</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}> 
          <defs>
            <linearGradient id="colorEntrada" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00b96b" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00b96b" stopOpacity={0}/>
            </linearGradient>

            <linearGradient id="colorSaida" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width={70} tickFormatter={(value: number) => `R$ ${value}`} />
          <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />

          <Area 
            type="monotone" 
            dataKey="entrada" 
            stroke="#00b96b" 
            fill="url(#colorEntrada)" 
            name="Receitas"
          />

          <Area 
            type="monotone" 
            dataKey="saida" 
            stroke="#ff4d4f" 
            fill="url(#colorSaida)" 
            name="Despesas"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}