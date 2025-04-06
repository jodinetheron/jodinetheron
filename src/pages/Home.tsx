
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, FileText, Heart, Mic, Users } from "lucide-react";
import Footer from "@/components/Footer";
import useStarCursor from "@/hooks/useStarCursor";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Apply star cursor effect
  useStarCursor();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-8 animate-fade-in opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-32 h-32 border-2 border-cv-purple/50">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300" 
                alt="Jodine Theron"
                onLoad={() => setImageLoaded(true)}
                className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <AvatarFallback className="bg-cv-purple/20 text-2xl font-bold">JT</AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">Jodine Theron</h1>
              <p className="text-gray-300">@jodinetheron</p>
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="group overflow-hidden transition-all bg-card/50 backdrop-blur-sm border border-cv-purple/20 hover:border-cv-purple/40 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <a 
                href="https://www.thescalableconsultant.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 h-full flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-cv-purple">The Scalable Consultant</h2>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-cv-purple transition-colors" />
                </div>
                <div className="mt-2 flex-grow bg-gradient-to-r from-cv-purple/5 to-cv-blue/5 rounded-md p-3">
                  <p className="text-gray-300 text-sm">Explore innovative strategies for scaling your consultancy business.</p>
                </div>
              </a>
            </Card>

            <Card className="group overflow-hidden transition-all bg-card/50 backdrop-blur-sm border border-cv-purple/20 hover:border-cv-purple/40 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <a 
                href="https://www.linkedin.com/in/jodinetheron/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 h-full flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-cv-purple">Let's Connect</h2>
                  <Users className="h-4 w-4 text-gray-400 group-hover:text-cv-purple transition-colors" />
                </div>
                <div className="mt-2 flex-grow bg-gradient-to-r from-cv-purple/5 to-cv-blue/5 rounded-md p-3">
                  <p className="text-gray-300 text-sm">Connect with me on LinkedIn to explore professional opportunities.</p>
                </div>
              </a>
            </Card>

            <Card className="group overflow-hidden transition-all bg-card/50 backdrop-blur-sm border border-cv-purple/20 hover:border-cv-purple/40 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <a 
                href="https://kingdomgrowthengine.idevaffiliate.com/116.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 h-full flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-cv-purple">Kingdom Growth Engine</h2>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-cv-purple transition-colors" />
                </div>
                <div className="mt-2 flex-grow bg-gradient-to-r from-cv-purple/5 to-cv-blue/5 rounded-md p-3">
                  <p className="text-gray-300 text-sm">Discover resources for sustainable growth and impact.</p>
                </div>
              </a>
            </Card>

            <Card className="group overflow-hidden transition-all bg-card/50 backdrop-blur-sm border border-cv-purple/20 hover:border-cv-purple/40 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <Link 
                to="/wall-of-love"
                className="p-6 h-full flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-cv-purple">Wall of Love</h2>
                  <Heart className="h-4 w-4 text-gray-400 group-hover:text-cv-purple transition-colors" />
                </div>
                <div className="mt-2 flex-grow bg-gradient-to-r from-cv-purple/5 to-cv-blue/5 rounded-md p-3">
                  <p className="text-gray-300 text-sm">View testimonials and feedback from satisfied clients.</p>
                </div>
              </Link>
            </Card>

            <Card className="group col-span-1 md:col-span-2 overflow-hidden transition-all bg-gradient-to-r from-cv-purple/10 to-cv-blue/10 border border-cv-purple/20 hover:border-cv-purple/40 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <Link 
                to="/cv"
                className="p-6 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold gradient-text">My CV</h2>
                  <p className="text-gray-300 text-sm mt-1">View my professional experience and qualifications</p>
                </div>
                <FileText className="h-6 w-6 text-cv-purple" />
              </Link>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
