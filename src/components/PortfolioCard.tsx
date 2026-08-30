import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { Layers, ArrowUpRight, CheckCircle2, Eye } from 'lucide-react';
import { PortfolioModal } from './PortfolioModal';

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelectProject: (title: string) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onSelectProject }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Website Design':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'SEO':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Google Ads':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Meta Ads':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Social Media':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Branding':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'E-commerce':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      default:
        return 'bg-sky-50 text-sky-700 border-sky-200';
    }
  };

  return (
    <>
      <div
        id={`portfolio-item-${item.id}`}
        className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
      >
        <div>
          {/* Visual Image Banner with Hover Zoom */}
          {item.image && (
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out ${
                  imageLoaded ? 'opacity-100' : 'opacity-70'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Hover quick preview button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                  <Eye className="w-3.5 h-3.5 text-sky-600" />
                  <span>View Details</span>
                </span>
              </div>
            </div>
          )}

          <div className="p-6">
            {/* Category & Concept Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${getCategoryColor(
                  item.category
                )}`}
              >
                {item.category}
              </span>
              <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                {item.badge}
              </span>
            </div>

            {/* Project Title */}
            <h3
              onClick={() => setIsModalOpen(true)}
              className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors leading-snug cursor-pointer"
            >
              {item.title}
            </h3>

            {/* Objective */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Strategic Objective
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.objective}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="space-y-1.5 pt-3 pb-2 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Deliverables & Architecture
              </div>
              {item.keyDeliverables.slice(0, 3).map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span className="truncate">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags & Action Buttons */}
        <div className="p-6 pt-0 space-y-3">
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Details</span>
            </button>

            <button
              onClick={() => onSelectProject(`Inquire about: ${item.title}`)}
              className="py-2 px-3 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Discuss</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal View */}
      <PortfolioModal
        item={{
          id: item.id,
          title: item.title,
          category: item.category,
          badge: item.badge,
          description: item.objective,
          results: item.results,
          image: item.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          tags: item.tags,
          deliverables: item.keyDeliverables,
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenConsultation={(title) => onSelectProject(title || item.title)}
      />
    </>
  );
};
