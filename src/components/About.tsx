import { Heart, Palette, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <circle cx="100" cy="200" r="150" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
          <circle cx="700" cy="200" r="150" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" />
          <circle cx="400" cy="100" r="80" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.6" />
          <circle cx="300" cy="300" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="500" cy="300" r="90" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" opacity="0.4" />
          <path d="M 50 100 Q 200 150, 350 100 T 650 100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <path d="M 150 350 Q 400 300, 650 350" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold-600 flex items-center justify-center">
              <Heart className="text-gold-600" size={32} />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 font-semibold px-2 sm:px-0">
            About <span className="text-gold-600">Maira</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-gold-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="relative max-w-[280px] sm:max-w-sm mx-auto md:max-w-none">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6224386/pexels-photo-6224386.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Maira's spiritual practice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-200 to-gold-200 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-200 to-pink-200 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              I am a tarot reader; an Intuitive reader and Spirit Art medium and I began my journey many years ago when I was a child. I had encounters with Spirit which at the time I did not understand. I just knew I was seeing and sensing Spirit and at times it scared me. I would push the things that I was seeing and sensing away and shutdown my abilities because of my fear.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              But as time went on, I was always called backed to it. I would open up and shut it down time and time again until finally I began to listen, see and sense more attentively. I had help from family and others along the way and by being open I have come to learn about my gifts and now seek to help others by providing messages from Spirit. Know that there is no need to ever feel alone because we are never alone. We just have to reach out.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              If you are seeking answers, then reach out and get connected so that you too can see that you are not alone.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center p-4 sm:p-6 bg-white/80 rounded-xl border-2 border-gold-200 shadow-md">
                <Palette className="text-gold-600 mx-auto mb-2 sm:mb-3" size={24} />
                <h3 className="text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2 font-semibold">Spirit Artist</h3>
                <p className="text-xs sm:text-sm text-gray-700">Channeling energy into art</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/80 rounded-xl border-2 border-emerald-200 shadow-md">
                <Sparkles className="text-emerald-700 mx-auto mb-2 sm:mb-3" size={24} />
                <h3 className="text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2 font-semibold">Intuitive Guide</h3>
                <p className="text-xs sm:text-sm text-gray-700">Reading the soul's whispers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
