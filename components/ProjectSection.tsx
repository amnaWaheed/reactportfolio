
import React from 'react';
import Slider from './Slider';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { useImageStorage } from '../hooks/useImageStorage';

const ProjectSection: React.FC = () => {
  const { getImage } = useImageStorage();

  return (
    <section id="projects" className="py-24 bg-[#020617] text-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-orange-400">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Featured Projects</h3>
            <p className="mt-4 text-slate-400 text-lg">Delivering high-impact digital solutions for global brands in sports, fintech, and construction.</p>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/50 rounded-full text-sm font-bold text-slate-300 hover:text-orange-400 transition-all">
              View All Work <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <Slider>
            {PROJECTS.map((project) => (
              <div key={project.id} className="p-1 sm:p-2">
                <div className="group relative flex flex-col bg-[#0f172a] rounded-[2.5rem] overflow-hidden border border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/5">
                  {/* Dashboard-style Top Header */}
                  <div className="flex items-center justify-between px-8 py-4 bg-[#1e293b]/50 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{project.name} • Case Study</span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-0 items-stretch h-full">
                    {/* Visual Side */}
                    <div className="relative h-64 sm:h-96 lg:h-auto overflow-hidden">
                      <img 
                        src={getImage(project.id, project.image)} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent hidden lg:block"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:hidden"></div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:pl-16">
                      <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                        Live Product
                      </div>
                      
                      <h4 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white group-hover:text-orange-400 transition-colors leading-tight">
                        {project.name}
                      </h4>
                      
                      <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-8 mb-10 border-t border-slate-800/50 pt-8">
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Core Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span key={tech} className="text-xs font-semibold text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Deliverable</p>
                          <p className="text-xs font-semibold text-slate-300">Scaleable Web App</p>
                        </div>
                      </div>
                      
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-fit flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold transition-all transform hover:translate-x-2 group/btn shadow-xl shadow-orange-900/20 no-underline"
                        >
                          Explore Live 
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="mt-12 flex justify-center lg:hidden">
          <div className="flex items-center gap-4 px-6 py-2 bg-slate-800/30 rounded-full border border-slate-800">
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Swipe to Explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
