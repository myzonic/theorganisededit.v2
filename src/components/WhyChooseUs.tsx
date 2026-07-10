import React from 'react';
import { Brain, Users, Heart, Leaf, Home, Wind, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    { id: 'calm', title: 'Calm', description: 'We create peaceful homes and minds', icon: Wind, color: 'bg-[#5F6659] text-white' },
    { id: 'thoughtful', title: 'Thoughtful', description: 'We work through every detail', icon: Brain, color: 'bg-[#A08B7A] text-white' },
    { id: 'honest', title: 'Honest', description: 'We keep it real and transparent', icon: ShieldCheck, color: 'bg-[#5F6659] text-white' },
    { id: 'kind', title: 'Kind', description: 'We work with empathy and understanding', icon: Heart, color: 'bg-[#A08B7A] text-white' },
    { id: 'sustainable', title: 'Sustainable', description: 'We choose better for the planet', icon: Leaf, color: 'bg-[#5F6659] text-white' }
  ];

  const highlights = [
    {
      title: 'ADHD FRIENDLY',
      description: 'Systems that reduce overwhelm and make everyday easier.',
      icon: Brain,
      iconColor: 'text-[#5F6659] bg-[#5F6659]/10',
    },
    {
      title: 'FAMILY FOCUSED',
      description: 'Solutions for busy families and all stages of life.',
      icon: Users,
      iconColor: 'text-[#A08B7A] bg-[#A08B7A]/10',
    },
    {
      title: 'JUDGEMENT FREE',
      description: 'A kind, supportive approach to organising your home.',
      icon: Heart,
      iconColor: 'text-[#5F6659] bg-[#5F6659]/10',
    },
    {
      title: 'SUSTAINABLE',
      description: 'Eco conscious choices that are better for your home and planet.',
      icon: Leaf,
      iconColor: 'text-[#A08B7A] bg-[#A08B7A]/10',
    },
    {
      title: 'PRACTICAL & STYLISH',
      description: 'Beautiful systems that are functional, simple and easy to maintain.',
      icon: Home,
      iconColor: 'text-[#5F6659] bg-[#5F6659]/10',
    },
  ];

  return (
    <section id="why-choose-us" className="bg-[#FAF9F5] py-16 md:py-24 border-b border-[#E6DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Why Families Trust Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase">Why Choose The Organised Edit</h2>
          <p className="font-body text-sm text-[#555] max-w-md mx-auto">
            A unique combination of creative styling expertise and gentle, practical, judgment-free support.
          </p>
          <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="space-y-3 flex flex-col items-center bg-white p-6 rounded-2xl border border-[#E6DED4]/40 hover:shadow-xs hover:border-[#A89A8A]/35 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconColor}`}>
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#2B2B2B]">{item.title}</h4>
                <p className="font-body text-stone-500 text-[11px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="h-[1px] bg-stone-200" />

        {/* Core Values subblock */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-lg text-[#2B2B2B] tracking-tight uppercase">Our Core Values</h3>
            <p className="font-body text-xs text-stone-500 mt-1">These principles guide every home we step into and every edit we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val) => {
              const IconComponent = val.icon;
              return (
                <div 
                  key={val.id} 
                  className="bg-white rounded-2xl border border-[#E6DED4]/60 p-5 hover:border-[#A89A8A]/50 hover:shadow-xs transition-all flex items-start gap-3.5 text-left"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${val.color} shadow-3xs`}>
                    <IconComponent className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <div className="space-y-0.5 pt-1">
                    <h5 className="font-sans font-bold text-[10px] uppercase tracking-wider text-[#2B2B2B]">{val.title}</h5>
                    <p className="font-body text-[10px] sm:text-[11px] text-stone-500 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
