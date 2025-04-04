
import { useRef } from "react";
import Header from "@/components/Header";
import PersonalDetails from "@/components/PersonalDetails";
import SkillsChart from "@/components/SkillsChart";
import ProfileSection from "@/components/ProfileSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import LanguagesSection from "@/components/LanguagesSection";
import HobbiesSection from "@/components/HobbiesSection";
import ReferencesSection from "@/components/ReferencesSection";
import SkillsList from "@/components/SkillsList";
import KeyFocusSection from "@/components/KeyFocusSection";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const cvContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownload = () => {
    window.print();
    toast({
      title: "Print Dialog Opened",
      description: "Save as PDF to download your CV",
    });
  };

  const personalDetails = {
    email: "hey@jodinetheron.com",
    phone: "+264813800076",
    location: "Kongola\n20003 Namibia",
    dob: "August 10, 1982",
    nationality: "Australian",
    website: "https://jodinetheron.com",
    linkedin: "https://linkedin.com/in/jodinetheron",
    timeZones: [
      "NZ Standard Time - Hrs         .: \nSunday - Friday 4:00pm - 9:00am",
      "Eastern Standard Time - Hrs  .: \nSunday - Friday 23:00am (prev \nday) - 4:00pm", 
      "British Standard Time - Hrs    .: \nSunday - Friday 5:00am - 10:00pm"
    ]
  };

  const topSkills = [
    { name: "Client Onboarding Automation", years: 7 },
    { name: "Process Automation", years: 6 },
    { name: "AI-Enhanced Business Operations", years: 5 },
    { name: "Client Relationship Management", years: 7 },
    { name: "Business Coaching & Strategy", years: 7 }
  ];

  const profile = `Driven and results-oriented professional passionate about empowering entrepreneurs. I leverage extensive experience in technology, automation, and business operations to design systems that enhance efficiency and drive client success. My expertise lies in implementing structured client onboarding, providing strategic coaching, and utilizing streamlined processes to help founders reclaim valuable time (saving clients 15+ hours weekly) and focus on scaling their ventures.

Deeply committed to the client journey, I excel at building strong, trust-based relationships through proactive support, regular check-ins, and fostering accountability to ensure goals are met. Adept at using CRM systems for detailed progress tracking and skilled in identifying and removing roadblocks, I bring a blend of technical acumen and client-centric coaching ideal for guiding founders, particularly in the technology and AI space, helping them thrive within supportive communities and programs. AI enthusiast and tech-savvy problem solver dedicated to helping others achieve tangible results.`;

  const education = [
    {
      degree: "Bachelor of Social Science, Human Behaviour",
      institution: "Swinburne University of Technology",
      location: "Australia",
      period: "Jan 2019 - Jan 2021"
    },
    {
      degree: "Certificate III in Micro Business",
      institution: "ABS Institute of Management",
      location: "Australia",
      period: "2017"
    },
    {
      degree: "Senior First Aid",
      institution: "Tutt Bryant",
      location: "Australia",
      period: "2015"
    },
    {
      degree: "M S Project Essentials",
      institution: "Tutt Bryant",
      location: "Australia",
      period: "2014"
    },
    {
      degree: "Graduate",
      institution: "Newton Moore Senior High School",
      location: "Australia",
      period: "1999"
    }
  ];

  const experiences = [
    {
      title: "Founder",
      company: "The Scalable Consultant",
      location: "International",
      period: "Dec 2024",
      description: "The Scalable Consultant empowers established B2B consultants to reclaim significant time (15+ hours/week) by implementing intelligent automation systems and streamlining client operations.",
      keyFocus: [
        "Engineered a Google-native tech stack and process automations reducing client administrative work by 15+ hours weekly and increasing satisfaction scores.",
        "Designed and implemented automated client onboarding systems, slashing manual tasks by 80% and saving an average of 15 hours per new client integration.",
        "Developed an AI-powered workflow for automated, unique content creation, significantly enhancing clients' thought leadership and authority."
      ],
      keySkills: []
    },
    {
      title: "Chief Product and Technology Officer (CPTO)",
      company: "Kingdom Growth Engine",
      location: "United States (Remote)",
      period: "Jul 2024",
      description: "Drives product innovation and technical strategy, leading development from concept to launch while ensuring alignment with business goals and client needs.",
      keyFocus: [
        "Lead end-to-end product lifecycle, defining strategy and roadmap through launch and iteration, continuously driven by market research and client feedback.",
        "Oversee the Client Support Department, ensuring efficient technical issue resolution and channeling user insights back into product improvement.",
        "Guided technical direction and fostered a culture of innovation across product and engineering teams."
      ],
      keySkills: [
        "Strategic Product Management",
        "Technology Leadership & Oversight",
        "Client Support Management & Feedback Integration"
      ]
    },
    {
      title: "Administration Manager (Interim)",
      company: "Kingdom Growth Engine",
      location: "United States (Remote)",
      period: "Jun 2024 - Mar 2025",
      description: "Led the implementation, maintenance, and optimization of core business systems (BOS, Google Workspace) and administrative processes in a remote setting.",
      keyFocus: [
        "Successfully implemented and integrated Business Operations Software (BOS), driving process improvements and efficiency through performance monitoring and user support.",
        "Administered and optimized the Google Workspace suite, developing training materials and enhancing team productivity and collaboration.",
        "Managed key administrative functions including policy development, document control, contract administration, and remote team oversight/training."
      ],
      keySkills: [
        "Systems Administration (BOS, Google Workspace)",
        "Process Optimization & Improvement",
        "Remote Operations Management"
      ]
    },
    {
      title: "Product and Technology Manager (Interim)",
      company: "Kingdom Growth Engine",
      location: "United States (Remote)",
      period: "May 2024 - Mar 2025",
      description: "Oversaw the end-to-end development lifecycle and technical management of the company's technology products, driving alignment between user needs and business objectives.",
      keyFocus: [
        "Led product development from concept through launch and iteration, collaborating closely with engineering, design, and other teams.",
        "Managed technical aspects including software architecture, development processes, quality standards, and tech stack integration/performance.",
        "Fostered innovation and ensured timely delivery through effective project planning, release management, and team mentorship."
      ],
      keySkills: [
        "Product Lifecycle Management",
        "Technical Project Management & SDLC Oversight",
        "Cross-Functional Team Leadership"
      ],
      promotion: "* Promoted to Chief Product and Technology Officer (CPTO) within 3 months, recognizing strong performance in driving product strategy and technical execution."
    },
    {
      title: "Business Coach, Strategist and Marketer",
      company: "Kingdom Copilot",
      location: "Australia (Remote)",
      period: "Mar 2017 - May 2024",
      description: "Empowered global clients for 7 years through independent coaching, strategic consulting, and comprehensive digital marketing services.",
      keyFocus: [
        "Provided strategic business coaching, market analysis, and brand identity development to guide client growth.",
        "Designed and executed multi-channel digital marketing campaigns (incl. Facebook Ads, SEO, Email) and automated sales funnels for lead generation.",
        "Developed client websites (WordPress), streamlined business processes through documentation, and supported system implementations (leveraging CRM/ERP experience)."
      ],
      keySkills: [
        "Business Coaching & Strategy",
        "Digital Marketing & Lead Generation",
        "Client Project & Relationship Management"
      ]
    }
  ];

  const languages = ["Afrikaans", "English"];
  
  const additionalSkills = [
    "Client Relationship Management",
    "Business Coaching & Strategy",
    "Client Onboarding Automation",
    "Process Optimization & Improvement",
    "Cross-Functional Collaboration & Communication",
    "Client Support Management",
    "System Implementation & Administration",
    "Process Automation",
    "AI-Enhanced Business Operations",
    "Software Development Life Cycle (SDLC)",
    "Training Development & Delivery",
    "Strategic Product Management",
    "Technology Leadership & Oversight",
    "Remote Operations Management",
    "Digital Marketing & Lead Generation",
    "Project Coordination & Management",
    "Marketing Strategy & Execution",
    "Team Leadership & Training",
    "Operations & Administration Management",
    "Technical Project Management"
  ];

  const hobbies = ["Hiking", "Fishing", "Wild Camping"];

  const keyFocus = [
    "Client Onboarding Automation",
    "Process Automation",
    "AI-Enhanced Business Operations"
  ];

  const references = [
    {
      name: "Daniel McCraine",
      company: "McCraine & Associates",
      location: "United States",
      contact: "+1 (515) 979-8721"
    },
    {
      name: "Patrick Bell",
      company: "Kingdom Growth Engine",
      location: "United States",
      contact: "+351 962 286 858"
    },
    {
      name: "Sharon Moore",
      company: "Tutt Bryant HL&S",
      location: "Perth, Australia",
      contact: "+61 419 284 710"
    }
  ];

  return (
    <div className="min-h-screen bg-cv-dark py-8 px-4 print:p-0">
      <div 
        ref={cvContainerRef}
        className="cv-container max-w-5xl mx-auto bg-cv-dark rounded-lg shadow-xl overflow-hidden border border-gray-800 print:border-none print:shadow-none"
      >
        <div className="p-8 print:p-4">
          <Header 
            name="Jodine Theron" 
            title="I transform client journeys into growth engines | Results-driven onboarding, delivery systems & SOP automation that save you 15+ hours weekly | AI enthusiast | Tech-savvy problem solver | Jesus-loving entrepreneur" 
            imageSrc="/lovable-uploads/a8d696f2-1775-41fd-b48f-9946dc92f588.png"
            onDownload={handleDownload} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-1 space-y-8">
              <PersonalDetails details={personalDetails} />
              <SkillsChart skills={topSkills} />
              <LanguagesSection languages={languages} />
              <KeyFocusSection items={keyFocus} />
              <HobbiesSection hobbies={hobbies} />
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <ProfileSection profile={profile} />
              <SkillsList skills={additionalSkills} title="Top Skills" />
              <EducationSection education={education} />
              <ExperienceSection experiences={experiences} />
              <ReferencesSection references={references} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
