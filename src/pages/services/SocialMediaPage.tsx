import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/websiteData';
import { SEOHead } from '../../components/SEOHead';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  Share2,
  Calendar,
  Image,
  MessageSquare,
  TrendingUp,
  Award,
  ArrowRight,
  Phone,
  CheckCircle2,
} from 'lucide-react';

interface SocialMediaPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onOpenConsultation }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media Marketing & Brand Management',
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
      'Strategic social media marketing, content planning, and organic brand building across Facebook and Instagram in Bhubaneswar, Odisha.',
  };

  const pillars = [
    {
      title: 'Content Strategy & Monthly Calendars',
      desc: 'Structured monthly roadmap of informative, engaging, and promotional posts aligned with your business milestones.',
      icon: Calendar,
    },
    {
      title: 'Branded Graphics & Creative Posts',
      desc: 'Custom-designed visual carousels, banners, and flyers maintaining strict brand color and font harmony.',
      icon: Image,
    },
    {
      title: 'Audience Engagement & DM Routing',
      desc: 'Active monitoring of comments and inquiries with direct routing to your business WhatsApp or phone.',
      icon: MessageSquare,
    },
    {
      title: 'Profile Optimization & Bio Revamp',
      desc: 'Refining Instagram & Facebook bios, highlights, contact buttons, and story links for high conversion appeal.',
      icon: Award,
    },
    {
      title: 'Organic Reach & Local Hashtag Strategy',
      desc: 'Leveraging location tags, relevant industry hashtags, and shareable content formats to attract local followers.',
      icon: TrendingUp,
    },
    {
      title: 'Performance & Growth Reports',
      desc: 'Monthly insights on profile reach, follower interactions, top-performing posts, and audience demographics.',
      icon: Share2,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Social Media Marketing Freelancer in Bhubaneswar | DebabrataXpertAds"
        description="Build a reputable and active brand presence on Facebook and Instagram. Professional content calendars, visual design, and audience engagement by DebabrataXpertAds."
        canonicalPath="/services/social-media-marketing"
        schema={serviceSchema}
      />

      <Breadcrumbs
        items={[
          { name: 'Services', url: '/services' },
          { name: 'Social Media Marketing', url: '/services/social-media-marketing' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Share2 className="w-3.5 h-3.5" />
              <span>Brand Authority & Engagement</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Social Media Marketing in Bhubaneswar
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Build genuine trust and keep your brand top-of-mind. We design branded content, plan consistent monthly calendars, and manage your social channels to nurture customer loyalty.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation('Social Media Marketing')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-colors cursor-pointer"
              >
                Discuss Social Media Plan
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

      {/* Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Social Strategy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Is Included in Social Media Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
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
            Ready to Build a Stronger Social Media Presence?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Let's plan your monthly content calendar and design custom social media templates tailored to your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenConsultation('Social Media Marketing')}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Discuss Social Media Plan
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              View Social Media Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
