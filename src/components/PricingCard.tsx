import React from 'react';
import { PricingPlan } from '../types';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (planName: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  return (
    <div
      id={`pricing-plan-${plan.id}`}
      className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
        plan.popular
          ? 'bg-gradient-to-b from-sky-50/60 to-white text-slate-900 shadow-xl border-2 border-sky-500 scale-[1.02] z-10'
          : 'bg-white text-slate-900 border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-sky-200" />
          <span>Most Popular Growth Choice</span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3
              className={`text-xl font-extrabold tracking-tight ${
                plan.popular ? 'text-sky-900' : 'text-slate-900'
              }`}
            >
              {plan.name}
            </h3>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                plan.popular
                  ? 'bg-sky-100 text-sky-800 border border-sky-200'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              Custom Package
            </span>
          </div>

          <p className="text-xs mt-2 font-medium leading-relaxed text-slate-600">
            {plan.tagline}
          </p>
        </div>

        {/* Pricing Scope Guidance */}
        <div
          className={`py-3 px-3.5 rounded-xl text-xs mb-5 ${
            plan.popular
              ? 'bg-white border border-sky-200 text-sky-900 shadow-2xs'
              : 'bg-slate-50 border border-slate-100 text-slate-700'
          }`}
        >
          <span className="font-bold block mb-0.5 text-slate-800">Ideal For:</span>
          <span className="opacity-90 text-slate-600">{plan.idealFor}</span>
        </div>

        {/* Features List */}
        <div className="space-y-2.5 mb-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Included Scope Highlights
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs">
              <span className="w-4 h-4 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-200">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span className="leading-snug text-slate-700 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-slate-100">
        <button
          onClick={() => onSelectPlan(plan.name)}
          className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            plan.popular
              ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white shadow-md shadow-sky-500/25'
              : 'bg-slate-900 hover:bg-sky-600 text-white'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
