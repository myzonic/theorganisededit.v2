import React from 'react';
import { Wind, Brain, ShieldCheck, Heart, Leaf } from 'lucide-react';

export default function CoreBeliefs() {
  const values = [
    {
      id: 'calm',
      title: 'Calm',
      description: 'We create peaceful homes and minds',
      icon: Wind,
      color: 'bg-[#5F6659] text-white',
    },
    {
      id: 'thoughtful',
      title: 'Thoughtful',
      description: 'We work through every detail',
      icon: Brain,
      color: 'bg-[#A08B7A] text-white',
    },
    {
      id: 'honest',
      title: 'Honest',
      description: 'We keep it real and transparent',
      icon: ShieldCheck,
      color: 'bg-[#5F6659] text-white',
    },
    {
      id: 'kind',
      title: 'Kind',
      description: 'We work with empathy and understanding',
      icon: Heart,
      color: 'bg-[#A08B7A] text-white',
    },
    {
      id: 'sustainable',
      title: 'Sustainable',
      description: 'We choose better for the planet',
      icon: Leaf,
      color: 'bg-[#5F6659] text-white',
    },
  ];

  return (
    <section id="beliefs" className="bg-[#FAF9F5] py-16 md:py-24 border-b border-[#E6DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">
            Core Beliefs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase">
            Our Values
          </h2>
          <div className="h-0.5 w-12 bg-[#A89A8A]/40 mx-auto mt-4" />
        </div>

        {/* Values Grid - Horizontal list layout for icon next to text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((val) => {
            const IconComponent = val.icon;
            return (
              <div 
                key={val.id}
                className="bg-white rounded-2xl border border-[#E6DED4]/60 p-6 shadow-2xs hover:border-[#A89A8A]/50 hover:shadow-xs transition-all duration-300 flex items-start gap-4 text-left"
                id={`value-card-${val.id}`}
              >
                {/* Icon beside text */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${val.color} shadow-3xs`}>
                  <IconComponent className="w-5 h-5 stroke-[1.8]" />
                </div>
                
                {/* Text Block */}
                <div className="space-y-1 pt-1.5">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#2B2B2B]">
                    {val.title}
                  </h4>
                  <p className="font-body text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
