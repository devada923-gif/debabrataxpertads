import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/websiteData';
import {
  Compass,
  PhoneCall,
  CheckCircle2,
  Briefcase,
  BarChart3,
  LineChart,
  Shield,
} from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-cyan-600" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-violet-600" />;
      default:
        return <Shield className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>The Freelancer Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Work With DebabrataXpertAds?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Direct accountability, transparent practices, and strategic marketing designed to move your business forward.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col group relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-bold text-slate-300">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
