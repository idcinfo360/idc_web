import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import SponsorsPage from './pages/SponsorsPage';
import MarketingPage from './pages/MarketingPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppCTA from './components/WhatsAppCTA';
import PageTransition from './components/PageTransition';
import SimpleRouterLoader from './components/SimpleRouterLoader';

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <SimpleRouterLoader />;
  }

  return (
    <>
      <Navbar />
      <main className="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </PageTransition>
      </main>
      <WhatsAppCTA floating />
      <Footer />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
