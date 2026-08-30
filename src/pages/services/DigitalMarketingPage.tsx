import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  TrendingUp,
  Search,
  Sparkles,
  Megaphone,
  Share2,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
  Target,
  Layers,
} from 'lucide-react';

interface DigitalMarketingPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing Strategy & Consultation',
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
      'Full-funnel digital marketing services combining SEO, Google Ads, Meta Ads, social media and lead funnels in Bhubaneswar, Odisha.',
  };

  const marketingChannels = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Rank organically for high-intent queries and capture long-term search traffic from Google.',
      path: '/services/seo',
      icon: Search,
    },
    {
      title: 'Google Ads Management',
      desc: 'Drive immediate inbound phone calls and quotation inquiries from active searchers.',
      path: '/services/google-ads',
      icon: Sparkles,
    },
    {
      title: 'Meta Ads (Facebook & Instagram)',
      desc: 'Target local audiences with compelling visual ads and instant lead generation forms.',
      path: '/services/meta-ads',
      icon: Megaphone,
    },
    {
      title: 'Social Media Management',
      desc: 'Build brand reputation, publish structured monthly content, and nurture buyer trust.',
      path: '/services/social-media-marketing',
      icon: Share2,
    },
    {
      title: 'Lead Generation Funnels',
      desc: 'Convert traffic into direct WhatsApp inquiries and qualified sales leads.',
      path: '/services/lead-generation',
      icon: UserCheck,
    },
    {
      title: 'Local SEO & Google Business Profile',
      desc: 'Dominate Google Maps 3-Pack and neighborhood discovery in Bhubaneswar & Odisha.',
      path: '/services/seo',
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Digital Marketing Consultant in Bhubaneswar | DebabrataXpertAds"
        description="Holistic digital marketing strategies in Bhubaneswar, Odisha. We combine SEO, Google Ads, Meta Ads, and high-converting lead funnels for sustainable business growth."
        canonicalPath="/services/digital-marketing"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Digital Marketing', url: '/services/digital-marketing' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Full-Funnel Growth Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Digital Marketing Services in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Connect with in-market customers across search engines, social channels, and local maps. Tailored marketing roadmaps that turn ad budgets into measurable business revenue.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Digital Marketing Strategy')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
              >
                Discuss Digital Strategy
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

      {/* What is Digital Marketing & Who It Is For */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                The Foundation
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                What is Strategic Digital Marketing?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Digital marketing isn't just posting randomly on social media or boosting posts blindly. It is a systematic framework that aligns your unique business value proposition with the channels where your prospective customers spend their time and make buying decisions.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By orchestrating organic search (SEO), paid search (Google Ads), social discovery (Meta Ads), and seamless conversion touchpoints (WhatsApp/Phone/Landing Pages), we create a dependable pipeline of qualified customer inquiries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Target Audience
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Who Benefits Most From This Service?
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Local Business Owners:</strong> Clinics, retail stores, restaurants, and showrooms looking to dominate their local market in Bhubaneswar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Professional Service Providers:</strong> Doctors, consultants, advocates, educators, and real estate developers needing high-intent leads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Startups & Brands:</strong> Businesses scaling their customer acquisition and establishing online brand authority.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included Channels Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Integrated Channels
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Core Channels in Our Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/50 transition-colors space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{channel.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{channel.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70">
                    <Link
                      to={channel.path}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                    >
                      <span>Explore Channel Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
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
            Ready to Build a Smarter Digital Marketing Strategy?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Get in touch with Debabrata Barik for a complete digital roadmap and budget recommendation tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Digital Marketing Strategy')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss Digital Strategy
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Marketing Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
