import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    service: initialService || 'Website Design & Development',
    budget: '₹10,000 - ₹25,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Debabrata,\n\nI would like to inquire about your services:\n- Name: ${formData.name || 'Not specified'}\n- Phone: ${formData.phone || 'Not specified'}\n- Service: ${formData.service}\n- Budget: ${formData.budget}\n- Message: ${formData.message || 'I would like to discuss my project.'}`
    );
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact DebabrataXpertAds',
    description:
      'Contact Debabrata Barik for digital marketing, website development, SEO, and paid ads consultation in Bhubaneswar, Odisha.',
    url: 'https://debabrataxpertads.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'DebabrataXpertAds',
      founder: 'Debabrata Barik',
      telephone: '+918249312058',
      email: 'debabrataxpertads@gmail.com',
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

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contact DebabrataXpertAds | Digital Marketing in Bhubaneswar"
        description="Get in touch with Debabrata Barik in Bhubaneswar, Odisha. Call 8249312058 or message on WhatsApp for website design, SEO, Google Ads, and digital marketing inquiries."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/70 via-blue-50/40 to-white text-slate-900 relative border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Communication Channel</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Get in Touch with Debabrata Barik
            </h1>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
              Have a question, need a project estimate, or ready to launch your digital marketing campaigns? Connect directly via phone, WhatsApp, or the inquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards & Form Section */}
      <section className="py-16 sm:py-24 bg-slate-50" id="contact-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Direct Contact
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Phone */}
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Phone Call</div>
                      <div className="text-slate-600">{BUSINESS_INFO.phone}</div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">WhatsApp Chat</div>
                      <div className="text-emerald-700 font-medium">
                        {BUSINESS_INFO.whatsapp} (Instant Replies)
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email Address</div>
                      <div className="text-slate-600 break-all">{BUSINESS_INFO.email}</div>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Working Hours</div>
                      <div className="text-slate-600">{BUSINESS_INFO.operatingHours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Address Card */}
              <div className="bg-gradient-to-br from-sky-50 via-blue-50/60 to-white rounded-2xl p-6 sm:p-8 text-slate-900 border border-sky-200 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider">
                  <Building className="w-4 h-4 text-sky-600" />
                  <span>Physical Address & Location</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="font-extrabold text-slate-900 text-base">DebabrataXpertAds</div>
                  <p className="leading-relaxed">{BUSINESS_INFO.fullAddress.line1}</p>
                  <p className="leading-relaxed">{BUSINESS_INFO.fullAddress.line2}</p>
                  <p className="leading-relaxed">{BUSINESS_INFO.fullAddress.landmark}</p>
                  <p className="font-bold text-sky-800">
                    {BUSINESS_INFO.fullAddress.city} – {BUSINESS_INFO.fullAddress.pin},{' '}
                    {BUSINESS_INFO.fullAddress.state}, {BUSINESS_INFO.fullAddress.country}
                  </p>
                </div>

                <div className="pt-2 border-t border-sky-200/80 text-[11px] text-slate-600 flex items-center gap-1.5 font-medium">
                  <Navigation className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span>Landmark: Near SUM Hospital Road, Sampur, Bhubaneswar</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Send Inquiry
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                    Book a Free Consultation or Get a Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the details below. We review inquiries and reply within 2 business hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Debabrata Barik has received your details and will get back to you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            businessType: '',
                            service: 'Website Design & Development',
                            budget: '₹10,000 - ₹25,000',
                            message: '',
                          });
                        }}
                        className="text-xs font-bold text-sky-600 hover:underline"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                      </div>

                      {/* Business Type */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Business / Industry
                        </label>
                        <input
                          type="text"
                          value={formData.businessType}
                          onChange={(e) =>
                            setFormData({ ...formData, businessType: e.target.value })
                          }
                          placeholder="e.g. Healthcare, Retail, Real Estate"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Required */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 bg-white"
                        >
                          <option value="Website Design & Development">Website Design & Development</option>
                          <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                          <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                          <option value="Google Ads Management">Google Ads Management</option>
                          <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook & Instagram)</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Lead Generation Funnels">Lead Generation Funnels</option>
                          <option value="Branding & Creative Design">Branding & Creative Design</option>
                          <option value="Other / Full Custom Solution">Other / Full Custom Solution</option>
                        </select>
                      </div>

                      {/* Estimated Budget */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 bg-white"
                        >
                          <option value="₹7,999 - ₹15,000">₹7,999 - ₹15,000 (Starter)</option>
                          <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000 (Growth)</option>
                          <option value="₹30,000+">₹30,000+ (Scale / Custom)</option>
                          <option value="Not Sure / Need Guidance">Not Sure / Need Guidance</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Project Details & Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current business challenges, target audience, or desired launch date..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                        id="submit-contact-form"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendToWhatsApp}
                        className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
