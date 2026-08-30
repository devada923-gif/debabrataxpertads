import React from 'react';
import { Target, Receipt, MessageSquare, TrendingUp, MapPin, ShieldCheck } from 'lucide-react';
import { TRUST_VALUES } from '../data/websiteData';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-sky-600 flex-shrink-0" />;
      case 'ReceiptCheck':
        return <Receipt className="w-5 h-5 text-blue-600 flex-shrink-0" />;
      case 'MessageSquareText':
        return <MessageSquare className="w-5 h-5 text-indigo-600 flex-shrink-0" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0" />;
    }
  };

  return (
    <section className="bg-white border-y border-slate-200/80 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {TRUST_VALUES.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col pt-4 sm:pt-0 ${
                index !== 0 ? 'lg:pl-5' : ''
              } group`}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-bold text-sm text-slate-900 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-0.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
