import React from 'react';
import galleryData from '../gallery-data';
import SEO from '../components/SEO';

function Gallery() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <SEO
        title="Gallery"
        description="A photo gallery of travel and nature photos taken by Elijah Feldman."
        path="/gallery"
      />
      <main className="max-w-6xl mx-auto p-4 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70">
        <div className="mt-8 mb-4">
          <h1 className="text-5xl font-bold">Gallery</h1>
        </div>
        <p className="text-xl mb-6">
          Below is a collection of photos from various trips I have taken.
        </p>
        <div className="columns-3 gap-4 max-lg:columns-2 max-sm:columns-1">
          {galleryData.map((image, index) => (
            <div className="relative break-inside-avoid mb-4 overflow-hidden rounded-lg group" key={index}>
              <img 
                src={image.src} 
                alt={`At ${image.caption}`} 
                title={`Elijah Feldman - Full photo from ${image.caption}`}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-neutral-900 text-white p-3 translate-y-full transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{image.caption}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gallery;