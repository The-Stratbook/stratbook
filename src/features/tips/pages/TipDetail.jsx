import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Layout from '../../../components/templates/Layout';
import { tipsService } from '../../../services/api';

// Import our new reusable components
import TipFAQ from '../components/tips/TipFAQ';
import RelatedStrategies from '../components/tips/RelatedStrategies';
import ShareTip from '../components/tips/ShareTip';
import TipVideo from '../components/tips/TipVideo';
import VideoTimestamps from '../components/tips/VideoTimestamps';
import TipMetadata from '../components/tips/TipMetadata';
import DetailedNotes from '../components/tips/DetailedNotes';

const TipDetail = () => {
  const { id } = useParams();
  const videoRef = useRef(null);
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using the tipsService instead of direct fetch
    const fetchTip = async () => {
      setLoading(true);
      try {
        const data = await tipsService.getTipById(id);
        setTip(data);
      } catch (error) {
        console.error(error);
        setTip(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto flex justify-center items-center min-h-[50vh]">
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!tip) {
    return (
      <Layout>
        <div className="container mx-auto p-4">
          <div className="alert alert-error">Tip not found</div>
        </div>
      </Layout>
    );
  }

  const baseUrl = window.location.origin;
  const canonicalUrl = `${baseUrl}/siege/tip/${id}`;

  const cleanDescription = tip.description
    .replace(/[*#_~`]/g, '')
    .substring(0, 160)
    .trim();

  const isVerticalVideo = tip.videoUrl?.includes("shorts") || tip.videoUrl?.includes("reel") || tip.videoUrl?.includes("instagram") || tip.videoUrl?.includes("tiktok");

  const convertToSeconds = (time) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const extractYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const seekToTimestamp = (timestamp) => {
    if (!videoRef.current) return;
    const seconds = convertToSeconds(timestamp);
    const videoId = extractYouTubeVideoId(tip.videoUrl);
    if (videoId) {
      videoRef.current.current.src = `https://www.youtube.com/embed/${videoId}?start=${seconds}&autoplay=1`;
    }
  };

  const handleVideoRefChange = (ref) => {
    videoRef.current = ref;
  };

  // Generate keywords based on tip data
  const generateKeywords = () => {
    const keywords = [
      'Rainbow Six Siege', 
      'R6', 
      'Siege tips', 
      tip.side, 
      tip.skill
    ];
    
    // Add tags as keywords
    if (tip.tags && tip.tags.length) {
      keywords.push(...tip.tags);
    }

    // Add operator names if present
    if (tip.operators && tip.operators.length) {
      keywords.push(...tip.operators);
    }

    // Add map name if present
    if (tip.map) {
      keywords.push(tip.map);
    }

    return keywords.join(', ');
  };

  const faqSchema = tip.FAQ ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tip.FAQ.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Create an Article schema for structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": tip.title,
    "description": cleanDescription,
    "image": tip.imageUrl || `${baseUrl}/images/general/logo.png`,
    "author": {
      "@type": "Person",
      "name": tip.contributor?.name || "Siege Tips"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Siege Tips",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/general/logo.png`
      }
    },
    "datePublished": tip.publishedDate || new Date().toISOString(),
    "dateModified": tip.lastModified || tip.publishedDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  // Create a VideoObject schema if the tip has a video
  const createVideoSchema = () => {
    if (!tip.videoUrl) return null;
    
    const videoId = extractYouTubeVideoId(tip.videoUrl);
    if (!videoId) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": tip.title,
      "description": cleanDescription,
      "thumbnailUrl": tip.imageUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.png`,
      "uploadDate": tip.publishedDate || new Date().toISOString(),
      "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
      "embedUrl": `https://www.youtube.com/embed/${videoId}`,
      "publisher": {
        "@type": "Organization",
        "name": "The Stratbook",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/general/logo.png`
        }
      }
    };
  };

  // Add video schema to the existing schema array
  const videoSchema = createVideoSchema();
  const schemaMarkup = [articleSchema];
  
  if (faqSchema) {
    schemaMarkup.push(faqSchema);
  }
  
  if (videoSchema) {
    schemaMarkup.push(videoSchema);
  }

  // Components for ReactMarkdown to render links with primary color
  const markdownComponents = {
    a: ({ node, ...props }) => (
      <a {...props} className="text-primary hover:underline" />
    )
  };

  return (
    <Layout seoProps={{ 
      title: tip.title, 
      description: cleanDescription, 
      url: canonicalUrl, 
      image: tip.imageUrl || `${baseUrl}/images/general/logo.png`, 
      type: "article", 
      faqSchema: schemaMarkup,
      keywords: generateKeywords(),
      author: tip.contributor?.name,
      publishedDate: tip.publishedDate,
      modifiedDate: tip.lastModified
    }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Video Section */}
        {!isVerticalVideo && tip.videoUrl && (
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <TipVideo 
              videoUrl={tip.videoUrl} 
              title={tip.title} 
              isVertical={false}
              onVideoRefChange={handleVideoRefChange}
            />
          </section>
        )}

        <div className={`flex flex-col ${isVerticalVideo ? "md:flex-row" : "flex-col"} gap-8`}>
          {/* Left Column */}
          <div className="w-full md:w-2/3">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{tip.title}</h1>
              <ReactMarkdown 
                rehypePlugins={[rehypeRaw]} 
                components={markdownComponents}
              >
                {tip.description}
              </ReactMarkdown>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <TipMetadata tip={tip} />
            </section>

            {tip.videoTimestamps && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Video Timestamps</h2>
                <VideoTimestamps 
                  timestamps={tip.videoTimestamps} 
                  onTimestampClick={seekToTimestamp} 
                />
              </section>
            )}

            {tip.detailedNotes && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <DetailedNotes detailedNotes={tip.detailedNotes} />
              </section>
            )}

            {tip.FAQ && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">FAQs</h2>
                <TipFAQ faqs={tip.FAQ} />
              </section>
            )}

            {tip.relatedStrategies && tip.relatedStrategies.length > 0 && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Related Strategies</h2>
                <RelatedStrategies strategies={tip.relatedStrategies} />
              </section>
            )}

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <ShareTip title={tip.title} />
            </section>
          </div>

          {/* Right Column */}
          {isVerticalVideo && tip.videoUrl && (
            <div className="w-full md:w-1/3">
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <TipVideo 
                  videoUrl={tip.videoUrl} 
                  title={tip.title} 
                  isVertical={true}
                  onVideoRefChange={handleVideoRefChange}
                />
              </section>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TipDetail;