import React, { useRef, useEffect } from 'react';

const TipVideo = ({ videoUrl, title, isVertical = false, onVideoRefChange = null }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (onVideoRefChange && videoRef.current) {
      onVideoRefChange(videoRef);
    }
  }, [onVideoRefChange]);

  if (!videoUrl) return null;

  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com")) {
      if(url.includes("shorts/")) {
        return url.replace("/shorts/", "/embed/");      
      }     

      return url.replace("youtube.com/watch?v=", "embed/");
    }

    if (url.includes("instagram.com")) {
      return `${url}embed/`;
    }
    
    if (url.includes("tiktok.com")) {
      return url.replace("/video/", "/embed/video/");
    }
  };

  if (isVertical) {
    return (
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden" style={{ height: "75vh" }}>
        <iframe
          ref={videoRef}
          src={getEmbedUrl(videoUrl)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden w-full" style={{ height: "375px" }}>
      <iframe
        ref={videoRef}
        src={getEmbedUrl(videoUrl)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default TipVideo;