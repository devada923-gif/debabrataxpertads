import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/websiteData';
import { Phone, MessageSquare, MapPin, Mail, ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const companyLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing Plans', path: '/pricing' },
    { label: 'Frequently Asked Questions', path: '/faq' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Website Design & Development', path: '/services/website-design' },
    { label: 'Digital Marketing Strategy', path: '/services/digital-marketing' },
    { label: 'Search Engine Optimization (SEO)', path: '/services/seo' },
    { label: 'Google Ads (PPC)', path: '/services/google-ads' },
    { label: 'Meta Ads (Facebook & IG)', path: '/services/meta-ads' },
    { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { label: 'Lead Generation Funnels', path: '/services/lead-generation' },
    { label: 'Branding & Creative Design', path: '/services/branding' },
  ];

  const portfolioSubLinks = [
    { label: 'Website Portfolio', path: '/portfolio/websites' },
    { label: 'Digital Marketing Portfolio', path: '/portfolio/digital-marketing' },
    { label: 'Branding Portfolio', path: '/portfolio/branding' },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-950 to-[#0A192F] text-white border-t border-sky-800/40 pt-16 pb-12" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-sky-800/60">
          {/* Brand & About Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" id="footer-logo">
              <BrandLogo size="md" variant="light" />
            </Link>

            <p className="text-xs sm:text-sm text-sky-100/90 max-w-sm leading-relaxed">
              DebabrataXpertAds is an independent digital marketing consultancy operated by{' '}
              <strong className="text-white font-bold">Debabrata Barik</strong> in Bhubaneswar, Odisha.
              Helping businesses build high-converting websites, generate verified leads, and scale
              consistently through SEO, Google Ads, and Meta Ads.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2 text-xs">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors shadow-sm"
                id="footer-whatsapp-link"
              >
                <MessageSquare className="w-4 h-4 text-emerald-100" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors font-bold shadow-sm"
                id="footer-call-link"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-blue-950 bg-gradient-to-r from-sky-300 via-sky-200 to-white hover:from-white hover:to-sky-200 rounded-xl shadow-md transition-all cursor-pointer"
                id="footer-consult-btn"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-blue-900" />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-200">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-100/80">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors inline-block py-0.5"
                    id={`footer-link-${link.path.replace(/\//g, '-') || 'home'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-sky-300 mb-1.5">
                Work Samples
              </h5>
              <ul className="space-y-1.5 text-xs text-sky-100/80">
                {portfolioSubLinks.map((sub, idx) => (
                  <li key={idx}>
                    <Link
                      to={sub.path}
                      className="hover:text-white transition-colors inline-block"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-200 flex items-center justify-between">
              <span>Services</span>
              <Link to="/services" className="text-[10px] text-sky-300 hover:text-white hover:underline">
                view all →
              </Link>
            </h4>
            <ul className="space-y-2 text-xs text-sky-100/80">
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <Link
                    to={srv.path}
                    className="hover:text-white transition-colors inline-block py-0.5"
                    id={`footer-srv-${srv.path.replace(/\//g, '-')}`}
                  >
                    {srv.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-3 space-y-3 text-xs text-sky-100/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-200 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-300" />
              <span>Office Location</span>
            </h4>
            <address className="not-italic leading-relaxed text-sky-100/90 space-y-1 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
              <div className="font-bold text-white text-sm">Debabrata Barik</div>
              <div>{BUSINESS_INFO.fullAddress.line1}</div>
              <div>{BUSINESS_INFO.fullAddress.line2}</div>
              <div>{BUSINESS_INFO.fullAddress.landmark}</div>
              <div className="text-sky-200 font-bold">
                {BUSINESS_INFO.fullAddress.city} – {BUSINESS_INFO.fullAddress.pin}
              </div>
              <div className="text-sky-100">{BUSINESS_INFO.fullAddress.state}, India</div>
            </address>

            <div className="pt-1 text-[11px] text-sky-200/80">
              Serving Bhubaneswar, Cuttack, Puri, and businesses across Odisha & India.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200/70">
          <div>
            © 2026 DebabrataXpertAds. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-sky-200/90">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link to="/pricing" className="hover:text-white">Pricing</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
            <Link to="/privacy-policy" className="hover:text-white underline underline-offset-2">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
