import React from 'react';
import { ArrowRight } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Rodriguez",
    price: "$2,400",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 2,
    title: "Urban Dreams",
    artist: "Marcus Chen",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    id: 3,
    title: "Nature's Whisper",
    artist: "Sarah Johnson",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=800&h=1000"
  }
];

function FeaturedArtworks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif mb-2">Featured Artworks</h2>
            <p className="text-gray-600">Discover our most sought-after pieces</p>
          </div>
          <button className="hidden sm:flex items-center text-gray-600 hover:text-black">
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <div className="relative aspect-[4/5] mb-4">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="rounded-lg object-cover w-full h-full transition-transform group-hover:scale-[1.02]"
                />
                <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details
                </button>
              </div>
              <h3 className="text-xl font-medium">{artwork.title}</h3>
              <p className="text-gray-600">{artwork.artist}</p>
              <p className="text-lg font-medium mt-1">{artwork.price}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full sm:hidden mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          View All Artworks
        </button>
      </div>
    </section>
  );
}

export default FeaturedArtworks;