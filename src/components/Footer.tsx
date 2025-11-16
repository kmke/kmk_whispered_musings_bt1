import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <circle cx="400" cy="200" r="150" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center">
                <span className="text-amber-500 text-xl italic">M</span>
              </div>
              <div>
                <div className="text-lg text-amber-300 font-semibold">Whispered Musings</div>
                <div className="text-xs text-pink-100">Maira Kearns</div>
              </div>
            </div>
            <p className="text-pink-100 text-sm leading-relaxed">
              Illuminating your path through tarot, spirit paintings, and intuitive guidance.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-amber-300 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-pink-100 hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#about" className="text-pink-100 hover:text-amber-300 transition-colors">About Maira</a></li>
              <li><a href="#services" className="text-pink-100 hover:text-amber-300 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-pink-100 hover:text-amber-300 transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-pink-100 hover:text-amber-300 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-pink-100 hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-amber-300 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-pink-100">Tarot Readings</li>
              <li className="text-pink-100">Spirit Paintings</li>
              <li className="text-pink-100">Intuitive Guidance</li>
              <li className="text-pink-100">Custom Commissions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-400 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-pink-100 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Whispered Musings. All rights reserved.
          </p>
          <div className="flex items-center text-pink-100 text-sm">
            Made with <Heart className="mx-1 text-amber-300" size={16} fill="currentColor" /> for seekers of light
          </div>
        </div>
      </div>
    </footer>
  );
}
