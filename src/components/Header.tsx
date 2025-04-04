
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  name: string;
  title: string;
  imageSrc?: string;
  onDownload: () => void;
}

const Header = ({ name, title, imageSrc, onDownload }: HeaderProps) => {
  return (
    <div className="cv-section flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-b border-muted/20" style={{ "--delay": "1" } as React.CSSProperties}>
      <div className="flex items-center gap-5">
        {imageSrc && (
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cv-purple/50 flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">{name}</h1>
          <p className="mt-2 text-gray-300 text-sm md:text-base whitespace-pre-line">{title}</p>
        </div>
      </div>
      <Button 
        className="download-btn bg-gradient-to-r from-cv-purple to-cv-blue hover:opacity-90 transition-opacity"
        onClick={onDownload}
      >
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </Button>
    </div>
  );
};

export default Header;
