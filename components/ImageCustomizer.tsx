
import React, { useRef } from 'react';
import { X, Upload, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { useImageStorage } from '../hooks/useImageStorage';
import { PROJECTS } from '../constants';

interface ImageCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImageCustomizer: React.FC<ImageCustomizerProps> = ({ isOpen, onClose }) => {
  const { saveImage, resetImages, images } = useImageStorage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveImage(id, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Customize Images</h3>
            <p className="text-sm text-slate-400">Upload your own photos to personalize the portfolio.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {/* Profile Section */}
          <section>
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-4">Profile Picture</h4>
            <div className="flex items-center gap-6 p-4 bg-[#020617] rounded-2xl border border-slate-800">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                {images['profile'] ? (
                  <img src={images['profile']} className="w-full h-full object-cover" alt="Custom profile" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <p className="text-sm text-slate-300 font-medium mb-2">Main Hero Image</p>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => handleFileUpload('profile', e)}
                  className="hidden" 
                  id="profile-upload"
                />
                <label 
                  htmlFor="profile-upload"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg text-xs font-bold cursor-pointer hover:bg-orange-600 transition-all"
                >
                  <Upload className="w-3.5 h-3.5" /> Upload Photo
                </label>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-4">Project Images</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.map((project) => (
                <div key={project.id} className="p-4 bg-[#020617] rounded-2xl border border-slate-800 flex flex-col">
                  <div className="h-32 rounded-xl overflow-hidden bg-slate-800 mb-4">
                    {images[project.id] ? (
                      <img src={images[project.id]} className="w-full h-full object-cover" alt={project.name} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-bold text-white mb-3 truncate">{project.name}</p>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleFileUpload(project.id, e)}
                    className="hidden" 
                    id={`upload-${project.id}`}
                  />
                  <label 
                    htmlFor={`upload-${project.id}`}
                    className="mt-auto flex items-center justify-center gap-2 py-2 border border-slate-700 hover:border-orange-500/50 text-slate-400 hover:text-orange-400 rounded-lg text-xs font-bold cursor-pointer transition-all"
                  >
                    <Upload className="w-3 h-3" /> Change Image
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="p-6 border-t border-slate-800 bg-[#020617]/50 flex justify-between items-center">
          <button 
            onClick={() => { if(confirm('Reset all custom images?')) resetImages(); }}
            className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-red-400 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset to Defaults
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCustomizer;
