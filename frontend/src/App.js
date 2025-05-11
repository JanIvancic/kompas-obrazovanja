import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import SupportPage from './components/SupportPage';
import ProfilePage from './components/ProfilePage';
import SchoolsList from './components/Schools/SchoolsList';
import ChatPage from './components/ChatPage';
import TestPage from './components/TestPage';
import TestListPage from './components/TestListPage';
import IskustvoFinalno from './components/IskustvoFinalno';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on component mount
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle successful login
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {isAuthenticated ? <AuthHeader /> : <Header />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLogin} />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} 
          />
          <Route path="/schools" element={<SchoolsList />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/tests" element={<TestPage />} />
          <Route path="/test-list" element={<TestListPage />} />
          <Route 
            path="/iskustvo-finalno" 
            element={isAuthenticated ? <IskustvoFinalno /> : <Navigate to="/login" />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
