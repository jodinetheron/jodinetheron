
interface LanguagesSectionProps {
  languages: string[];
}

const LanguagesSection = ({ languages }: LanguagesSectionProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "7" } as React.CSSProperties}>
      <h2 className="cv-section-title">Languages</h2>
      <div className="flex flex-wrap gap-2">
        {languages.map((language, index) => (
          <span 
            key={index} 
            className="bg-gradient-to-r from-cv-purple/20 to-cv-blue/20 text-white px-3 py-1 rounded-full"
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
