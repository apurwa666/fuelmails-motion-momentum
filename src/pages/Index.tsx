import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Mail, ArrowUp, Sparkles, Zap, Target, CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [stats, setStats] = useState({ revenue: 0, emails: 0, clients: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const emailTemplates = [
    {
      id: 1,
      title: "Newsletter Pro",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Sales Boost",
      preview: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Event Master",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Brand Story",
      preview: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      color: "from-green-500 to-teal-500"
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

  // Vanilla JS Carousel Implementation
  useEffect(() => {
    if (!carouselRef.current) return;

    let currentSlide = 0;
    const totalSlides = emailTemplates.length;
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    function updateCarousel() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'next', 'prev');
        if (index === currentSlide) {
          slide.classList.add('active');
        } else if (index === (currentSlide + 1) % totalSlides) {
          slide.classList.add('next');
        } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
          slide.classList.add('prev');
        }
      });

      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    function goToSlide(index: number) {
      currentSlide = index;
      updateCarousel();
    }

    // Event listeners
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });

    // Auto-rotate
    const autoRotate = setInterval(nextSlide, 4000);

    // Initialize
    updateCarousel();

    return () => {
      clearInterval(autoRotate);
      nextBtn?.removeEventListener('click', nextSlide);
      prevBtn?.removeEventListener('click', prevSlide);
      indicators.forEach((indicator, index) => {
        indicator.removeEventListener('click', () => goToSlide(index));
      });
    };
  }, [emailTemplates.length]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2500;
      const steps = 80;
      const revenueTarget = 2400000;
      const emailsTarget = 150000;
      const clientsTarget = 1200;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setStats({
          revenue: Math.floor(revenueTarget * easeOut),
          emails: Math.floor(emailsTarget * easeOut),
          clients: Math.floor(clientsTarget * easeOut)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateCounters, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 15000);
    };

    const particleInterval = setInterval(createParticle, 3000);
    return () => clearInterval(particleInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 magnetic-effect">
              <Mail className="h-8 w-8 text-purple-600 animate-pulse-slow" />
              <span className="text-2xl font-bold text-gradient">Fuelmails</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 magnetic-effect">
                About Us
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 magnetic-effect">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('designs')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 magnetic-effect">
                Designs
              </button>
              <a href="/blog" className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 magnetic-effect">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-20 floating-element"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-20 floating-element animate-float-delayed"></div>
          <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-bounce-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-section">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-600 animate-rotate-slow" />
                <span className="text-purple-600 font-semibold">Premium Email Marketing Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient text-shadow-glow animate-scale-in">Fueling Your</span><br />
                <span className="text-gray-800 animate-fade-in-left">Marketing Momentum</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
                Transform your email marketing with professionally designed templates 
                and powerful performance tracking that drives real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 stagger-animation">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect magnetic-effect" style={{'--stagger-delay': 0} as any}>
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-purple-300 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 magnetic-effect" style={{'--stagger-delay': 1} as any}>
                  <Target className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Vanilla JS Carousel */}
            <div ref={carouselRef} className="carousel-container relative w-80 h-96 mx-auto perspective-1000">
              <div className="carousel-wrapper relative w-full h-full transform-style-3d">
                {emailTemplates.map((template, index) => (
                  <div
                    key={template.id}
                    className="carousel-slide absolute inset-0 transition-all duration-700 ease-in-out opacity-0"
                    data-color={template.color}
                  >
                    <Card className="h-full shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden backface-hidden hover-3d">
                      <div className={cn("h-full relative bg-gradient-to-br", template.color)}>
                        <img 
                          src={template.preview} 
                          alt={template.title}
                          className="w-full h-full object-cover opacity-20 transition-opacity duration-300 hover:opacity-40"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold animate-pulse-slow">{template.title}</h3>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button className="prev-btn p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-3">
                  {emailTemplates.map((_, index) => (
                    <button
                      key={index}
                      className="indicator w-4 h-4 rounded-full bg-gray-300 hover:bg-purple-400 transition-all duration-500 hover:scale-125"
                    />
                  ))}
                </div>
                
                <button className="next-btn p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group">
              <div className="text-5xl lg:text-6xl font-bold text-gradient transition-all duration-300 group-hover:scale-110">
                ${stats.revenue.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg group-hover:text-purple-600 transition-colors">Total Revenue Generated</p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            <div className="text-center space-y-4 group">
              <div className="text-5xl lg:text-6xl font-bold text-gradient transition-all duration-300 group-hover:scale-110">
                {stats.emails.toLocaleString()}
              </div>
              <p className="text-gray-600 text-lg group-hover:text-purple-600 transition-colors">Emails Sent</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            <div className="text-center space-y-4 group">
              <div className="text-5xl lg:text-6xl font-bold text-gradient transition-all duration-300 group-hover:scale-110">
                {stats.clients.toLocaleString()}+
              </div>
              <p className="text-gray-600 text-lg group-hover:text-purple-600 transition-colors">Our Clients</p>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50 fade-in-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-800 animate-fade-in-up">About Fuelmails</h2>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
              We're passionate about helping businesses unlock the full potential of email marketing. 
              Our platform combines beautiful design with powerful analytics to deliver campaigns that convert.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-3d group">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-purple-600 mr-3 group-hover:animate-rotate-slow" />
                  <h3 className="text-xl font-semibold text-purple-600">Professional Templates</h3>
                </div>
                <p className="text-gray-600">Choose from hundreds of professionally designed templates that are proven to convert.</p>
              </Card>
              <Card className="p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-3d group">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-purple-600 mr-3 group-hover:animate-pulse-slow" />
                  <h3 className="text-xl font-semibold text-purple-600">Advanced Analytics</h3>
                </div>
                <p className="text-gray-600">Track performance with detailed insights and optimize your campaigns for maximum ROI.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20 bg-white fade-in-section">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 card-3d overflow-hidden" style={{'--stagger-delay': index} as any}>
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-semibold">View Case Study →</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">{study.title}</h3>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="designs" className="py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up">Template Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            {emailTemplates.map((template, index) => (
              <Card key={template.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 card-3d overflow-hidden" style={{'--stagger-delay': index} as any}>
                <div className={cn("h-64 relative overflow-hidden bg-gradient-to-br", template.color)}>
                  <img 
                    src={template.preview} 
                    alt={template.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">{template.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white fade-in-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in-up">Read Our Blog</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up">Stay updated with the latest email marketing insights and strategies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 card-3d overflow-hidden cursor-pointer" style={{'--stagger-delay': index} as any}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-purple-600 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section with Calendar */}
      <footer className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-purple-400 rounded-full opacity-30 floating-element"></div>
          <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Footer Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-10 w-10 text-purple-300" />
                <span className="text-3xl font-bold text-white">Fuelmails</span>
              </div>
              
              <p className="text-lg text-purple-100 leading-relaxed max-w-md">
                Transform your email marketing with professional templates and powerful analytics that drive real results.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-200">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><button onClick={() => scrollToSection('about')} className="text-purple-100 hover:text-white transition-colors">About Us</button></li>
                    <li><button onClick={() => scrollToSection('case-studies')} className="text-purple-100 hover:text-white transition-colors">Case Studies</button></li>
                    <li><button onClick={() => scrollToSection('designs')} className="text-purple-100 hover:text-white transition-colors">Templates</button></li>
                    <li><a href="/blog" className="text-purple-100 hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-200">Contact Info</h4>
                  <div className="space-y-2 text-purple-100">
                    <p>Email: hello@fuelmails.com</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Support: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <CalendarIcon className="h-8 w-8 text-purple-300" />
                  <h3 className="text-2xl font-bold text-white">Schedule a Demo</h3>
                </div>
                <p className="text-purple-100 mb-6">Pick a date that works best for you</p>
              </div>
              
              <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 p-6 rounded-xl shadow-2xl">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="text-white [&_.rdp-button_:not([disabled])]:text-white [&_.rdp-day_selected]:bg-purple-600 [&_.rdp-day_selected]:text-white [&_.rdp-day:hover]:bg-purple-500/50 [&_.rdp-head_cell]:text-purple-200"
                  disabled={{ before: new Date() }}
                />
                {date && (
                  <div className="mt-4 text-center">
                    <p className="text-purple-100 mb-3">Selected: {date.toDateString()}</p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105">
                      Book Demo for This Date
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
          
          <div className="border-t border-purple-400/20 mt-16 pt-8 text-center">
            <p className="text-purple-200">© 2024 Fuelmails. All rights reserved. Built with passion for email marketing excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
