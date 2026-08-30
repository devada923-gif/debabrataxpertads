import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/websiteData';
import { PortfolioCard } from './PortfolioCard';
import { Layers, Info, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onOpenConsultation: (projectTopic?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Website Design',
    'SEO',
    'Google Ads',
    'Meta Ads',
    'Social Media',
    'Branding',
    'E-commerce',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Execution Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Selected Work & Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Strategic blueprints and execution frameworks across digital marketing channels.
          </p>

          {/* Transparent Notice */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 text-xs">
            <Info className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
            <span>Sample solution architectures structured for scalable client deployments.</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onSelectProject={(title) => onOpenConsultation(title)}
            />
          ))}
        </div>

        {/* Start a new project banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenConsultation('New Project Inquiry')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 shadow-2xs hover:shadow-xs transition-all"
          >
            <span>Have a specific project in mind? Let's discuss requirements</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
