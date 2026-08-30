import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  UserCheck,
  CheckCircle2,
  MessageSquare,
  Phone,
  Filter,
  ShieldCheck,
  Zap,
  TrendingUp,
  Target,
  ArrowRight,
} from 'lucide-react';

interface LeadGenerationPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const LeadGenerationPage: React.FC<LeadGenerationPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lead Generation Funnels & Conversion Rate Optimization',
    provider: {
      '@type': 'ProfessionalService',
      name: 'DebabrataXpertAds',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
        addressLocality: 'Bhubaneswar',
        postalCode: '751003',
        addressRegion: 'Odisha',
        addressCountry: 'India',
      },
    },
    description:
      'High-converting B2B and B2C lead generation funnels, click-to-WhatsApp workflows, and landing pages engineered by DebabrataXpertAds in Bhubaneswar, Odisha.',
  };

  const funnelSteps = [
    {
      title: 'Targeted Traffic Acquisition',
      desc: 'Driving in-market prospects from Google Search and Meta Ads with pinpoint local audience parameters.',
      icon: Target,
    },
    {
      title: 'Dedicated Conversion Landing Page',
      desc: 'High-clarity, distraction-free landing page highlighting your core offer, trust proof, and clear next steps.',
      icon: TrendingUp,
    },
    {
      title: 'Direct WhatsApp & Instant Lead Routing',
      desc: 'Immediate 1-click WhatsApp chat triggers allowing prospects to message your team without filling lengthy forms.',
      icon: MessageSquare,
    },
    {
      title: 'Lead Qualification & Anti-Spam Filters',
      desc: 'Custom qualification fields ensuring your sales team spends time only on genuinely interested buyers.',
      icon: Filter,
    },
    {
      title: 'Automated CRM & Instant Alerts',
      desc: 'Instant email and mobile notifications so you can follow up with inquiries while they are hot.',
      icon: Zap,
    },
    {
      title: 'Funnel Optimization & Split Testing',
      desc: 'Continuous A/B testing of headlines, call-to-action buttons, and form layouts to lower cost-per-lead.',
      icon: UserCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Lead Generation Funnels in Bhubaneswar | DebabrataXpertAds"
        description="Generate qualified B2B & B2C customer inquiries in Bhubaneswar, Odisha. High-converting landing pages, WhatsApp funnels, and optimized paid traffic."
        canonicalPath="/services/lead-generation"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Lead Generation', url: '/services/lead-generation' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Conversion-First Lead Engines</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Lead Generation Funnels in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Stop losing potential customers to confusing websites. We build streamlined lead generation funnels, WhatsApp click-to-chat workflows, and targeted ads that deliver predictable customer inquiries.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Lead Generation Funnels')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
              >
                Discuss Lead Funnel
              </button>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Steps */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              The Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Our Lead Funnels Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funnelSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/50 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Generate More Qualified Customer Inquiries?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Contact Debabrata Barik to design a custom lead generation funnel tailored specifically for your target audience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Lead Generation Funnels')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss Lead Funnel
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Pricing Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
