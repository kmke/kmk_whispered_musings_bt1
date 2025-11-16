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
    <section id="testimonials" className="py-24 bg-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="300" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-semibold">
            Sample <span className="text-amber-600">Feedback</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Placeholder content demonstrating the testimonial section layout and design
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-amber-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-amber-300 flex items-center justify-center text-white text-xl font-semibold">
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
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg border-2 border-amber-300">
            <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Ready to Begin Your Journey?</h3>
            <p className="text-gray-800 mb-6 max-w-xl">
              Experience the transformative power of spiritual guidance and intuitive insights
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium shadow-lg"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
