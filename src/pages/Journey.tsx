
import { useState, useEffect, useRef } from "react";
import { Construction, Plus, Pencil, Trash2, Check, Edit2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import useStarCursor from "@/hooks/useStarCursor";

// Define the journey card schema
const journeyCardSchema = z.object({
  timeline: z.string().min(1, { message: "Timeline is required." }),
  title: z.string().min(2, { message: "Title is required." }),
  description: z.string().min(2, { message: "Description is required." }),
  quote: z.string().optional(),
  imageUrl: z.string().optional(),
});

type JourneyCard = z.infer<typeof journeyCardSchema>;

// Initial journey cards data
const initialJourneyCards: JourneyCard[] = [
  {
    timeline: "1998",
    title: "From South Africa to Australia: The Journey Begins",
    description: "In 1998, I took a leap of faith and immigrated from South Africa to Australia. Like a mole seeking new ground to dig, I started from scratch—picking tomatoes and grapes, dyeing flowers, working in hospitality, and enduring crazy 12-hour days. These early tunnels taught me resilience and adaptability, laying the groundwork for everything that would follow.",
    quote: "Nothing teaches you humility quite like picking tomatoes after thinking you've got life figured out. Turns out, I knew nothing—but I was really good at digging!",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2000-2007",
    title: "Digging Through Industries",
    description: "I burrowed through 4-week non-stop mining shifts, navigated the high-paced rail industry, and explored countless other tunnels of experience. Each new environment required different digging techniques, but I adapted quickly, developing a unique ability to create structure in chaos. These years underground in diverse industries gave me a rare perspective on how different systems work—or don't.",
    quote: "I've worked more 12-hour shifts than I've had hot dinners. Actually, many of those shifts WERE my hot dinners. Multitasking at its finest!",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2008",
    title: "Digging for Digital Gold",
    description: "In 2008, I discovered the online business world and promptly fell into what I now recognize as \"shiny object syndrome.\" I tried everything—selling white-labeled products on USA Amazon, shipping from China, personal development pyramid schemes, high-pressure business schemes, digital advertising, social media management, web design, SEO, business coaching, and SaaS consulting. I was digging frantically in every direction, learning tons but never finding what truly resonated.",
    quote: "JVZoo is still a trigger word for me. I'm proud to say I've been JV-sober for over a decade now. Though I do occasionally relapse with AppSumo deals—nobody's perfect!",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2016-2017",
    title: "Teaching What I Was Learning",
    description: "In perhaps my most challenging tunnel yet, I became an emergency trainer for all Perth Children's Hospital staff—while I was still learning the procedures myself! Imagine the pressure of teaching in a hospital auditorium to brilliant doctors and nurses when you're just learning the script as you speak. After giving six presentations per day, I overcame my fear of public speaking and even started cracking jokes. This experience taught me that sometimes the best way to learn is to teach others along the way.",
    quote: "Nothing cures stage fright like explaining emergency procedures to a room full of surgeons who could probably perform brain surgery on you with a paperclip if needed. Talk about a captive audience!",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2017",
    title: "Wait, What's That Glow?",
    description: "After years of digging through diverse industries and trying every online business model imaginable, I caught my first glimpse of something different—a crack of light showing a bigger world beyond my tunnels. I realized most entrepreneurs don't fail because of poor foundations—they fail because they never see the full landscape of possibility. This was my first hint that perhaps I wasn't meant to stay underground forever.",
    quote: "I became so excited about systems and processes that I color-coded my spice rack and created flowcharts for family vacations. My tunnels were becoming suspiciously well-lit.",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2017-2023",
    title: "Not Quite Mole, Not Quite Moth",
    description: "I launched The Scalable Consultant, helping service providers build systems that scale. I was spending more time above ground, but still returning to my tunnels for safety. Every client success story pulled me further into the light, but something was missing. While I loved the independence of solo work, I discovered that my greatest joy came from moments of collaboration and shared victories.",
    quote: "Turns out working alone means you have to high-five yourself. My palm-to-palm coordination improved dramatically, but it never felt quite right.",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2024",
    title: "From Zero to CPTO in 3 Months Flat",
    description: "When I joined Kingdom Growth Engine as a Product Manager, I had never worked with the no-code Bubble platform before. Three months later, I was promoted to Chief Product & Technology Officer. This rapid evolution was the first sign that my transformation was accelerating—I was no longer just a mole digging tunnels, but something else entirely, capable of quick adaptation and growth in new environments.",
    quote: "My friends still think CPTO stands for 'Creature Partially Transformed, Obviously.' They weren't entirely wrong.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop"
  },
  {
    timeline: "December 2024",
    title: "The First Sighting of AAA's Light",
    description: "In December 2024, while exploring the AI automation landscape, I stumbled across Liam Ottley's YouTube channel. Something resonated deeply—here was someone illuminating exactly the path I had been sensing but couldn't quite see. I joined the Skool community and saw the job ad for a Success Manager. I was drawn to it like a moth to a flame, but wasn't ready to commit. This young moth needed more time to complete her transformation.",
    quote: "I bookmarked the job posting and may have visited it daily. Not stalking, just... moth things.",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&auto=format&fit=crop"
  },
  {
    timeline: "2025 (Early)",
    title: "Testing My Wings in Namibia",
    description: "While most people were debating whether to return to offices, I moved from comfortable Perth to a mudhut village in rural Namibia. This adventure wasn't just about location—it was about testing my newly forming wings, seeing how far I could fly while still maintaining connection to the ground. This experience reinforced my belief that with the right systems, you can create impact from anywhere.",
    quote: "Pro tip: Explaining 'the internet is down' hits different when it's because an elephant knocked over the cell tower. Moths need reliable light sources!",
    imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&auto=format&fit=crop"
  },
  {
    timeline: "Early 2025",
    title: "The Deep Dive",
    description: "I ventured deeper into the dark AI automation rabbit hole, exploring every corner and crevice. The mole in me was still comfortable digging, but now with a purpose—to understand this new landscape completely. I was stuck between two worlds—the familiar underground tunnels and the bright open sky that called to me.",
    quote: "Turns out moths can dig too when they need to. We just look a bit ridiculous doing it with wings.",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&auto=format&fit=crop"
  },
  {
    timeline: "April 2025",
    title: "The Light at the End of the Tunnel is AAA",
    description: "And there I saw it again—the light of AAA Accelerator, brighter than before. But this time, I was ready. My transformation was complete. No longer a mole digging alone in the dark, but a moth fully equipped to fly toward the light, bringing all my underground experience with me. This time, I approached the light with full moth mode activated.",
    quote: "Moths get a bad rap for being attracted to lights, but have you considered that maybe we just know where the good stuff is happening?",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&auto=format&fit=crop"
  }
];

const Journey = () => {
  // Apply star cursor effect
  useStarCursor();
  
  const [journeyCards, setJourneyCards] = useState<JourneyCard[]>(initialJourneyCards);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Form
  const form = useForm<JourneyCard>({
    resolver: zodResolver(journeyCardSchema),
    defaultValues: {
      timeline: "",
      title: "",
      description: "",
      quote: "",
      imageUrl: "",
    },
  });

  // Sort journey cards by timeline
  const sortedJourneyCards = [...journeyCards].sort((a, b) => {
    // Extract the first year from timeline if it's a range (e.g., "2000-2007" becomes "2000")
    const yearA = parseInt(a.timeline.split('-')[0].split(' ')[0].split('(')[0]);
    const yearB = parseInt(b.timeline.split('-')[0].split(' ')[0].split('(')[0]);
    return yearA - yearB;
  });

  // Handle password authentication
  const handlePasswordSubmit = () => {
    if (password === "Je5u$isK!ng") {
      setIsAuthenticated(true);
      toast.success("Access granted! You can now add, edit, and delete journey cards.");
      setShowPasswordDialog(false);
    } else {
      toast.error("Incorrect password");
    }
  };

  // Handle add/edit journey card
  const onSubmit = (data: JourneyCard) => {
    if (editingId !== null) {
      // Edit existing card
      const updatedJourneyCards = [...journeyCards];
      updatedJourneyCards[editingId] = data;
      setJourneyCards(updatedJourneyCards);
      toast.success("Journey card updated successfully!");
    } else {
      // Add new card
      setJourneyCards([...journeyCards, data]);
      toast.success("Journey card added successfully!");
    }
    
    setShowAddDialog(false);
    setEditingId(null);
    form.reset();
  };

  // Handle edit button click
  const handleEdit = (index: number) => {
    setEditingId(index);
    form.reset(journeyCards[index]);
    setShowAddDialog(true);
  };

  // Handle delete confirmation
  const handleDelete = (index: number) => {
    const updatedJourneyCards = [...journeyCards];
    updatedJourneyCards.splice(index, 1);
    setJourneyCards(updatedJourneyCards);
    setDeleteIndex(null);
    toast.success("Journey card deleted successfully!");
  };

  // Prepare delete handler
  const confirmDelete = (index: number) => {
    setDeleteIndex(index);
  };
  
  // Scroll to timeline section
  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">The Transformation: How a Mole Became a Moth</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">My journey from digging in the entrepreneurial trenches to being drawn to the light of AAA Accelerator</h2>
          
          <div className="max-w-3xl mx-auto bg-cv-dark/50 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6 mb-8">
            <p className="text-gray-300 leading-relaxed">
              Every career has a story. Mine began in South Africa, took a bold turn with immigration to Australia in 1998, and evolved through countless tunnels of experience. I started as a mole—digging deep in the trenches of entrepreneurship, trying every business opportunity imaginable, creating systems underground, and helping others build foundations. But somewhere along the way, light broke through the darkness, and I realized I wasn't a mole at all—I was a moth, drawn to the brightness of collaboration, community, and purpose. Here's the story of that transformation and how it led me to your doorstep...
            </p>
          </div>
          
          <Button onClick={scrollToTimeline} className="bg-cv-purple hover:bg-cv-purple-dark">
            Explore My Journey
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Timeline Section */}
        <div ref={timelineRef} className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-2">My Transformation Timeline</h2>
            <p className="text-gray-300">Follow my journey from underground tunnels to open skies, from mole to moth</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cv-purple to-cv-blue opacity-30"></div>
            
            {/* Timeline cards */}
            <div className="space-y-16">
              {sortedJourneyCards.map((card, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'} md:w-[calc(50%-20px)] animate-fade-in opacity-0`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute top-0 md:top-8 left-1/2 md:left-auto md:right-0 transform translate-x(-50%) md:translate-x(50%) w-6 h-6 rounded-full bg-cv-purple shadow-glow"></div>
                  
                  {/* Year label */}
                  <div className={`mb-4 md:mb-0 md:absolute md:top-8 md:right-0 md:left-auto transform md:translate-x-[calc(100%+20px)] ${index % 2 === 0 ? 'md:-translate-x-[calc(100%+20px)] md:right-auto md:left-0 text-right' : 'text-left'}`}>
                    <span className="inline-block bg-cv-dark/80 border border-cv-purple/20 rounded-full px-4 py-2 text-sm font-bold text-cv-purple shadow-glow">
                      {card.timeline}
                    </span>
                  </div>
                  
                  <Card className="group bg-card/50 backdrop-blur-sm border border-cv-purple/20 hover:border-cv-purple/40 transition-all duration-300 overflow-hidden h-full hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
                    {card.imageUrl && (
                      <div className="w-full h-48 overflow-hidden">
                        <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    )}
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold gradient-text">{card.title}</h3>
                        
                        {isAuthenticated && (
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-gray-400 hover:text-cv-purple hover:bg-cv-purple/10"
                              onClick={() => handleEdit(index)}
                            >
                              <Pencil size={16} />
                            </Button>
                            
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                              onClick={() => confirmDelete(index)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <p className="text-gray-300 mb-4 leading-relaxed">{card.description}</p>
                      
                      {card.quote && (
                        <div className="bg-gradient-to-r from-cv-purple/10 to-cv-blue/10 p-4 rounded-md border-l-4 border-cv-purple italic text-gray-300">
                          "{card.quote}"
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Why This Moth Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold gradient-text mb-2">Why This Moth is Your Ideal Success Manager</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6 hover:border-cv-purple/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-cv-purple"></div>
                  <p className="text-gray-300">I understand both worlds: I've spent years underground building foundations AND I know what it's like to transform and seek the light</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-cv-purple"></div>
                  <p className="text-gray-300">I've tried it all: From tomato picking to emergency training to online business ventures—I've seen what works and what doesn't</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-cv-purple"></div>
                  <p className="text-gray-300">I speak multiple languages: Technical systems language AND the emotional journey of entrepreneurs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-cv-purple"></div>
                  <p className="text-gray-300">I'm adaptable: I've taught hospital procedures while learning them myself—I can handle any challenge with grace</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-cv-purple"></div>
                  <p className="text-gray-300">I'm system-obsessed but people-focused: I create processes that work while never losing sight of the human element</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-4 w-4 rounded-full bg-cv-purple"></div>
                  <p className="text-gray-300">I thrive in community: After years of solo work, I've discovered my true nature is helping others succeed as part of a team</p>
                </li>
              </ul>
            </div>
            
            <div className="overflow-hidden rounded-lg h-full border border-cv-purple/20 hover:border-cv-purple/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&auto=format&fit=crop" 
                alt="Moth transformation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* The Proof is in the Pudding Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold gradient-text mb-2">The Proof is in the Pudding</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-lg h-full border border-cv-purple/20 hover:border-cv-purple/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&auto=format&fit=crop" 
                alt="Pudding proof" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-6 hover:border-cv-purple/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
              <p className="text-gray-300 leading-relaxed">
                I've never been one for lengthy theoretical discussions when we could just prove it through action. I'm so confident in what I can bring to AAA Accelerator that I'd be happy to start with a trial period. Give me a few clients, set some metrics, and let's see what happens. This moth knows what she's capable of delivering when given the chance to shine.
              </p>
            </div>
          </div>
        </div>
        
        {/* Life is an Adventure Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold gradient-text mb-2">Life is an Adventure</h2>
          </div>
          
          <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-cv-purple/20 rounded-lg p-8 hover:border-cv-purple/40 transition-all duration-300 text-center hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
            <p className="text-gray-300 leading-relaxed mb-8">
              My journey from South Africa to Australia, from tomato fields to hospital auditoriums, from online business ventures to a mudhut in Namibia—it's all been preparation for what comes next. Life is an adventure, and I believe the next exciting chapter involves helping entrepreneurs succeed with AAA Accelerator. The mole-turned-moth is ready for flight!
            </p>
            
            <div className="mb-6">
              <p className="text-xl text-gray-200 mb-4">Ready to see if this moth is your perfect match?</p>
            </div>
            
            <Button asChild className="bg-cv-purple hover:bg-cv-purple-dark">
              <a href="https://www.linkedin.com/in/jodinetheron/" target="_blank" rel="noopener noreferrer">
                Let's Connect
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Admin Controls - Only visible when authenticated */}
      {isAuthenticated ? (
        <div className="fixed bottom-8 right-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-cv-purple hover:bg-cv-purple-dark shadow-lg" 
                onClick={() => {
                  setIsAuthenticated(false);
                  toast.success("Exited edit mode");
                }}
              >
                <Check size={24} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2">
              <span className="text-xs">Exit edit mode</span>
            </HoverCardContent>
          </HoverCard>
        </div>
      ) : (
        <div className="fixed bottom-8 right-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-cv-purple hover:bg-cv-purple-dark shadow-lg" 
                onClick={() => setShowPasswordDialog(true)}
              >
                <Plus size={24} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2">
              <span className="text-xs">Admin access</span>
            </HoverCardContent>
          </HoverCard>
        </div>
      )}
      
      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
            <DialogDescription>
              Enter the password to access admin features.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex items-center space-x-2 my-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlePasswordSubmit();
                }
              }}
            />
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowPasswordDialog(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={handlePasswordSubmit}
              className="bg-cv-purple hover:bg-cv-purple-dark"
            >
              Unlock
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Add/Edit Journey Card Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{editingId !== null ? "Edit Journey Card" : "Add New Journey Card"}</DialogTitle>
            <DialogDescription>
              Fill out the form to {editingId !== null ? "update the" : "add a new"} journey card.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="2025" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://example.com/image.jpg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Card Title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <textarea
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter description here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="quote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quote (Optional)</FormLabel>
                    <FormControl>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter quote here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter className="pt-4">
                <Button variant="outline" onClick={() => setShowAddDialog(false)} type="button">
                  Cancel
                </Button>
                <Button type="submit" className="bg-cv-purple hover:bg-cv-purple-dark">
                  {editingId !== null ? "Update" : "Add"} Card
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteIndex !== null} onOpenChange={(open) => !open && setDeleteIndex(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the journey card.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => deleteIndex !== null && handleDelete(deleteIndex)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Journey;
