
interface ProfileSectionProps {
  profile: string;
}

const ProfileSection = ({ profile }: ProfileSectionProps) => {
  const paragraphs = profile.split('\n\n');
  
  return (
    <div className="cv-section" style={{ "--delay": "4" } as React.CSSProperties}>
      <h2 className="cv-section-title">Profile</h2>
      <div className="space-y-4 text-gray-300">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
