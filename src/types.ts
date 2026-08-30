export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables?: string[];
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  deliverables: string[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Website Design' | 'SEO' | 'Google Ads' | 'Meta Ads' | 'Social Media' | 'Branding' | 'E-commerce';
  objective: string;
  keyDeliverables: string[];
  tags: string[];
  badge: string;
  image?: string;
  videoSrc?: string;
  results?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  icon: string;
}

export interface IndustryItem {
  name: string;
  icon: string;
  tagline: string;
  solutions: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  service: string;
  message: string;
}


