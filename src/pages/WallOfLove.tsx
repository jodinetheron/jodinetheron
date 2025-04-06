
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WallOfLove = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <Construction className="mx-auto h-12 w-12 text-cv-purple mb-4" />
        <h1 className="text-2xl font-bold gradient-text mb-4">Wall of Love</h1>
        <p className="text-gray-300 mb-6">
          This page is under construction. Soon it will showcase video and text testimonials from clients.
        </p>
        <Button asChild variant="outline" className="border-cv-purple/30 hover:bg-cv-purple/10">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default WallOfLove;
