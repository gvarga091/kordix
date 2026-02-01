import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Phone, Facebook, Send, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '../i18n/LanguageContext';
import FAQ from './FAQ';

export function Contact() {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactText = t.contact || {
    title: 'Contact',
    subtitle: '...',
    form: { 
      send: 'Send',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholder: {
        name: 'Your name',
        email: 'your.email@example.com',
        message: 'How can I help you?'
      }
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xzzypdlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success('Üzenet elküldve! Hamarosan jelentkezem.');
        setFormData({ name: '', email: '', message: '' });
        setIsFormOpen(false);
      } else {
        toast.error('Hiba történt. Kérlek próbáld újra!');
      }
    } catch (error) {
      toast.error('Hiba történt. Kérlek próbáld újra!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0f] text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{contactText.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            {contactText.subtitle}
          </p>
          
          {/* Contact Form Toggle Button */}
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full transition-all shadow-lg shadow-blue-500/40 transform hover:scale-105 mb-16"
          >
            {contactText.toggleButton}
            <ChevronDown 
              className={`w-5 h-5 ml-3 transition-transform ${isFormOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Collapsible Contact Form */}
          <AnimatePresence>
            {isFormOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-left max-w-2xl mx-auto">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-300 text-sm font-medium">
                      {contactText.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-blue-500 text-white rounded-lg outline-none transition-all"
                      placeholder={contactText.form.placeholder.name}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-300 text-sm font-medium">
                      {contactText.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-blue-500 text-white rounded-lg outline-none transition-all"
                      placeholder={contactText.form.placeholder.email}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-300 text-sm font-medium">
                      {contactText.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-blue-500 text-white rounded-lg outline-none transition-all resize-none"
                      placeholder={contactText.form.placeholder.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send size={20} />
                    {contactText.form.send}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Direct Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-gray-400 max-w-4xl mx-auto">
            <a 
              href="mailto:gergo@kordix.hu"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Mail size={20} className="flex-shrink-0" />
              <span className="truncate">gergo@kordix.hu</span>
            </a>
            <a 
              href="tel:+36705668606"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Phone size={20} className="flex-shrink-0" />
              <span>+36 70 566 8606</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/gvarga091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Linkedin size={20} className="flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.facebook.com/kordix.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Facebook size={20} className="flex-shrink-0" />
              <span>Facebook</span>
            </a>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto mt-16">
            <FAQ />
          </div>
        </motion.div>
      </div>
    </section>
  );
}