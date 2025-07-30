import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export const useSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noindex = false
}: SEOProps) => {
  useEffect(() => {
    // Only update if document is available
    if (typeof document !== 'undefined') {
      // Update document title
      document.title = title;

      // Update meta description if provided
      if (description) {
        let meta = document.querySelector('meta[name="description"]');
        if (meta) {
          meta.setAttribute('content', description);
        }
      }

      // Update Open Graph title if provided
      if (title) {
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', title);
        }
      }

      // Update Open Graph description if provided
      if (description) {
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
          ogDesc.setAttribute('content', description);
        }
      }

      // Update Twitter title if provided
      if (title) {
        let twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
          twitterTitle.setAttribute('content', title);
        }
      }

      // Update Twitter description if provided
      if (description) {
        let twitterDesc = document.querySelector('meta[property="twitter:description"]');
        if (twitterDesc) {
          twitterDesc.setAttribute('content', description);
        }
      }
    }

    // Cleanup function
    return () => {
      if (typeof document !== 'undefined') {
        document.title = 'Pointz - Building Better Bike Routes | Safe Cycling Navigation App';
      }
    };
  }, [title, description, keywords, image, url, type, noindex]);
};

// Simple title-only hook for backward compatibility
export const usePageTitle = (title: string) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);
}; 