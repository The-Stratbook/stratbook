import { useEffect } from 'react';

const SEO = ({ title, description, url, image, type, canonicalUrl, faqSchema, keywords, author, publishedDate, modifiedDate }) => {
  useEffect(() => {
    // Update the document title
    document.title = title ? `${title} - The Stratbook` : 'The Stratbook';
    
    // Update meta tags
    const metaTags = {
      description: description || 'Tips and tricks for Rainbow Six Siege',
      'og:title': title || 'The Stratbook',
      'og:description': description || 'Tips and tricks for Rainbow Six Siege',
      'og:url': url || window.location.href,
      'og:type': type || 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title || 'The Stratbook',
      'twitter:description': description || 'Tips and tricks for Rainbow Six Siege',
      // New meta tags
      'keywords': keywords || 'Rainbow Six Siege, R6, Siege, tips, strategies, gaming',
      'author': author || 'The Stratbook',
      'robots': 'index, follow',
      'language': 'en',
    };

    // Add structured data for articles
    if (type === 'article' && (publishedDate || modifiedDate)) {
      metaTags['article:published_time'] = publishedDate;
      metaTags['article:modified_time'] = modifiedDate || publishedDate;
    }

    if (image) {
      metaTags['og:image'] = image;
      metaTags['twitter:image'] = image;
    }

    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`) ||
                   document.querySelector(`meta[property="${name}"]`);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:') || name.startsWith('article:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Handle canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalUrl);
    } else if (canonicalTag) {
      canonicalTag.remove();
    }

    // Handle schema data - FIX: remove all existing schema tags with data-schema-type attribute first
    // This ensures we don't accumulate multiple schema tags when navigating or clicking buttons
    const existingSchemaTags = document.querySelectorAll('script[data-schema-type]');
    existingSchemaTags.forEach(tag => tag.remove());

    if (faqSchema) {
      const schemaTag = document.createElement('script');
      schemaTag.type = 'application/ld+json';
      // Add a custom attribute to identify our schema tags for later cleanup
      schemaTag.setAttribute('data-schema-type', 'faq');
      schemaTag.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(schemaTag);
    }

    // Cleanup function
    return () => {
      // We don't want to remove title or meta tags on unmount
      // as this can cause flicker, and the next component will update them
    };
  }, [title, description, url, image, type, canonicalUrl, faqSchema, keywords, author, publishedDate, modifiedDate]);

  return null; // This component doesn't render anything
};

export default SEO;