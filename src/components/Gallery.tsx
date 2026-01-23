import { useState } from 'react';
import { X } from 'lucide-react';

const paintings = [
  {
    id: 1,
    title: 'The Lily',
    image: '/spa1.jpeg',
    description: 'Message from loved one as given to Maira Kearns',
  },
  {
    id: 2,
    title: 'Violet Flame',
    image: '/spa2.jpg',
    description: 'Violet Flame message from Archangel Raphael Channeled by Maira Kearns',
  },
  {
    id: 3,
    title: 'Archangel Gabriel',
    image: '/spa3.jpeg',
    description: 'Message from Archangel Gabriel Channeled by Maira Kearns',
  },
];

export default function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<typeof paintings[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
          <circle cx="600" cy="200" r="150" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" />
          <circle cx="400" cy="100" r="80" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="100" cy="300" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="700" cy="300" r="90" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" opacity="0.4" />
          <path d="M 50 150 Q 200 100, 350 150 T 650 150" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <path d="M 150 350 Q 400 300, 650 350" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 font-semibold px-2 sm:px-0">
            Spirit <span className="text-gold-600">Art</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto px-2 sm:px-0">
            Each piece is a unique channeling of spiritual energy, created with intention and divine guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-gold-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className="group cursor-pointer"
              onClick={() => setSelectedPainting(painting)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl mb-2">{painting.title}</h3>
                    <p className="text-sm opacity-90">{painting.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedPainting && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPainting(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
            onClick={() => setSelectedPainting(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full px-4">
            <img
              src={selectedPainting.image}
              alt={selectedPainting.title}
              className="w-full max-w-sm sm:max-w-md md:max-w-full mx-auto h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-3xl mb-3">{selectedPainting.title}</h3>
              <p className="text-lg">{selectedPainting.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
