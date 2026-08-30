import React, { useState } from 'react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/websiteData';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // First open by default

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Quick answers about services, process, local support in Bhubaneswar, and pricing.
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-300 bg-sky-50/30 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs flex-shrink-0 font-extrabold">
                      {faq.id}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-150">
                    <div className="pl-9">{faq.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-slate-900">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              I'm always open to discussing your specific business situation.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-200 hover:bg-slate-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
