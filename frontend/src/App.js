
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
import ChatWidget from './components/ChatWidget';
import ChatScreen from './components/ChatScreen';
import ChatPage from './components/ChatPage';
import TestPage from './components/TestPage';
import TestListPage from './components/TestListPage';
import IskustvoFinalno from './components/IskustvoFinalno';
import SchoolDetailPage from './components/Schools/SchoolDetailPage';
import SchoolProgramDetails from './components/Schools/SchoolProgramDetails';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {isAuthenticated ?
          <AuthHeader onLogout={handleLogout} /> :
          <Header />
        }
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
          <Route path="/schools/:id" element={<SchoolDetailPage />} />
          <Route path="/school/:id" element={<SchoolDetailPage />} />
          <Route path="/schools/detail/:schoolId" element={<SchoolDetailPage />} />
          <Route path="/schools/program/:schoolId" element={<SchoolProgramDetails />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/tests" element={<TestPage />} />
          <Route path="/test-list" element={<TestListPage />} />
          <Route
            path="/iskustvo-finalno"
            element={isAuthenticated ? <IskustvoFinalno /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
