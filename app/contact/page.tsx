'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsApp'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80')"}}></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="text-orange-400">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Ready to grow your brand? Get in touch and let's start the conversation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
                <a href="mailto:foremotiondigital@gmail.com" className="text-primary-600 hover:text-primary-700">
                  foremotiondigital@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
                <a href="tel:+254113064648" className="text-primary-600 hover:text-primary-700 block">
                  +254 113 064 648
                </a>
                <a href="tel:+254798167580" className="text-primary-600 hover:text-primary-700 block mt-1">
                  +254 798 167 580
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WhatsAppIcon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp</h3>
                <a 
                  href="https://wa.me/254113064648" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Chat with us
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-8 bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Location</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </motion.div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white text-center mb-16"
            >
              <Clock className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
              <p className="text-xl">Monday - Friday: 9:00 AM - 6:00 PM EAT</p>
              <p className="text-white/80 mt-2">Available for urgent matters outside business hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </main>
  )
}
