import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  schema,
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const baseUrl = 'https://debabrataxpertads.com';
  const canonicalUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Meta Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:type', ogType);
    updateOrCreateMeta('og:site_name', 'DebabrataXpertAds');

    // 5. Update Twitter Meta Tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    updateOrCreateTwitterMeta('twitter:title', title);
    updateOrCreateTwitterMeta('twitter:description', description);

    // 6. Inject JSON-LD Schema
    const existingSchemaScript = document.getElementById('page-dynamic-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-dynamic-schema';
      script.type = 'application/ld+json';
      script.text = typeof schema === 'string' ? schema : JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    }

    return () => {
      const cleanupScript = document.getElementById('page-dynamic-schema');
      if (cleanupScript) {
        cleanupScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, JSON.stringify(schema)]);

  return null;
};
