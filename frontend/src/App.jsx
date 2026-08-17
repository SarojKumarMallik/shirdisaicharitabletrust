import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Pages/Hero';

import './App.css';
import About from './Pages/About';
import Ourteam from './Pages/Ourteam';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#fffbf2', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/our-work" element={<Hero />} />
            <Route path="/event" element={<Hero />} />
            <Route path="/news" element={<Hero />} />
            <Route path="/gallery" element={<Hero />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/donate" element={<Hero />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;