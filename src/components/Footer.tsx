
import { Link } from "react-router-dom";
import { Home, Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-muted/20 mt-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col space-y-4">
          {/* Information Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <p className="font-medium gradient-text">Jodine Theron</p>
            <span className="hidden sm:inline">•</span>
            <p>ABN 44 819 427 569</p>
            <span className="hidden sm:inline">•</span>
            <p>hey@jodinetheron.com</p>
            <span className="hidden sm:inline">•</span>
            <p>Regent Street, Mount Lawley, WA 6050 Australia</p>
          </div>
          
          {/* Links Row */}
          <div className="flex justify-center items-center gap-4 text-sm">
            <Link
              to="/"
              className="text-cv-purple hover:text-cv-purple-dark transition-colors inline-flex items-center"
            >
              <Home className="mr-1 h-3 w-3" />
              <span>Home</span>
            </Link>
            <span>•</span>
            <Link
              to="/journey"
              className="text-cv-purple hover:text-cv-purple-dark transition-colors inline-flex items-center"
            >
              <span>The Journey</span>
              <Mic className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
