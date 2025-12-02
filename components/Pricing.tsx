'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function Pricing() {
  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      features: [
        '8-10 posts per month',
        'Basic content creation',
        'Community management',
        'Monthly analytics report',
        'Email support'
      ],
      cta: 'Get a Quote',
      popular: false
    },
    {
      name: 'Growth',
      description: 'For growing brands ready to scale',
      features: [
        '12-16 posts per month',
        'Reels + photography included',
        'Advanced community management',
        'Strategy & analytics sessions',
        'Weekly reporting',
        'Priority support'
      ],
      cta: 'Get a Quote',
      popular: true
    },
    {
      name: 'Executive',
      description: 'Complete management for established brands',
      features: [
        'Full monthly production',
        'SEO & website optimization',
        'Digital consulting included',
        'Monthly strategy meetings',
        'Complete social management',
        'Dedicated account manager',
        '24/7 support'
      ],
      cta: 'Get a Quote',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Choose Your <span className="text-orange-400">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible packages designed to fit your business needs and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-orange-400 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-orange-400 text-white hover:bg-orange-500 shadow-lg hover:shadow-xl'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {pkg.cta}
                <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Book a Discovery Call
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
