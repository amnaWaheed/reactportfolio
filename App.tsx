
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import Reveal from './components/Reveal';
import TechBackground from './components/TechBackground';
import ImageCustomizer from './components/ImageCustomizer';
import { Settings } from 'lucide-react';

const Home: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.substring(1);
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div className="relative">
      {/* Tech-inspired Particle Background */}
      <TechBackground />
      
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="blob top-[-10%] left-[-5%] scale-150 opacity-10" style={{ animationDelay: '0s' }}></div>
        <div className="blob bottom-[5%] right-[-10%] opacity-15" style={{ animationDelay: '-5s', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)' }}></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <Reveal><Hero /></Reveal>
      <Reveal><ExperienceSection /></Reveal>
      <Reveal><ProjectSection /></Reveal>
      <Reveal><SkillsSection /></Reveal>
      <Reveal><ContactSection /></Reveal>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-orange-500 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-12 bg-[#020617] border-t border-slate-800 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-6">
            Amna Waheed
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind CSS.
            </p>
            <button 
              onClick={() => setIsCustomizerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e293b] border border-slate-700 text-slate-400 hover:text-orange-400 hover:border-orange-500/30 rounded-full text-xs font-bold transition-all"
            >
              <Settings className="w-3.5 h-3.5" />
              Customize Portfolio Images
            </button>
          </div>
        </div>
      </footer>
      <ImageCustomizer isOpen={isCustomizerOpen} onClose={() => setIsCustomizerOpen(false)} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
