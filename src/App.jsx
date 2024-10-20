import React, { useRef } from 'react';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutUs from './pages/AboutUs';
import { DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const App = () => {
  const landingRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Navbar */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-800/50 backdrop-blur-md sticky top-0 z-50">
        <a href="#" className="flex items-center justify-center" onClick={() => scrollToSection(landingRef)}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <span className="h-8 w-8 text-blue-400 text-3xl">₹</span>
          </motion.div>
          <span className="ml-2 text-xl font-bold text-blue-300">BudgetBuddy</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button className="text-sm font-medium hover:text-blue-400 transition-colors" onClick={() => scrollToSection(landingRef)}>
            Home
          </button>
          <button className="text-sm font-medium hover:text-blue-400 transition-colors" onClick={() => scrollToSection(featuresRef)}>
            Features
          </button>
          <button className="text-sm font-medium hover:text-blue-400 transition-colors" onClick={() => scrollToSection(aboutRef)}>
            About Us
          </button>
        </nav>
      </header>

      {/* Landing Section */}
      <div ref={landingRef}>
        <LandingPage />
      </div>

      {/* Features Section */}
      <div ref={featuresRef}>
        <FeaturesPage />
      </div>

      {/* About Us Section */}
      <div ref={aboutRef}>
        <AboutUs />
      </div>
    </div>
  );
};

export default App;
