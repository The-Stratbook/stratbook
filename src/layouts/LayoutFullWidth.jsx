import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FallbackSEO from '../components/FallbackSEO';

export default function LayoutFullWidth({ children, seoProps }) {
  return (
    <div>
      <FallbackSEO {...seoProps} />
      <Header />
      <div className={'min-h-screen bg-base-200'}>
        <main className={'w-full'}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};