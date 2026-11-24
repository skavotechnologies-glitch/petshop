import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState("faq-1");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF6EE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3329]/10 text-[#1B3329] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#E8927C]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3329] tracking-tight font-display">
            Frequently Asked <span className="text-[#E8927C]">Questions.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#1A2420]/75 max-w-xl mx-auto">
            Everything you need to know about our grooming procedures, pet safety protocols, and store policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-gray-200/80 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF6EE]/50 transition-colors"
                >
                  <span className="text-base font-extrabold text-[#1B3329]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#E8927C] text-white' : 'bg-[#FAF6EE] text-[#1B3329]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#1A2420]/80 leading-relaxed border-t border-gray-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Need Assistance CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-gray-200/80 shadow-soft">
          <h4 className="text-lg font-extrabold text-[#1B3329]">Have a question not covered here?</h4>
          <p className="text-xs text-[#1A2420]/70 mt-1 max-w-md mx-auto">
            Our certified pet care consultants and master groomers are always happy to advise on your pet's needs.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <a
              href="#booking"
              className="px-6 py-2.5 rounded-full bg-[#E8927C] hover:bg-[#D97760] text-white text-xs font-extrabold shadow-peach transition-all"
            >
              Ask Our Stylists
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}