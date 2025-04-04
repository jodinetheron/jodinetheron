
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
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
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              barSize={12}
              barGap={8}
            >
              <XAxis type="number" domain={[0, maxYears]} />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fill: '#d1d5db' }} 
                width={100}
              />
              <Tooltip content={customTooltip} />
              <Bar dataKey="years" radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SkillsChart;
