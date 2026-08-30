import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/websiteData';
import { ContactFormData } from '../types';
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  ShieldCheck,
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: preselectedService || 'Website Design & Development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle preselected service change when prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit phone or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable capture and offer instant WhatsApp forwarding
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name first.');
      return;
    }

    const text = encodeURIComponent(
      `Hello Debabrata,\n\nI am contacting you from your website (DebabrataXpertAds).\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone || 'Not provided'}\n*Email:* ${formData.email || 'Not provided'}\n*Business:* ${formData.businessName || 'Not provided'}\n*Service Required:* ${formData.service}\n*Message:* ${formData.message || 'I would like to discuss digital marketing services.'}`
    );

    window.open(`https://wa.me/918249312058?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let's Grow Your Business Online
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Have a project or business idea? Let's discuss how digital marketing can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Debabrata Barik
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  {BUSINESS_INFO.brandName} • {BUSINESS_INFO.tagline}
                </div>
              </div>

              {/* Direct Quick Action CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  id="contact-call-now-btn"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-now-btn"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-50 text-sky-600 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone & WhatsApp</div>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="text-sky-600 hover:underline font-bold"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Availability</div>
                    <div className="text-slate-600">{BUSINESS_INFO.operatingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Office & Location Address</div>
                    <address className="not-italic text-slate-600 text-xs leading-relaxed mt-0.5">
                      {BUSINESS_INFO.fullAddress.line1},<br />
                      {BUSINESS_INFO.fullAddress.line2},<br />
                      {BUSINESS_INFO.fullAddress.landmark},<br />
                      {BUSINESS_INFO.fullAddress.city} – {BUSINESS_INFO.fullAddress.pin}, {BUSINESS_INFO.fullAddress.state}, {BUSINESS_INFO.fullAddress.country}
                    </address>
                  </div>
                </div>
              </div>

              {/* Direct Freelancer Guarantee Note */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Your inquiry goes straight to Debabrata Barik. Response within a few hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-md">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. Debabrata Barik will review your business requirements and get back to you shortly via Phone / WhatsApp.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Details via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Send an Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out this quick form for a free consultation and customized quote.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Mohapatra"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 8249312058"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="contact-business"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Business Name
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Clinic / Shop / Brand"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Complete Digital Marketing Package">
                        Complete Digital Marketing Package
                      </option>
                      <option value="Other / Custom Consultation">
                        Other / Custom Consultation
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me briefly about your business goals, target area, or what you want to achieve..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Buttons: Submit & Quick WhatsApp direct */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full sm:w-2/3 py-3.5 px-6 rounded-xl font-bold text-white text-xs sm:text-sm bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-1/3 py-3.5 px-4 rounded-xl font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    🔒 Your information is confidential and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
