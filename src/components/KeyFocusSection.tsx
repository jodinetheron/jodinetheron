
interface KeyFocusSectionProps {
  items: string[];
}

const KeyFocusSection = ({ items }: KeyFocusSectionProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "11" } as React.CSSProperties}>
      <h2 className="cv-section-title">Key Focus</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-cv-purple"></div>
            <span className="text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFocusSection;
