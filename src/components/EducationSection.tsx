
interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "5" } as React.CSSProperties}>
      <h2 className="cv-section-title">Education</h2>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index} className="border-l-2 border-cv-purple/30 pl-4 pb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="font-semibold text-white">{item.degree}</h3>
              <span className="text-cv-purple text-sm">{item.period}</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">{item.institution}, {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
