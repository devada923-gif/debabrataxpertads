import React from 'react';
import { MessageSquareQuote, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface TestimonialsProps {
  onOpenConsultation: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Authentic Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Clients Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Direct partnerships, clear accountability, and authentic client satisfaction.
          </p>
        </div>

        {/* Elegant Placeholder State Container (No Fake Testimonials) */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />

          {/* Center Graphic */}
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-5 text-sky-600 shadow-2xs">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Client Testimonials Will Be Added Here
          </h3>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-6">
            Client testimonials will be added here as projects are completed. We maintain a strict policy of displaying only verified, real feedback from genuine business collaborations.
          </p>

          {/* Invitation Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">
              Ready to build your digital presence?
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Let's partner up to achieve measurable growth for your business in Odisha and beyond.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 shadow-sm transition-all"
            >
              <span>Work With DebabrataXpertAds</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 text-sm transition-all"
            >
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
