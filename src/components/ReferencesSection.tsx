
interface Reference {
  name: string;
  company: string;
  location: string;
  contact: string;
}

interface ReferencesSectionProps {
  references: Reference[];
}

const ReferencesSection = ({ references }: ReferencesSectionProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "9" } as React.CSSProperties}>
      <h2 className="cv-section-title">References</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {references.map((ref, index) => (
          <div key={index} className="bg-card/50 p-4 rounded-lg border border-muted/20">
            <h3 className="font-semibold text-white">{ref.name}</h3>
            <p className="text-gray-300 text-sm">{ref.company}, {ref.location}</p>
            <p className="text-cv-purple mt-2">{ref.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferencesSection;
