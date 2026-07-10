import React from 'react';
import { Phone, Clipboard, Sparkles, Smile, Home } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Book a free discovery call',
      description: 'A complimentary, relaxed 20-minute consultation call to get to know you, understand your specific space goals, and discuss how we can help.',
      icon: Phone,
      color: 'bg-[#5F6659]',
    },
    {
      num: '02',
      title: 'We visit your home',
      description: 'We meet in person (or virtually) to view your space, discuss your daily routines, and create a highly personalised edit and organisation plan.',
      icon: Home,
      color: 'bg-[#A08B7A]',
    },
    {
      num: '03',
      title: 'Declutter, organise & style',
      description: 'We work collaboratively in your home to sort, curate, and beautifully style your belongings. Every decision is Yours with zero pressure.',
      icon: Sparkles,
      color: 'bg-[#5F6659]',
    },
    {
      num: '04',
      title: 'Enjoy your tailored space',
      description: "Enjoy a beautiful home that is significantly easier to use, easier to maintain, and completely tailored to your unique lifestyle and family.",
      icon: Smile,
      color: 'bg-[#A08B7A]',
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 border-b border-[#E6DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">A Seamless Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase font-medium">What to Expect</h2>
          <p className="font-body text-sm text-[#555] max-w-lg mx-auto leading-relaxed">
            Many people have never hired a professional organiser. Our simple four-step process is designed to remove that uncertainty and support you every step of the way.
          </p>
          <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="relative space-y-4 text-center md:text-left bg-[#F7F6F2] p-6 rounded-2xl border border-[#E6DED4]/40 hover:shadow-xs hover:border-[#A89A8A]/35 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-4">
                  <span className="absolute -top-6 right-6 font-serif text-6xl font-bold text-[#A89A8A]/10 leading-none pointer-events-none">
                    {step.num}
                  </span>
                  <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center shadow-xs`}>
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-md font-bold uppercase tracking-wider text-[#2B2B2B] pt-2">
                    {idx + 1}. {step.title}
                  </h3>
                  <p className="font-body text-stone-500 text-xs leading-relaxed">
                    {step.description}
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
