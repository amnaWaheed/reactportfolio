
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ children, autoPlay = false, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum distance required for a swipe gesture to be recognized
  const minSwipeDistance = 50;

  const next = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <div 
      className="relative overflow-hidden group touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div 
        className="flex transition-transform duration-500 ease-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {children.length > 1 && (
        <>
          {/* Controls - Visible on hover on desktop, always hidden on mobile in favor of swipe */}
          <button 
            onClick={prev} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1e293b]/80 hover:bg-orange-500 p-3 rounded-full shadow-lg opacity-0 lg:group-hover:opacity-100 transition-all text-white border border-slate-700 z-10 hidden lg:flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1e293b]/80 hover:bg-orange-500 p-3 rounded-full shadow-lg opacity-0 lg:group-hover:opacity-100 transition-all text-white border border-slate-700 z-10 hidden lg:flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {children.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-orange-500 w-8' : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
