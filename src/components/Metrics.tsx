import React from 'react';
import { METRICS_DATA } from '../data/websiteData';
import {
  Eye,
  Compass,
  UserPlus,
  Zap,
  HeartHandshake,
  TrendingUp,
  Info,
  ShieldCheck,
} from 'lucide-react';

export const Metrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-5 h-5 text-sky-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'UserPlus':
        return <UserPlus className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-indigo-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-teal-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Integrity in Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Marketing That Focuses on the Right Metrics
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Prioritizing indicators that directly impact cash flow, brand equity, and real customer relationships.
          </p>
        </div>

        {/* Conceptual Metrics 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {METRICS_DATA.map((metric) => (
            <div
              key={metric.id}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                    {getIcon(metric.icon)}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    {metric.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {metric.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 text-xs text-slate-500 flex items-start gap-1.5 bg-white/60 p-2.5 rounded-xl">
                <span className="font-semibold text-slate-700 flex-shrink-0">Key Focus:</span>
                <span>{metric.focus}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparent Disclaimer Box */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 text-xs sm:text-sm text-sky-950 flex items-start gap-3">
          <Info className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">Realistic Performance Commitment</span>
            <p className="text-sky-900 leading-relaxed">
              Actual digital marketing performance and return on investment depend on several unique variables, including your industry landscape, advertising budget, local competition, product offering, and ongoing campaign optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
