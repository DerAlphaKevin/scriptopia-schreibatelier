
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Availability } from './components/Availability';
import { Footer } from './components/Footer';
import { BotanicalDecoration } from './components/BotanicalDecoration';
import { Datenschutz } from './components/Datenschutz';
import { Impressum } from './components/Impressum';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} relative overflow-x-hidden`}>
      {/* Background Decorations */}
      <BotanicalDecoration />
      
      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <Availability />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/impressum" element={<Impressum />} />
    </Routes>
  );
};

export default App;
