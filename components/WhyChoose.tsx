"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Target, Zap, Users, MessageSquare, ArrowRight } from 'lucide-react'

export default function WhyChoose() {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Data-driven',
      description: 'Every decision backed by analytics and insights',
      href: '/blog/data-driven',
    },
    {
      icon: Target,
      title: 'Consistent execution',
      description: 'Reliable delivery and strategic implementation',
      href: '/blog/consistent-execution',
    },
    {
      icon: Zap,
      title: 'High-performing content',
      description: 'Content that engages, converts, and grows your brand',
      href: '/blog/high-performing-content',
    },
    {
      icon: Users,
      title: 'Personalized strategy',
      description: 'Tailored solutions for your unique business goals',
      href: '/blog/personalized-strategy',
    },
    {
      icon: MessageSquare,
      title: 'Clear communication',
      description: 'Transparent reporting and regular updates',
      href: '/blog/clear-communication',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose <span className="text-orange-400">FMD Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            We combine strategy, creativity, and data to deliver exceptional results
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Learn More About Us
            <ArrowRight size={20} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-0 shadow-lg hover:shadow-xl hover:bg-cyan-50 transition-all duration-300 group cursor-pointer"
              >
                <Link href={reason.href} className="block h-full p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
