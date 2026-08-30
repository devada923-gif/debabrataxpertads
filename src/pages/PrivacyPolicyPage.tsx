import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_INFO } from '../data/websiteData';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'August 29, 2026';

  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | DebabrataXpertAds',
    description:
      'Read the Privacy Policy of DebabrataXpertAds to understand how personal information is collected, used and protected.',
    url: 'https://debabrataxpertads.com/privacy-policy',
    publisher: {
      '@type': 'ProfessionalService',
      name: 'DebabrataXpertAds',
      founder: 'Debabrata Barik',
      telephone: '+918249312058',
      email: 'barikdebabrata8249@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur',
        addressLocality: 'Bhubaneswar',
        postalCode: '751003',
        addressRegion: 'Odisha',
        addressCountry: 'India',
      },
    },
  };

  const sections = [
    { id: 'introduction', number: '1', title: 'Introduction' },
    { id: 'information-we-collect', number: '2', title: 'Information We Collect' },
    { id: 'information-you-provide', number: '3', title: 'Information You Provide' },
    { id: 'information-collected-automatically', number: '4', title: 'Information Collected Automatically' },
    { id: 'how-we-use-information', number: '5', title: 'How We Use Your Information' },
    { id: 'whatsapp-phone-communication', number: '6', title: 'WhatsApp and Phone Communication' },
    { id: 'contact-forms-leads', number: '7', title: 'Contact Forms and Lead Information' },
    { id: 'cookies-technologies', number: '8', title: 'Cookies and Similar Technologies' },
    { id: 'google-analytics', number: '9', title: 'Google Analytics' },
    { id: 'marketing-technologies', number: '10', title: 'Google Ads / Meta Ads and Marketing Technologies' },
    { id: 'third-party-services', number: '11', title: 'Third-Party Services' },
    { id: 'data-security', number: '12', title: 'Data Security' },
    { id: 'data-retention', number: '13', title: 'Data Retention' },
    { id: 'privacy-rights', number: '14', title: 'Your Privacy Rights' },
    { id: 'childrens-privacy', number: '15', title: "Children's Privacy" },
    { id: 'external-links', number: '16', title: 'External Links' },
    { id: 'policy-updates', number: '17', title: 'Policy Updates' },
    { id: 'contact-us', number: '18', title: 'Contact Us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Privacy Policy | DebabrataXpertAds"
        description="Read the Privacy Policy of DebabrataXpertAds to understand how personal information is collected, used and protected."
        canonicalPath="/privacy-policy"
        schema={privacySchema}
      />

      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />

      {/* Header Banner */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-gradient-to-b from-sky-50/80 via-blue-50/40 to-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Data Protection & Privacy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              This Privacy Policy explains how <strong className="text-slate-900">DebabrataXpertAds</strong> (operated by independent freelancer and business growth consultant <strong className="text-slate-900">Debabrata Barik</strong>, based in Bhubaneswar, Odisha, India) collects, uses, and safeguards personal information when you visit our website, submit an enquiry, or communicate with us.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Last Updated: <strong className="text-slate-800">{lastUpdated}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Quick Jump Table of Contents Sidebar */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 mb-3.5 pb-2.5 border-b border-slate-200">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs scrollbar-thin">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 w-4">
                        {sec.number}.
                      </span>
                      <span className="font-medium line-clamp-1">{sec.title}</span>
                    </button>
                  ))}
                </nav>

                {/* Direct Contact Card in Sidebar */}
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Privacy Questions?</div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Speak directly with Debabrata Barik for any privacy-related requests.
                  </p>
                  <a
                    href="https://wa.me/918249312058?text=Hi%20Debabrata,%20I%20have%20a%20question%20about%20your%20Privacy%20Policy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs w-full justify-center transition-colors shadow-2xs mt-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp: 8249312058</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Policy Clauses Body */}
            <main className="lg:col-span-8 order-1 lg:order-2 space-y-10 text-slate-700 text-sm leading-relaxed">
              {/* Highlight summary card */}
              <div className="bg-sky-50/60 border-2 border-sky-100 rounded-2xl p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-900 font-black text-sm uppercase tracking-wide">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>Privacy Summary & Core Commitment</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  At DebabrataXpertAds, your privacy and trust are paramount. We collect only the information necessary to communicate with you, understand your business requirements, and deliver requested digital marketing, web design, or content creation services.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold text-blue-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>We do not sell personal information.</span>
                </div>
              </div>

              {/* 1. Introduction */}
              <section id="introduction" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">1.</span> Introduction
                </h2>
                <p>
                  Welcome to <strong>DebabrataXpertAds</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), an independent digital marketing and freelance business growth consultancy owned and operated by <strong>Debabrata Barik</strong>, located in Bhubaneswar, Odisha, India.
                </p>
                <p>
                  This Privacy Policy informs you of our practices regarding the collection, use, disclosure, and protection of information that you may provide while using this website, submitting lead or contact forms, initiating communication via WhatsApp or telephone, or engaging our professional services.
                </p>
                <p>
                  By accessing or using our website, submitting an inquiry, or communicating with us, you acknowledge that you have read and understood the terms of this Privacy Policy.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section id="information-we-collect" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">2.</span> Information We Collect
                </h2>
                <p>
                  We collect information to provide better services to our prospective clients, understand your marketing needs, and effectively respond to your business inquiries.
                </p>
                <p>Information may be collected when you:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li>Submit a contact form or request a quote on this website</li>
                  <li>Request a free consultation or marketing audit</li>
                  <li>Contact us through WhatsApp messaging or voice calls</li>
                  <li>Call our business telephone number directly</li>
                  <li>Send an email inquiry or project brief</li>
                  <li>Subscribe to updates, newsletters, or marketing communications, if applicable</li>
                </ul>
              </section>

              {/* 3. Information You Provide */}
              <section id="information-you-provide" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">3.</span> Information You Provide Directly
                </h2>
                <p>
                  When you interact with our website or contact us, you may provide certain personal and business details directly. This information may include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    'Full Name & Contact Person',
                    'Phone Number & WhatsApp Number',
                    'Email Address',
                    'Business or Company Name',
                    'Website URL or Social Profiles',
                    'Project Requirements & Scope',
                    'Budget Preferences & Goals',
                    'Messages, Feedback & Inquiries',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Information Collected Automatically */}
              <section id="information-collected-automatically" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">4.</span> Information Collected Automatically
                </h2>
                <p>
                  When you navigate through our website, certain technical information about your visit may be collected automatically by our web server, content delivery systems, or browser logs. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li><strong>Device Information:</strong> Device type (desktop, tablet, mobile), operating system, and screen resolution.</li>
                  <li><strong>Browser Details:</strong> Browser type, version, and language preferences.</li>
                  <li><strong>Usage Data:</strong> Pages viewed, time spent per page, referral URLs, entry and exit pages.</li>
                  <li><strong>Approximate Location:</strong> Country, state, or city level geographic data derived from IP addresses.</li>
                </ul>
                <p className="text-xs text-slate-500">
                  This automatically gathered data is primarily aggregated and used to diagnose technical issues, monitor website performance, and enhance visitor experience.
                </p>
              </section>

              {/* 5. How We Use Your Information */}
              <section id="how-we-use-information" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">5.</span> How We Use Your Information
                </h2>
                <p>
                  We process personal information strictly for legitimate business and client-service purposes, including:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li>Responding to inquiries, questions, and quote requests promptly</li>
                  <li>Providing, customizing, and delivering requested web design, digital marketing, or video editing services</li>
                  <li>Preparing commercial estimates, service proposals, and project milestones</li>
                  <li>Scheduling and conducting consultation calls or strategy meetings</li>
                  <li>Communicating project status, deliverables, and performance updates</li>
                  <li>Improving our website performance, layout, and content quality</li>
                  <li>Complying with applicable legal, accounting, and taxation requirements</li>
                </ul>
                <div className="mt-3 p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 text-xs font-semibold">
                  We do not sell, rent, trade, or monetize personal information with any third-party brokers or external marketers.
                </div>
              </section>

              {/* 6. WhatsApp and Phone Communication */}
              <section id="whatsapp-phone-communication" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">6.</span> WhatsApp and Phone Communication
                </h2>
                <p>
                  For the convenience of our clients and prospective partners in Bhubaneswar and across India, we offer direct communication via WhatsApp and telephone (<strong className="text-slate-900">+91 8249312058</strong>).
                </p>
                <p className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>WhatsApp Disclosure:</strong> Users may choose to contact DebabrataXpertAds through WhatsApp. Information shared through WhatsApp is processed through WhatsApp&apos;s platform and is also subject to WhatsApp&apos;s own privacy policies and terms of service. Conversations conducted over WhatsApp are stored in WhatsApp&apos;s client applications and are not independently archived or hosted on this website.
                </p>
                <p>
                  When you initiate a WhatsApp chat or phone call with us, we use your contact details solely to converse regarding your business inquiries, quotations, or ongoing project milestones.
                </p>
              </section>

              {/* 7. Contact Forms and Lead Information */}
              <section id="contact-forms-leads" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">7.</span> Contact Forms and Lead Information
                </h2>
                <p>
                  Information submitted through our website contact forms or consultation modals is transmitted securely and handled with strict confidentiality. This data may be used to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Respond to specific service inquiries and questions</li>
                  <li>Provide requested digital marketing and development services</li>
                  <li>Prepare tailored quotations and project roadmap documents</li>
                  <li>Schedule initial discovery or strategy consultations</li>
                  <li>Communicate regarding active service deliverables</li>
                </ul>
                <p className="text-xs text-slate-600">
                  We maintain this information within our direct business records and communication channels strictly for the duration necessary to address your request and manage client relationships.
                </p>
              </section>

              {/* 8. Cookies and Similar Technologies */}
              <section id="cookies-technologies" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">8.</span> Cookies and Similar Technologies
                </h2>
                <p>
                  A cookie is a small text file placed on your device by your web browser when visiting a website. Our website may use cookies or similar browser storage mechanisms for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li><strong>Essential Functionality:</strong> Ensuring pages load properly, maintaining session state, and preserving user preferences.</li>
                  <li><strong>Performance & Analytics:</strong> Understanding aggregated website traffic, popular service pages, and navigation patterns to optimize user experience.</li>
                  <li><strong>Advertising & Attribution:</strong> Measuring campaign performance and referral attribution where promotional campaigns are active.</li>
                </ul>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="font-bold text-slate-800">Browser Cookie Controls</div>
                  <p>
                    Most web browsers automatically accept cookies by default. You can adjust your browser settings (such as in Chrome, Safari, Edge, or Firefox) to block cookies, clear stored cookies, or notify you when a cookie is being set. Please note that disabling essential cookies may impact certain interactive features on our site.
                  </p>
                </div>
              </section>

              {/* 9. Google Analytics */}
              <section id="google-analytics" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">9.</span> Google Analytics
                </h2>
                <p>
                  This website may use analytics technologies such as Google Analytics (e.g., Google Analytics 4) to monitor and analyze web traffic and user behavior. Google Analytics collects anonymized statistical information about website usage, including page views, session duration, approximate location, and referral channels.
                </p>
                <p className="text-xs text-slate-600">
                  Google uses this data in accordance with Google&apos;s Privacy Policy. You can learn more about how Google processes information by visiting Google&apos;s Privacy & Terms page, or opt out of Google Analytics tracking across the web by installing the official Google Analytics Opt-out Browser Add-on.
                </p>
              </section>

              {/* 10. Google Ads / Meta Ads and Marketing Technologies */}
              <section id="marketing-technologies" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">10.</span> Google Ads, Meta Ads & Marketing Technologies
                </h2>
                <p>
                  This website may use analytics and advertising technologies such as Google Ads, Meta Pixel (Facebook/Instagram), or similar measurement tools. These tools may use cookies, tracking pixels, or similar technologies to measure website usage and advertising performance.
                </p>
                <p>
                  When active, these technologies help us evaluate which marketing campaigns generate genuine interest, understand lead conversion rates, and prevent repetitive advertising. They collect non-sensitive interaction data such as button clicks, page visits, and referral campaign tags.
                </p>
                <p className="text-xs text-slate-500">
                  You can manage your ad personalization settings directly through Google Ad Settings and Facebook/Meta Ad Preferences.
                </p>
              </section>

              {/* 11. Third-Party Services */}
              <section id="third-party-services" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">11.</span> Third-Party Services
                </h2>
                <p>
                  We may utilize trusted third-party service providers to facilitate website hosting, content delivery, domain routing, email transmission, and mapping services (such as Google Maps for business address verification).
                </p>
                <p>
                  These third-party vendors have access to the information needed to perform their designated functions on our behalf and are obligated not to disclose or use it for any secondary purposes.
                </p>
              </section>

              {/* 12. Data Security */}
              <section id="data-security" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">12.</span> Data Security
                </h2>
                <p>
                  We take reasonable technical and organizational measures to protect personal information from unauthorized access, accidental loss, alteration, misuse, or disclosure. These measures include using secure HTTPS encryption across our website, restricted device access, and industry-standard communication platforms.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Please be aware, however, that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information using commercially reasonable standards, we cannot guarantee absolute security.
                </p>
              </section>

              {/* 13. Data Retention */}
              <section id="data-retention" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">13.</span> Data Retention
                </h2>
                <p>
                  We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including fulfilling service deliverables, complying with statutory or legal obligations, maintaining business and accounting records, resolving disputes, and enforcing legitimate business agreements.
                </p>
                <p>
                  When personal information is no longer needed, it is securely deleted, destroyed, or anonymized in accordance with our standard data management procedures.
                </p>
              </section>

              {/* 14. Your Privacy Rights */}
              <section id="privacy-rights" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">14.</span> Your Privacy Rights & Assistance
                </h2>
                <p>
                  You have the right to request access to the personal information we hold about you, request corrections to inaccurate details, or request that your contact information be removed from our active enquiry lists.
                </p>
                <p>
                  To exercise any of these rights, or if you have questions or concerns about how your information is handled, you may reach out directly to Debabrata Barik using the contact information provided below. We will review and respond to your request within a reasonable timeframe.
                </p>
              </section>

              {/* 15. Children's Privacy */}
              <section id="childrens-privacy" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">15.</span> Children&apos;s Privacy
                </h2>
                <p>
                  Our website and professional services are intended solely for business owners, professionals, and individuals aged 18 and older. We do not knowingly collect or solicit personal information from children or minors under the age of 18.
                </p>
                <p className="text-xs text-slate-500">
                  If we become aware that we have inadvertently received personal information from a minor without verified parental consent, we will take prompt steps to delete that information from our records.
                </p>
              </section>

              {/* 16. External Links */}
              <section id="external-links" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">16.</span> External Links & Third-Party Websites
                </h2>
                <p>
                  Our website may contain hyperlinks to external websites, third-party platforms, social media networks (such as LinkedIn, Facebook, Instagram, YouTube), or client portfolio examples that are not owned or operated by DebabrataXpertAds.
                </p>
                <p>
                  Please note that we have no control over, and assume no responsibility for, the content, privacy policies, or practices of any external third-party sites. We encourage you to review the privacy policy of every website you visit before providing any personal details.
                </p>
              </section>

              {/* 17. Policy Updates */}
              <section id="policy-updates" className="scroll-mt-24 space-y-3 border-b border-slate-200/80 pb-8">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">17.</span> Policy Updates & Changes
                </h2>
                <p>
                  We may periodically update this Privacy Policy to reflect changes in our service offerings, technical integrations, operational practices, or relevant legal requirements.
                </p>
                <p>
                  Any updates will be posted on this page with a revised &quot;Last Updated&quot; date at the top of the policy. We encourage visitors to review this page periodically to remain informed about how we protect your information.
                </p>
              </section>

              {/* 18. Contact Us */}
              <section id="contact-us" className="scroll-mt-24 space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600">18.</span> Contact Us
                </h2>
                <p>
                  If you have any questions, comments, or requests regarding this Privacy Policy or our data handling practices, please contact us directly:
                </p>

                <div className="bg-gradient-to-br from-sky-50 via-blue-50/50 to-white rounded-2xl p-6 border-2 border-sky-100 shadow-2xs space-y-3 text-xs sm:text-sm">
                  <div className="font-black text-base text-slate-900">DebabrataXpertAds</div>
                  <div className="text-slate-600">
                    <strong>Owner / Consultant:</strong> Debabrata Barik
                  </div>
                  <div className="text-slate-600">
                    <strong>Business Type:</strong> Freelance Digital Marketing & Business Growth Services
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Plot No. 588/6040, Annapurna Niwas, Laxmi Mandap, Sampur High School, Near SUM Hospital Road, Sampur, Bhubaneswar – 751003, Odisha, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Phone: <a href="tel:+918249312058" className="font-bold text-blue-700 hover:underline">+91 8249312058</a></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>WhatsApp: <a href="https://wa.me/918249312058" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-700 hover:underline">+91 8249312058</a></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Email: <a href="mailto:barikdebabrata8249@gmail.com" className="font-bold text-blue-700 hover:underline">barikdebabrata8249@gmail.com</a></span>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-2.5">
                    <a
                      href="https://wa.me/918249312058?text=Hi%20Debabrata,%20I%20have%20a%20question%20regarding%20the%20Privacy%20Policy."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <Link
                      to="/contact"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>Go to Contact Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};
