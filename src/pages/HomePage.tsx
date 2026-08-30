import React from 'react';
import { Link } from 'react-router-dom';
import {
  BUSINESS_INFO,
  TRUST_VALUES,
  SERVICES_DATA,
  PRICING_PLANS,
  WHY_CHOOSE_ITEMS,
  PORTFOLIO_ITEMS,
  INDUSTRIES_DATA,
  PROCESS_STEPS,
  FAQ_DATA,
} from '../data/websiteData';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Metrics } from '../components/Metrics';
import { Process } from '../components/Process';
import { Industries } from '../components/Industries';
import { PortfolioCard } from '../components/PortfolioCard';
import { ServiceCard } from '../components/ServiceCard';
import {
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
  MapPin,
  HelpCircle,
  Layers,
  Globe,
  Search,
  Megaphone,
  Share2,
  UserCheck,
} from 'lucide-react';

interface HomePageProps {
  onOpenConsultation: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DebabrataXpertAds',
    description:
      'Digital Marketing Freelancer and Business Growth partner in Bhubaneswar, Odisha. Providing SEO, Google Ads, Meta Ads, Website Design, and Lead Generation.',
    url: 'https://debabrataxpertads.com',
    telephone: '+918249312058',
    founder: {
      '@type': 'Person',
      name: 'Debabrata Barik',
      jobTitle: 'Digital Marketing Specialist & Growth Consultant',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
        addressLocality: 'Bhubaneswar',
        postalCode: '751003',
        addressRegion: 'Odisha',
        addressCountry: 'India',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
      addressLocality: 'Bhubaneswar',
      postalCode: '751003',
      addressRegion: 'Odisha',
      addressCountry: 'India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '20.2706',
      longitude: '85.7667',
    },
    areaServed: ['Bhubaneswar', 'Cuttack', 'Puri', 'Odisha', 'India'],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Digital Marketing Freelancer in Bhubaneswar | DebabrataXpertAds"
        description="Helping businesses build a stronger online presence, generate qualified leads and grow through smarter digital marketing strategies. SEO, Google Ads, Meta Ads & Web Design."
        canonicalPath="/"
        schema={homeSchema}
      />

      {/* 1. HERO SECTION WITH ANIMATED INTERACTIVE DASHBOARD & VIDEO SUPPORT */}
      <Hero onOpenConsultation={() => onOpenConsultation()} />

      {/* 2. TRUST / VALUE STRIP */}
      <TrustStrip />

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-white" id="home-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                About The Specialist
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Debabrata Barik — Your Dedicated Digital Marketing Partner
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                I am an independent freelance digital marketing specialist based in{' '}
                <strong className="text-slate-900">Bhubaneswar, Odisha</strong>. Unlike traditional agencies where your account gets passed around junior interns, you collaborate directly with me.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                My approach is strictly business-centric: designing functional websites that convert visitors, setting up targeted Google & Meta ad campaigns that minimize wasted spend, and building local SEO visibility to attract nearby paying customers.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all"
                  id="about-preview-view-more"
                >
                  <span>Read Full Story & Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => onOpenConsultation()}
                  className="text-sm font-bold text-sky-600 hover:text-sky-700 underline cursor-pointer"
                >
                  Discuss Your Business →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-sky-50 via-blue-50/60 to-white p-6 sm:p-8 rounded-3xl text-slate-900 shadow-lg border border-sky-200 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-sky-700 font-bold">
                    Core Focus Areas
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">How I Help Businesses Grow</h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>Conversion-Focused Responsive Web Architecture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>High-Intent Google Search & Remarketing Ads</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>Targeted Meta (Facebook/Instagram) Lead Funnels</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>Local SEO & Google Business Profile Ranking in Odisha</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-sky-200/80 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Based in Bhubaneswar, Odisha</span>
                  <Link to="/contact" className="text-sky-700 font-bold hover:underline">
                    Get in Touch →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200" id="home-services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1 block">
                Comprehensive Solutions
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Digital Marketing & Growth Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 bg-white hover:bg-sky-50 px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors self-start sm:self-auto"
              id="services-overview-view-all"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service Cards Grid with ServiceCard component */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={(name) => onOpenConsultation(name)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              id="services-preview-bottom-btn"
            >
              <span>Explore All Detailed Service Pages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. METRICS WITH INTEGRITY */}
      <Metrics />

      {/* 6. 5-STEP PROCESS SECTION */}
      <Process onOpenConsultation={() => onOpenConsultation()} />

      {/* 7. PORTFOLIO PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200" id="home-portfolio-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1 block">
                Work & Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Case Studies & Concept Frameworks
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 bg-white hover:bg-sky-50 px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors self-start sm:self-auto"
              id="portfolio-preview-view-all"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Portfolio Cards Grid with high-res previews and modals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onSelectProject={(title) => onOpenConsultation(title)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md"
            >
              <span>Explore Dedicated Portfolio Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES SECTION */}
      <Industries onOpenConsultation={(name) => onOpenConsultation(name)} />

      {/* 9. PRICING PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-white" id="home-pricing-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Clear & Honest Packages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Flexible Digital Marketing Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tailored scopes for local businesses, growing clinics, retail stores, and scaling brands. Zero hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-sky-50/60 to-white text-slate-900 border-2 border-sky-500 shadow-xl relative scale-[1.02]'
                    : 'bg-white text-slate-900 border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className={`text-lg font-black tracking-wide ${plan.popular ? 'text-sky-900' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs mt-1 leading-relaxed text-slate-500">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl text-xs ${plan.popular ? 'bg-white border border-sky-200 text-sky-900 shadow-2xs' : 'bg-slate-50 text-slate-600'}`}>
                    <strong>Ideal for:</strong> {plan.idealFor}
                  </div>

                  <div className="space-y-2 pt-2">
                    {plan.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-sky-600"
                        />
                        <span className="text-slate-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation(`${plan.name} Package`)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 text-white shadow-md shadow-sky-500/25'
                        : 'bg-slate-900 hover:bg-sky-600 text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 underline"
              id="pricing-preview-view-more"
            >
              <span>View Full Pricing Breakdown & Categories →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ PREVIEW SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200" id="home-faq-preview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.slice(0, 4).map((faq) => (
              <div key={faq.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 underline"
              id="faq-preview-view-all"
            >
              <span>View All Frequently Asked Questions →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. HIGH CONVERSION CTA BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-lg" id="home-cta-banner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/25 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-200" />
            <span>Ready for Measurable Growth</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ready to Build a Stronger Online Presence & Generate Qualified Leads?
          </h2>
          <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Get in touch directly with Debabrata Barik for a zero-obligation discussion on your business goals and marketing roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-blue-900 font-bold text-sm shadow-lg transition-all cursor-pointer"
              id="cta-banner-consult-btn"
            >
              Get Free Consultation
            </button>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              id="cta-banner-whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4 text-emerald-100" />
              <span>WhatsApp: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
