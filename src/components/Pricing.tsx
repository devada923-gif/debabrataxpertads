import React from 'react';
import { PRICING_PLANS, BUSINESS_INFO } from '../data/websiteData';
import { PricingCard } from './PricingCard';
import { HelpCircle, Info, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PricingProps {
  onOpenConsultation: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest & Flexible Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Simple & Transparent Pricing
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Customizable digital marketing packages structured around your exact business goals and stage of growth.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelectPlan={(planName) => onOpenConsultation(`Pricing Plan: ${planName}`)}
            />
          ))}
        </div>

        {/* Essential Transparent Note as required */}
        <div className="mt-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm text-center space-y-1.5">
          <div className="flex items-center justify-center gap-1.5 font-bold text-slate-900">
            <Info className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Transparent Scope Policy</span>
          </div>
          <p className="text-slate-600">
            Final pricing depends on business requirements, campaign scope and advertising budget. All packages are 100% customizable with zero hidden lock-ins.
          </p>
        </div>

        {/* Custom consultation prompt */}
        <div className="mt-8 text-center flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-600">
          <span>Unsure which package fits your current stage?</span>
          <a
            href={BUSINESS_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sky-600 hover:text-sky-700 underline inline-flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp for a Free Estimate</span>
          </a>
        </div>
      </div>
    </section>
  );
};
