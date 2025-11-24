export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="150" cy="150" r="120" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="650" cy="200" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="200" cy="650" r="140" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="700" cy="700" r="110" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <path d="M 100 400 Q 200 300, 300 400 T 500 400" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.2" />
          <path d="M 500 200 Q 600 100, 700 200 T 750 200" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="/trans_background.png"
              alt="Maira Kearns"
              className="w-full max-w-[240px] sm:max-w-sm md:max-w-md h-auto"
            />
          </div>

          {/* Right side - Text content */}
          <div className="text-center md:text-left px-2 sm:px-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-gold-600 mb-3 sm:mb-4 font-script">
              Whispered Musings
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 mb-4 sm:mb-6 font-medium">
              Maira Kearns
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-gray-900 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Intuitive tarot reader, spirit artist, and guide to the whispers of your soul.
              Let me illuminate your path with the wisdom of the cards and the art of intuition.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center mb-8 sm:mb-12">
              <a
                href="#services"
                className="bg-gold-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-gold-700 transition-all duration-200 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-center"
              >
                Explore My Services
              </a>
              <a
                href="#gallery"
                className="border-2 border-gold-600 text-gold-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-gold-600 hover:text-white transition-all duration-200 font-medium text-base sm:text-lg shadow-md w-full sm:w-auto text-center"
              >
                View Spirit Art
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl text-gold-700 mb-1 sm:mb-2 font-semibold">Tarot</div>
                <p className="text-xs sm:text-sm text-gray-900 font-medium">Readings</p>
              </div>
              <div className="w-px bg-gray-500"></div>
              <div>
                <div className="text-2xl sm:text-3xl text-gold-700 mb-1 sm:mb-2 font-semibold">Spirit</div>
                <p className="text-xs sm:text-sm text-gray-900 font-medium">Art</p>
              </div>
              <div className="w-px bg-gray-500"></div>
              <div>
                <div className="text-2xl sm:text-3xl text-gold-700 mb-1 sm:mb-2 font-semibold">Intuitive</div>
                <p className="text-xs sm:text-sm text-gray-900 font-medium">Guidance</p>
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
