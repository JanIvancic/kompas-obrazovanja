import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}


export default App;
