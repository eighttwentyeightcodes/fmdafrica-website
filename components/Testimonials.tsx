'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'JM Aesthetics Team',
    role: 'Implant & Aesthetic Medical Center',
    content: 'FMD Africa has been instrumental in elevating our content quality and professionalism. Their creative approach to social media has significantly improved our client engagement and brand presence.',
    rating: 5,
    imageUrl: '/testimonials/jm-aesthetics.jpg',
  },
  {
    name: 'Collin Tower',
    role: 'Business Owner',
    content: 'The SEO audit and strategy provided by FMD Africa transformed our online visibility. Their consistent execution and data-driven approach delivered measurable social growth and increased website traffic.',
    rating: 5,
    imageUrl: '/testimonials/collin-tower.jpg',
  },
  {
    name: 'Dr. Said Hussein',
    role: 'Healthcare Professional',
    content: 'Victor and the FMD Africa team provided exceptional digital consulting that helped me develop a clear strategy for my practice. Their insights were practical, actionable, and results-oriented.',
    rating: 5,
    imageUrl: '/testimonials/dr-hussein.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-accent-900 via-accent-800 to-cyan-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-orange-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-8 right-8 text-primary-200" size={48} />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '20+', label: 'Happy Clients' },
            { number: '300%', label: 'Avg Engagement Growth' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-200 mb-2">{stat.number}</div>
              <div className="text-cyan-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
