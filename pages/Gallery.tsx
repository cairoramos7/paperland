import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="bg-primary-50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Galeria de Trabalhos</h1>
          <p className="text-gray-600">Um pouco do que já produzimos com muito carinho.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white/80 text-xs uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoomed work" 
            className="max-w-full max-h-[90vh] rounded shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};