import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import SupportPage from './components/SupportPage';
import ProfilePage from './components/ProfilePage';
import SchoolsList from './components/Schools/SchoolsList';
import ChatPage from './components/ChatPage';
import TestPage from './components/TestPage';
import TestListPage from './components/TestListPage';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/schools" element={<SchoolsList />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/tests" element={<TestPage />} />
          <Route path="/test-list" element={<TestListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
