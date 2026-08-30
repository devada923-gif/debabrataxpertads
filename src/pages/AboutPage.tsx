import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/websiteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  TrendingUp,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  Compass,
  Briefcase,
  Layers,
  Sparkles,
  Zap,
  Award,
  HeartHandshake,
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About DebabrataXpertAds & Debabrata Barik',
    description:
      'Learn about Debabrata Barik, independent digital marketing specialist and business growth consultant in Bhubaneswar, Odisha.',
    url: 'https://debabrataxpertads.com/about',
    mainEntity: {
      '@type': 'Person',
      name: 'Debabrata Barik',
      jobTitle: 'Digital Marketing Specialist',
      worksFor: {
        '@type': 'Organization',
        name: 'DebabrataXpertAds',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
        addressLocality: 'Bhubaneswar',
        postalCode: '751003',
        addressRegion: 'Odisha',
        addressCountry: 'India',
      },
    },
  };

  const skillsList = [
    { title: 'Search Engine Optimization (SEO)', level: 'On-page, Technical, Local SEO & Google Maps' },
    { title: 'Google Ads (Search & Display)', level: 'Keyword intent research, bid optimization & negative keywords' },
    { title: 'Meta Ads (Facebook & Instagram)', level: 'Custom audience funnels, ad creatives & instant lead forms' },
    { title: 'Website Design & Development', level: 'Responsive UI, mobile-first layouts, speed & conversion rate optimization' },
    { title: 'Lead Generation Funnels', level: 'Click-to-WhatsApp funnels, quotation forms & qualification workflows' },
    { title: 'Social Media Management', level: 'Monthly content calendars, brand consistency & community engagement' },
    { title: 'Local Business Marketing', level: 'Google Business Profile ranking & geo-targeted campaigns in Odisha' },
    { title: 'Branding & Ad Creatives', level: 'Graphic design for promotional campaigns, logos & marketing banners' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About DebabrataXpertAds | Digital Marketing Freelancer in Bhubaneswar"
        description="Learn about Debabrata Barik, independent digital marketing specialist and growth partner in Bhubaneswar, Odisha. Transparent strategies, direct communication, and real business results."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />

      {/* Hero Header */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Independent Digital Marketing Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              About Debabrata Barik & DebabrataXpertAds
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              A dedicated digital marketing specialist and business growth partner helping entrepreneurs, local businesses, and brands in Bhubaneswar and across Odisha build sustainable online visibility and generate qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24 bg-white" id="about-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Who I Am */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Background
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  About Debabrata Barik
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <p>
                    Hello, I am <strong>Debabrata Barik</strong>, the founder and digital marketing practitioner behind <strong>DebabrataXpertAds</strong>. I operate as an independent freelance consultant based in <strong>Bhubaneswar, Odisha</strong>.
                  </p>
                  <p>
                    In a digital marketing landscape saturated with vague promises and overpriced agency retainers, I founded DebabrataXpertAds with a simple objective: to provide businesses with practical, transparent, and ROI-driven marketing solutions without unnecessary overhead.
                  </p>
                  <p>
                    Whether you need a fast-loading business website that actually turns visitors into callers, high-intent Google Search Ads, or targeted Meta lead generation campaigns, I handle your strategy and execution directly with complete accountability.
                  </p>
                </div>
              </div>

              {/* 2. Mission & Vision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">My Mission</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To empower local and growing businesses with structured digital marketing strategies, conversion-focused websites, and predictable customer inquiry funnels that fuel genuine business growth.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">My Vision</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To be the most trusted, transparent, and reliable independent digital marketing partner in Bhubaneswar and Odisha, known for delivering real commercial outcomes and long-term client relationships.
                  </p>
                </div>
              </div>

              {/* 3. Why I Started & Why Freelance */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  The Story
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Why I Started DebabrataXpertAds
                </h2>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Having observed how many small and mid-sized business owners felt neglected by traditional marketing agencies — where they paid high monthly fees only to have their projects handed off to junior interns with little direct communication — I realized there was a critical need for an agile, honest freelancer model.
                  </p>
                  <p>
                    As an independent specialist, I take on a limited number of clients at any given time. This ensures that your business receives the strategic thought, attention to detail, and rapid iteration required to succeed in competitive markets.
                  </p>
                </div>
              </div>

              {/* 4. My Core Approach */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Methodology
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  My Working Philosophy & Approach
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Commercial Intent Over Vanity Metrics</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      I prioritize actual phone calls, WhatsApp inquiries, and qualified form submissions over passive impressions and empty page views.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>No Guesswork or Generic Templates</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      Every campaign is engineered around your specific product offerings, margins, and target audience behavior in your target cities.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Budget Protection & Negative Filtering</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      I actively monitor search terms and audiences to add negative keywords and eliminate irrelevant clicks that drain your ad spend.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>100% Direct Accountability</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      You always have direct phone and WhatsApp access to me. No ticketing systems, no delayed relays through account managers.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Skills & Expertise Grid */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Capabilities
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Skills & Areas of Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {skillsList.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                    >
                      <div className="text-xs font-bold text-slate-900">{skill.title}</div>
                      <div className="text-[11px] text-slate-500">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-sky-50 via-blue-50/60 to-white rounded-2xl p-6 text-slate-900 border border-sky-200 space-y-5 shadow-md">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                    Direct Contact
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">Debabrata Barik</h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Digital Marketing Specialist & Growth Partner
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-sky-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span className="font-semibold text-slate-800">{BUSINESS_INFO.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{BUSINESS_INFO.formattedAddress}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => onOpenConsultation()}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white font-bold text-xs shadow-md shadow-sky-500/20 hover:from-sky-600 hover:to-blue-800 transition-colors cursor-pointer"
                  >
                    Let's Discuss Your Business
                  </button>

                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Me Directly</span>
                  </a>
                </div>
              </div>

              {/* Quick Services Nav */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Explore Services
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      to="/services/website-design"
                      className="text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between"
                    >
                      <span>Website Design & Development</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/seo"
                      className="text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between"
                    >
                      <span>Search Engine Optimization (SEO)</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/google-ads"
                      className="text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between"
                    >
                      <span>Google Ads Management</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/meta-ads"
                      className="text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between"
                    >
                      <span>Meta Ads (Facebook & IG)</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/lead-generation"
                      className="text-slate-700 hover:text-sky-600 font-medium flex items-center justify-between"
                    >
                      <span>Lead Generation Funnels</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
            Schedule a free direct discussion with Debabrata Barik to explore tailored digital growth strategies for your company.
          </p>
          <div>
            <button
              onClick={() => onOpenConsultation()}
              className="px-7 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-sky-50 shadow-md transition-colors"
            >
              Let's Discuss Your Business
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
