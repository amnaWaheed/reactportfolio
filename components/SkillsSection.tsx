
import React from 'react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';
import { Code2, Server, Database, BrainCircuit } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Code2 className="w-8 h-8 text-orange-400" />;
      case 'Backend': return <Server className="w-8 h-8 text-orange-400" />;
      case 'Database & Tools': return <Database className="w-8 h-8 text-orange-400" />;
      case 'AI Tools': return <BrainCircuit className="w-8 h-8 text-orange-400" />;
      default: return <Code2 className="w-8 h-8 text-orange-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#020617] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="My Expertise" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat) => (
            <div key={cat.category} className="bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-slate-800 hover:border-orange-500/30 transition-all hover:-translate-y-1">
              <div className="mb-6 p-3 bg-orange-500/5 w-fit rounded-xl">
                {getIcon(cat.category)}
              </div>
              <h4 className="text-xl font-bold text-white mb-6">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-[#1e293b] text-slate-300 text-sm font-medium rounded-lg border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
