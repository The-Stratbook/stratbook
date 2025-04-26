import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import TipsOverview from './pages/TipsOverview';
import TipDetail from './pages/TipDetail';
import ExternalTools from './pages/ExternalTools';
import Contribute from './pages/Contribute';
import ComingSoon from './pages/ComingSoon';
import TermsOfService from './components/legal/TermsOfService';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import CookiePolicy from './components/legal/CookiePolicy';

// Import Coming Soon feature pages
import OperatorGuides from './pages/coming-soon/OperatorGuides';
import MapGuides from './pages/coming-soon/MapGuides';
import ProSetups from './pages/coming-soon/ProSetups';
import MetaTierLists from './pages/coming-soon/MetaTierLists';
import FunTools from './pages/coming-soon/FunTools';
import MythsSection from './pages/coming-soon/MythsSection';
import CommunityFeatures from './pages/coming-soon/CommunityFeatures';
import SiteImprovements from './pages/coming-soon/SiteImprovements';
import EducationalContent from './pages/coming-soon/EducationalContent';

import { trackPageView } from './ga4';
import { initializeClarity } from './clarity';

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
    initializeClarity();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home isFullWidth={true} />} />
      <Route path="/siege/tips" element={<TipsOverview />} />
      <Route path="/siege/tip/:id" element={<TipDetail />} />
      <Route path="/external-tools" element={<ExternalTools />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      
      {/* Coming Soon feature routes */}
      <Route path="/coming-soon/operator-guides" element={<OperatorGuides />} />
      <Route path="/coming-soon/map-guides" element={<MapGuides />} />
      <Route path="/coming-soon/pro-setups" element={<ProSetups />} />
      <Route path="/coming-soon/meta-tier-lists" element={<MetaTierLists />} />
      <Route path="/coming-soon/fun-tools" element={<FunTools />} />
      <Route path="/coming-soon/myths-section" element={<MythsSection />} />
      <Route path="/coming-soon/community-features" element={<CommunityFeatures />} />
      <Route path="/coming-soon/site-improvements" element={<SiteImprovements />} />
      <Route path="/coming-soon/educational-content" element={<EducationalContent />} />
    </Routes>
);
}

export default App;