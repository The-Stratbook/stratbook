import React from 'react';
import SEO from './SEO';

const FallbackSEO = ({ 
  title, 
  description, 
  url, 
  image, 
  type = "website", 
  faqSchema = {},
  keywords,
  author,
  publishedDate,
  modifiedDate
}) => {
  return (
    <SEO
      title={title || 'The Stratbook'}
      description={description || 'Discover strategies, tips, and tricks to elevate your tactical FPS gameplay. Built by players, for the community.'}
      url={url || window.location.href}
      image={image}
      type={type}
      canonicalUrl={url || window.location.href}
      faqSchema={Object.keys(faqSchema).length > 0 ? faqSchema : null}
      keywords={keywords || 'Tactical FPS, Rainbow Six Siege, FPS tips, gaming strategies, shooter tips, operator guides, map strategies, beginner guides'}
      author={author || 'The Stratbook'}
      publishedDate={publishedDate}
      modifiedDate={modifiedDate}
    />
  );
};

export default FallbackSEO;