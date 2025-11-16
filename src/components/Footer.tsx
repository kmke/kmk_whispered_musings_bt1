import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 relative overflow-hidden border-t-2 border-gray-200">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <circle cx="400" cy="200" r="150" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-lg text-gold-700 font-semibold">Whispered Musings</div>
              <div className="text-xs text-gray-600">Maira Kearns</div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Illuminating your path through tarot, spirit paintings, and intuitive guidance.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-gray-900 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-700 hover:text-gold-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-gold-600 transition-colors">About Maira</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-gold-600 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-gold-600 transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-gold-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gold-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-gray-900 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-700">Tarot Readings</li>
              <li className="text-gray-700">Spirit Paintings</li>
              <li className="text-gray-700">Intuitive Guidance</li>
              <li className="text-gray-700">Custom Commissions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Whispered Musings. All rights reserved.
          </p>
          <div className="flex items-center text-gray-700 text-sm">
            Made with <Heart className="mx-1 text-gold-600" size={16} fill="currentColor" /> for seekers of light
          </div>
        </div>
      </div>
    </footer>
  );
}
