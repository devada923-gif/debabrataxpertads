import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import { MessageSquare, Phone, ArrowUp, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenConsultation?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (bottom right) */}
      <aside
        aria-label="Quick Actions"
        className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none"
      >
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            aria-label="Scroll back to top"
            className="pointer-events-auto p-2.5 rounded-full bg-slate-900/90 text-white shadow-lg hover:bg-sky-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 animate-in fade-in cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Direct Call Floating Button (Desktop) */}
        <a
          href={BUSINESS_INFO.phoneHref}
          id="floating-call-btn"
          aria-label="Call Debabrata Barik"
          className="pointer-events-auto hidden sm:flex items-center gap-2 px-3 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold whitespace-nowrap">
            Call {BUSINESS_INFO.phone}
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat with Debabrata Barik on WhatsApp"
          className="pointer-events-auto flex items-center gap-2 px-3.5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-400 relative"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          <MessageSquare className="w-5 h-5 flex-shrink-0 fill-white/20" />
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            WhatsApp Me
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Bar for CRO (Conversion Rate Optimization) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl p-2 flex items-center gap-2">
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-500 text-white font-bold text-xs shadow-xs"
          id="mobile-bottom-whatsapp-btn"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-slate-900 text-white font-bold text-xs shadow-xs"
          id="mobile-bottom-call-btn"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call Now</span>
        </a>

        {onOpenConsultation && (
          <button
            onClick={onOpenConsultation}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs shadow-xs"
            id="mobile-bottom-consult-btn"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Consult</span>
          </button>
        )}
      </div>
    </>
  );
};
