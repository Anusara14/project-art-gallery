import React from 'react';

function ArtistSpotlight() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?auto=format&fit=crop&q=80&w=800&h=1067"
              alt="Featured Artist"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Artist Spotlight
            </div>
            <h2 className="text-3xl font-serif">Meet Isabella Martinez</h2>
            <p className="text-gray-600 text-lg">
              Contemporary artist Isabella Martinez brings a fresh perspective to abstract expressionism. 
              Her work explores themes of nature, emotion, and human connection through bold colors and dynamic compositions.
            </p>
            <div className="grid grid-cols-3 gap-8 py-6">
              <div>
                <div className="text-3xl font-serif">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif">200+</div>
                <div className="text-gray-600">Artworks Created</div>
              </div>
              <div>
                <div className="text-3xl font-serif">50+</div>
                <div className="text-gray-600">Exhibitions</div>
              </div>
            </div>
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpotlight