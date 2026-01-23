import { useState } from 'react';
import { Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Get your access key from https://web3forms.com
      // Replace 'YOUR_ACCESS_KEY' with your actual Web3Forms access key
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '4cc06005-b260-446f-b77f-41d36c84ebc1');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', `New Inquiry: ${formData.service || 'General'}`);
      formDataToSend.append('message', `Service Interest: ${formData.service}\n\n${formData.message}`);
      formDataToSend.append('from_name', 'Whispered Musings Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for reaching out! I\'ll be in touch soon.');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="350" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" strokeDasharray="5,5" />
          <circle cx="150" cy="150" r="120" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="650" cy="200" r="100" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="200" cy="650" r="140" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <circle cx="700" cy="700" r="110" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.5" />
          <path d="M 100 400 Q 250 300, 400 400 T 700 400" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" strokeDasharray="5,5" />
          <path d="M 150 600 Q 400 500, 650 600" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4">
            <img src="/enzo.png" alt="Enzo" className="w-12 h-12 rounded-full object-cover" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 font-semibold px-2 sm:px-0">
            Get in <span className="text-gold-600">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto px-2 sm:px-0">
            Ready to begin your spiritual journey? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-gold-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6 font-semibold">Let's Connect</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-6 sm:mb-8 leading-relaxed">
              Whether you're seeking clarity through tarot, wanting to commission spirit art,
              or curious about intuitive guidance, I'm here to help. Fill out the form and I'll
              respond within 24-48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-gold-500 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Follow on Instagram</h4>
                  <a 
                    href="https://www.instagram.com/whisperedmusings888" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold-600 hover:text-gold-700 font-medium"
                  >
                    @whisperedmusings888
                  </a>
                  <p className="text-gray-700 mt-2 text-sm">Connect with me on Instagram for daily insights, tarot readings, spirit art, and spiritual guidance. DM me for inquiries about readings or commissions!</p>
                </div>
              </div>
            </div>

          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gold-600 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-colors bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gold-600 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-900 font-semibold mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gold-600 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="tarot">Tarot Reading</option>
                  <option value="painting">Spirit Art</option>
                  <option value="intuitive">Intuitive Reading</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gold-600 focus:ring-2 focus:ring-gold-200 focus:outline-none transition-colors resize-none bg-white"
                  placeholder="Tell me about what you're seeking..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-gold-700 transition-all duration-200 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`text-center py-3 rounded-lg border-2 ${
                  submitMessage.includes('error') || submitMessage.includes('Sorry')
                    ? 'text-red-700 bg-red-50 border-red-200'
                    : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
