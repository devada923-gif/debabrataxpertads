import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Megaphone,
  CheckCircle2,
  Users,
  Target,
  Image,
  Filter,
  BarChart2,
  ArrowRight,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface MetaAdsPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const MetaAdsPage: React.FC<MetaAdsPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Meta Ads (Facebook & Instagram Ads)',
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
      'Targeted Facebook and Instagram advertising campaigns, instant lead generation forms, retargeting funnels, and creative strategy in Bhubaneswar by DebabrataXpertAds.',
  };

  const metaPillars = [
    {
      title: 'Facebook & Instagram Lead Ads',
      desc: 'Native mobile lead forms that capture customer contact information directly inside Instagram & Facebook.',
      icon: Megaphone,
    },
    {
      title: 'Hyper-Local Geo-Targeting',
      desc: 'Pinpoint targeting across specific pin codes, neighborhoods, and demographics in Bhubaneswar and Odisha.',
      icon: Target,
    },
    {
      title: 'Engaging Ad Creative Strategy',
      desc: 'Eye-catching visual hooks, carousel designs, and persuasive ad copy crafted to stop the social feed scroll.',
      icon: Image,
    },
    {
      title: 'Custom & Lookalike Audiences',
      desc: 'Target past website visitors, customer lists, and high-affinity audiences most likely to convert.',
      icon: Users,
    },
    {
      title: 'Pixel & CAPI Tracking Setup',
      desc: 'Accurate event tracking with Meta Pixel and Server-side Conversion API to optimize for actual leads & purchases.',
      icon: Filter,
    },
    {
      title: 'A/B Testing & Scaling',
      desc: 'Systematic testing of creative variations, headlines, and calls-to-action to scale winning ad sets efficiently.',
      icon: BarChart2,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Meta Ads Freelancer in Bhubaneswar | Facebook & Instagram Ads | DebabrataXpertAds"
        description="Targeted Facebook & Instagram Ads management in Bhubaneswar, Odisha. Custom audience funnels, instant lead forms, and high-converting creative strategy."
        canonicalPath="/services/meta-ads"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Meta Ads (Facebook & Instagram)', url: '/services/meta-ads' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Megaphone className="w-3.5 h-3.5" />
              <span>Paid Social Media Advertising</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Meta Ads (Facebook & Instagram) in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Reach thousands of prospective local customers across Facebook and Instagram with visually compelling ads, qualified instant lead forms, and precision demographic targeting.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Meta Ads (Facebook & Instagram)')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
              >
                Discuss Meta Ads
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

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Social Ad Execution
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meta Advertising Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metaPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/50 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
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
            Ready to Scale Your Customer Acquisition with Meta Ads?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Discuss your target audience demographics and creative campaign strategy with Debabrata Barik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Meta Ads (Facebook & Instagram)')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss Meta Ads
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
