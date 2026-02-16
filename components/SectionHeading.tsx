
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-orange-400">
        {subtitle}
      </h2>
      <div className="relative inline-block">
        <h3 className="text-3xl md:text-4xl font-bold pb-4 text-white">
          {title}
        </h3>
        <div className="absolute bottom-0 left-1/4 right-1/4 h-1 rounded-full bg-orange-500"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
