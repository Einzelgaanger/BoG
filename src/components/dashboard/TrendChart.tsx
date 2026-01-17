import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TrendData {
  month: string;
  inflows: number;
  volume: number;
  reconciled: number;
}

interface TrendChartProps {
  data: TrendData[];
}

export function TrendChart({ data }: TrendChartProps) {
  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="inflowGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0.4}/>
              <stop offset="50%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0.15}/>
              <stop offset="95%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            tickFormatter={formatValue}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === 'inflows') return [formatValue(value), 'Inflows'];
              return [value, name];
            }}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px -2px rgb(0 0 0 / 0.15)',
              padding: '12px 16px',
            }}
            labelStyle={{ 
              color: 'hsl(var(--foreground))',
              fontWeight: 600,
              marginBottom: '4px'
            }}
          />
          <Area
            type="monotone"
            dataKey="inflows"
            stroke="hsl(222, 47%, 25%)"
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#inflowGradient)"
            animationDuration={1500}
            animationBegin={300}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
