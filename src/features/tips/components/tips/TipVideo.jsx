import React, { useRef, useEffect } from 'react';
import { 
  InstagramEmbed, 
  TikTokEmbed, 
  YouTubeEmbed 
} from 'react-social-media-embed';

const TipVideo = ({ videoUrl, title, isVertical = false, onVideoRefChange = null }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (onVideoRefChange && videoRef.current) {
      onVideoRefChange(videoRef);
    }
  }, [onVideoRefChange]);

  if (!videoUrl) return null;
  
  // Function to extract YouTube video ID
  const extractYouTubeVideoId = (url) => {
    if (url.includes("shorts/")) {
      const shortsMatch = url.match(/shorts\/([^?\/]+)/);
      return shortsMatch ? shortsMatch[1] : null;
    }
    
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  // Instagram embed component
  if (videoUrl.includes("instagram.com")) {
    const containerStyle = isVertical ? 
      { width: '100%', height: '75vh' } : 
      { width: '100%', height: '375px' };
      
    return (
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden" style={containerStyle}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          height: '100%',
          overflow: 'hidden' 
        }}>
          <InstagramEmbed 
            url={videoUrl}
            width={isVertical ? 328 : "100%"}
            height={isVertical ? "100%" : 375}
            containerClassName="instagram-container" 
          />
        </div>
      </div>
    );
  }
  
  // TikTok embed component
  if (videoUrl.includes("tiktok.com")) {
    const containerStyle = isVertical ? 
      { width: '100%', height: '75vh' } : 
      { width: '100%', height: '375px' };
      
    return (
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden" style={containerStyle}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          height: '100%',
          overflow: 'hidden' 
        }}>
          <TikTokEmbed 
            url={videoUrl}
            width={isVertical ? 325 : "100%"}
            height="100%"
          />
        </div>
      </div>
    );
  }
  
  // YouTube embed component
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) { 
    const containerStyle = isVertical ? 
      { width: '100%', height: '75vh' } : 
      { width: '100%', height: '700px' };

    return (
      <div style={containerStyle}>
        <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden" style={containerStyle}>
          <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          height: '100%',
          overflow: 'hidden' 
        }}>
            <YouTubeEmbed 
              url={videoUrl}
              width={324}
              height={690}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden w-full" style={{ height: "375px" }}>
      <iframe
        ref={videoRef}
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default TipVideo;