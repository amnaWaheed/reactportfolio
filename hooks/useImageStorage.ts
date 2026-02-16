
import { useState, useEffect } from 'react';

export const useImageStorage = () => {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_images');
    if (saved) {
      try {
        setImages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved images', e);
      }
    }
  }, []);

  const saveImage = (id: string, base64: string) => {
    const newImages = { ...images, [id]: base64 };
    setImages(newImages);
    localStorage.setItem('portfolio_images', JSON.stringify(newImages));
  };

  const resetImages = () => {
    setImages({});
    localStorage.removeItem('portfolio_images');
  };

  const getImage = (id: string, fallback: string) => {
    return images[id] || fallback;
  };

  return { getImage, saveImage, resetImages, images };
};
