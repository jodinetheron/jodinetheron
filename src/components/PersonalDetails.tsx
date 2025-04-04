
import { Mail, Phone, MapPin, Calendar, Flag, Globe, Linkedin, Clock } from "lucide-react";

interface PersonalDetailsProps {
  details: {
    email: string;
    phone: string;
    location: string;
    dob: string;
    nationality: string;
    website: string;
    linkedin: string;
    timeZones: string[];
  };
}

const PersonalDetails = ({ details }: PersonalDetailsProps) => {
  return (
    <div className="cv-section" style={{ "--delay": "2" } as React.CSSProperties}>
      <h2 className="cv-section-title">Personal Details</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-cv-purple" />
          <a href={`mailto:${details.email}`} className="text-gray-300 hover:text-cv-purple transition-colors">
            {details.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-cv-purple" />
          <a href={`tel:${details.phone}`} className="text-gray-300 hover:text-cv-purple transition-colors">
            {details.phone}
          </a>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-cv-purple mt-1" />
          <span className="text-gray-300">{details.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cv-purple" />
          <span className="text-gray-300">{details.dob}</span>
        </div>
        <div className="flex items-center gap-2">
          <Flag className="h-4 w-4 text-cv-purple" />
          <span className="text-gray-300">{details.nationality}</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-cv-purple" />
          <a href={details.website} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cv-purple transition-colors">
            {details.website.replace(/^https?:\/\//, '')}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="h-4 w-4 text-cv-purple" />
          <a href={details.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cv-purple transition-colors">
            {details.linkedin.replace(/^https?:\/\//, '')}
          </a>
        </div>
        
        {details.timeZones.map((timeZone, index) => (
          <div key={index} className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-cv-purple mt-1" />
            <span className="text-gray-300 whitespace-pre-line">{timeZone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetails;
