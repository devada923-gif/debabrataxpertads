import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';

// Main Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Service Subpages
import { WebsiteDesignPage } from './pages/services/WebsiteDesignPage';
import { DigitalMarketingPage } from './pages/services/DigitalMarketingPage';
import { SeoPage } from './pages/services/SeoPage';
import { GoogleAdsPage } from './pages/services/GoogleAdsPage';
import { MetaAdsPage } from './pages/services/MetaAdsPage';
import { SocialMediaPage } from './pages/services/SocialMediaPage';
import { LeadGenerationPage } from './pages/services/LeadGenerationPage';
import { BrandingPage } from './pages/services/BrandingPage';

// Portfolio Subpages
import { WebsitesPortfolioPage } from './pages/portfolio/WebsitesPortfolioPage';
import { DigitalMarketingPortfolioPage } from './pages/portfolio/DigitalMarketingPortfolioPage';
import { BrandingPortfolioPage } from './pages/portfolio/BrandingPortfolioPage';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('Website Design & Development');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-sky-500 selection:text-white">
        {/* Top Sticky Navigation */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />

            {/* About Page */}
            <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Services Main Page */}
            <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Service Subpages */}
            <Route
              path="/services/website-design"
              element={<WebsiteDesignPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketingPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/seo"
              element={<SeoPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/google-ads"
              element={<GoogleAdsPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/meta-ads"
              element={<MetaAdsPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/social-media-marketing"
              element={<SocialMediaPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/lead-generation"
              element={<LeadGenerationPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services/branding"
              element={<BrandingPage onOpenConsultation={handleOpenConsultation} />}
            />

            {/* Portfolio Main & Subpages */}
            <Route
              path="/portfolio"
              element={<PortfolioPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/portfolio/websites"
              element={<WebsitesPortfolioPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/portfolio/digital-marketing"
              element={<DigitalMarketingPortfolioPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/portfolio/branding"
              element={<BrandingPortfolioPage onOpenConsultation={handleOpenConsultation} />}
            />

            {/* Pricing Page */}
            <Route path="/pricing" element={<PricingPage onOpenConsultation={handleOpenConsultation} />} />

            {/* FAQ Page */}
            <Route path="/faq" element={<FaqPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={<ContactPage initialService={selectedServiceForModal} />}
            />

            {/* Privacy Policy Page */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* 404 Not Found Page */}
            <Route path="*" element={<NotFoundPage onOpenConsultation={handleOpenConsultation} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Floating Quick Action CTA bar & WhatsApp/Call Buttons */}
        <FloatingActions />

        {/* Universal Consultation Popup Modal */}
        <ConsultationModal
          isOpen={isConsultationModalOpen}
          onClose={handleCloseConsultation}
          defaultService={selectedServiceForModal}
        />
      </div>
    </Router>
  );
}
