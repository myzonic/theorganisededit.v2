import React from 'react';
import { Sparkles, Shirt, Brain, Package, ChevronRight } from 'lucide-react';

interface WhatWeDoProps {
  scrollToSection: (id: string) => void;
}

export default function WhatWeDo({ scrollToSection }: WhatWeDoProps) {
  const offerings = [
    {
      title: 'Home Organisation',
      description: 'Transform chaotic spaces into peaceful, functional environments. From kitchen pantries and playrooms to utility rooms and entire home resets.',
      icon: Sparkles,
      color: 'bg-[#5F6659] text-white',
    },
    {
      title: 'Wardrobe Styling',
      description: 'Declutter, edit, and beautifully organize your closet. We structure garments logically and help you rediscover and refine your personal style.',
      icon: Shirt,
      color: 'bg-[#A08B7A] text-white',
    },
    {
      title: 'ADHD Friendly',
      description: 'Compassionate support with custom low-cognitive-load systems. We focus on high visibility and accessibility to keep maintenance completely stress-free.',
      icon: Brain,
      color: 'bg-[#5F6659] text-white',
    },
    {
      title: 'Relocation Edits',
      description: 'We curate and declutter items before you pack, and systematically unpack and organize your new house on move-in day so it feels perfect from day one.',
      icon: Package,
      color: 'bg-[#A08B7A] text-white',
    },
  ];

  return (
    <section id="what-we-do" className="bg-white py-16 md:py-24 border-b border-[#E6DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Bespoke Styling & Organisation</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase">What We Do</h2>
          <p className="font-body text-sm text-[#555] max-w-md mx-auto">
            We design and implement gorgeous, sustainable systems tailored to the unique flow of your household.
          </p>
          <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#F7F6F2] p-8 rounded-2xl border border-[#E6DED4]/40 flex flex-col justify-between hover:shadow-sm hover:border-[#A89A8A]/35 transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-3xs`}>
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#2B2B2B] uppercase tracking-wide">{item.title}</h3>
                  <p className="font-body text-[#555] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6">
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="font-sans text-[10px] tracking-widest font-bold text-[#A89A8A] hover:text-[#5F6659] uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    Explore Service <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
