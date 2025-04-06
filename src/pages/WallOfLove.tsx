import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Plus, Pencil, Trash2, Key, Eye, Youtube, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Footer from "@/components/Footer";

// Define the testimonial schema
const testimonialSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  title: z.string().min(2, { message: "Title is required." }),
  company: z.string().min(2, { message: "Company is required." }),
  country: z.string().min(2, { message: "Country is required." }),
  type: z.enum(["video", "text"]),
  content: z.string().min(2, { message: "Content is required." }),
  imageUrl: z.string().optional(),
});

type Testimonial = z.infer<typeof testimonialSchema>;

// Sample testimonials data
const initialTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Global Solutions Inc.",
    country: "United States",
    type: "text",
    content: "Working with Jodine transformed our marketing strategy completely. Her insights were invaluable and the results speak for themselves - 40% increase in conversion rates within just 3 months!",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "TechStart Innovations",
    country: "Singapore",
    type: "video",
    content: '<iframe width="100%" height="240" src="https://vidpowr.net/Dnspm6DkJeWWnnf" frameborder="0" allow="clipboard-read;accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>',
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    title: "Operations Manager",
    company: "Bright Futures NGO",
    country: "Canada",
    type: "text",
    content: "Jodine's strategic guidance helped us restructure our entire operations model. We're now able to serve 30% more beneficiaries while actually reducing our overhead costs. I can't recommend her services enough!",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&auto=format&fit=crop",
  }
];

const WallOfLove = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  
  // Form
  const form = useForm<Testimonial>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      title: "",
      company: "",
      country: "",
      type: "text",
      content: "",
      imageUrl: "",
    },
  });

  // Star cursor effect
  useEffect(() => {
    // Create star cursor styles
    const style = document.createElement('style');
    style.textContent = `
      .star-cursor {
        cursor: none;
      }
      .cursor-star {
        pointer-events: none;
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(155, 135, 245, 1) 0%, rgba(155, 135, 245, 0.8) 50%, rgba(155, 135, 245, 0) 100%);
        transform: translate(-50%, -50%);
        z-index: 9999;
        mix-blend-mode: screen;
        box-shadow: 0 0 10px 2px rgba(155, 135, 245, 0.7);
      }
      .cursor-trail {
        pointer-events: none;
        position: fixed;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(155, 135, 245, 0.7);
        transform: translate(-50%, -50%);
        z-index: 9998;
        mix-blend-mode: screen;
        transition: width 0.2s, height 0.2s, opacity 0.5s;
      }
    `;
    document.head.appendChild(style);

    // Create star cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-star');
    document.body.appendChild(cursor);

    // Create trail elements
    const trails: HTMLDivElement[] = [];
    const trailCount = 12;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      document.body.appendChild(trail);
      trails.push(trail);
    }

    // Add body class
    document.body.classList.add('star-cursor');

    // Trail animation variables
    let mouseX = 0;
    let mouseY = 0;
    const trailPositions: { x: number, y: number }[] = Array(trailCount).fill({ x: 0, y: 0 });

    // Update cursor and trails
    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    // Animation loop for trails
    const animateTrails = () => {
      // Update trail positions
      for (let i = trails.length - 1; i > 0; i--) {
        trailPositions[i] = { ...trailPositions[i-1] };
      }
      trailPositions[0] = { x: mouseX, y: mouseY };

      // Apply positions to trail elements
      trails.forEach((trail, index) => {
        const position = trailPositions[index];
        trail.style.left = `${position.x}px`;
        trail.style.top = `${position.y}px`;
        trail.style.opacity = `${1 - index / trails.length}`;
        trail.style.width = `${6 * (1 - index / trails.length)}px`;
        trail.style.height = `${6 * (1 - index / trails.length)}px`;
      });

      requestAnimationFrame(animateTrails);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    animateTrails();

    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.body.classList.remove('star-cursor');
      cursor.remove();
      trails.forEach(trail => trail.remove());
      document.head.removeChild(style);
    };
  }, []);

  // Handle password authentication
  const handlePasswordSubmit = () => {
    if (password === "Je5u$isK!ng") {
      setIsAuthenticated(true);
      toast.success("Access granted! You can now add, edit, and delete testimonials.");
      setShowPasswordDialog(false);
    } else {
      toast.error("Incorrect password");
    }
  };

  // Handle add/edit testimonial
  const onSubmit = (data: Testimonial) => {
    if (editingId !== null) {
      // Edit existing testimonial
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editingId] = data;
      setTestimonials(updatedTestimonials);
      toast.success("Testimonial updated successfully!");
    } else {
      // Add new testimonial
      setTestimonials([...testimonials, data]);
      toast.success("Testimonial added successfully!");
    }
    
    setShowAddDialog(false);
    setEditingId(null);
    form.reset();
  };

  // Handle edit button click
  const handleEdit = (index: number) => {
    setEditingId(index);
    form.reset(testimonials[index]);
    setShowAddDialog(true);
  };

  // Handle delete confirmation
  const handleDelete = (index: number) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
    setDeleteIndex(null);
    toast.success("Testimonial deleted successfully!");
  };

  // Prepare delete handler
  const confirmDelete = (index: number) => {
    setDeleteIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Wall of Love</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Hear directly from our clients about their experiences working with Jodine Theron.
            </p>
          </div>
          
          {/* Admin Controls - Only visible when authenticated */}
          {isAuthenticated && (
            <div className="flex justify-center mb-8">
              <Button 
                onClick={() => {
                  setEditingId(null);
                  form.reset();
                  setShowAddDialog(true);
                }}
                className="bg-cv-purple hover:bg-cv-purple-dark flex items-center gap-2"
              >
                <Plus size={16} />
                Add Testimonial
              </Button>
            </div>
          )}
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 backdrop-blur-sm border border-cv-purple/20 hover:border-cv-purple/40 transition-all duration-300 overflow-hidden flex flex-col h-full hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-12 w-12 border border-cv-purple/30">
                    <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                    <AvatarFallback className="bg-cv-purple/20">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-medium text-white truncate">{testimonial.name}</h3>
                    <div className="text-sm text-gray-400 truncate">
                      {testimonial.title}, {testimonial.company}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.country}
                    </div>
                  </div>
                  {isAuthenticated && (
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-gray-400 hover:text-cv-purple hover:bg-cv-purple/10"
                            onClick={() => handleEdit(index)}
                          >
                            <Pencil size={16} />
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto p-2">
                          <span className="text-xs">Edit testimonial</span>
                        </HoverCardContent>
                      </HoverCard>
                      
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                            onClick={() => confirmDelete(index)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto p-2">
                          <span className="text-xs">Delete testimonial</span>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="flex-grow">
                  {testimonial.type === 'text' ? (
                    <div className="text-sm text-gray-300 bg-gradient-to-r from-cv-purple/5 to-cv-blue/5 p-4 rounded-md min-h-[180px]">
                      <MessageSquare size={16} className="text-cv-purple mb-2 inline-block mr-2" />
                      {testimonial.content}
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-cv-purple/5 to-cv-blue/5 p-4 rounded-md overflow-hidden">
                      <div className="relative pb-2 mb-2">
                        <Youtube size={16} className="text-cv-purple mb-2 inline-block" />
                      </div>
                      <div 
                        className="video-container" 
                        dangerouslySetInnerHTML={{ __html: testimonial.content }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Add Button (only visible when not authenticated) */}
          {!isAuthenticated && (
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
        </div>
      </div>
      
      <Footer />
      
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
            <Key className="h-5 w-5 text-cv-purple" />
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
      
      {/* Add/Edit Testimonial Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{editingId !== null ? "Edit Testimonial" : "Add New Testimonial"}</DialogTitle>
            <DialogDescription>
              Fill out the form to {editingId !== null ? "update the" : "add a new"} testimonial to the Wall of Love.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
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
                      <FormLabel>Profile Image URL (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://example.com/image.jpg" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="CEO" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Acme Inc." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Australia" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Testimonial Type</FormLabel>
                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant={field.value === "text" ? "default" : "outline"}
                        className={field.value === "text" ? "bg-cv-purple hover:bg-cv-purple-dark" : ""}
                        onClick={() => form.setValue("type", "text")}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Text
                      </Button>
                      <Button
                        type="button"
                        variant={field.value === "video" ? "default" : "outline"}
                        className={field.value === "video" ? "bg-cv-purple hover:bg-cv-purple-dark" : ""}
                        onClick={() => form.setValue("type", "video")}
                      >
                        <Youtube className="mr-2 h-4 w-4" />
                        Video
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {form.watch("type") === "text" ? "Testimonial Text" : "Video Embed Code"}
                    </FormLabel>
                    <FormControl>
                      <textarea
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={form.watch("type") === "text" ? "Enter testimonial text here..." : "Paste video embed code here..."}
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
                  {editingId !== null ? "Update" : "Add"} Testimonial
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
              This action cannot be undone. This will permanently delete the testimonial.
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

export default WallOfLove;
