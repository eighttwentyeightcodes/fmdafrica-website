"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Social Media Management',
      description: 'Complete social media management to grow your brand and engage your audience',
      includes: [
        'Content calendar creation',
        'Caption writing & hashtag strategy',
        'Posting & scheduling across platforms',
        'Engagement & community management',
        'Weekly reporting & insights',
        'Monthly strategy sessions',
      ],
      deliverables: ['Reels', 'Graphics', 'Carousels', 'Stories', 'Photography'],
      color: 'from-primary-400 to-primary-500'
    },
    {
      title: 'Content Creation',
      description: 'Professional content that tells your story and captivates your audience',
      includes: [
        'Professional photography sessions',
        'Product photography',
        'Reels & short-form videos',
        'TikTok & Instagram content',
        'Creative direction',
        'Editing & post-production',
        'Story-driven campaign content',
      ],
      deliverables: ['Photography', 'Video Content', 'Reels', 'Edited Content'],
      color: 'from-accent-700 to-accent-800'
    },
    {
      title: 'Web Design & Development',
      description: 'Custom websites that elevate your brand and drive conversions',
      includes: [
        'Custom website design (UI/UX)',
        'Responsive web development',
        'E-commerce solutions',
        'Landing page creation',
        'Website maintenance & updates',
        'Performance optimization',
        'Brand identity integration',
        'Content management systems (CMS)',
      ],
      deliverables: ['Custom Website', 'Mobile Responsive', 'Ongoing Support', 'Analytics Setup'],
      color: 'from-primary-500 to-accent-600'
    },
    {
      title: 'SEO & Website Optimization',
      description: 'Get found online and convert visitors into customers',
      includes: [
        'Comprehensive website audit',
        'Technical SEO fixes',
        'Content optimization',
        'On-page SEO implementation',
        'Keyword & ranking strategy',
        'Blog content planning',
        'Website responsiveness optimization',
        'Conversion rate optimization',
      ],
      deliverables: ['SEO Audit Report', 'Optimized Content', 'Technical Fixes', 'Monthly Rankings'],
      color: 'from-primary-300 to-accent-700'
    },
    {
      title: 'Digital Consulting & Strategy',
      description: 'Premium consulting to define your digital roadmap and accelerate growth',
      includes: [
        'Comprehensive digital audits',
        'Brand positioning strategy',
        'Content strategy development',
        'Platform selection & analysis',
        'Competitor analysis',
        'Growth roadmap creation',
        'Strategic recommendations',
      ],
      deliverables: ['Strategic Report', 'Action Plan', 'Competitor Analysis', 'Growth Roadmap'],
      color: 'from-accent-800 to-primary-400',
      premium: true
    },
    {
      title: 'AI Search Optimization',
      description: 'Combine SEO best practices with AI intelligence to help the right customers discover you faster.',
      includes: [
        'AI-assisted keyword and topic research',
        'Search intent and user journey mapping',
        'On-page optimization with AI-assisted copy suggestions',
        'Content gap and opportunity analysis',
        'Ongoing performance monitoring & reporting',
      ],
      deliverables: ['AI-powered keyword sets', 'Optimized page recommendations', 'Content roadmap', 'Performance reports'],
      color: 'from-slate-700 to-primary-500',
    },
    {
      title: 'AI Business Automation',
      description: 'Design and implement AI-powered workflows that save time on support, reporting, and lead management.',
      includes: [
        'Process and workflow discovery session',
        'Automation & AI tool recommendations',
        'Chatbot and assistant configuration',
        'Lead routing and qualification flows',
        'Reporting and follow-up automations',
      ],
      deliverables: ['Workflow diagrams', 'Automation setup', 'Playbooks & SOPs', 'Performance review session'],
      color: 'from-primary-500 to-emerald-500',
    },
    {
      title: 'MVP Development',
      description: 'Turn your idea into a lean, testable product that can go to market quickly and validate demand.',
      includes: [
        'Strategy and product definition workshop',
        'User flows and interface design',
        'No-code/low-code or custom build implementation',
        'Basic analytics and feedback loops',
        'Launch support and iteration roadmap',
      ],
      deliverables: ['Clickable prototype or live MVP', 'Product requirements summary', 'Launch checklist', 'Iteration roadmap'],
      color: 'from-emerald-500 to-primary-700',
    },
    {
      title: 'Short-form Event Coverage',
      description: 'Capture your events with social-ready short-form content that keeps your audience engaged in real time.',
      includes: [
        'On-site content capture (photo & video)',
        'Reels, TikTok & Shorts concepts and shot lists',
        'Same-day or next-day edits for key moments',
        'Live posting support & coordination',
        'Post-event highlight recap content',
      ],
      deliverables: ['Edited short-form videos', 'Photo selects', 'Event highlight reel', 'Publishing plan'],
      color: 'from-orange-500 to-primary-700',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80')"}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Comprehensive digital solutions to grow your business and amplify your brand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${index % 2 === 0 ? '' : 'bg-gray-50'} p-12`}
              >
                {service.premium && (
                  <span className="inline-block bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Premium Service
                  </span>
                )}
                <h2 className="text-4xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">What's Included</h3>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Deliverables</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={{ pathname: '/quote', query: { service: service.title } }}
                  className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started with {service.title}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help your business grow
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl"
            >
              Get My Custom Quotation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
