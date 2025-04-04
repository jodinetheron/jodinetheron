
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface Skill {
  name: string;
  years: number;
}

interface SkillsChartProps {
  skills: Skill[];
  maxYears?: number;
}

const SkillsChart = ({ skills, maxYears = 24 }: SkillsChartProps) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const COLORS = [
    "#8B5CF6", // Vivid Purple
    "#9B87F5", // Primary Purple
    "#7E69AB", // Secondary Purple
    "#6E59A5", // Tertiary Purple
    "#D6BCFA", // Light Purple
  ];

  const data = skills.map(skill => ({
    name: skill.name,
    value: skill.years,
    years: skill.years,
    percentage: Math.round((skill.years / maxYears) * 100)
  }));

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 0.8;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return value > 3 ? (
      <text 
        x={x} 
        y={y} 
        fill="#fff" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        style={{ fontSize: '10px', fontWeight: 'bold' }}
      >
        {value} yrs
      </text>
    ) : null;
  };

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-muted/30 backdrop-blur-sm p-2 rounded-md border border-cv-purple/20">
          <p className="text-gray-300 font-medium">{payload[0].name}</p>
          <p className="text-cv-purple">{payload[0].payload.years} years</p>
          <p className="text-gray-400 text-xs">{payload[0].payload.percentage}% of max</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="cv-section" style={{ "--delay": "3" } as React.CSSProperties}>
      <h2 className="cv-section-title">Top Priority Skills</h2>
      <div className="h-72 w-full">
        <ChartContainer 
          config={{}} 
          className={`w-full h-full transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              animationDuration={1500}
              animationBegin={animate ? 0 : 2000}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip content={customTooltip} />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              formatter={(value, entry, index) => (
                <span className="text-gray-300">{value} ({data[index]?.years} years)</span>
              )}
            />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SkillsChart;
