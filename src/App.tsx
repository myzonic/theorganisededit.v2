import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  MessageCircle, 
  Check, 
  Menu, 
  X, 
  Lock, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ThumbsUp,
  Smile,
  Home,
  Shirt,
  Clipboard,
  Package,
  RefreshCw,
  Compass,
  Minimize2,
  Flame,
  Clock,
  Wind,
  Eye,
  ShieldCheck,
  FileText,
  CheckCircle,
  Leaf,
  Trash2,
  Camera,
  Brain,
  Users,
  Facebook,
  Linkedin
} from 'lucide-react';

import { Service, BeforeAfterItem, Testimonial, SiteSettings, Enquiry } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  initialServices, 
  initialBeforeAfterItems, 
  initialTestimonials, 
  initialSettings, 
  initialEnquiries 
} from './initialData';

import ServicePage from './components/ServicePage';
import MainHomepage from './components/MainHomepage';

export default function App() {
  // State Management - Hydrated from localStorage
  const [services, setServices] = useState<Service[]>([]);
  const [beforeAfterItems, setBeforeAfterItems] = useState<BeforeAfterItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Initialize and load from local storage
  useEffect(() => {
    const localServices = localStorage.getItem('toe_services');
    const localBeforeAfter = localStorage.getItem('toe_before_after');
    const localTestimonials = localStorage.getItem('toe_testimonials');
    const localSettings = localStorage.getItem('toe_settings');
    const localEnquiries = localStorage.getItem('toe_enquiries');

    if (localServices) {
      const parsed = JSON.parse(localServices);
      const hasTheReset = parsed.some((s: any) => s.id === 'the-reset');
      if (!hasTheReset) {
        setServices(initialServices);
        localStorage.setItem('toe_services', JSON.stringify(initialServices));
      } else {
        setServices(parsed);
      }
    } else {
      setServices(initialServices);
      localStorage.setItem('toe_services', JSON.stringify(initialServices));
    }

    if (localBeforeAfter) {
      const parsed = JSON.parse(localBeforeAfter);
      const hasOfficeReset = parsed.some((item: any) => item.id === 'office-reset');
      if (!hasOfficeReset) {
        setBeforeAfterItems(initialBeforeAfterItems);
        localStorage.setItem('toe_before_after', JSON.stringify(initialBeforeAfterItems));
      } else {
        setBeforeAfterItems(parsed);
      }
    } else {
      setBeforeAfterItems(initialBeforeAfterItems);
      localStorage.setItem('toe_before_after', JSON.stringify(initialBeforeAfterItems));
    }

    if (localTestimonials) {
      setTestimonials(JSON.parse(localTestimonials));
    } else {
      setTestimonials(initialTestimonials);
      localStorage.setItem('toe_testimonials', JSON.stringify(initialTestimonials));
    }

    if (localSettings) {
      const parsed = JSON.parse(localSettings);
      // Migrate old placeholder numbers to the new number requested by the user
      if (parsed.contactPhone === '07712 345678' || parsed.contactWhatsapp === '447712345678') {
        parsed.contactPhone = '+44 7792 888421';
        parsed.contactWhatsapp = '447792888421';
        localStorage.setItem('toe_settings', JSON.stringify(parsed));
      }
      setSettings(parsed);
    } else {
      setSettings(initialSettings);
      localStorage.setItem('toe_settings', JSON.stringify(initialSettings));
    }

    if (localEnquiries) {
      setEnquiries(JSON.parse(localEnquiries));
    } else {
      setEnquiries(initialEnquiries);
      localStorage.setItem('toe_enquiries', JSON.stringify(initialEnquiries));
    }
  }, []);

  // Add enquiry locally
  const handleAddEnquiry = (newEnquiry: Omit<Enquiry, 'id' | 'date' | 'status'>) => {
    const fullEnquiry: Enquiry = {
      ...newEnquiry,
      id: `enq-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    const updated = [fullEnquiry, ...enquiries];
    setEnquiries(updated);
    localStorage.setItem('toe_enquiries', JSON.stringify(updated));
  };

  // Mapping of slugs to section IDs and vice versa for SEO
  const slugToSectionMap: Record<string, string> = {
    '/': 'home',
    '/home': 'home',
    '/what-we-do': 'what-we-do',
    '/why-choose-us': 'why-choose-us',
    '/about-us': 'about',
    '/about': 'about',
    '/services': 'services',
    '/before-and-after': 'gallery',
    '/gallery': 'gallery',
    '/reviews': 'testimonials',
    '/testimonials': 'testimonials',
    '/how-it-works': 'how-it-works',
    '/faqs': 'faqs',
    '/contact': 'contact',
    '/enquire': 'contact'
  };

  const sectionToSlugMap: Record<string, string> = {
    'home': '/',
    'what-we-do': '/what-we-do',
    'why-choose-us': '/why-choose-us',
    'about': '/about-us',
    'services': '/services',
    'gallery': '/before-and-after',
    'testimonials': '/reviews',
    'how-it-works': '/how-it-works',
    'faqs': '/faqs',
    'contact': '/contact'
  };

  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle URL parsing and initial scroll on load for SEO
  useEffect(() => {
    const getSectionFromUrl = () => {
      const path = window.location.pathname || '/';
      const hash = window.location.hash;
      if (hash) {
        const normalizedHash = hash.replace(/^#\/?/, '/');
        if (slugToSectionMap[normalizedHash]) {
          return slugToSectionMap[normalizedHash];
        }
      }
      return slugToSectionMap[path] || 'home';
    };

    const targetSection = getSectionFromUrl();
    if (targetSection && targetSection !== 'home') {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetSection);
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  // Update URL slug when a section is active via IntersectionObserver for SEO
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const sections = ['home', 'what-we-do', 'why-choose-us', 'about', 'services', 'gallery', 'testimonials', 'how-it-works', 'faqs', 'contact'];
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length === 0) return;

      const target = visibleEntries.reduce((prev, current) => {
        return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
      });

      const sectionId = target.target.id;
      if (sectionId && sections.includes(sectionId)) {
        setActiveSection(sectionId);
        
        const newSlug = sectionToSlugMap[sectionId] || '/';
        if (window.location.pathname !== newSlug) {
          window.history.pushState(null, '', newSlug);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: [0, 0.1, 0.2, 0.5]
    });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveServiceId(null);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        const newSlug = sectionToSlugMap[id] || '/';
        window.history.pushState(null, '', newSlug);
        setActiveSection(id);
      }
    }, 50);
  };

  // Quick book service trigger - scrolls to form and selects package
  const triggerQuickBook = (serviceId: string) => {
    setActiveServiceId(null);
    
    setTimeout(() => {
      const container = document.getElementById('contact-form-container');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
      }
      // Update contact form's select box
      const selectEl = document.getElementById('preferred-service') as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = serviceId;
        // Trigger native react change
        const event = new Event('change', { bubbles: true });
        selectEl.dispatchEvent(event);
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC]/40 text-[#2B2B2B] font-body flex flex-col selection:bg-[#A89A8A]/35 selection:text-[#2B2B2B] scroll-smooth">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-[#E6DED4]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo Brand Signature */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="cursor-pointer flex items-center group"
          >
            <img 
              src="/src/assets/images/oe_new_logo.png" 
              alt="The Organised Edit" 
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-[11px] font-semibold uppercase tracking-widest text-[#2B2B2B]">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`transition-colors cursor-pointer ${activeSection === 'home' ? 'text-[#A89A8A] border-b border-[#A89A8A]/30 pb-0.5' : 'hover:text-[#A89A8A]'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`transition-colors cursor-pointer ${activeSection === 'about' ? 'text-[#A89A8A] border-b border-[#A89A8A]/30 pb-0.5' : 'hover:text-[#A89A8A]'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`transition-colors cursor-pointer ${activeSection === 'services' ? 'text-[#A89A8A] border-b border-[#A89A8A]/30 pb-0.5' : 'hover:text-[#A89A8A]'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className={`transition-colors cursor-pointer ${activeSection === 'gallery' ? 'text-[#A89A8A] border-b border-[#A89A8A]/30 pb-0.5' : 'hover:text-[#A89A8A]'}`}
            >
              Before & After
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className={`transition-colors cursor-pointer ${activeSection === 'testimonials' ? 'text-[#A89A8A] border-b border-[#A89A8A]/30 pb-0.5' : 'hover:text-[#A89A8A]'}`}
            >
              Reviews
            </button>
            
            <a 
              href="https://www.instagram.com/theorganisededitmanchester"
              target="_blank"
              rel="noreferrer"
              className="text-[#2B2B2B] hover:text-[#A89A8A] transition-colors p-1 flex items-center justify-center"
              title="Follow us on Instagram"
              id="header-instagram-link"
            >
              <Instagram className="w-4 h-4 stroke-[1.8]" />
            </a>

            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-5 py-2.5 rounded-full transition-all tracking-widest shadow-xs uppercase cursor-pointer ${activeSection === 'contact' ? 'bg-[#A89A8A] text-white' : 'bg-[#2B2B2B] text-white hover:bg-[#A89A8A]'}`}
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile Hamburguer toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2B2B2B] hover:text-[#A89A8A] transition-colors relative z-50 focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end relative">
              <span className={`h-0.5 bg-[#2B2B2B] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px] origin-center' : 'w-6'}`} />
              <span className={`h-0.5 bg-[#2B2B2B] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0 translate-x-2' : 'w-4.5'}`} />
              <span className={`h-0.5 bg-[#2B2B2B] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px] origin-center' : 'w-3'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-b border-[#E6DED4] p-6 space-y-4 font-sans text-xs font-semibold uppercase tracking-widest text-center animate-fade-in">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`block w-full py-2 ${activeSection === 'home' ? 'text-[#A89A8A] font-bold' : 'text-[#2B2B2B] hover:text-[#A89A8A]'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`block w-full py-2 ${activeSection === 'about' ? 'text-[#A89A8A] font-bold' : 'text-[#2B2B2B] hover:text-[#A89A8A]'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`block w-full py-2 ${activeSection === 'services' ? 'text-[#A89A8A] font-bold' : 'text-[#2B2B2B] hover:text-[#A89A8A]'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className={`block w-full py-2 ${activeSection === 'gallery' ? 'text-[#A89A8A] font-bold' : 'text-[#2B2B2B] hover:text-[#A89A8A]'}`}
            >
              Before & After
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className={`block w-full py-2 ${activeSection === 'testimonials' ? 'text-[#A89A8A] font-bold' : 'text-[#2B2B2B] hover:text-[#A89A8A]'}`}
            >
              Reviews
            </button>
            <a 
              href="https://www.instagram.com/theorganisededitmanchester"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-2 text-[#2B2B2B] hover:text-[#A89A8A]"
              id="mobile-instagram-link"
            >
              Instagram
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full py-3 rounded-full ${activeSection === 'contact' ? 'bg-[#A89A8A] text-white' : 'bg-[#2B2B2B] text-white'}`}
            >
              Enquire Now
            </button>
          </div>
        )}
      </header>

      {activeServiceId ? (
        <ServicePage
          serviceId={activeServiceId}
          services={services}
          beforeAfterItems={beforeAfterItems}
          onBack={() => {
            setActiveServiceId(null);
            scrollToSection('services');
          }}
          onBook={(id) => {
            setActiveServiceId(null);
            setTimeout(() => {
              triggerQuickBook(id);
            }, 100);
          }}
          onDiscoveryCall={() => {
            setActiveServiceId(null);
            setTimeout(() => {
              triggerQuickBook('discovery-call');
            }, 100);
          }}
        />
      ) : (
        <MainHomepage
          settings={settings}
          services={services}
          beforeAfterItems={beforeAfterItems}
          testimonials={testimonials}
          onAddEnquiry={handleAddEnquiry}
          setActiveServiceId={setActiveServiceId}
          triggerQuickBook={triggerQuickBook}
          scrollToSection={scrollToSection}
        />
      )}

      {/* FOOTER SECTION */}
      <footer className="bg-[#2B2B2B] text-[#F4F1EC] pt-16 pb-8 border-t border-[#A89A8A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-12">
          
          {/* Footer Logo & Area banner */}
          <div className="space-y-4">
            <img 
              src="/src/assets/images/oe_new_logo.png" 
              alt="The Organised Edit" 
              className="h-10 sm:h-11 w-auto object-contain opacity-90"
            />
            <p className="font-body text-[#FAF9F5]/70 text-xs leading-relaxed max-w-sm">
              Creating bespoke, highly-functional and eye-friendly home styling and organisation layouts across <strong>Manchester</strong>, <strong>Cheshire</strong>, <strong>Trafford</strong>, <strong>Salford</strong>, <strong>Stockport</strong>, <strong>Altrincham</strong>, and <strong>Wilmslow</strong>.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/theorganisededitmanchester" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#FAF9F5]/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-[#FAF9F5]/80 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-[#FAF9F5]/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 md:pl-8">
            <h5 className="font-sans text-[10px] font-bold tracking-widest text-[#FAF9F5] uppercase">
              QUICK SECTIONS
            </h5>
            <ul className="space-y-2.5 text-xs text-[#FAF9F5]/75 font-sans">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Before & After
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Support Column */}
          <div className="space-y-4">
            <h5 className="font-sans text-[10px] font-bold tracking-widest text-[#FAF9F5] uppercase">
              GET IN TOUCH
            </h5>
            <ul className="space-y-3.5 text-xs text-[#FAF9F5]/75 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A89A8A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Manchester, Cheshire, Trafford, Salford, Stockport, Altrincham, Wilmslow & North West</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A89A8A]" />
                <a href={`tel:${settings.contactPhone}`} className="hover:text-white transition-colors">
                  {settings.contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A89A8A]" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-white transition-colors break-all">
                  {settings.contactEmail}
                </a>
              </li>
              {settings.contactWhatsapp && (
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#A89A8A]" />
                  <a 
                    href={`https://wa.me/${settings.contactWhatsapp}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Legal area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-left text-[#FAF9F5]/45 text-[10px] font-sans">
          <p>© {new Date().getFullYear()} The Organised Edit. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
