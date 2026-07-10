import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  HelpCircle, 
  Calendar, 
  Sparkles, 
  Clock, 
  Heart, 
  Users, 
  Brain, 
  ChevronDown, 
  ChevronUp, 
  Smile,
  Home
} from 'lucide-react';
import { Service, BeforeAfterItem } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';

interface ServicePageProps {
  serviceId: string;
  services: Service[];
  beforeAfterItems: BeforeAfterItem[];
  onBack: () => void;
  onBook: (serviceId: string) => void;
  onDiscoveryCall: () => void;
}

interface DetailedServiceInfo {
  whoItsFor: string;
  whatsIncluded: string[];
  faqs: { question: string; answer: string }[];
  beforeAfterItemId: string; // The ID of the before/after item to display
  icon: React.ReactNode;
}

export default function ServicePage({
  serviceId,
  services,
  beforeAfterItems,
  onBack,
  onBook,
  onDiscoveryCall
}: ServicePageProps) {
  const service = services.find(s => s.id === serviceId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-stone-500 font-sans">Service not found.</p>
        <button 
          onClick={onBack}
          className="mt-4 px-6 py-2.5 bg-[#2B2B2B] text-white rounded font-sans text-xs uppercase tracking-wider"
        >
          Return Home
        </button>
      </div>
    );
  }

  // Define detailed static contents for each of the five core services
  const detailsMap: Record<string, DetailedServiceInfo> = {
    'the-reset': {
      icon: <Clock className="w-6 h-6" />,
      whoItsFor: "The Reset is designed for busy individuals or families who feel overwhelmed by a single \"trouble zone\" in their home. Whether it's a walk-in kitchen pantry, a chaotic laundry/utility room, a children's toy corner that has gotten out of hand, a cluttered home office desk, or a bedroom closet that won't close, this targeted, highly focused half-day session is the perfect quick transformation.",
      whatsIncluded: [
        "Up to 4 hours of professional, hands-on decluttering and organising with Beth & Danielle.",
        "A supportive, completely judgment-free walkthrough and initial assessment.",
        "Meticulous sorting, editing, and grouping of items to establish functional zones.",
        "Organising all items back into your existing containers, drawers, or baskets.",
        "Recommendations on sustainable routines to keep the space looking fresh and organized.",
        "Curation and sorting of unwanted items into dedicated donate, recycle, and waste piles."
      ],
      beforeAfterItemId: 'bedroom-serenity', // Master Bedroom Sanctuary Edit
      faqs: [
        {
          question: "Do I need to tidy up or clean my home before you arrive?",
          answer: "Absolutely not! We prefer to see your space exactly as it is in daily life. This helps us understand where the friction points are and how the clutter naturally accumulates, enabling us to design a system that works for you. There is zero judgment here—we are here to support you, not inspect you."
        },
        {
          question: "Do I have to be with you the entire time?",
          answer: "We need you at the very beginning to understand your goals and at the end to make final decisions on what items to declutter or keep. For the main organizing portion of the session, you are welcome to hang out with us, work, run errands, or relax. We handle all the physical organizing and heavy lifting!"
        },
        {
          question: "Do you supply the storage boxes, bins, and jars?",
          answer: "We always aim to reuse your existing storage solutions first to save you money and protect the environment. If we find that additional boxes, hangers, or containers would make a major difference, we will recommend options that fit your budget and personal style."
        }
      ]
    },
    'home-refresh': {
      icon: <Users className="w-6 h-6" />,
      whoItsFor: "The Home Refresh is our most popular service, perfect for families who need a broader, more impactful reset of their active daily living areas. If you are feeling overwhelmed by connected spaces—such as an open-plan kitchen-dining area, a multi-purpose playroom, or a main bedroom suite along with its bedside storage—this package restores order and beautiful styling to those high-traffic zones in a single session.",
      whatsIncluded: [
        "Up to 6 hours of high-efficiency, hands-on decluttering, organizing, and styling.",
        "Spatial layout review to improve flow, functionality, and light in your chosen rooms.",
        "Deep sorting and categorisation of items, separating essentials from excess.",
        "Bespoke, visual systems tailored specifically to your family's routines.",
        "A customized Product Recommendation List with direct shopping links for matching containers.",
        "One week of follow-up WhatsApp support to help you settle into and maintain your new systems."
      ],
      beforeAfterItemId: 'office-reset', // The Home Office Productivity Reset
      faqs: [
        {
          question: "Which rooms are typically completed during a Home Refresh?",
          answer: "Typically, we can refresh 1 larger high-traffic area (like a family living room and coffee table setup) or 2 smaller interconnected spaces (such as a master bedroom closet plus bedside tables, or a kitchen pantry plus utility cupboards)."
        },
        {
          question: "What if my home has more clutter than can be sorted in 6 hours?",
          answer: "Don't worry! During our free discovery call, we will discuss the scope of your project. If we think your space needs a bit more attention, we can recommend booking additional hours, upgrading to 'The Whole Home Edit', or dividing the project into a few comfortable stages."
        },
        {
          question: "Will you force me to throw away items that I love?",
          answer: "Never. You have absolute, 100% final say on everything that stays or goes. We serve as gentle, empathetic guides, helping you understand what items are serving your current lifestyle, but we will never pressure you into discarding anything."
        }
      ]
    },
    'whole-home-edit': {
      icon: <Home className="w-6 h-6" />,
      whoItsFor: "The Whole Home Edit is our premium, comprehensive package designed for a complete, cohesive transformation of your entire living space or multiple key rooms. It is ideal for families moving into a new home, individuals undergoing major life transitions, or households where clutter has accumulated across multiple zones, creating daily stress and friction.",
      whatsIncluded: [
        "A fully bespoke, multi-day organizing plan designed specifically for your home and lifestyle.",
        "In-depth, hands-on decluttering, styling, and organizing of 3 or more rooms.",
        "Creation of cohesive, intuitive 'lifestyle zones' that make daily cleanup automatic.",
        "Full custom product sourcing—we source, shop, and deliver all baskets, labels, and hangers.",
        "Premium, hand-crafted aesthetic labeling for all drawers, shelves, and decanted containers.",
        "A printed, custom 'Home Maintenance Guide' packed with actionable tips for your family."
      ],
      beforeAfterItemId: 'living-kitchen-open-plan', // Open-Plan Living & Kitchen Refresh
      faqs: [
        {
          question: "How long does a Whole Home Edit usually take?",
          answer: "Depending on the size of your home and the volume of items, it typically ranges from 2 to 4 full days. We will provide a clear, customized project timeline during our free consultation."
        },
        {
          question: "How does the product sourcing work?",
          answer: "We take the stress entirely out of your hands! Based on our initial assessment and your style preferences, we will curate a beautiful shopping list. Once approved, we purchase and deliver all containers directly to your home on the day of the session. You only pay for the products you decide to keep."
        },
        {
          question: "Is this package suitable for unpacking after a house move?",
          answer: "Yes, it's perfect for moves! There is no better feeling than unpacking into organized, styled, and functional systems right from day one. We can help you declutter before you pack, or unpack and style your new home beautifully."
        }
      ]
    },
    'family-adhd-edit': {
      icon: <Brain className="w-6 h-6" />,
      whoItsFor: "The Family & ADHD Edit is a highly empathetic service tailored for neurodivergent households (ADHD, autism, sensory sensitivities, executive dysfunction) and busy family homes. Traditional 'minimalist' organizing often causes frustration or feelings of shame. This package focuses on low-executive-load, intuitive, and highly visual systems that work in absolute harmony with your brain.",
      whatsIncluded: [
        "Gentle, collaborative, and entirely self-paced organizing sessions.",
        "Low-barrier systems designed to minimize steps for sorting and retrieving items.",
        "Intuitive visual photo-labelling or color-coded zones to make cleanups simple for kids.",
        "Setting up specialized spaces like sensory toy zones, school bag launchpads, and quiet corners.",
        "Empathetic coaching on executive-friendly daily routines and positive spatial habits.",
        "Post-session support check-in to adjust the systems if anything doesn't feel quite right."
      ],
      beforeAfterItemId: 'playroom-reset', // Sensory-Friendly Playroom Organisation
      faqs: [
        {
          question: "My home is in absolute chaos and I feel incredibly embarrassed. Will you judge me?",
          answer: "Please do not feel embarrassed. Executive dysfunction, chronic illnesses, and busy family life can make organizing feel utterly impossible, and that is completely normal. Our team works with absolute kindness, patience, and 100% confidentiality. We are here to support and lift you up, never to judge."
        },
        {
          question: "How are ADHD-friendly systems different from standard home organisation?",
          answer: "Standard organizing often relies on hiding items away in opaque, heavy, or multi-layered containers. For many with ADHD, this leads to 'out of sight, out of mind' forgetfulness or makes putting items back feel like too much effort. We focus on open bins, clear visual storage, simple categorization, and single-step routines."
        },
        {
          question: "Can we involve our children in the design of their playroom or bedrooms?",
          answer: "Absolutely! In fact, we highly encourage it. Involving children in a gentle, game-like way gives them a sense of ownership over their space and helps them understand the visual labels, leading to much better long-term tidying habits."
        }
      ]
    },
    'wardrobe-edit': {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 7V3c0-1 1-2 2-2s2 1 2 2" />
        <path d="m2 17 8.3-5.2c1-.6 2.3-.6 3.3 0L22 17c.6.4.7 1.2.3 1.8A1.5 1.5 0 0 1 21 19H3c-.6 0-1.1-.3-1.3-.8a1.5 1.5 0 0 1 .3-1.2z" />
      </svg>,
      whoItsFor: "The Wardrobe Edit & Styling is designed for anyone who stands in front of a closet full of clothes and feels like they have absolutely nothing to wear. Whether your body shape has changed, your style has evolved, or you are returning to the office and want to transition to a mindful capsule wardrobe, we will turn your closet into a beautiful, stress-free boutique experience.",
      whatsIncluded: [
        "A complete, encouraging seasonal edit of your entire clothing, footwear, and accessory collection.",
        "Organizing all remaining garments by type and color on space-saving uniform hangers.",
        "Bespoke styling and folding techniques for knitwear, denim, and delicate items.",
        "Creative styling session to help you rediscover hidden gems and put together fresh outfits.",
        "A customized 'Wardrobe Gaps Guide' detailing versatile, timeless pieces to round out your style.",
        "Dropping off your unwanted, high-quality garments to local Manchester charity shops."
      ],
      beforeAfterItemId: 'closet-styling', // Bespoke Walk-In Wardrobe Styling
      faqs: [
        {
          question: "Will you force me to declutter sentimental clothing or pieces I hope to wear again?",
          answer: "Never. If you love a piece or want to keep it, it stays! We can beautifully pack away items that are out of season, sentimental, or of a different size in premium storage trunks, keeping your active wardrobe clean, focused, and stress-free."
        },
        {
          question: "What happens to the clothes I decide to declutter?",
          answer: "We categorize them into recycle, donate, or sell piles. As part of our service, we take high-quality donate items and drop them off directly at trusted North West charities on your behalf. We can also advise you on the best platforms for selling pre-loved designer pieces."
        },
        {
          question: "Why do you recommend uniform hangers?",
          answer: "Uniform hangers are a complete game-changer! Replacing mismatched hangers with uniform slimline velvet or wooden hangers instantly saves up to 30% of wardrobe space, keeps clothes from slipping, and creates a beautifully cohesive, premium boutique look."
        }
      ]
    }
  };

  const currentDetails = detailsMap[serviceId] || {
    icon: <Sparkles className="w-6 h-6" />,
    whoItsFor: service.description,
    whatsIncluded: ["Hands-on organisation and decluttering session.", "Tailored storage suggestions.", "Supportive, kind approach."],
    beforeAfterItemId: 'office-reset',
    faqs: [
      {
        question: "How do we get started?",
        answer: "Simply book a complimentary 15-minute discovery call! We will discuss your goals, answer questions, and schedule your session."
      }
    ]
  };

  // Find corresponding before/after gallery item
  const galleryItem = beforeAfterItems.find(item => item.id === currentDetails.beforeAfterItemId) || beforeAfterItems[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16 text-left"
    >
      
      {/* 1. Header & Quick Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-[#E6DED4]/80 pb-8">
        <div className="space-y-3">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-[#A89A8A] uppercase hover:text-[#2B2B2B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Packages
          </button>
          
          <div className="flex items-center gap-3.5 pt-2">
            <div className="w-10 h-10 rounded-full bg-[#5F6659] text-white flex items-center justify-center shadow-xs">
              {currentDetails.icon}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] uppercase tracking-wide">
              {service.name}
            </h1>
          </div>
          
          <p className="font-body text-xs sm:text-sm text-stone-500 max-w-xl italic">
            {service.description}
          </p>
        </div>

        <div className="bg-white border border-[#E6DED4]/80 px-8 py-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-2xs min-w-[200px]">
          <span className="text-[10px] font-sans font-bold text-[#A89A8A] uppercase tracking-wider block mb-1">
            Package Investment
          </span>
          <span className="font-serif text-3xl text-[#2B2B2B] font-bold block">
            {service.priceSuffix ? `${service.priceSuffix} ` : ''}£{service.price}
          </span>
          <span className="text-[10px] font-sans text-stone-500 block mt-1 uppercase tracking-widest">
            {service.duration}
          </span>
          <button 
            onClick={() => onBook(service.id)}
            className="mt-4 w-full px-5 py-3 bg-[#3E443A] text-white hover:bg-[#A3B29A] rounded font-sans text-[10px] tracking-widest uppercase font-bold transition-all shadow-2xs cursor-pointer"
          >
            BOOK THIS PACKAGE
          </button>
        </div>
      </div>

      {/* 2. Grid for Who it's for & What's included */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* WHO IT'S FOR CARD */}
        <div className="lg:col-span-5 bg-white border border-[#E6DED4]/80 rounded-2xl p-8 flex flex-col justify-between shadow-2xs">
          <div className="space-y-4">
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#A89A8A] font-bold block">WHO IT'S FOR</span>
            <h3 className="font-serif text-xl text-[#2B2B2B] uppercase">Is this service right for you?</h3>
            <div className="h-0.5 w-12 bg-[#A3B29A] my-2" />
            <p className="font-body text-stone-600 text-sm leading-relaxed">
              {currentDetails.whoItsFor}
            </p>
          </div>
          
          <div className="pt-8 border-t border-stone-100 mt-6 text-stone-400 text-[10px] font-sans tracking-wider uppercase flex items-center gap-2">
            <Smile className="w-4 h-4 text-[#A89A8A]" />
            100% Gentle, respectful and judgement-free
          </div>
        </div>

        {/* WHAT'S INCLUDED CARD */}
        <div className="lg:col-span-7 bg-[#F7F6F2] border border-[#E6DED4]/50 rounded-2xl p-8 shadow-2xs flex flex-col justify-between">
          <div className="space-y-5">
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#A89A8A] font-bold block">THE EXPERIENCE</span>
            <h3 className="font-serif text-xl text-[#2B2B2B] uppercase">What's included in your session</h3>
            <div className="h-0.5 w-12 bg-[#A3B29A] my-2" />
            
            <ul className="space-y-3.5">
              {currentDetails.whatsIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone-700 font-body leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#A5AEA0]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#A5AEA0]/30 text-[#4E5448]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#E6DED4]/60 mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] font-sans font-bold tracking-widest text-[#A89A8A] uppercase">
            <span>ADHD FRIENDLY</span>
            <span>◇</span>
            <span>JUDGEMENT FREE</span>
            <span>◇</span>
            <span>FAMILY FOCUSED</span>
          </div>
        </div>

      </div>

      {/* 3. Before & After Gallery section */}
      {galleryItem && (
        <div className="bg-white border border-[#E6DED4]/70 rounded-2xl p-8 md:p-12 space-y-8 shadow-2xs">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">CASE STUDY VISUAL</span>
            <h3 className="font-serif text-2xl text-[#2B2B2B] uppercase tracking-wide">
              {galleryItem.title} Before & After
            </h3>
            <p className="font-body text-xs text-stone-500">
              Drag the center slider to inspect the transformative contrast. Real homes, real styled outcomes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={galleryItem.beforeImage}
              afterImage={galleryItem.afterImage}
              title={galleryItem.title}
              spaceType={galleryItem.spaceType}
              description={galleryItem.description}
            />
          </div>
        </div>
      )}

      {/* 4. Service FAQs Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">GOT QUESTIONS?</span>
          <h3 className="font-serif text-2xl text-[#2B2B2B] uppercase tracking-wide">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {currentDetails.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-[#E6DED4]/70 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F7F6F2]/35 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-md text-[#2B2B2B] font-medium tracking-wide flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#A89A8A] shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-stone-50 text-stone-600 text-xs font-body leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Highlighted Primary Call to Action Block */}
      <div className="bg-[#5F6659] text-white rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-md border border-[#4E5448]/20 relative overflow-hidden">
        {/* Subtle decorative circle */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6CEC2] font-bold block uppercase">
            Let's Start Your Transformation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wider">
            Ready to live in calm, beautifully designed simplicity?
          </h2>
          <p className="font-body text-white/90 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Every beautiful space begins with a friendly, pressure-free chat. Book your complimentary 15-minute phone consultation with Beth & Danielle to discuss your needs.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={onDiscoveryCall}
              className="px-8 py-4 bg-white text-[#2B2B2B] hover:bg-[#FAF9F5] rounded-full font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Free Discovery Call
            </button>
            <button 
              onClick={onBack}
              className="text-white hover:text-[#D6CEC2] text-xs font-sans font-bold tracking-widest uppercase transition-colors py-2 px-4 cursor-pointer"
            >
              View Other Packages
            </button>
          </div>
        </div>
      </div>

    </motion.div>
  );
}
