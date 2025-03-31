import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <div className="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
