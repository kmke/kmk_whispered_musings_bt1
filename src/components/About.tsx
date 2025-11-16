import { Heart, Palette, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <circle cx="100" cy="200" r="150" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
          <circle cx="700" cy="200" r="150" fill="none" stroke="rgb(5, 102, 55)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-amber-600 flex items-center justify-center">
              <Heart className="text-amber-600" size={32} />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-semibold">
            About <span className="text-amber-600">Maira</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-amber-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6224386/pexels-photo-6224386.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Maira's spiritual practice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-200 to-pink-200 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              Welcome, dear soul. I'm Maira Kearns, and I believe that every person carries
              a unique story written in the stars, whispered by the universe, and waiting
              to be unveiled.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              My journey into the mystical arts began years ago when I discovered the
              profound connection between intuition, art, and the divine messages that
              surround us. Through tarot, I've learned to read the language of the soul.
              Through painting, I've discovered how to channel spiritual energy into
              visual form.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Each reading I offer is more than a glimpse into your future—it's a
              conversation with your higher self. Each painting I create is more than
              art—it's a manifestation of spiritual energy and personal truth.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-white/80 rounded-xl border-2 border-amber-200 shadow-md">
                <Palette className="text-amber-600 mx-auto mb-3" size={32} />
                <h3 className="text-xl text-gray-900 mb-2 font-semibold">Spirit Painter</h3>
                <p className="text-sm text-gray-700">Channeling energy into art</p>
              </div>
              <div className="text-center p-6 bg-white/80 rounded-xl border-2 border-emerald-200 shadow-md">
                <Sparkles className="text-emerald-700 mx-auto mb-3" size={32} />
                <h3 className="text-xl text-gray-900 mb-2 font-semibold">Intuitive Guide</h3>
                <p className="text-sm text-gray-700">Reading the soul's whispers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
