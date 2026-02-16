
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionFromPath = pathname.substring(1);
    if (sectionFromPath) {
      setActiveSection(sectionFromPath);
    } else {
      setActiveSection('about');
    }
  }, [pathname]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Experience', path: '/experience', id: 'experience' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Skills', path: '/skills', id: 'skills' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  const activeStyle = "text-orange-400 font-bold border-b-2 border-orange-400 pb-1";
  const inactiveStyle = "text-slate-300 hover:text-orange-400 font-medium transition-colors";

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled || isOpen ? 'bg-[#020617]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex-shrink-0 z-[110]">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              AW.
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={activeSection === link.id ? activeStyle : inactiveStyle}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-[110]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-orange-400 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay (Backdrop) */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-[105] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-[#020617] shadow-2xl transition-transform duration-500 ease-in-out z-[106] border-l border-slate-800/50 bg-light ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Added background layer to ensure solid color coverage */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#020617] -z-10 opacity-50"></div>
        
        <div className="flex flex-col h-full pt-28 px-8 space-y-8 relative z-10">
          <div className="flex flex-col space-y-6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 border-b border-slate-800 pb-2">Navigation</p>
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition-all group flex items-center gap-3 py-1 ${
                  activeSection === link.id ? 'text-orange-500 translate-x-2' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-orange-500 transition-opacity ${activeSection === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pb-12 pt-8 border-t border-slate-800">
             <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Connect With Me</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/amna-waheed" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-3 bg-[#1e293b] hover:bg-orange-500/20 rounded-xl text-slate-400 hover:text-orange-400 transition-all border border-slate-700"
                  >
                    <span className="text-xs font-bold">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/amnawaheed" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-3 bg-[#1e293b] hover:bg-orange-500/20 rounded-xl text-slate-400 hover:text-orange-400 transition-all border border-slate-700"
                  >
                    <span className="text-xs font-bold">GitHub</span>
                  </a>
                </div>
                <p className="text-[10px] text-slate-600 mt-4 italic text-center">© {new Date().getFullYear()} Amna Waheed</p>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
