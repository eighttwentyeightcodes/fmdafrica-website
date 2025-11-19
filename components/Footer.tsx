'use client'

import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="w-4 h-4 rounded-full bg-[#c6eff5]"
                ></motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-4 h-4 rounded-full bg-[#c6eff5]"
                ></motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="w-4 h-4 rounded-full bg-[#c6eff5]"
                ></motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ml-1 bg-transparent"
                >
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5"></div>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white">fmdafrica</h3>
            </div>
            <p className="text-gray-400 mb-4">
              A Creative and Tech Collective transforming brands through innovative digital solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/fmdafrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@fmdafrica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://wa.me/254113064648" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-orange-400 transition-colors">Social Media Management</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition-colors">Content Creation</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition-colors">Web Design & Development</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition-colors">SEO & Website Optimization</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition-colors">Digital Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#results" className="hover:text-orange-400 transition-colors">Featured Work</a></li>
              <li><a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">foremotiondigital@gmail.com</p>
            <p className="text-gray-400 mb-2">+254 113 064 648</p>
            <p className="text-gray-400 mb-4">Nairobi, Kenya</p>
            <p className="text-sm text-gray-500">Business Hours: 9am–6pm EAT</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} fmdafrica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
