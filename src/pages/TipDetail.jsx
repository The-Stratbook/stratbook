import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Layout from '../layouts/Layout';

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

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await fetch(`/data/siege/tips/${id}.json`);
        if (!response.ok) throw new Error('Tip not found');
        const data = await response.json();
        setTip(data);
      } catch (error) {
        console.error(error);
        setTip(null);
      }
    };

    fetchTip();
  }, [id]);

  if (!tip) {
    return <div className="alert alert-error">Tip not found</div>;
  }

  const baseUrl = window.location.origin;
  const canonicalUrl = `${baseUrl}/siege/tip/${id}`;

  const cleanDescription = tip.description
    .replace(/[*#_~`]/g, '')
    .substring(0, 160)
    .trim();

  const isVerticalVideo = tip.videoUrl?.includes("shorts") || tip.videoUrl?.includes("reel");

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
      "thumbnailUrl": tip.imageUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
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
      <div className="bg-base-200 p-2 sm:p-4">
        <div className="container mx-auto flex flex-col gap-4">
          {!isVerticalVideo && tip.videoUrl && (
            <div id="video-section">
              <TipVideo 
                videoUrl={tip.videoUrl} 
                title={tip.title} 
                onVideoRefChange={handleVideoRefChange}
              />
            </div>
          )}

          <div className={`flex flex-col ${isVerticalVideo ? "md:flex-row" : "flex-col"} gap-4`}>
            <div className={`flex-1 p-3 sm:p-4 rounded-lg`}>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4">{tip.title}</h1>
              <h2 className="text-lg sm:text-xl font-bold mb-2">Tip Description</h2>
              <ReactMarkdown>{tip.description}</ReactMarkdown>

              <div className="mt-4">
                {isVerticalVideo ? (
                  <button
                    className="btn btn-primary w-full sm:hidden"
                    onClick={() => {
                      const videoElement = document.getElementById('video-section');
                      if (videoElement) {
                        videoElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    See the video below
                  </button>
                ) : <></>}
              </div>

              <TipMetadata tip={tip} />
              
              <VideoTimestamps 
                timestamps={tip.videoTimestamps} 
                onTimestampClick={seekToTimestamp} 
              />
              
              <DetailedNotes detailedNotes={tip.detailedNotes} />
              
              <TipFAQ faqs={tip.FAQ} />
              
              <RelatedStrategies strategies={tip.relatedStrategies} />
              
              <ShareTip title={tip.title} />
            </div>

            {isVerticalVideo && tip.videoUrl && (
              <div id="video-section">
                <TipVideo 
                  videoUrl={tip.videoUrl} 
                  title={tip.title} 
                  isVertical={true}
                  onVideoRefChange={handleVideoRefChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TipDetail;