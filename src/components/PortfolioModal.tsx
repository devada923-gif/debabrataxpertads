import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export interface PortfolioModalItem {
  id: string;
  title: string;
  category: string;
  categoryName?: string;
  badge?: string;
  description: string;
  results?: string;
  image: string;
  videoSrc?: string;
  tags: string[];
  deliverables?: string[];
}

interface PortfolioModalProps {
  item: PortfolioModalItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: (service?: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white px-6 py-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/20 text-white border border-white/30 backdrop-blur-xs">
              {item.categoryName || item.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/15 text-sky-100 border border-white/25 backdrop-blur-xs">
              {item.badge || 'Demo Concept'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close project view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual / Video */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
            {item.videoSrc ? (
              <video
                src={item.videoSrc}
                poster={item.image}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Project Details */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Results / Strategic Impact */}
          {item.results && (
            <div className="p-4 sm:p-5 rounded-xl bg-sky-50 border border-sky-200 space-y-1">
              <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                Strategic Focus & Benchmark Outcome
              </div>
              <p className="text-xs sm:text-sm text-sky-950 font-medium">
                {item.results}
              </p>
            </div>
          )}

          {/* Deliverables / Architecture list */}
          {item.deliverables && item.deliverables.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Core Deliverables Included
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Want a similar digital marketing solution built for your business?
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation(item.title);
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hello Debabrata, I saw the project concept for "${item.title}" on your website and would like to discuss building something similar for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                title="Discuss on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
