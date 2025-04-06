
import { useState } from "react";
import { Download } from "lucide-react";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import KeyFocusSection from "@/components/KeyFocusSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsChart from "@/components/SkillsChart";
import SkillsList from "@/components/SkillsList";
import LanguagesSection from "@/components/LanguagesSection";
import ReferencesSection from "@/components/ReferencesSection";
import HobbiesSection from "@/components/HobbiesSection";
import PersonalDetails from "@/components/PersonalDetails";
import useStarCursor from "@/hooks/useStarCursor";
import Footer from "@/components/Footer";

// Mock data for the CV
const profile = "Experienced technology leader with over 10 years in digital transformation, product development, and technical strategy. Passionate about leveraging technology to solve complex business challenges and drive growth. Strong background in no-code/low-code development, enterprise architecture, and agile methodologies.";

// Key focus items
const keyFocusItems = [
  "No-Code Development",
  "System Architecture",
  "Process Automation",
  "Digital Transformation",
  "Product Management",
  "Team Leadership"
];

// Skills data adapted to match the SkillsChart component requirements
const skills = [
  { name: "No-Code Development", level: 95, years: 5 },
  { name: "Product Management", level: 90, years: 8 },
  { name: "Process Optimization", level: 87, years: 10 },
  { name: "Systems Integration", level: 85, years: 7 },
  { name: "APIs & Webhooks", level: 82, years: 6 },
  { name: "User Experience Design", level: 80, years: 5 },
  { name: "Technical Leadership", level: 88, years: 6 },
  { name: "AI Applications", level: 75, years: 3 }
];

// Technical skills adapted to match the SkillsList component requirements
const technicalSkills = [
  { name: "Bubble.io", years: 3 },
  { name: "Make.com", years: 4 },
  { name: "Figma", years: 5 },
  { name: "Zapier", years: 7 },
  { name: "Retool", years: 2 },
  { name: "Airtable", years: 4 },
  { name: "Notion", years: 5 },
  { name: "Typeform", years: 3 },
  { name: "SQL", years: 8 },
  { name: "HTML/CSS", years: 10 },
  { name: "SEM", years: 5 },
  { name: "SEO", years: 6 },
  { name: "Google Analytics", years: 7 },
  { name: "Jira", years: 5 },
  { name: "Slack", years: 8 },
  { name: "Trello", years: 6 },
  { name: "Asana", years: 4 }
];

// Updated experiences to match ExperienceSection component
const experiences = [
  {
    title: "Chief Product & Technology Officer",
    company: "Kingdom Growth Engine",
    period: "2023 - Present",
    location: "Remote",
    description: "Leading product strategy and technical implementation for a faith-based SaaS platform",
    keyFocus: ["Product Strategy", "No-Code Development", "System Architecture", "Team Leadership"],
    keySkills: ["Bubble.io", "Make.com", "API Integration", "UI/UX", "Process Design"],
    achievements: [
      "Led the technical strategy and implementation of the company's no-code SaaS platform",
      "Designed and developed complex workflows and automations using Bubble.io, Make.com, and various APIs",
      "Reduced development time by 60% and costs by 70% through efficient no-code solutions",
      "Successfully integrated and maintained connections with multiple third-party services"
    ]
  },
  {
    title: "Consultant & Systems Architect",
    company: "The Scalable Consultant",
    period: "2019 - 2023",
    location: "Remote",
    description: "Provided strategic system design and automation for service-based businesses",
    keyFocus: ["System Design", "Process Automation", "Workflow Optimization", "Client Success"],
    keySkills: ["Zapier", "Airtable", "Notion", "Typeform", "Process Mapping"],
    achievements: [
      "Provided strategic system design and automation solutions for service-based businesses",
      "Developed custom client management and workflow systems using no-code tools",
      "Created documentation systems and process maps for technical and non-technical users",
      "Designed and implemented data management and reporting systems"
    ]
  }
];

// Updated education to match EducationSection component
const educationData = [
  {
    institution: "University of South Africa",
    degree: "Bachelor of Commerce",
    period: "2001 - 2004",
    details: "Focus on Information Systems and Business Management",
    location: "Pretoria, South Africa"
  },
  {
    institution: "Certified SAFe® 5 Product Owner/Product Manager",
    degree: "Professional Certification",
    period: "2022",
    details: "Scaled Agile Framework certification",
    location: "Online"
  }
];

// Updated languages to match LanguagesSection component
const languagesData = [
  "English (Native)",
  "Afrikaans (Native)"
];

// Updated references to match ReferencesSection component
const referencesData = [
  {
    name: "Jane Smith",
    title: "CEO",
    company: "TechCorp",
    location: "Sydney, Australia",
    contact: "Available upon request"
  },
  {
    name: "John Brown",
    title: "Director of Product",
    company: "Innovate Inc.",
    location: "Melbourne, Australia",
    contact: "Available upon request"
  }
];

// Hobbies array (already matches HobbiesSection)
const hobbies = [
  "AI & Emerging Technologies",
  "Music Production",
  "Adventure Travel",
  "Brazilian Jiu-Jitsu",
  "Scuba Diving"
];

// Updated personal details to match PersonalDetails component
const personalDetails = {
  email: "hey@jodinetheron.com",
  phone: "+61 4XX XXX XXX",
  location: "Perth, Australia",
  website: "jodinetheron.com",
  linkedin: "linkedin.com/in/jodinetheron",
  dob: "1982-01-01",
  nationality: "South African / Australian",
  timeZones: ["AWST (UTC+8)"]
};

const CVpage = () => {
  // Apply star cursor effect
  useStarCursor();
  
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to generate PDF
  const handleDownloadPDF = () => {
    setIsDownloading(true);
    
    // Use browser print functionality as a fallback since html2pdf.js requires additional setup
    window.print();
    setIsDownloading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cv-dark">
      <div id="cv-container" className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <Header 
          name="Jodine Theron" 
          title="Chief Product & Technology Officer"
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop"
          onDownload={handleDownloadPDF}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Main Content - 2/3 width on desktop */}
          <div className="md:col-span-2 space-y-6">
            <ProfileSection profile={profile} />
            <KeyFocusSection items={keyFocusItems} />
            <ExperienceSection experiences={experiences} />
            <EducationSection education={educationData} />
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-6">
            <SkillsChart skills={skills} />
            <SkillsList skills={technicalSkills} />
            <LanguagesSection languages={languagesData} />
            <ReferencesSection references={referencesData} />
            <HobbiesSection hobbies={hobbies} />
            <PersonalDetails details={personalDetails} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CVpage;
