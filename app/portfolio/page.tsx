'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ExternalLink, Instagram, TrendingUp, Users, Award } from 'lucide-react'

export default function PortfolioPage() {
  const caseStudies = [
    {
      client: 'Collin Tower',
      industry: 'Real Estate',
      challenge: 'Low online visibility and inconsistent social media presence limiting lead generation',
      solution: [
        'Comprehensive SEO audit and technical optimization',
        'Strategic social media content calendar',
        'Targeted engagement strategy',
        'Monthly performance tracking and optimization',
      ],
      results: [
        { metric: 'Website Traffic', value: '+180%', icon: TrendingUp },
        { metric: 'Social Engagement', value: '+250%', icon: Users },
        { metric: 'Lead Quality', value: '+65%', icon: Award },
      ],
      testimonial: 'The SEO audit and strategy provided by FMD Africa transformed our online visibility. Their consistent execution delivered measurable results.',
      services: ['SEO Audit', 'Social Media Management', 'Content Strategy'],
    },
    {
      client: 'JM Aesthetics',
      subtitle: 'Implant & Aesthetic Medical Center',
      industry: 'Healthcare & Aesthetics',
      challenge: 'Need for professional content that showcases medical procedures while building trust',
      solution: [
        'Professional photography and video content creation',
        'Educational content strategy',
        'Community management and patient engagement',
        'Before/after showcase content',
      ],
      results: [
        { metric: 'Content Engagement', value: '+320%', icon: TrendingUp },
        { metric: 'Follower Growth', value: '+150%', icon: Users },
        { metric: 'Consultation Bookings', value: '+85%', icon: Award },
      ],
      testimonial: 'FMD Africa elevated our content quality and professionalism. Their creative approach significantly improved our client engagement.',
      services: ['Content Creation', 'Social Media', 'Photography'],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80')"}}></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Real results for real businesses. See how we've helped brands grow and thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${index === 0 ? 'from-primary-500 to-primary-700' : 'from-accent-700 to-accent-900'} p-12 text-white`}>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {study.services.map((service) => (
                      <span key={service} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">{study.client}</h2>
                  {study.subtitle && <p className="text-xl text-white/80 mb-4">{study.subtitle}</p>}
                  <p className="text-white/70 text-lg">{study.industry}</p>
                </div>

                {/* Content */}
                <div className="p-12">
                  {/* Challenge */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">The Challenge</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Solution</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.solution.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-4">
                          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{i + 1}</span>
                          </div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Results</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {study.results.map((result) => {
                        const Icon = result.icon
                        return (
                          <div key={result.metric} className="bg-white p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Icon className="text-orange-400" size={24} />
                            </div>
                            <div className="text-4xl font-bold text-orange-400 mb-2">{result.value}</div>
                            <div className="text-gray-600">{result.metric}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white p-8 border-l-4 border-orange-400">
                    <p className="text-xl text-gray-700 italic mb-4">"{study.testimonial}"</p>
                    <p className="text-gray-900 font-bold">— {study.client}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FMD Africa Internal Work */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              FMD Africa <span className="text-orange-400">Brand Content</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We practice what we preach. See our own content strategy, reels, and campaigns in action.
            </p>
            <a
              href="https://www.instagram.com/fmdafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl"
            >
              <Instagram size={20} />
              View Our Instagram
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create measurable results for your business
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
