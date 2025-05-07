// eslint-disable-next-line no-unused-vars
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
import OperatorRoulette from './pages/OperatorRoulette';
import ComponentDemo from './pages/ComponentDemo';

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

import { trackPageView, initializeGA } from './ga4';
import { initializeClarity } from './clarity';
import { initializeGTM } from './gtm';
import Hub from './pages/Hub';
import HubMaps from './pages/HubMaps';
import HubOperators from './pages/HubOperators';
import OperatorDetail from './pages/OperatorDetail';
import MapDetail from './pages/MapDetail';
import KillBoard from './pages/KillBoard';

function App() {
  const location = useLocation();

  useEffect(() => {
    initializeGA();
    initializeGTM();
    initializeClarity();
    trackPageView(location.pathname);
  }, [location]);

  return (
    <Routes>
      {/* Default The Stratbook route */}
      <Route path="/" element={<Home/>} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/component-demo" element={<ComponentDemo />} />
      
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

      {/* Siege routes */}
      <Route path="/siege/tips" element={<TipsOverview />} />
      <Route path="/siege/tip/:id" element={<TipDetail />} />
      <Route path="/siege/external-tools" element={<ExternalTools />} />

      {/* Hub routes */}
      <Route path="/siege/hub" element={<Hub />} />
      <Route path="/siege/hub/maps" element={<HubMaps />} />
      <Route path="/siege/hub/maps/:mapName" element={<MapDetail />} />
      <Route path="/siege/hub/operators" element={<HubOperators/>} />
      <Route path="/siege/hub/operators/:operatorName" element={<OperatorDetail />} />

      {/* Fun Tools routes */}
      <Route path="/siege/fun/killboard" element={<KillBoard />} />
      <Route path="/siege/fun/operator-roulette" element={<OperatorRoulette />} />
    </Routes>
);
}

export default App;