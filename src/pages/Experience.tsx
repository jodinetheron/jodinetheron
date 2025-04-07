
import React from 'react';
import profilePic from '@/assets/Jodine-Theron-profile.png';
import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import useStarCursor from "@/hooks/useStarCursor";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const Experience = () => {
  const [downloading, setDownloading] = useState(false);
  
  // Apply star cursor effect
  useStarCursor();

  // Skills data for chart
  const skillsData = [
    { name: "Client Relationship Management", years: 24 },
    { name: "Client Onboarding Automation", years: 7 },
    { name: "Process Automation", years: 10 },
    { name: "AI-Enhanced Business Operations", years: 1 },
    { name: "Business Coaching & Strategy", years: 10 }
  ];

  // Experience data
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
      keySkills: [
        "Client Onboarding Automation",
        "Process Automation",
        "AI-Enhanced Business Operations"
      ]
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
      promotion: "Promoted to Chief Product and Technology Officer (CPTO) within 3 months, recognizing strong performance in driving product strategy and technical execution."
    },
    {
      title: "Jesus Follower",
      company: "The Kingdom of God",
      location: "Heaven and Earth (Hybrid)",
      period: "Aug 2012",
      description: "♥ For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. (John 3:16)",
    },
    {
      title: "Business Coach, Strategist and Marketer",
      company: "Kingdom Copilot",
      location: "Australia (Remote)",
      period: "May 2017 - Mar 2024",
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
      company: "Emergency Management Trainer",
      location: "Perth, Australia (On-site)",
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
      location: "Australia (On-site)",
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
      location: "Australia (On-site)",
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
      location: "Australia (On-site)",
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
      title: "Project, HR and Contract Administrator",
      company: "Various Companies",
      location: "Australia (On-site)",
      period: "May 2017 - Mar 2024",
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
      location: "Australia (Hybrid)",
      period: "May 2017 - Mar 2024",
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

  // Personal details
  const personalDetails = {
    name: "Jodine Theron",
    email: "hey@jodinetheron.com",
    phone: "+264813800076",
    location: "Kongola, 20003 Namibia",
    birthdate: "August 10, 1982",
    citizenship: "Australian",
    website: "jodinetheron.com",
    linkedin: "linkedin.com/in/jodinetheron"
  };

  // Education and Certificates
  const education = [
    {
      institution: "The Fletcher Method",
      location: "Online",
      degree: "Growthworks Certified Marketing Consultant",
      period: "Apr 2024"
    },
    {
      institution: "Swinburne University of Technology",
      location: "Australia",
      degree: "Bachelor of Social Science, Human Behaviour",
      period: "Jan 2019 - Jan 2021"
    },
    {
      institution: "ABS Institute of Management",
      location: "Australia",
      degree: "Certificate III in Micro Business",
      period: "2017"
    },
    {
      institution: "Tutt Bryant",
      location: "Australia",
      degree: "Senior First Aid",
      period: "2015"
    },
    {
      institution: "Tutt Bryant",
      location: "Australia",
      degree: "MS Project Essentials",
      period: "2014"
    },
    {
      institution: "Newton Moore Senior High School",
      location: "Australia",
      degree: "Graduate",
      period: "1999"
    }
  ];

  // Skills
  const keySkills = [
    "Process Optimization & Improvement",
    "Cross-Functional Collaboration & Communication",
    "Client Support Management",
    "System Implementation & Administration",
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

  // Languages
  const languages = [
    { language: "Afrikaans", proficiency: "Native" },
    { language: "English", proficiency: "Native" }
  ];

  // Hobbies
  const hobbies = [
    "Hiking",
    "Fishing",
    "Wild Camping"
  ];

  // Download PDF function
  const handleDownloadPDF = () => {
    setDownloading(true);
    
    // Use window.print() for PDF generation
    window.print();
    
    setTimeout(() => {
      setDownloading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cv-dark">
      <div className="print:hidden fixed top-4 right-4 z-10">
        <Button 
          onClick={handleDownloadPDF}
          disabled={downloading}
          className="bg-gradient-to-r from-cv-purple to-cv-blue hover:opacity-90 transition-opacity"
        >
          <Download className="mr-2 h-4 w-4" />
          {downloading ? "Preparing..." : "Download CV"}
        </Button>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-10 mb-12 print:space-y-4" id="experience-content">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 py-8 border-b border-muted/20">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cv-purple/50 flex-shrink-0">
                <img 
                  src={profilePic} 
                  alt="Jodine Theron" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold gradient-text">Jodine Theron</h1>
                <p className="mt-2 text-gray-300 text-sm md:text-base whitespace-pre-line">
                  I transform client journeys into growth engines | Results-driven 
                  onboarding, delivery systems & SOP automation that save you 
                  15+ hours weekly | AI enthusiast | Tech-savvy problem solver | 
                  Jesus-loving entrepreneur
                </p>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Profile</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <p className="text-gray-300">
                Driven and results-oriented professional passionate about empowering 
                entrepreneurs. I leverage extensive experience in technology, automation, and 
                business operations to design systems that enhance efficiency and drive client 
                success. My expertise lies in implementing structured client onboarding, providing 
                strategic coaching, and utilizing streamlined processes to help founders reclaim 
                valuable time (saving clients 15+ hours weekly) and focus on scaling their 
                ventures.
              </p>
              <p className="text-gray-300 mt-4">
                Deeply committed to the client journey, I excel at building strong, trust-based 
                relationships through proactive support, regular check-ins, and fostering 
                accountability to ensure goals are met. Adept at using CRM systems for detailed 
                progress tracking and skilled in identifying and removing roadblocks, I bring a 
                blend of technical acumen and client-centric coaching ideal for guiding founders, 
                particularly in the technology and AI space, helping them thrive within 
                supportive communities and programs. AI enthusiast and tech-savvy problem 
                solver dedicated to helping others achieve tangible results.
              </p>
            </div>
          </section>

          {/* Skills Chart */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Top Priority Skills</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <div className="h-80 w-full">
                <ChartContainer config={{}} className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={skillsData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                      barSize={20}
                    >
                      <XAxis type="number" domain={[0, 25]} />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        tick={{ fill: '#d1d5db' }} 
                        width={120}
                      />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-muted/60 backdrop-blur-sm p-3 rounded-md border border-cv-purple/20">
                                <p className="font-medium">{payload[0].payload.name}</p>
                                <p className="text-cv-purple">{payload[0].payload.years} years</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="years" radius={[0, 4, 4, 0]}>
                        {skillsData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index % 2 === 0 ? '#9B87F5' : '#7E69AB'} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
          </section>

          {/* Key Skills */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Key Skills</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                {keySkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-cv-purple/10 to-cv-blue/10 text-gray-300 px-3 py-1 rounded-full border border-cv-purple/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-cv-purple/30 pl-4 pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="font-semibold text-white">{exp.title}</h3>
                    <span className="text-cv-purple text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{exp.company}, {exp.location}</p>
                  
                  <p className="text-gray-300 mt-3">{exp.description}</p>
                  
                  {exp.keyFocus && exp.keyFocus.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-white font-medium">Key Focus:</h4>
                      <ul className="list-disc list-inside text-gray-300 mt-1">
                        {exp.keyFocus.map((focus, idx) => (
                          <li key={idx} className="ml-2">{focus}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.keySkills && exp.keySkills.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-white font-medium">Key Skills:</h4>
                      <ul className="flex flex-wrap gap-2 mt-1">
                        {exp.keySkills.map((skill, idx) => (
                          <li key={idx} className="bg-cv-purple/20 text-gray-200 px-2 py-1 rounded-full text-xs">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.promotion && (
                    <p className="mt-3 text-sm italic text-cv-purple">
                      {exp.promotion}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Education and Certificates</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="font-medium text-white">{edu.degree}</h3>
                      <p className="text-gray-300 text-sm">{edu.institution}, {edu.location}</p>
                    </div>
                    <span className="text-cv-purple text-sm">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Languages</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <div className="flex gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-white">{lang.language}</span>
                    <span className="text-gray-400">({lang.proficiency})</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hobbies */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Hobbies</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-cv-purple/10 to-cv-blue/10 text-gray-300 px-3 py-1 rounded-full border border-cv-purple/20"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Personal Details */}
          <section>
            <h2 className="text-2xl font-bold gradient-text mb-4">Personal Details</h2>
            <div className="bg-card/30 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-white">Email:</span> {personalDetails.email}</p>
                  <p className="text-gray-300"><span className="text-white">Phone:</span> {personalDetails.phone}</p>
                  <p className="text-gray-300"><span className="text-white">Location:</span> {personalDetails.location}</p>
                  <p className="text-gray-300"><span className="text-white">Birth Date:</span> {personalDetails.birthdate}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-white">Citizenship:</span> {personalDetails.citizenship}</p>
                  <p className="text-gray-300"><span className="text-white">Website:</span> {personalDetails.website}</p>
                  <p className="text-gray-300"><span className="text-white">LinkedIn:</span> {personalDetails.linkedin}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Print styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: white !important;
            color: black !important;
          }
          
          main {
            padding: 0 !important;
            max-width: 100% !important;
          }
          
          #experience-content {
            margin: 0 !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .text-gray-300 {
            color: #333 !important;
          }
          
          .border-cv-purple\\/20 {
            border-color: #ddd !important;
          }
          
          .bg-card\\/30 {
            background-color: #f9f9f9 !important;
          }
          
          .gradient-text {
            background: none !important;
            color: #333 !important;
            -webkit-text-fill-color: #333 !important;
          }
            /* Target specific white text elements */
  .text-white {
    color: black !important;
  }

  /* Ensure specific gray text becomes black/dark gray */
  .text-gray-200, .text-gray-300, .text-gray-400 {
     color: #333 !important;
  }

  /* Try to preserve purple text if explicitly set */
  /* Add other purple classes if needed */
  .text-cv-purple {
     color: #9B87F5 !important; /* Or your actual purple hex code */
     -webkit-print-color-adjust: exact !important;
     print-color-adjust: exact !important;
  }

  /* Ensure backgrounds of specific elements are white or transparent */
   .bg-card\\/30, .bg-cv-dark, .bg-cv-purple\\/20, .bg-gradient-to-r {
     background: white !important; /* Or transparent */
   }

   /* Ensure borders are visible but not colored if needed */
   .border-cv-purple\\/20, .border-cv-purple\\/30, .border-muted\\/20 {
      border-color: #ccc !important; /* Light gray border */
   }

   /* Adjust bar chart colors for print */
   .recharts-cell[fill="#9B87F5"], .recharts-cell[fill="#7E69AB"] {
      fill: #666 !important; /* Darker gray for bars */
   }
        }
      `}} />
    </div>
  );
};

export default Experience;
