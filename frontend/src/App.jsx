import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import FloatingSocial from './Components/FloatingSocial/FloatingSocial';
import Hero from './Pages/Hero';

import './App.css';
import About from './Pages/About';
import Ourteam from './Pages/Ourteam';
import Contact from './Pages/Contact';
import Ourwork from './Pages/Ourwork';
import Event from './Pages/Event';
import News from './Pages/News';
import Gallery from './Pages/Gallery';

const App = () => {
  return (
    <BrowserRouter>
      {/* Universal Scroll To Top controller and floating button */}
      <ScrollToTop />

      {/* Floating Sticky Social Sidebar (WhatsApp, LinkedIn, Instagram, Facebook) */}
      <FloatingSocial />

      <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#fffbf2', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/our-work" element={<Ourwork />} />
            <Route path="/event" element={<Event />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
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