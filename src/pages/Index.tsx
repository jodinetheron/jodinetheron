
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
    { name: "Client Relationship Management", years: 24 },
    { name: "Client Onboarding Automation", years: 7 },
    { name: "Process Automation", years: 10 },
    { name: "AI-Enhanced Business Operations", years: 1 },
    { name: "Business Coaching & Strategy", years: 10 }
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
    },
    {
      title: "Emergency Management Trainer",
      company: "Princess Margaret Hospital for Children",
      location: "Perth, Australia",
      period: "Sep 2016 - Mar 2017",
      description: "Developed and delivered critical emergency preparedness training programs while coordinating project elements for a major hospital transition and commissioning.",
      keyFocus: [
        "Designed and delivered comprehensive emergency preparedness training (inductions, warden courses, practical drills) for up to 50 participants daily.",
        "Managed project timelines, coordinated emergency drills, and developed procedural documentation (Visio diagrams, reports) supporting the hospital relocation.",
        "Contributed to safety system integrity by identifying procedural/plan inconsistencies, auditing fire systems, and coordinating safety equipment rollouts."
      ],
      keySkills: [
        "Training Program Development & Delivery",
        "Project Coordination & Management",
        "Emergency Procedures & Safety Systems"
      ]
    },
    {
      title: "Consultant",
      company: "Pakfront Pty Ltd",
      location: "Perth, Australia",
      period: "Dec 2014 - Feb 2017",
      description: "Executed comprehensive digital marketing campaigns and developed supporting operational assets including automated lead generation systems for clients.",
      keyFocus: [
        "Managed multi-platform digital marketing campaigns (social media focus) and developed tailored strategic marketing/sales plans.",
        "Established automated sales funnels and lead generation systems to drive client acquisition efficiently.",
        "Created brand designs, procedural documentation (templates, policies), and managed tender/license application packages."
      ],
      keySkills: [
        "Digital Marketing & Strategy",
        "Lead Generation & Sales Automation",
        "Brand Development & Business Documentation"
      ]
    },
    {
      title: "Accounts Payable Officer",
      company: "Sadliers Logistics",
      location: "Perth, Australia",
      period: "Jan 2016 - Feb 2016",
      description: "Managed end-to-end accounts payable processes, focusing on accurate subcontractor job costing and timely payment execution within a logistics environment.",
      keyFocus: [
        "Processed and costed subcontractor jobs (metro/regional) using Translogix, ensuring accurate data entry and validation (fuel, charges).",
        "Managed full-cycle accounts payable including invoice/PO creation, GL transactions, and weekly EFT payment runs (SPA processing).",
        "Performed financial administration tasks such as updating subcontractor rates, adjusting accruals, and distributing payment advices."
      ],
      keySkills: [
        "Accounts Payable Processing",
        "Financial Data Entry & Verification",
        "Attention to Detail & Accuracy"
      ]
    },
    {
      title: "Project Administrator",
      company: "Tutt Bryant Heavy Lift & Shift",
      location: "Perth, Australia",
      period: "Nov 2012 - Dec 2015",
      description: "Provided comprehensive project administration for multi-million dollar per month, high-end heavy lift projects within the mining and civil construction sectors, coordinating across multiple functions and contributing to key system implementations.",
      keyFocus: [
        "Led the rollout of a SharePoint-based document control system across all Australian branches and contributed significantly to a new ERP system implementation supporting large-scale projects.",
        "Managed core project financial administration including invoicing, purchase orders, AP/AR processing, progress billing, and timesheet/payroll entry for complex, high-value operations.",
        "Coordinated essential project support functions: job creation/closure, record keeping (training, OHS), travel/accommodation logistics, and tender package review in a high-pressure environment."
      ],
      keySkills: [
        "Project Administration & Coordination (Large-Scale Construction)",
        "System Implementation Support (ERP & SharePoint/Document Control)",
        "Financial & Operational Administration (High-Value Projects)"
      ]
    },
    {
      title: "Jesus Follower",
      company: "The Kingdom of God",
      location: "Heaven (Remote)",
      period: "Aug 2012",
      description: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. (John 3:16)",
      keyFocus: [],
      keySkills: []
    },
    {
      title: "Project, HR, and Contract Administrator",
      company: "Various Companies",
      location: "Perth, Australia",
      period: "Aug 2009 - Jul 2012",
      description: "Provided multifaceted administrative support across diverse sectors (mining, construction, health, corporate), driving efficiency in project delivery, HR processes, and contract management.",
      keyFocus: [
        "Coordinated logistics and scheduling for over 60 concurrent live projects, managing timelines and assisting with project management system integrations and testing.",
        "Managed end-to-end contract administration, including subcontractor/vendor liaison, negotiation support, procurement, and expenditure tracking.",
        "Delivered comprehensive HR administrative support encompassing recruitment, onboarding, training coordination, payroll processing, and HSE compliance."
      ],
      keySkills: [
        "Cross-Functional Administration (Project, HR, Contracts)",
        "Project Coordination & Logistics",
        "Contract & Vendor Management"
      ]
    },
    {
      title: "Marketing Consultant and Branch Administration Manager",
      company: "Various Companies",
      location: "Perth, Australia",
      period: "Sep 2003 - Jul 2009",
      description: "Held diverse, concurrent roles over six years, developing comprehensive expertise in marketing, lead generation, branch/site administration, and team leadership across various environments (including remote site work, Fly-in Fly-out--FIFO).",
      keyFocus: [
        "Spearheaded marketing/advertising campaigns, managed lead generation processes, and designed websites to drive business growth.",
        "Managed broad administrative functions including branch operations, HR tasks (payroll, compliance, policy), audits, and travel/logistics coordination.",
        "Provided site administration support (FIFO) and team leadership, including training new associates and ensuring smooth operations."
      ],
      keySkills: [
        "Marketing Strategy & Execution",
        "Operations & Administration Management",
        "Team Leadership & Training"
      ]
    }
  ];

  const languages = ["Afrikaans", "English"];
  
  const additionalSkills = [
    { name: "Process Optimization & Improvement", years: 10 },
    { name: "Cross-Functional Collaboration & Communication", years: 15 },
    { name: "Client Support Management", years: 20 },
    { name: "System Implementation & Administration", years: 12 },
    { name: "Software Development Life Cycle (SDLC)", years: 5 },
    { name: "Training Development & Delivery", years: 7 },
    { name: "Strategic Product Management", years: 7 },
    { name: "Technology Leadership & Oversight", years: 7 },
    { name: "Remote Operations Management", years: 7 },
    { name: "Digital Marketing & Lead Generation", years: 10 },
    { name: "Project Coordination & Management", years: 12 },
    { name: "Marketing Strategy & Execution", years: 15 },
    { name: "Team Leadership & Training", years: 15 },
    { name: "Operations & Administration Management", years: 15 },
    { name: "Technical Project Management", years: 7 }
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
            imageSrc="/lovable-uploads/e5c33ee4-fc17-438d-a9e2-ef6f49aedcd2.jpg"
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
              <SkillsList skills={additionalSkills} title="Key Skills" />
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
