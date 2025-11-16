export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink-200">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="rgb(217, 119, 6)"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="mb-8 inline-block">
          <img
            src="/image.png"
            alt="Maira Kearns"
            className="w-72 h-auto sm:w-80"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-gray-900 mb-4">
          Whispered <span className="text-amber-700">Musings</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-800 mb-6 font-light">
          Maira Kearns
        </p>

        <p className="text-lg sm:text-xl text-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed">
          Intuitive tarot reader, spirit painter, and guide to the whispers of your soul.
          Let me illuminate your path with the wisdom of the cards and the art of intuition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#services"
            className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore My Services
          </a>
          <a
            href="#gallery"
            className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full hover:bg-emerald-700 hover:text-white transition-all duration-200 font-medium text-lg"
          >
            View Spirit Paintings
          </a>
        </div>

        <div className="flex justify-center space-x-12 text-center max-w-4xl mx-auto">
          <div className="flex-1">
            <div className="text-3xl font-serif text-amber-700 mb-2">Tarot</div>
            <p className="text-sm text-gray-900">Readings</p>
          </div>
          <div className="w-px bg-gray-400"></div>
          <div className="flex-1">
            <div className="text-3xl font-serif text-amber-700 mb-2">Spirit</div>
            <p className="text-sm text-gray-900">Paintings</p>
          </div>
          <div className="w-px bg-gray-400"></div>
          <div className="flex-1">
            <div className="text-3xl font-serif text-amber-700 mb-2">Intuitive</div>
            <p className="text-sm text-gray-900">Guidance</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
