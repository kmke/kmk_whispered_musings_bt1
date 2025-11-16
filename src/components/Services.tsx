import { Eye, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Tarot Readings',
    description: 'Unlock the wisdom of the cards and discover clarity on your life\'s journey. Each reading is a sacred conversation between you, the cards, and divine guidance.',
    features: [
      '30-minute session: $45',
      '60-minute session: $90',
      'Past, present, and future insights',
      'Relationship, career, and spiritual guidance',
    ],
    color: 'pink',
  },
  {
    icon: Palette,
    title: 'Spirit Paintings',
    description: 'A unique channeled artwork created specifically for you. I connect with your energy and spirit guides to create a visual representation of your soul\'s essence.',
    features: [
      'Custom commissioned artwork',
      'Channeled spiritual energy',
      'Personal symbolism and colors',
      'Perfect for meditation spaces',
    ],
    color: 'amber',
  },
  {
    icon: Eye,
    title: 'Intuitive Readings',
    description: 'Beyond the cards, I offer direct intuitive guidance by connecting with your energy field. These sessions provide deep insights and messages from your higher self.',
    features: [
      'Direct spiritual channeling',
      'Life purpose and soul path guidance',
      'Energy healing insights',
      'Personalized spiritual advice',
    ],
    color: 'emerald',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-pink-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="350" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" strokeDasharray="10,10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-semibold">
            My <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Each service is a sacred journey designed to illuminate your path and connect you with your highest self
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-amber-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const iconColor = service.color === 'pink' ? 'text-pink-600' : service.color === 'amber' ? 'text-amber-600' : 'text-emerald-700';
            const borderColor = service.color === 'pink' ? 'border-pink-300' : service.color === 'amber' ? 'border-amber-300' : 'border-emerald-300';

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${borderColor} transform hover:-translate-y-2`}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full ${iconColor} bg-white flex items-center justify-center mb-4 shadow-md`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3 font-semibold">{service.title}</h3>
                  <p className="text-gray-800 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-5 h-5 ${iconColor} mr-2 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center bg-amber-50 text-gray-900 px-6 py-3 rounded-full hover:bg-amber-100 transition-colors duration-200 font-medium shadow-md border-2 border-amber-300"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-amber-300">
          <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Not sure which service is right for you?</h3>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            I'm happy to discuss your needs and help you choose the perfect session.
            Reach out and let's discover what the universe has in store for you.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-200 font-medium shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
