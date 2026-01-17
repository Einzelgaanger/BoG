import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Sector } from 'recharts';
import { useState } from 'react';

interface ChannelMixChartProps {
  data: {
    bank: number;
    mmo: number;
    cash: number;
    digital: number;
  };
}

const COLORS = [
  'hsl(222, 47%, 25%)',   // Bank - Primary
  'hsl(45, 93%, 58%)',    // MMO - Accent gold
  'hsl(220, 9%, 56%)',    // Cash - Muted (slightly lighter)
  'hsl(199, 89%, 48%)',   // Digital - Info blue
];

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;

  return (
    <g>
      <text x={cx} y={cy - 8} textAnchor="middle" fill="hsl(var(--foreground))" className="text-lg font-bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-xs">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 12}
        fill={fill}
      />
    </g>
  );
};

export function ChannelMixChart({ data }: ChannelMixChartProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const chartData = [
    { name: 'Bank', value: data.bank },
    { name: 'Mobile Money', value: data.mmo },
    { name: 'Cash', value: data.cash },
    { name: 'Digital Asset', value: data.digital },
  ];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            cx="50%"
            cy="45%"
            innerRadius={50}
            outerRadius={75}
            paddingAngle={3}
            dataKey="value"
            onMouseEnter={onPieEnter}
            animationDuration={1000}
            animationBegin={200}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                className="transition-all duration-300 cursor-pointer"
              />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-xs text-foreground">{value}</span>}
            iconType="circle"
            iconSize={8}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
