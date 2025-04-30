import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FallbackSEO from '../components/FallbackSEO';
// Import commented out for now
// import Breadcrumbs from '../components/Breadcrumbs';

export default function Layout ({ children, seoProps  }) {
  return (
    <div>
      <FallbackSEO {...seoProps} />
      <Header />
      <div className={'min-h-screen bg-base-100 flex flex-col lg:flex-row justify-center'}>
        <aside className="hidden lg:block w-[15%] pr-4">
          <div id="ad-container" className="relative">
            {/* Google AdSense Code */}
            <script 
              async 
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.REACT_APP_ADSENSE_CLIENT_ID}`}
            ></script>
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client={process.env.REACT_APP_ADSENSE_CLIENT_ID}
                 data-ad-slot={process.env.REACT_APP_ADSENSE_AD_SLOT}
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>

            {/* Fallback message for ad blockers */}
            <div id="ad-block-message" className="hidden absolute top-0 left-0 w-full h-full bg-base-200 flex flex-col items-center justify-center">
              <p className="text-center text-sm">Please support us by enabling ads or making a small contribution. Ads help us keep this platform free and running smoothly for everyone.</p>
              <button className="btn btn-primary mt-2">Support Us</button>
            </div>
          </div>
        </aside>
        <main className={'w-full lg:w-[70%] py-10'}>{children}</main>
        <aside className="hidden lg:block w-[15%] pl-4">
          <div id="ad-container" className="relative">
            {/* Google AdSense Code */}
            <script 
              async 
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.REACT_APP_ADSENSE_CLIENT_ID}`}
            ></script>
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client={process.env.REACT_APP_ADSENSE_CLIENT_ID}
                 data-ad-slot={process.env.REACT_APP_ADSENSE_AD_SLOT}
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};