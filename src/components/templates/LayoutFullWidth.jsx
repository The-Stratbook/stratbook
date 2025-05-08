import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import FallbackSEO from '../FallbackSEO';

export default function LayoutFullWidth({ children, seoProps }) {
  return (
    <div>
      <FallbackSEO {...seoProps} />
      <Header />
      <div className={'min-h-screen bg-base-100'}>
        <main className={'w-full'}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};