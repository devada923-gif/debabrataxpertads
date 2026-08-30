import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/websiteData';
import { ServiceCard } from './ServiceCard';
import { Sparkles, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface ServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'ads' | 'organic' | 'development'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (filterCategory === 'ads') {
      return ['google-ads', 'meta-ads', 'lead-generation'].includes(service.id);
    }
    if (filterCategory === 'organic') {
      return ['search-engine-optimization', 'social-media-marketing', 'google-business-profile'].includes(service.id);
    }
    if (filterCategory === 'development') {
      return ['website-development', 'ecommerce-marketplace', 'branding-creative-design'].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Digital Marketing Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Everything you need to build, promote and grow your business online.
          </p>

          {/* Quick Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All 9 Services
            </button>
            <button
              onClick={() => setFilterCategory('ads')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'ads'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Paid Ads & Leads
            </button>
            <button
              onClick={() => setFilterCategory('organic')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'organic'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              SEO & Local Growth
            </button>
            <button
              onClick={() => setFilterCategory('development')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'development'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Web, E-com & Creative
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={(serviceName) => onOpenConsultation(serviceName)}
            />
          ))}
        </div>

        {/* Bottom Banner for Custom Requirement */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Need a tailored multi-service bundle?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100">
              Combine Website Design, SEO, and Paid Ads into a custom growth package for your business.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenConsultation('Custom Bundle')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-sky-50 text-blue-900 transition-colors shadow-sm"
            >
              Request Custom Package
            </button>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-blue-800/80 hover:bg-blue-800 text-white border border-blue-400/30 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
