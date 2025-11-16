export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink-100">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="rgb(217, 119, 6)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/trans_background.png"
              alt="Maira Kearns"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
          </div>

          {/* Right side - Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl text-amber-600 mb-4 font-script">
              Whispered Musings
            </h1>

            <p className="text-xl sm:text-2xl text-gray-900 mb-6 font-medium">
              Maira Kearns
            </p>

            <p className="text-lg sm:text-xl text-gray-900 mb-8 leading-relaxed">
              Intuitive tarot reader, spirit painter, and guide to the whispers of your soul.
              Let me illuminate your path with the wisdom of the cards and the art of intuition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
              <a
                href="#services"
                className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore My Services
              </a>
              <a
                href="#gallery"
                className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-200 font-medium text-lg shadow-md"
              >
                View Spirit Paintings
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-8 text-center">
              <div>
                <div className="text-3xl text-amber-700 mb-2 font-semibold">Tarot</div>
                <p className="text-sm text-gray-900 font-medium">Readings</p>
              </div>
              <div className="w-px bg-gray-500"></div>
              <div>
                <div className="text-3xl text-amber-700 mb-2 font-semibold">Spirit</div>
                <p className="text-sm text-gray-900 font-medium">Paintings</p>
              </div>
              <div className="w-px bg-gray-500"></div>
              <div>
                <div className="text-3xl text-amber-700 mb-2 font-semibold">Intuitive</div>
                <p className="text-sm text-gray-900 font-medium">Guidance</p>
              </div>
            </div>
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
