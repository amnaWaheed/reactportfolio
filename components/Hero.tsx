
import React, { useState } from 'react';
import { FileDown, MapPin, Mail, User } from 'lucide-react';
import { useImageStorage } from '../hooks/useImageStorage';

const Hero: React.FC = () => {
  const { getImage } = useImageStorage();
  const [imageError, setImageError] = useState(false);
  
  const profileImg = getImage('profile', 'https://images.unsplash.com/photo-1640951610232-cc6069e30155?auto=format&fit=crop&q=80&w=1000');
  
  const resumePlaceholder = "data:application/pdf;base64,JVBERi0xLjcKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nIC9QYWdlcyAyIDAgUiA+PiBlbmRvYmogMiAwIG9iagogIDw8IC9UeXBlIC9QYWdlcyAvS2lkcyBbMyAwIFJdIC9Db3VudCAxID4+IGVuZG9iaiAzIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA1OTUgODQyXSAvUmVzb3VyY2VzIDw8ID4+ID4+IGVuZG9iagp0cmFpbGVyCiAgPDwgL1Ryb290IDEgMCBSID4+CJSVFT0Y=";

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24 pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Available for new opportunities</span>
            </div>
            
            <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">Amna Waheed</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <h2 className="text-xl md:text-3xl text-slate-200 font-semibold">
                Senior Full Stack Engineer
              </h2>
              <span className="hidden sm:block text-slate-600">|</span>
              <span className="text-orange-400 font-medium text-lg md:text-xl">MERN & Next.js Expert</span>
            </div>

            <p className="text-base md:text-lg text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Architecting scalable digital experiences with precision. I bridge the gap between complex 
              backend logic and stunning frontend interfaces, specializing in <span className="text-orange-400 font-bold">micro-frontends</span> 
              and <span className="text-orange-400 font-bold">AI integration</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href={resumePlaceholder}
                download="Amna_Waheed_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-orange-500 text-white rounded-2xl font-black shadow-2xl shadow-orange-900/40 hover:bg-orange-600 transition-all transform hover:-translate-y-1 hover:scale-105 no-underline active:scale-95 group"
              >
                <FileDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                DOWNLOAD RESUME
              </a>
              
              <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-slate-500">
                <div className="flex items-center gap-2 hover:text-orange-300 transition-colors cursor-default group">
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide">Lahore, PK</span>
                </div>
                <div className="flex items-center gap-2 hover:text-orange-300 transition-colors cursor-default group">
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide truncate max-w-[200px] xs:max-w-none">amnawaheed445@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-[280px] xs:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="relative">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-orange-500/10 rounded-[4rem] transform rotate-6 animate-spin-slow"></div>
              <div className="absolute inset-0 border border-slate-700/50 rounded-[4rem] transform -rotate-3"></div>
              
              {/* Image Container */}
              <div className="relative z-10 w-64 h-64 xs:w-80 xs:h-80 md:w-[450px] md:h-[450px] mx-auto rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-4 border-slate-800 transition-all duration-700 hover:scale-[1.02] bg-[#020617] flex items-center justify-center">
                {!imageError ? (
                  <img 
                    src={profileImg} 
                    alt="Amna Waheed - Profile" 
                    className="w-full h-full object-cover transition-all duration-1000 hover:scale-110"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-500 gap-4">
                    <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                       <User className="w-12 h-12 text-orange-500" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Profile Picture</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-4 md:right-0 bg-slate-900/90 backdrop-blur-2xl p-4 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 animate-bounce-slow z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <span className="text-white text-2xl md:text-3xl font-black">4+</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-base leading-tight">Years Of</p>
                    <p className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">Experience</p>
                  </div>
                </div>
              </div>

              {/* Coding Badge */}
              <div className="absolute -top-6 -left-4 md:-left-8 bg-slate-900/90 backdrop-blur-xl p-3 md:p-5 rounded-2xl shadow-2xl border border-white/10 animate-float z-20 hidden xs:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border border-slate-900 flex items-center justify-center text-[8px] font-bold text-white shadow-sm">TS</div>
                    <div className="w-6 h-6 rounded-full bg-orange-500 border border-slate-900 flex items-center justify-center text-[8px] font-bold text-white shadow-sm">R</div>
                  </div>
                  <span className="text-xs font-bold text-slate-300">Clean Coder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float-img {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        /* Applied via tailwind config but kept here as backup */
      `}</style>
    </section>
  );
};

export default Hero;
