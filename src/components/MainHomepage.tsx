import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ThumbsUp,
  Smile,
  Home,
  Shirt,
  Brain,
  Clock,
  Leaf,
  Users,
  RefreshCw,
  ShieldCheck,
  Lock,
  Phone,
  CheckCircle
} from 'lucide-react';
import { Service, BeforeAfterItem, Testimonial, SiteSettings, Enquiry } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import ContactForm from './ContactForm';
import InstagramFeed from './InstagramFeed';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import FAQs from './FAQs';

interface MainHomepageProps {
  settings: SiteSettings;
  services: Service[];
  beforeAfterItems: BeforeAfterItem[];
  testimonials: Testimonial[];
  onAddEnquiry: (enquiry: Omit<Enquiry, 'id' | 'date' | 'status'>) => void;
  setActiveServiceId: (id: string | null) => void;
  triggerQuickBook: (serviceId: string) => void;
  scrollToSection: (id: string) => void;
}

export default function MainHomepage({
  settings,
  services,
  beforeAfterItems,
  testimonials,
  onAddEnquiry,
  setActiveServiceId,
  triggerQuickBook,
  scrollToSection
}: MainHomepageProps) {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="home" className="relative bg-[#F7F6F2] pt-10 pb-16 md:py-24 border-b border-[#E6DED4]/60 overflow-hidden">
        {/* Mobile Background Image & Elegant High-Contrast Semi-Transparent Overlay */}
        <div className="absolute inset-0 lg:hidden pointer-events-none z-0">
          <img 
            src="/src/assets/images/organized_closet_hero_1783305649580.jpg" 
            alt="Organised Home Background" 
            className="w-full h-full object-cover opacity-90 filter sepia-[0.05] brightness-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#F7F6F2]/80 backdrop-blur-xs" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Column 1: Left - Hero Content Block */}
          <div className="lg:col-span-5 space-y-7 lg:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center justify-center gap-2 bg-[#E6DED4]/40 border border-[#E6DED4]/80 px-4 py-2 rounded-2xl sm:rounded-full text-[9px] font-sans font-bold tracking-wider text-[#5F6659] uppercase w-full sm:w-auto">
              <MapPin className="w-3.5 h-3.5 text-[#A89A8A] shrink-0" />
              <span className="text-center leading-relaxed">Manchester • Cheshire • Trafford • Salford • Stockport • Altrincham • Wilmslow</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.12] text-[#2B2B2B] tracking-tight text-center lg:text-left">
              Beautifully{" "}
              <br className="hidden sm:inline" />
              organised homes.{" "}
              <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-stone-500 block mt-2.5 sm:inline sm:mt-0">
                Designed for real life.
              </span>
            </h1>
            
            <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#A89A8A] font-medium uppercase border-b border-[#E6DED4]/80 pb-4 text-center lg:text-left w-full">
              {settings.heroSubtitle}
            </p>

            <p className="font-body text-[#555] text-sm leading-relaxed max-w-lg text-center lg:text-left">
              {settings.heroDescription}
            </p>

            <div className="pt-2 w-full sm:w-auto">
              <button 
                onClick={() => triggerQuickBook('discovery-call')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#3E443A] text-white hover:bg-[#A3B29A] rounded-xs font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-xs text-center cursor-pointer animate-pulse"
              >
                Book Your Free Discovery Call
              </button>
            </div>

            {/* Trust values row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 pt-6 text-[10px] font-sans font-bold tracking-widest text-[#A89A8A] uppercase">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>ADHD FRIENDLY</span>
              </div>
              <span className="text-[#A3B29A] font-light">◇</span>
              <div>
                <span>JUDGEMENT FREE</span>
              </div>
              <span className="text-[#A3B29A] font-light">◇</span>
              <div>
                <span>FAMILY FOCUSED</span>
              </div>
            </div>
          </div>

          {/* Column 2: Center - Beautiful pantry vertical image */}
          <div className="lg:col-span-4 relative h-full flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#E6DED4] shadow-md w-full max-w-sm">
              <img 
                src="/src/assets/images/welcome_shelves_1783307210267.jpg" 
                alt="Beautiful vertical shelves showcasing neatly organized storage jars" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Column 3: Right - Deep olive card */}
          <div className="lg:col-span-3">
            <div className="bg-[#5F6659] text-white rounded-2xl p-6 flex flex-col justify-between h-full space-y-6 shadow-md border border-[#4E5448]/20 text-center">
              <div>
                <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-5 h-5 text-white/95 fill-transparent stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg leading-snug text-white mb-6 uppercase tracking-wide">
                  More calm.<br />Less overwhelm.<br />More time for<br />what matters.
                </h3>
                <ul className="space-y-4 text-left text-xs text-white/90 font-sans tracking-wide">
                  <li className="flex items-start gap-2.5">
                    <Heart className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>Bespoke systems that make sense</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Heart className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>Sustainable solutions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Heart className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>Supportive, judgement free approach</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Heart className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>Designed to last</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6">
                <span className="text-[8px] font-sans font-bold tracking-widest text-white/80 uppercase block">
                  CREATING CALM, FUNCTIONAL HOMES THAT WORK FOR YOU.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST SIGNALS SECTION */}
      <section id="trust-signals" className="bg-[#FAF9F5] py-16 md:py-20 border-b border-[#E6DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Our Quality & Commitment</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase">Your Peace of Mind</h2>
            <p className="font-body text-sm text-[#555] max-w-md mx-auto">
              We hold ourselves to the highest professional standards of trust, discretion, and care for your home.
            </p>
            <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Fully Insured */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:border-[#A89A8A]/35 hover:shadow-xs transition-all duration-300 text-left flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#5F6659] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">Fully Insured</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  Complete public liability insurance so you can feel 100% secure with us in your home.
                </p>
              </div>
            </div>

            {/* 2. Confidential Service */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:border-[#A89A8A]/35 hover:shadow-xs transition-all duration-300 text-left flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A08B7A] shrink-0 mt-0.5">
                <Lock className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">Confidential Service</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  We maintain total client confidentiality and privacy across all our styling and editing services.
                </p>
              </div>
            </div>

            {/* 3. Eco-conscious approach */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:border-[#A89A8A]/35 hover:shadow-xs transition-all duration-300 text-left flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#5F6659] shrink-0 mt-0.5">
                <Leaf className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">Eco-Conscious Approach</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  We focus on sustainable sorting, conscious product recommendations, and ethical donation of edit items.
                </p>
              </div>
            </div>

            {/* 4. Free Discovery Call */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:border-[#A89A8A]/35 hover:shadow-xs transition-all duration-300 text-left flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A08B7A] shrink-0 mt-0.5">
                <Phone className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">Free Discovery Call</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  A complimentary, relaxed 20-minute consultation call to get to know you and map out your vision.
                </p>
              </div>
            </div>

            {/* 5. Professional organisers */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:border-[#A89A8A]/35 hover:shadow-xs transition-all duration-300 text-left flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#5F6659] shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">Professional Organisers</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  Fully trained, highly efficient organisers specializing in smart, low-maintenance home systems.
                </p>
              </div>
            </div>

            {/* 6. Professional stylists */}
            <div className="bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:border-[#A89A8A]/35 hover:shadow-xs transition-all duration-300 text-left flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A08B7A] shrink-0 mt-0.5">
                <Shirt className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">Professional Stylists</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  With deep fashion and visual aesthetics expertise to make sure your space is as gorgeous as it is functional.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <WhatWeDo scrollToSection={scrollToSection} />

      {/* 3. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 4. MEET BETH & DANIELLE */}
      <section id="about" className="bg-white py-16 md:py-24 border-b border-[#E6DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Story Card 1 */}
            <div className="bg-[#F7F6F2] rounded-2xl border border-[#E6DED4]/40 p-8 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">OUR STORY</span>
                <h3 className="font-serif text-2xl text-[#2B2B2B] uppercase tracking-wide">
                  Beth & Danielle. Two mums. One mission.
                </h3>
                <div className="h-0.5 w-12 bg-[#A3B29A] my-2" />
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  We started The Organised Edit because we know what real life looks like.
                </p>
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  Between school runs, work, laundry, appointments and everything in between, it's easy for your home to feel overwhelming.
                </p>
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  We've been in the messy, overwhelming season of life too. That's why we created The Organised Edit - to offer practical solutions, without the judgement.
                </p>
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  We believe your home should support your life, not add to the chaos.
                </p>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-video border border-stone-200 mt-4">
                <img 
                  src="/src/assets/images/beth_danielle_founders_1783305671597.jpg" 
                  alt="Beth and Danielle founders photo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-[#F7F6F2] rounded-2xl border border-[#E6DED4]/40 p-8 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">ABOUT US</span>
                <h3 className="font-serif text-2xl text-[#2B2B2B] uppercase tracking-wide">
                  {settings.aboutTitle || "Hi, we're Beth & Danielle."}
                </h3>
                <div className="h-0.5 w-12 bg-[#A3B29A] my-2" />
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  {settings.aboutText1 || "We met through work and quickly realised we shared the same values, work ethic and love for creating beautiful, functional spaces."}
                </p>
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  {settings.aboutText2 || "With over 15 years experience each in fashion styling, organisation and home transformation, we bring a creative eye and practical know-how to every project."}
                </p>
                <p className="font-body text-[#555] text-xs leading-relaxed">
                  We're here to help you feel lighter, more in control and proud of your home again.
                </p>
              </div>

              {/* Grid of core commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans text-stone-700">
                <div className="bg-white/60 p-3 rounded-lg border border-[#E6DED4]/50">
                  <strong className="block text-[#A89A8A] uppercase text-[9px] tracking-wider mb-1">WE GET IT</strong>
                  We understand the realities of family life and busy schedules.
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-[#E6DED4]/50">
                  <strong className="block text-[#A89A8A] uppercase text-[9px] tracking-wider mb-1">WE CARE</strong>
                  We treat your home with absolute respect and care.
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-[#E6DED4]/50">
                  <strong className="block text-[#A89A8A] uppercase text-[9px] tracking-wider mb-1">WE CREATE</strong>
                  We design systems that are practical, beautiful and sustainable.
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-[#E6DED4]/50">
                  <strong className="block text-[#A89A8A] uppercase text-[9px] tracking-wider mb-1">WE EMPOWER</strong>
                  We give you the tools and confidence to maintain your spaces.
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-[#3E443A] text-white hover:bg-[#A3B29A] rounded font-sans text-xs font-bold tracking-widest uppercase transition-all w-full sm:w-auto cursor-pointer"
                >
                  MORE ABOUT OUR APPROACH
                </button>
              </div>
            </div>

          </div>

          {/* SAGE BANNER */}
          <div className="bg-[#5F6659] text-white py-8 px-6 rounded-2xl text-center shadow-xs">
            <p className="font-serif italic text-lg sm:text-xl leading-relaxed tracking-wide">
              "Beautifully organised homes, thoughtfully designed for real life. ♡"
            </p>
          </div>

          {/* SECONDARY GALLERY SLIDESHOW SPOT */}
          <div className="border-t border-stone-100 pt-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">OUR SIGNATURE AESTHETIC</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-[#E6DED4] shadow-xs">
                <img 
                  src="/src/assets/images/vision_kitchen_1783307229646.jpg" 
                  alt="Modern kitchen aesthetic" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#2B2B2B]/60 p-3 text-white text-xs font-serif italic text-center">
                  Thoughtful spaces
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-[#E6DED4] shadow-xs">
                <img 
                  src="/src/assets/images/values_vase_1783307251210.jpg" 
                  alt="Minimal decor aesthetic" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#2B2B2B]/60 p-3 text-white text-xs font-serif italic text-center">
                  Timeless structures
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUR SERVICES */}
      <section id="services" className="bg-[#FAF9F5] py-16 md:py-24 border-b border-[#E6DED4]/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Tailored Packages</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase">
              Our Packages
            </h2>
            <p className="font-body text-xs sm:text-sm text-stone-500 max-w-xl mx-auto">
              Every home and every family is different.<br />
              Choose the package that suits <strong>your needs</strong> or get in touch for a bespoke solution.
            </p>
            <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
          </div>

          {/* 5 Column Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch text-center pt-6">
            
            {/* Card 1: The Reset */}
            <div className="bg-white border border-[#E6DED4] rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A89A8A] mx-auto">
                  <Sparkles className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                <h4 className="font-serif text-sm font-bold text-[#2B2B2B] uppercase tracking-wider mb-2">THE RESET</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed mb-5 max-w-[180px] mx-auto min-h-[32px]">
                  Perfect for a single space that needs a refresh.
                </p>
                
                <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-5" />
                
                <ul className="space-y-2 text-[11px] font-sans text-stone-600 max-w-[150px] mx-auto text-left mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Single room edit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Categorize items</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Label & box setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Up to 4 Hours</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-5 border-t border-stone-100 mt-auto space-y-2">
                <span className="block font-serif text-md font-bold text-[#2B2B2B] mb-2">£240</span>
                <button 
                  onClick={() => setActiveServiceId('the-reset')}
                  className="w-full py-2.5 bg-[#4E5249] text-white hover:bg-[#A89A8A] rounded font-sans text-[10px] tracking-widest uppercase font-bold transition-all text-center cursor-pointer"
                >
                  View Details
                </button>
                <button 
                  onClick={() => triggerQuickBook('the-reset')}
                  className="w-full py-1.5 border border-stone-200 text-[#4E5249] hover:bg-stone-50 rounded font-sans text-[9px] tracking-widest uppercase font-semibold transition-all text-center cursor-pointer"
                >
                  Quick Enquire
                </button>
              </div>
            </div>

            {/* Card 2: The Home Refresh */}
            <div className="bg-white border-2 border-[#A89A8A]/50 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#A89A8A] text-white text-[9px] font-sans font-bold tracking-widest uppercase rounded-full">
                MOST POPULAR
              </div>
              <div className="space-y-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#A89A8A]/10 flex items-center justify-center text-[#A89A8A] mx-auto">
                  <RefreshCw className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                <h4 className="font-serif text-sm font-bold text-[#2B2B2B] uppercase tracking-wider mb-2">THE HOME REFRESH</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed mb-5 max-w-[180px] mx-auto min-h-[32px]">
                  Our most popular package for a half-day transformation.
                </p>
                
                <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-5" />
                
                <ul className="space-y-2 text-[11px] font-sans text-stone-600 max-w-[150px] mx-auto text-left mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Multiple key spaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Custom sorting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Eco-waste advice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Up to 6 Hours</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-5 border-t border-stone-100 mt-auto space-y-2">
                <span className="block font-serif text-md font-bold text-[#2B2B2B] mb-2">£360</span>
                <button 
                  onClick={() => setActiveServiceId('home-refresh')}
                  className="w-full py-2.5 bg-[#4E5249] text-white hover:bg-[#A89A8A] rounded font-sans text-[10px] tracking-widest uppercase font-bold transition-all text-center cursor-pointer"
                >
                  View Details
                </button>
                <button 
                  onClick={() => triggerQuickBook('home-refresh')}
                  className="w-full py-1.5 border border-stone-200 text-[#4E5249] hover:bg-stone-50 rounded font-sans text-[9px] tracking-widest uppercase font-semibold transition-all text-center cursor-pointer"
                >
                  Quick Enquire
                </button>
              </div>
            </div>

            {/* Card 3: The Whole Home Edit */}
            <div className="bg-white border border-[#E6DED4] rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A89A8A] mx-auto">
                  <Home className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                <h4 className="font-serif text-sm font-bold text-[#2B2B2B] uppercase tracking-wider mb-2">THE WHOLE HOME EDIT</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed mb-5 max-w-[180px] mx-auto min-h-[32px]">
                  A complete home reset over multiple days.
                </p>
                
                <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-5" />
                
                <ul className="space-y-2 text-[11px] font-sans text-stone-600 max-w-[150px] mx-auto text-left mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>3+ distinct spaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Full routine audit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Storage sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Bespoke systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-5 border-t border-stone-100 mt-auto space-y-2">
                <span className="block font-serif text-md font-bold text-[#2B2B2B] mb-2">FROM £600</span>
                <button 
                  onClick={() => setActiveServiceId('whole-home-edit')}
                  className="w-full py-2.5 bg-[#4E5249] text-white hover:bg-[#A89A8A] rounded font-sans text-[10px] tracking-widest uppercase font-bold transition-all text-center cursor-pointer"
                >
                  View Details
                </button>
                <button 
                  onClick={() => triggerQuickBook('whole-home-edit')}
                  className="w-full py-1.5 border border-stone-200 text-[#4E5249] hover:bg-stone-50 rounded font-sans text-[9px] tracking-widest uppercase font-semibold transition-all text-center cursor-pointer"
                >
                  Quick Enquire
                </button>
              </div>
            </div>

            {/* Card 4: Family & ADHD Edit */}
            <div className="bg-white border border-[#E6DED4] rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A89A8A] mx-auto">
                  <Brain className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                <h4 className="font-serif text-sm font-bold text-[#2B2B2B] uppercase tracking-wider mb-2">FAMILY & ADHD EDIT</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed mb-5 max-w-[180px] mx-auto min-h-[32px]">
                  Gentle systems designed for neurodiverse and busy family homes.
                </p>
                
                <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-5" />
                
                <ul className="space-y-2 text-[11px] font-sans text-stone-600 max-w-[150px] mx-auto text-left mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Low cognitive load</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Visual indexing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Easy tag labeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Gentle pace support</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-5 border-t border-stone-100 mt-auto space-y-2">
                <span className="block font-serif text-md font-bold text-[#2B2B2B] mb-2">FROM £280</span>
                <button 
                  onClick={() => setActiveServiceId('family-adhd-edit')}
                  className="w-full py-2.5 bg-[#4E5249] text-white hover:bg-[#A89A8A] rounded font-sans text-[10px] tracking-widest uppercase font-bold transition-all text-center cursor-pointer"
                >
                  View Details
                </button>
                <button 
                  onClick={() => triggerQuickBook('family-adhd-edit')}
                  className="w-full py-1.5 border border-stone-200 text-[#4E5249] hover:bg-stone-50 rounded font-sans text-[9px] tracking-widest uppercase font-semibold transition-all text-center cursor-pointer"
                >
                  Quick Enquire
                </button>
              </div>
            </div>

            {/* Card 5: Wardrobe Edit */}
            <div className="bg-white border border-[#E6DED4] rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#E6DED4]/30 flex items-center justify-center text-[#A89A8A] mx-auto">
                  <Shirt className="w-5 h-5 stroke-[1.5]" />
                </div>
                
                <h4 className="font-serif text-sm font-bold text-[#2B2B2B] uppercase tracking-wider mb-2">WARDROBE EDIT & STYLING</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed mb-5 max-w-[180px] mx-auto min-h-[32px]">
                  Declutter, organise and rediscover your style.
                </p>
                
                <div className="w-8 h-[1px] bg-stone-200 mx-auto mb-5" />
                
                <ul className="space-y-2 text-[11px] font-sans text-stone-600 max-w-[150px] mx-auto text-left mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Wardrobe edit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Styling session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Outfit planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-stone-400 font-bold">✓</span>
                    <span>Shopping guide</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-5 border-t border-stone-100 mt-auto space-y-2">
                <span className="block font-serif text-md font-bold text-[#2B2B2B] mb-2">FROM £220</span>
                <button 
                  onClick={() => setActiveServiceId('wardrobe-edit')}
                  className="w-full py-2.5 bg-[#4E5249] text-white hover:bg-[#A89A8A] rounded font-sans text-[10px] tracking-widest uppercase font-bold transition-all text-center cursor-pointer"
                >
                  View Details
                </button>
                <button 
                  onClick={() => triggerQuickBook('wardrobe-edit')}
                  className="w-full py-1.5 border border-stone-200 text-[#4E5249] hover:bg-stone-50 rounded font-sans text-[9px] tracking-widest uppercase font-semibold transition-all text-center cursor-pointer"
                >
                  Quick Enquire
                </button>
              </div>
            </div>

          </div>

          {/* AFTER SERVICES CALL TO ACTION */}
          <div className="pt-10 flex flex-col items-center justify-center space-y-4">
            <p className="font-body text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              Not sure which package is right for you? Let's have a friendly, pressure-free chat to discuss your specific space.
            </p>
            <button 
              onClick={() => triggerQuickBook('discovery-call')}
              className="px-8 py-4 bg-[#3E443A] text-white hover:bg-[#A3B29A] rounded-full font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Free Discovery Call
            </button>
          </div>

          {/* FOOTER BENEFITS BAR */}
          <div className="border-t border-[#E6DED4] pt-12 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-[#E6DED4]/40 flex items-center justify-center text-[#A89A8A] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]">FREE 15 MINUTE CONSULTATION</h5>
                <p className="font-body text-stone-500 text-[10px] leading-relaxed">
                  Let's chat about your home, your challenges and how we can help.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-[#E6DED4]/40 flex items-center justify-center text-[#A89A8A] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]">BESPOKE SERVICE</h5>
                <p className="font-body text-stone-500 text-[10px] leading-relaxed">
                  Tailored to you, your home and your lifestyle.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-[#E6DED4]/40 flex items-center justify-center text-[#A89A8A] shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]">SUSTAINABLE APPROACH</h5>
                <p className="font-body text-stone-500 text-[10px] leading-relaxed">
                  We use what you have and only suggest what you need.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-[#E6DED4]/40 flex items-center justify-center text-[#A89A8A] shrink-0">
                <ThumbsUp className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]">TRUSTED BY FAMILIES</h5>
                <p className="font-body text-stone-500 text-[10px] leading-relaxed">
                  We're recommended by families across the North West.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-[#E6DED4]/40 flex items-center justify-center text-[#A89A8A] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]">LOCAL & MOBILE</h5>
                <p className="font-body text-stone-500 text-[10px] leading-relaxed">
                  We come to you across the North West.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. BEFORE & AFTER GALLERY */}
      <section id="gallery" className="bg-white py-16 md:py-24 border-b border-[#E6DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Transformation Gallery</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight">
              Aesthetic Realities: Before & After
            </h2>
            <p className="font-body text-sm text-[#555] max-w-md mx-auto">
              Real homes. Real families. Hand-styled systems crafted to alleviate daily cognitive clutter.
            </p>
            <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
          </div>

          {/* Bento Row with Small changes, big impact + First Slider + Katie Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Small changes, big impact */}
            <div className="lg:col-span-3 bg-[#5F6659] text-white p-8 rounded-2xl flex flex-col justify-between shadow-xs text-left border border-[#4E5448]/10">
              <div className="space-y-4">
                <span className="font-sans text-[10px] tracking-widest uppercase text-[#D6CEC2] font-bold block">BEFORE / AFTER</span>
                <h3 className="font-serif text-2xl text-white leading-tight uppercase">
                  Small changes.<br />Big impact.
                </h3>
                <p className="font-body text-white/90 text-xs leading-relaxed pt-2">
                  We create calm, functional homes with systems that are easy to maintain for the whole family.
                </p>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-5 py-3 bg-white text-[#2B2B2B] hover:bg-[#F4F1EC] rounded font-sans text-[11px] tracking-widest font-bold uppercase transition-all shadow-2xs block text-center w-full cursor-pointer"
                >
                  SEE OUR WORK
                </button>
              </div>
            </div>

            {/* Middle: Interactive slider (First item) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {beforeAfterItems.length > 0 ? (
                <BeforeAfterSlider
                  beforeImage={beforeAfterItems[0].beforeImage}
                  afterImage={beforeAfterItems[0].afterImage}
                  title={beforeAfterItems[0].title}
                  spaceType={beforeAfterItems[0].spaceType}
                  description={beforeAfterItems[0].description}
                />
              ) : (
                <div className="bg-[#F4F1EC] p-6 rounded-2xl text-center text-xs font-sans text-stone-500">
                  No before/after items found.
                </div>
              )}
            </div>

            {/* Right Card: Katie quote card */}
            <div className="lg:col-span-3 bg-white border border-[#E6DED4] p-8 rounded-2xl flex flex-col justify-between shadow-xs text-left">
              <div className="space-y-4">
                <span className="text-5xl font-serif text-[#A89A8A]/35 leading-none block">“</span>
                <p className="font-serif text-stone-600 text-sm italic leading-relaxed">
                  Beth & Danielle completely transformed our home and the way we live in it. I finally feel calm.
                </p>
                <div className="pt-2">
                  <span className="block font-sans text-[10px] tracking-widest font-bold text-stone-800">KATIE, MANCHESTER</span>
                  <div className="flex gap-0.5 text-amber-500 text-xs pt-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-stone-100 text-[9px] font-sans tracking-widest font-bold text-stone-400">
                GOOGLE REVIEWS
              </div>
            </div>

          </div>

          {/* CALL TO ACTION BANNER */}
          <div className="bg-[#F7F6F2] py-8 rounded-2xl border border-[#E6DED4]/60 px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <h3 className="font-serif text-lg sm:text-xl text-[#2B2B2B] tracking-tight font-medium">
              Ready to create a home that feels calm and effortless?
            </h3>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-[#3E443A] text-white hover:bg-[#A3B29A] rounded font-sans text-xs font-bold tracking-widest uppercase transition-all cursor-pointer whitespace-nowrap"
            >
              LET'S CHAT
            </button>
          </div>

          {/* Remaining Sliders Stack */}
          {beforeAfterItems.length > 1 && (
            <div className="space-y-12 pt-8 border-t border-stone-100">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="font-serif text-lg text-[#2B2B2B] uppercase tracking-wider">More Home Transformations</h3>
                <p className="font-body text-xs text-stone-500 mt-1">Explore some of our recent spatial edits across the North West.</p>
              </div>
              <div className="space-y-12">
                {beforeAfterItems.slice(1).map((item) => (
                  <BeforeAfterSlider
                    key={item.id}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    title={item.title}
                    spaceType={item.spaceType}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 7. REVIEWS & INSTAGRAM FEED */}
      <section id="testimonials" className="bg-[#FAF9F5] py-16 md:py-24 border-b border-[#E6DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Words from Families</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight">
              Calm Homes, Restored Peace
            </h2>
            <p className="font-body text-sm text-stone-500 max-w-md mx-auto">
              See how we have helped families across the region simplify their spaces and reclaim their time.
            </p>
            <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white border border-[#E6DED4] rounded-2xl p-8 space-y-4 flex flex-col justify-between hover:shadow-xs transition-all relative">
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#A89A8A]">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>

                  {t.tag && (
                    <span className="inline-block text-[9px] uppercase font-sans tracking-widest px-2.5 py-0.5 rounded-full bg-[#A5AEA0]/15 text-[#55634d] border border-[#A5AEA0]/20 font-bold">
                      {t.tag}
                    </span>
                  )}

                  <p className="font-body text-[#555] text-xs leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6DED4] flex justify-between items-center text-xs">
                  <div>
                    <span className="block font-serif text-[#2B2B2B] font-semibold">{t.author}</span>
                    <span className="text-[10px] font-sans text-[#A89A8A]">{t.location}</span>
                  </div>
                  <Smile className="w-5 h-5 text-[#A89A8A]/40" />
                </div>
              </div>
            ))}
          </div>

          {/* NEAR TESTIMONIALS CALL TO ACTION */}
          <div className="pt-10 border-t border-stone-100 flex flex-col items-center justify-center space-y-4 text-center">
            <h4 className="font-serif text-lg text-[#2B2B2B] uppercase tracking-wider max-w-xl">
              Ready to feel lighter and in control of your home?
            </h4>
            <p className="font-body text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              Start with a free, no-obligation 15-minute phone consultation to discuss your project.
            </p>
            <button 
              onClick={() => triggerQuickBook('discovery-call')}
              className="px-8 py-4 bg-[#3E443A] text-[#FAF9F5] hover:bg-[#A3B29A] rounded-full font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Free Discovery Call
            </button>
          </div>

          {/* INSTAGRAM SYNCED FEED SECTION */}
          <div className="pt-12 border-t border-stone-100">
            <InstagramFeed />
          </div>

        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <HowItWorks />

      {/* 9. FAQS */}
      <FAQs />

      {/* AREAS WE COVER SECTION */}
      <section id="service-areas" className="bg-white py-16 md:py-24 border-b border-[#E6DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Local Home Styling & Organisation</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase">
              Areas We Cover
            </h2>
            <p className="font-body text-sm text-stone-500 max-w-lg mx-auto leading-relaxed">
              Based in the North West, we travel directly to your home to design and install beautiful, bespoke, functional spaces. We proudly cover the following key regions:
            </p>
            <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
          </div>

          {/* Grid of covered cities/regions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-left">
            
            {/* Manchester */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#5F6659]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Manchester</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Serving the Greater Manchester city centre and surrounding areas including Didsbury, Chorlton, Worsley, Monton, and Prestwich.
              </p>
            </div>

            {/* Cheshire */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#A08B7A]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Cheshire</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Bespoke organisation and decluttering services throughout Cheshire, including Knutsford, Alderley Edge, Prestbury, and Lymm.
              </p>
            </div>

            {/* Trafford */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#5F6659]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Trafford</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Complete styling and wardrobe editing in Trafford boroughs including Hale, Bowdon, Sale, Brooklands, and Urmston.
              </p>
            </div>

            {/* Salford */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#A08B7A]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Salford</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Practical playroom, pantry and bedroom transformations in Salford, Worsley, Monton, Ellesmere Park, and Salford Quays.
              </p>
            </div>

            {/* Stockport */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#5F6659]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Stockport</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Creating calm, family-focused home systems in Stockport, Bramhall, Cheadle, Cheadle Hulme, Heaton Moor, and Marple.
              </p>
            </div>

            {/* Altrincham */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#A08B7A]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Altrincham</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Professional wardrobe editing and home pantry setups in Altrincham town centre, Hale Barns, Dunham Massey, and Broadheath.
              </p>
            </div>

            {/* Wilmslow */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6DED4]/50 flex items-center justify-center text-[#5F6659]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">Wilmslow</h4>
              </div>
              <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                Premium, high-end styling and organizational resets in Wilmslow, Handforth, Styal, and surrounding Golden Triangle villages.
              </p>
            </div>

            {/* Golden Triangle / North West general info */}
            <div className="bg-[#FAF9F5] border border-[#E6DED4]/60 rounded-2xl p-6 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A5AEA0]/20 flex items-center justify-center text-[#5F6659]">
                    <Sparkles className="w-4 h-4 stroke-[2]" />
                  </div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#2B2B2B]">North West</h4>
                </div>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  Have a space outside these locations? Contact us! We regularly travel for bespoke full-home projects across the North West.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FINAL CTA / CONTACT SECTION */}
      <section id="contact" className="bg-[#F4F1EC]/30 py-16 md:py-24 border-b border-[#E6DED4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ContactForm 
            services={services} 
            onAddEnquiry={onAddEnquiry} 
          />

        </div>
      </section>
    </>
  );
}
