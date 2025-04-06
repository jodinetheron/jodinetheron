
import { useState } from "react";
import { Download } from "lucide-react";
import html2pdf from 'html2pdf.js';
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

const skills = [
  { name: "No-Code Development", level: 95 },
  { name: "Product Management", level: 90 },
  { name: "Process Optimization", level: 87 },
  { name: "Systems Integration", level: 85 },
  { name: "APIs & Webhooks", level: 82 },
  { name: "User Experience Design", level: 80 },
  { name: "Technical Leadership", level: 88 },
  { name: "AI Applications", level: 75 },
];

const technicalSkills = [
  "Bubble.io", "Make.com", "Figma", "Zapier", "Retool", "Airtable", "Notion", "Typeform",
  "SQL", "HTML/CSS", "SEM", "SEO", "Google Analytics", "Jira", "Slack", "Trello", "Asana"
];

const experience = [
  {
    title: "Chief Product & Technology Officer",
    company: "Kingdom Growth Engine",
    period: "2023 - Present",
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
    achievements: [
      "Provided strategic system design and automation solutions for service-based businesses",
      "Developed custom client management and workflow systems using no-code tools",
      "Created documentation systems and process maps for technical and non-technical users",
      "Designed and implemented data management and reporting systems"
    ]
  },
];

const languages = [
  { language: "English", proficiency: "Native" },
  { language: "Afrikaans", proficiency: "Native" },
];

const education = [
  {
    institution: "University of South Africa",
    degree: "Bachelor of Commerce",
    period: "2001 - 2004",
    details: "Focus on Information Systems and Business Management"
  },
  {
    institution: "Certified SAFe® 5 Product Owner/Product Manager",
    degree: "Professional Certification",
    period: "2022",
    details: "Scaled Agile Framework certification"
  }
];

const references = [
  {
    name: "Jane Smith",
    title: "CEO, TechCorp",
    contact: "Available upon request"
  },
  {
    name: "John Brown",
    title: "Director of Product, Innovate Inc.",
    contact: "Available upon request"
  }
];

const hobbies = [
  "AI & Emerging Technologies",
  "Music Production",
  "Adventure Travel",
  "Brazilian Jiu-Jitsu",
  "Scuba Diving"
];

const personalDetails = {
  email: "hey@jodinetheron.com",
  phone: "+61 4XX XXX XXX",
  location: "Perth, Australia",
  website: "jodinetheron.com",
  linkedin: "linkedin.com/in/jodinetheron"
};

const CVpage = () => {
  // Apply star cursor effect
  useStarCursor();
  
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to generate PDF
  const handleDownloadPDF = () => {
    setIsDownloading(true);
    const element = document.getElementById('cv-container');
    const opt = {
      margin: [10, 10],
      filename: 'jodine-theron-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Add a class to indicate PDF generation mode
    document.body.classList.add('generating-pdf');

    html2pdf().set(opt).from(element).save().then(() => {
      document.body.classList.remove('generating-pdf');
      setIsDownloading(false);
    });
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
            <KeyFocusSection />
            <ExperienceSection experience={experience} />
            <EducationSection education={education} />
          </div>
          
          {/* Sidebar - 1/3 width on desktop */}
          <div className="space-y-6">
            <SkillsChart skills={skills} />
            <SkillsList skills={technicalSkills} />
            <LanguagesSection languages={languages} />
            <ReferencesSection references={references} />
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
