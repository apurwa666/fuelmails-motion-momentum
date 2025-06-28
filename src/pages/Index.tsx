
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Mail, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [stats, setStats] = useState({ revenue: 0, emails: 0, clients: 0 });

  const emailTemplates = [
    {
      id: 1,
      title: "Newsletter Pro",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Sales Boost",
      preview: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=600&fit=crop",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Event Master",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop",
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Brand Story",
      preview: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      color: "bg-gradient-to-br from-green-500 to-teal-500"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Email Marketing Trends for 2024",
      excerpt: "Discover the latest trends that will shape email marketing this year and boost your campaign performance.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Building Customer Loyalty Through Email",
      excerpt: "Learn how to create email campaigns that turn one-time buyers into lifelong customers.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "A/B Testing Your Email Campaigns",
      excerpt: "Master the art of A/B testing to optimize your email open rates and conversions.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop",
      date: "March 5, 2024"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Growth",
      description: "Increased sales by 340% through targeted email campaigns",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "SaaS Onboarding",
      description: "Improved user retention by 85% with automated email sequences",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "B2B Lead Generation",
      description: "Generated 500+ qualified leads per month with nurture campaigns",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % emailTemplates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const revenueTarget = 2400000;
      const emailsTarget = 150000;
      const clientsTarget = 1200;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          revenue: Math.floor(revenueTarget * progress),
          emails: Math.floor(emailsTarget * progress),
          clients: Math.floor(clientsTarget * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gradient">Fuelmails</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-purple-600 transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-purple-600 transition-colors">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('designs')} className="text-gray-600 hover:text-purple-600 transition-colors">
                Designs
              </button>
              <a href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Fueling Your</span><br />
                <span className="text-gray-800">Marketing Momentum</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your email marketing with professionally designed templates 
                and powerful performance tracking that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Email Template Carousel */}
            <div className="relative">
              <div className="relative w-80 h-96 mx-auto">
                {emailTemplates.map((template, index) => (
                  <div
                    key={template.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out",
                      index === currentTemplate 
                        ? "opacity-100 scale-100 z-10" 
                        : index === (currentTemplate + 1) % emailTemplates.length
                        ? "opacity-70 scale-95 translate-x-8 z-5"
                        : index === (currentTemplate - 1 + emailTemplates.length) % emailTemplates.length
                        ? "opacity-70 scale-95 -translate-x-8 z-5"
                        : "opacity-0 scale-90"
                    )}
                  >
                    <Card className="h-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden">
                      <div className={cn("h-full", template.color)}>
                        <img 
                          src={template.preview} 
                          alt={template.title}
                          className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold">{template.title}</h3>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {emailTemplates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTemplate(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      index === currentTemplate ? "bg-purple-600" : "bg-gray-300"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-gradient">
                ${stats.revenue.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg">Total Revenue Generated</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-gradient">
                {stats.emails.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg">Emails Sent</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl lg:text-5xl font-bold text-gradient">
                {stats.clients.toLocaleString()}+
              </div>
              <p className="text-gray-600 text-lg">Our Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">About Fuelmails</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about helping businesses unlock the full potential of email marketing. 
              Our platform combines beautiful design with powerful analytics to deliver campaigns that convert.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Professional Templates</h3>
                <p className="text-gray-600">Choose from hundreds of professionally designed templates that are proven to convert.</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Advanced Analytics</h3>
                <p className="text-gray-600">Track performance with detailed insights and optimize your campaigns for maximum ROI.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{study.title}</h3>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designs Section */}
      <section id="designs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Template Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailTemplates.map((template, index) => (
              <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={cn("h-64 relative", template.color)}>
                  <img 
                    src={template.preview} 
                    alt={template.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{template.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Read Our Blog</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest email marketing insights and strategies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-purple-600 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Fuelmails</span>
              </div>
              <p className="text-gray-400">Fueling Your Marketing Momentum</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    Schedule a Call
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Schedule a Meeting</DialogTitle>
                  </DialogHeader>
                  <div className="p-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border pointer-events-auto"
                    />
                    <div className="mt-4">
                      <Button className="w-full gradient-bg text-white">
                        Confirm Meeting
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fuelmails. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
