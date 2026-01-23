import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Client A',
    text: 'Placeholder testimonial text for demonstration purposes. This represents the type of feedback you might receive from satisfied clients.',
    rating: 5,
  },
  {
    name: 'Client B',
    text: 'Sample review content showing the structure and format of client testimonials that would appear on this website.',
    rating: 5,
  },
  {
    name: 'Client C',
    text: 'Non-review placeholder demonstrating the layout and design elements used for client feedback sections.',
    rating: 5,
  },
  {
    name: 'Client D',
    text: 'Template testimonial content illustrating the visual presentation of client reviews and satisfaction ratings.',
    rating: 5,
  },
  {
    name: 'Client E',
    text: 'Example placeholder text showing how testimonials would be displayed with star ratings and client information.',
    rating: 5,
  },
  {
    name: 'Client F',
    text: 'Demonstration content representing the format and style of client feedback that appears in this section.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="120" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="650" cy="200" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="200" cy="650" r="140" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="700" cy="700" r="110" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <path d="M 100 400 Q 250 300, 400 400 T 700 400" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
          <path d="M 150 600 Q 400 500, 650 600" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 font-semibold px-2 sm:px-0">
            Sample <span className="text-gold-600">Feedback</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto px-2 sm:px-0">
            Placeholder content demonstrating the testimonial section layout and design
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-gold-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gold-200 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-gold-300 flex items-center justify-center text-white text-xl font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Placeholder</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg border-2 border-gold-300">
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Ready to Begin Your Journey?</h3>
            <p className="text-gray-800 mb-6 max-w-xl">
              Experience the transformative power of spiritual guidance and intuitive insights
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-gold-700 transition-colors duration-200 font-medium text-sm sm:text-base shadow-lg"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
