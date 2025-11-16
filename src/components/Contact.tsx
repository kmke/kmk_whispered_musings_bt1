import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="350" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="0.5" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4 font-semibold">
            Get in <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Ready to begin your spiritual journey? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-amber-500 to-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-gray-900 mb-6 font-semibold">Let's Connect</h3>
            <p className="text-gray-800 mb-8 leading-relaxed">
              Whether you're seeking clarity through tarot, wanting to commission a spirit painting,
              or curious about intuitive guidance, I'm here to help. Fill out the form and I'll
              respond within 24-48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-pink-600" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Email Me</h4>
                  <p className="text-gray-700">hello@whisperedmusings.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">DM for Inquiry</h4>
                  <p className="text-gray-700">Connect with me on social media</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-2 border-amber-300 shadow-md">
              <h4 className="text-xl text-gray-900 mb-3 font-semibold">Special Offer</h4>
              <p className="text-gray-800 mb-2 font-medium">30-minute session: $45</p>
              <p className="text-gray-800 mb-2 font-medium">60-minute session: $90</p>
              <p className="text-sm text-gray-700 mt-4">Limited slots available monthly</p>
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-colors bg-white"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-colors bg-white"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="tarot">Tarot Reading</option>
                  <option value="painting">Spirit Painting</option>
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-colors resize-none bg-white"
                  placeholder="Tell me about what you're seeking..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
