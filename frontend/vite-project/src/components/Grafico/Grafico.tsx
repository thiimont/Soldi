import "./Grafico.css";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [ //array de objetos
  { name: "Sem 1", saida: 4000, entrada: 2500 },
  { name: "Sem 2", saida: 3000, entrada: 2000 },
  { name: "Sem 3", saida: 10000, entrada: 8000 },
  { name: "Sem 4", saida: 5000, entrada: 3500 },
  { name: "Sem 5", saida: 6000, entrada: 3000 },
  { name: "Sem 6", saida: 5500, entrada: 3300 },
  { name: "Atual", saida: 7000, entrada: 3800 },
];

export default function FluxoCaixaChart() {
  return (
  
    <div className="fluxo-container">
      <ResponsiveContainer>
        {/* areas e eixos */}
        <AreaChart data={data}> 
          <defs>
            {/* linearGradient =  gradiente vertical */}
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
          <YAxis  width={70} tickFormatter={(value) => `R$ ${value}`} />
          <Tooltip />

        <Area 
            type="monotone" 
            dataKey="saida" 
            stroke="#ff4d4f" 
            fill="url(#colorSaida)" 
          />

          <Area 
            type="monotone" 
            dataKey="entrada" 
            stroke="#00b96b" 
            fill="url(#colorEntrada)" 
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
