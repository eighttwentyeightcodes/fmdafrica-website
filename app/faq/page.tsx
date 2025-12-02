'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary by service. For social media, you may see engagement improvements within 2-4 weeks. SEO typically shows significant results in 3-6 months. Content creation delivers immediate visual impact, while digital strategy benefits compound over time. We provide regular reporting so you can track progress at every stage.'
    },
    {
      question: 'What is included in content creation?',
      answer: 'Our content creation services include professional photography sessions, product photography, reels and short-form videos optimized for platforms like Instagram and TikTok, creative direction, editing and post-production, and story-driven campaign content. We handle everything from concept to final delivery.'
    },
    {
      question: 'How many revisions are allowed?',
      answer: 'We typically include 2 rounds of revisions for content pieces to ensure you\'re completely satisfied. For strategic documents and reports, we offer 1-2 revision rounds. Additional revisions can be accommodated and will be discussed based on the scope of changes needed.'
    },
    {
      question: 'Do you work with businesses outside Kenya?',
      answer: 'Yes! While we\'re based in Nairobi, Kenya, we work with clients across Africa and internationally. Our digital services can be delivered remotely, and we\'re experienced in adapting strategies for different markets and time zones.'
    },
    {
      question: 'What platforms do you manage for social media?',
      answer: 'We specialize in Instagram, Facebook, TikTok, LinkedIn, and Twitter/X. We recommend platforms based on where your target audience is most active. Our strategy sessions help identify the best platform mix for your specific business goals.'
    },
    {
      question: 'Can I choose just one service or do I need a package?',
      answer: 'You can absolutely choose individual services based on your needs. While our packages offer better value for comprehensive support, we\'re flexible and can create custom solutions. Many clients start with one service and expand as they see results.'
    },
    {
      question: 'What makes FMD Africa different from other agencies?',
      answer: 'We combine data-driven strategy with creative execution, ensuring every decision is backed by insights. Our team brings hands-on experience with consistent execution, transparent reporting, and personalized attention. We\'re not just an agency - we\'re your growth partner.'
    },
    {
      question: 'How do you measure success?',
      answer: 'Success metrics are defined together at the start of each project based on your goals. Common metrics include engagement rates, follower growth, website traffic, lead generation, conversion rates, and ROI. We provide regular reports with clear, actionable insights.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We offer flexible payment structures including monthly retainers for ongoing services and project-based pricing for one-time work. A deposit is typically required to begin work, with the balance due according to agreed milestones. We\'re transparent about all costs upfront.'
    },
    {
      question: 'Do you provide training or workshops?',
      answer: 'Yes! We offer social media training, content creation workshops, and SEO fundamentals for business owners who want to build in-house capabilities. These can be customized for your team\'s specific needs and skill levels.'
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80')"}}></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-orange-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Got questions? We've got answers. Find everything you need to know about working with FMD Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full bg-gray-50 hover:bg-gray-100 p-6 text-left transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="text-orange-400 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </div>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </button>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
