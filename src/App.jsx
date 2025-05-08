// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { trackPageView, initializeGA } from './ga4';
import { initializeClarity } from './clarity';
import { initializeGTM } from './gtm';
import ScrollToTop from './components/ScrollToTop';

import Home from './Home';
import TipsOverview from './features/tips/pages/TipsOverview';
import TipDetail from './features/tips/pages/TipDetail';
import ExternalTools from './pages/ExternalTools';
import Contribute from './pages/Contribute';
import ComingSoon from './pages/ComingSoon';
import Fun from './pages/Fun';
import TermsOfService from './components/legal/TermsOfService';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import CookiePolicy from './components/legal/CookiePolicy';
import OperatorRoulette from './features/roulette/pages/OperatorRoulette';
import ComponentDemo from './features/examples/pages/ComponentDemo';
import OperatorGuides from './features/coming-soon/pages/OperatorGuides';
import MapGuides from './features/coming-soon/pages/MapGuides';
import ProSetups from './features/coming-soon/pages/ProSetups';
import MetaTierLists from './features/coming-soon/pages/MetaTierLists';
import MythsSection from './features/coming-soon/pages/MythsSection';
import CommunityFeatures from './features/coming-soon/pages/CommunityFeatures';
import SiteImprovements from './features/coming-soon/pages/SiteImprovements';
import EducationalContent from './features/coming-soon/pages/EducationalContent';
import Hub from './pages/Hub';
import HubMaps from './features/hub/pages/Maps';
import HubOperators from './features/hub/pages/Operators';
import OperatorDetail from './features/operators/pages/OperatorDetail';
import MapDetail from './features/maps/pages/MapDetail';
import KillBoard from './features/killboard/pages/KillBoard';

function App() {
  const location = useLocation();

  useEffect(() => {
    initializeGA();
    initializeGTM();
    initializeClarity();
    trackPageView(location.pathname);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Default The Stratbook route */}
        <Route path="/" element={<Home/>} />
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
        <Route path="/coming-soon/myths-section" element={<MythsSection />} />
        <Route path="/coming-soon/community-features" element={<CommunityFeatures />} />
        <Route path="/coming-soon/site-improvements" element={<SiteImprovements />} />
        <Route path="/coming-soon/educational-content" element={<EducationalContent />} />

        {/* Siege routes */}
        <Route path="/siege/tips" element={<TipsOverview />} />
        <Route path="/siege/tip/:id" element={<TipDetail />} />
        <Route path="/siege/external-tools" element={<ExternalTools />} />

        {/* Siege Hub routes */}
        <Route path="/siege/hub" element={<Hub />} />
        <Route path="/siege/hub/maps" element={<HubMaps />} />
        <Route path="/siege/hub/maps/:mapName" element={<MapDetail />} />
        <Route path="/siege/hub/operators" element={<HubOperators/>} />
        <Route path="/siege/hub/operators/:operatorName" element={<OperatorDetail />} />

        {/* Siege Fun Tools routes */}
        <Route path="/siege/fun" element={<Fun />} />
        <Route path="/siege/fun/killboard" element={<KillBoard />} />
        <Route path="/siege/fun/operator-roulette" element={<OperatorRoulette />} />

        {/* Siege Examples routes */}
        <Route path="/component-demo" element={<ComponentDemo />} />
      </Routes>
    </>
  );
}

export default App;