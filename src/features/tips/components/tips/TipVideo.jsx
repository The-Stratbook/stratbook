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
  
  // Instagram embed component
  if (videoUrl.includes("instagram.com")) {
    return (
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden w-full" 
        style={{ 
          height: isVertical ? '75vh' : '375px',
          maxWidth: isVertical ? '430px' : '100%',
          margin: '0 auto'
        }}>
        <div className="flex justify-center h-full overflow-hidden">
          <InstagramEmbed 
            url={videoUrl}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
  
  // TikTok embed component
  if (videoUrl.includes("tiktok.com")) {
    return (
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden w-full"
        style={{ 
          height: isVertical ? '75vh' : '375px',
          maxWidth: isVertical ? '380px' : '100%',
          margin: '0 auto'
        }}>
        <div className="flex justify-center h-full overflow-hidden">
          <TikTokEmbed 
            url={videoUrl}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
  
  // YouTube embed component
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) { 
    return (
      <div 
        className="bg-base-100 shadow-xl rounded-lg overflow-hidden w-full"
        style={{ 
          height: isVertical ? '75vh' : '600px',  
          maxWidth: isVertical ? '430px' : '100%',
          margin: '0 auto'
        }}
      >
        <div className="w-full h-full">
          <YouTubeEmbed 
            url={videoUrl}
            width="100%"
            height="100%"
          />
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