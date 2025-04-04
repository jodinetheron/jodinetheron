
interface HobbiesSectionProps {
  hobbies: string[];
}

const HobbiesSection = ({ hobbies }: HobbiesSectionProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "8" } as React.CSSProperties}>
      <h2 className="cv-section-title">Hobbies</h2>
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby, index) => (
          <span 
            key={index} 
            className="bg-gradient-to-r from-cv-blue/20 to-cv-purple/20 text-white px-3 py-1 rounded-full"
          >
            {hobby}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HobbiesSection;
