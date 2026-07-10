import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to clean or tidy up before you arrive?",
      answer: "Absolutely not! We prefer to see your space in its normal, everyday state so we can understand where the friction lies and what systems are breaking down. We are entirely judgment-free and friendly."
    },
    {
      question: "Will you make me throw away things I love?",
      answer: "Never. You are in complete control of every item in your home. Our role is to ask supportive questions and help you decide which possessions still serve you, but we will never force you to discard anything."
    },
    {
      question: "Do you supply storage boxes and organizers?",
      answer: "We are happy to suggest and source containers, baskets, and hangers that fit your style and budget, or we can work entirely with organizers you already own. We always prefer to reuse before buying new."
    },
    {
      question: "What is your travel range?",
      answer: "We cover Greater Manchester, Cheshire, and surrounding North West regions. If you are slightly outside this range, please do get in touch as we may still be able to travel to you!"
    },
    {
      question: "How is your service ADHD-friendly?",
      answer: "We focus on low-cognitive-load, high-visibility systems. This means clear labels, open or transparent storage where possible, and minimizing 'out of sight, out of mind' forgetfulness to ensure systems are easy to maintain."
    }
  ];

  return (
    <section id="faqs" className="bg-[#FAF9F5] py-16 md:py-24 border-b border-[#E6DED4]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#A89A8A] font-bold block">Questions & Answers</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight uppercase font-medium">Frequently Asked Questions</h2>
          <div className="h-0.5 w-16 bg-[#A5AEA0] mx-auto mt-2" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-[#E6DED4] rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-2xs">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 flex justify-between items-center bg-white hover:bg-[#F7F6F2]/30 text-left font-serif text-sm sm:text-base text-[#2B2B2B] font-medium transition-all cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="w-6 h-6 rounded-full bg-[#FAF9F5] border border-[#E6DED4] flex items-center justify-center text-[#A89A8A] shrink-0">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border-t border-[#E6DED4]' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 text-xs sm:text-sm font-body text-stone-500 leading-relaxed bg-[#F7F6F2]/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
