import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/websiteData';
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Globe,
  TrendingUp,
  Search,
  Sparkles,
  Megaphone,
  Share2,
  UserCheck,
  Palette,
  Briefcase,
  Layers,
  Layout,
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const portfolioTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();

  // Scroll listener for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPortfolioDropdownOpen(false);
  }, [location.pathname]);

  const serviceLinks = [
    {
      title: 'Website Design & Development',
      path: '/services/website-design',
      desc: 'High-speed, responsive business websites & landing pages',
      icon: Globe,
    },
    {
      title: 'Digital Marketing Strategy',
      path: '/services/digital-marketing',
      desc: 'Full-funnel multi-channel growth campaigns',
      icon: TrendingUp,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      path: '/services/seo',
      desc: 'Rank on Google organically for high-intent searches',
      icon: Search,
    },
    {
      title: 'Google Ads (PPC)',
      path: '/services/google-ads',
      desc: 'High-converting search and display ad management',
      icon: Sparkles,
    },
    {
      title: 'Meta Ads (Facebook & Instagram)',
      path: '/services/meta-ads',
      desc: 'Targeted visual ads, funnels & instant lead forms',
      icon: Megaphone,
    },
    {
      title: 'Social Media Marketing',
      path: '/services/social-media-marketing',
      desc: 'Brand awareness, content calendar & engagement',
      icon: Share2,
    },
    {
      title: 'Lead Generation Funnels',
      path: '/services/lead-generation',
      desc: 'WhatsApp leads, inquiry forms & conversion tracking',
      icon: UserCheck,
    },
    {
      title: 'Branding & Creative Design',
      path: '/services/branding',
      desc: 'Logo, social creatives, ad banners & identity',
      icon: Palette,
    },
  ];

  const portfolioLinks = [
    {
      title: 'Website Portfolio',
      path: '/portfolio/websites',
      desc: 'Explore responsive websites & landing page concepts',
      icon: Layout,
    },
    {
      title: 'Digital Marketing Portfolio',
      path: '/portfolio/digital-marketing',
      desc: 'SEO, Google Ads & Meta Ads campaign architectures',
      icon: TrendingUp,
    },
    {
      title: 'Branding & Creative Portfolio',
      path: '/portfolio/branding',
      desc: 'Visual assets, ad creatives & brand identity kits',
      icon: Palette,
    },
  ];

  const isServicesActive = location.pathname.startsWith('/services');
  const isPortfolioActive = location.pathname.startsWith('/portfolio');

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90'
          : 'py-3.5 sm:py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-0.5"
            aria-label="DebabrataXpertAds Home"
            id="navbar-brand-logo"
          >
            <BrandLogo size={isScrolled ? 'sm' : 'md'} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50/80 font-semibold'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
              id="nav-link-home"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50/80 font-semibold'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
              id="nav-link-about"
            >
              About Us
            </NavLink>

            {/* Services Dropdown Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                setServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => {
                  setServicesDropdownOpen(false);
                }, 150);
              }}
            >
              <NavLink
                to="/services"
                className={() =>
                  `inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isServicesActive
                      ? 'text-sky-600 bg-sky-50/80 font-semibold'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                  }`
                }
                id="nav-link-services"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                  }`}
                />
              </NavLink>

              {/* Dropdown Panel */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[560px] bg-white rounded-xl shadow-xl border border-slate-200/90 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  id="services-mega-menu"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Digital Growth Services
                    </span>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {serviceLinks.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                        id={`menu-${service.path.replace(/\//g, '-')}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600 transition-colors leading-tight">
                            {service.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (portfolioTimeoutRef.current) clearTimeout(portfolioTimeoutRef.current);
                setPortfolioDropdownOpen(true);
              }}
              onMouseLeave={() => {
                portfolioTimeoutRef.current = setTimeout(() => {
                  setPortfolioDropdownOpen(false);
                }, 150);
              }}
            >
              <NavLink
                to="/portfolio"
                className={() =>
                  `inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isPortfolioActive
                      ? 'text-sky-600 bg-sky-50/80 font-semibold'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                  }`
                }
                id="nav-link-portfolio"
              >
                <span>Portfolio</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    portfolioDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                  }`}
                />
              </NavLink>

              {/* Portfolio Dropdown Panel */}
              {portfolioDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-xl shadow-xl border border-slate-200/90 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  id="portfolio-mega-menu"
                >
                  <div className="pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Work Samples
                    </span>
                    <Link
                      to="/portfolio"
                      className="text-xs font-semibold text-sky-600 hover:text-sky-700"
                      onClick={() => setPortfolioDropdownOpen(false)}
                    >
                      All Work
                    </Link>
                  </div>

                  {portfolioLinks.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setPortfolioDropdownOpen(false)}
                        className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                        id={`menu-${item.path.replace(/\//g, '-')}`}
                      >
                        <div className="w-7 h-7 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50/80 font-semibold'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
              id="nav-link-pricing"
            >
              Pricing
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50/80 font-semibold'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
              id="nav-link-faq"
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50/80 font-semibold'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
              id="nav-link-contact"
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href={BUSINESS_INFO.phoneHref}
              id="navbar-call-btn"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-sky-600 bg-slate-100 hover:bg-sky-50 rounded-lg transition-colors border border-slate-200/80"
              title="Call Debabrata Barik"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Primary CTA */}
            <button
              id="navbar-cta-btn"
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 rounded-lg shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-xs"
              id="mobile-header-consult-btn"
            >
              Consult
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Services Accordion */}
            <div>
              <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold ${
                    isServicesActive ? 'text-sky-600' : 'text-slate-700'
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 text-slate-500 hover:text-sky-600"
                  aria-label="Toggle services list"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg my-1">
                  {serviceLinks.map((service, index) => (
                    <NavLink
                      key={index}
                      to={service.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-1.5 px-2.5 text-sm rounded transition-colors ${
                          isActive
                            ? 'text-sky-600 font-bold bg-sky-50'
                            : 'text-slate-600 hover:text-sky-600'
                        }`
                      }
                    >
                      {service.title}
                    </NavLink>
                  ))}
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 px-2.5 text-xs font-bold text-sky-600 hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Portfolio Accordion */}
            <div>
              <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-50">
                <Link
                  to="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold ${
                    isPortfolioActive ? 'text-sky-600' : 'text-slate-700'
                  }`}
                >
                  Portfolio
                </Link>
                <button
                  type="button"
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                  className="p-1 text-slate-500 hover:text-sky-600"
                  aria-label="Toggle portfolio list"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobilePortfolioOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
              </div>

              {mobilePortfolioOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg my-1">
                  {portfolioLinks.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-1.5 px-2.5 text-sm rounded transition-colors ${
                          isActive
                            ? 'text-sky-600 font-bold bg-sky-50'
                            : 'text-slate-600 hover:text-sky-600'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                  <Link
                    to="/portfolio"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 px-2.5 text-xs font-bold text-sky-600 hover:underline"
                  >
                    View All Projects →
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Quick Actions in Mobile Drawer */}
          <div className="pt-4 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 shadow-sm"
              id="mobile-drawer-consult-btn"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100"
                id="mobile-drawer-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 hover:bg-slate-200"
                id="mobile-drawer-call-btn"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
