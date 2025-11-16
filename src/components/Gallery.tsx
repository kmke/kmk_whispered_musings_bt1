import { useState } from 'react';
import { X } from 'lucide-react';

const paintings = [
  {
    id: 1,
    title: 'Solar Awakening',
    image: 'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A channeled piece representing transformation and inner light',
  },
  {
    id: 2,
    title: 'Lunar Whispers',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Intuitive guidance expressed through flowing energy',
  },
  {
    id: 3,
    title: 'Spirit Guardian',
    image: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A protective presence manifested in color and form',
  },
  {
    id: 4,
    title: 'Ethereal Dance',
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The soul\'s journey captured in movement',
  },
  {
    id: 5,
    title: 'Divine Feminine',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Channeling the sacred feminine energy',
  },
  {
    id: 6,
    title: 'Cosmic Connection',
    image: 'https://images.pexels.com/photos/1269633/pexels-photo-1269633.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Universal energy flowing through consciousness',
  },
];

export default function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<typeof paintings[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
          <circle cx="600" cy="200" r="150" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-semibold">
            Spirit <span className="text-amber-600">Paintings</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Each painting is a unique channeling of spiritual energy, created with intention and divine guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-amber-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg border-2 border-amber-300">
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Commission Your Spirit Painting</h3>
            <p className="text-gray-800 mb-6 max-w-xl">
              Let me create a personalized spirit painting that captures your unique energy and spiritual essence
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium shadow-lg"
            >
              Request a Commission
            </a>
          </div>
        </div>
      </div>

      {selectedPainting && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPainting(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
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
