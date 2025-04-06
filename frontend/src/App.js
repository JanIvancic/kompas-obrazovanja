import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';

function AppContent() {
  const location = useLocation();

  const hideLayoutRoutes = ['/signup'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      {!shouldHideLayout && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
