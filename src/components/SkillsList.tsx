
interface SkillsListProps {
  skills: string[];
  title?: string;
}

const SkillsList = ({ skills, title = "Additional Skills" }: SkillsListProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "10" } as React.CSSProperties}>
      <h2 className="cv-section-title">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gradient-to-r from-cv-purple/10 to-cv-blue/10 text-gray-300 px-3 py-1 rounded-full border border-cv-purple/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
