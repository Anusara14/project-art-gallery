import React from 'react';
import { Menu, ShoppingCart, Search, ArrowRight } from 'lucide-react';
import FeaturedArtworks from './components/FeaturedArtworks';
import ArtistSpotlight from './components/ArtistSpotlight';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-lg hover:bg-gray-100 lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="text-2xl font-serif ml-3">Artistry</div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-black">Artists</a>
              <a href="#" className="text-gray-700 hover:text-black">Collections</a>
              <a href="#" className="text-gray-700 hover:text-black">About</a>
              <a href="#" className="text-gray-700 hover:text-black">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl font-serif leading-tight">
                Discover Unique <br />
                <span className="text-indigo-600">Artworks</span> from <br />
                Global Artists
              </h1>
              <p className="text-gray-600 text-lg max-w-md">
                Explore our curated collection of contemporary art pieces from emerging and established artists worldwide.
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center">
                  Explore Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="px-8 py-3 border border-black rounded-lg hover:bg-gray-50 transition-colors">
                  Meet Artists
                </button>
              </div>
            </div>
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=1200&h=1200"
                alt="Featured Artwork"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <FeaturedArtworks />

      {/* Artist Spotlight */}
      <ArtistSpotlight />

      {/* Categories */}
      <Categories />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Artistry</h3>
              <p className="text-gray-400">Curating exceptional art pieces from around the world.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Gallery</a></li>
                <li><a href="#" className="hover:text-white">Artists</a></li>
                <li><a href="#" className="hover:text-white">Collections</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Artistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;