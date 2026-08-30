import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/websiteData';
import { X, MessageSquare, Phone, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Website Design & Development',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Debabrata,\n\nI want to book a free digital marketing consultation.\n\n*Name:* ${name || 'Prospective Client'}\n*Phone:* ${phone || 'Not provided'}\n*Business:* ${businessName || 'Not provided'}\n*Service/Goal:* ${service}\n*Note:* ${message || 'Please contact me to discuss my business growth.'}`
    );
    window.open(`https://wa.me/918249312058?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Consultation Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Debabrata Barik will personally contact you at <strong className="text-slate-900">{phone}</strong> shortly to review your business goals.
            </p>

            <div className="pt-2 space-y-2">
              <button
                onClick={handleWhatsAppForward}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect Instantly on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full">
                Direct 1-on-1 Discussion
              </span>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Get a Free Consultation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Let's discuss how we can grow your business with smarter digital marketing.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Debabrata Barik"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="8249312058"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business / Brand
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Company or Clinic"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Area of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 focus:bg-white"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="All-in-One Digital Marketing">
                    All-in-One Digital Marketing
                  </option>
                  <option value="Custom Consultation">
                    Custom Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Project Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Need more local leads in Bhubaneswar or better Google ranking..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-white text-xs sm:text-sm bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-600 hover:to-blue-800 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Or Message Directly on WhatsApp</span>
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Zero obligation • No spam guarantee</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
