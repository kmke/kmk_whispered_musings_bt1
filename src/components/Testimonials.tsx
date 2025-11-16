import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    text: 'Maira\'s reading was incredibly accurate and insightful. She helped me see my situation from a new perspective and gave me the clarity I desperately needed. Her warm energy made me feel completely at ease.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    text: 'The spirit painting Maira created for me brought tears to my eyes. She captured something so profound about my journey that I couldn\'t put into words. It hangs in my meditation space and brings me peace every day.',
    rating: 5,
  },
  {
    name: 'Jessica Chen',
    text: 'I was skeptical at first, but Maira\'s intuitive reading changed my perspective entirely. She connected with things she couldn\'t have possibly known and provided guidance that resonated deeply with my soul. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Amanda Thompson',
    text: 'Maira has a true gift. Her tarot readings are not only accurate but delivered with such compassion and wisdom. She helped me navigate a difficult time and I\'m forever grateful for her guidance.',
    rating: 5,
  },
  {
    name: 'Lisa Patel',
    text: 'Working with Maira was a transformative experience. Her intuitive abilities are remarkable, and she has a way of making you feel seen and understood. The insights I gained have helped me move forward with confidence.',
    rating: 5,
  },
  {
    name: 'Rachel Foster',
    text: 'The combination of Maira\'s artistic talent and spiritual insight is truly magical. My spirit painting is not just beautiful art—it\'s a powerful tool for meditation and self-reflection. Thank you, Maira!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-4">
            Client <span className="text-amber-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who have experienced the transformative power of spiritual guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-amber-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-amber-200 flex items-center justify-center text-amber-700 font-serif text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg border-2 border-emerald-200">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-700 mb-6 max-w-xl">
              Join countless others who have discovered clarity, peace, and spiritual insight through my services
            </p>
            <a
              href="#contact"
              className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors duration-200 font-medium shadow-lg"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
