
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  keyFocus: string[];
  keySkills: string[];
  promotion?: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "6" } as React.CSSProperties}>
      <h2 className="cv-section-title">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-cv-purple/30 pl-4 pb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="font-semibold text-white">{exp.title}</h3>
              <span className="text-cv-purple text-sm">{exp.period}</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">{exp.company}, {exp.location}</p>
            
            <p className="text-gray-300 mt-3">{exp.description}</p>
            
            {exp.keyFocus && exp.keyFocus.length > 0 && (
              <div className="mt-3">
                <h4 className="text-white font-medium">Key Focus:</h4>
                <ul className="list-disc list-inside text-gray-300 mt-1">
                  {exp.keyFocus.map((focus, idx) => (
                    <li key={idx} className="ml-2">{focus}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.keySkills && exp.keySkills.length > 0 && (
              <div className="mt-3">
                <h4 className="text-white font-medium">Key Skills:</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {exp.keySkills.map((skill, idx) => (
                    <li key={idx} className="bg-cv-purple/20 text-gray-200 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.promotion && (
              <p className="mt-3 text-sm italic text-cv-purple">
                {exp.promotion}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
