
import { useEffect, useState } from "react";

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

  return (
    <div className="cv-section" style={{ "--delay": "3" } as React.CSSProperties}>
      <h2 className="cv-section-title">Key Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => {
          const percentage = (skill.years / maxYears) * 100;
          
          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-cv-purple">{skill.years} years</span>
              </div>
              <div className="bg-muted/20 rounded-full h-4 overflow-hidden flex">
                {Array.from({ length: maxYears }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-full flex-1 border-r border-muted/10 ${i < skill.years ? 'skill-segment' : ''}`}
                    style={{ 
                      opacity: animate ? 1 : 0,
                      transition: `opacity 500ms ease-out ${index * 100 + i * 20}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsChart;
