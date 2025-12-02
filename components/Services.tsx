'use client'

import { motion } from 'framer-motion'
import { Search, Target, TrendingUp, Megaphone, PenTool, BarChart3, ArrowRight, Code } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Social Media Management',
    description: 'Complete social media management including content calendar creation, caption writing, posting & scheduling, engagement & community management, and weekly reporting with monthly strategy sessions.',
    details: ['Content Calendars', 'Community Management', 'Weekly Reporting', 'Monthly Strategy'],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Professional content creation services including photography, product shoots, reels, short-form videos for TikTok/Instagram, creative direction, editing & post-production.',
    details: ['Photography', 'Reels & Videos', 'Creative Direction', 'Post-Production'],
    color: 'from-accent-700 to-accent-800',
  },
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Custom website design and development services to create stunning, responsive websites that convert visitors into customers. From landing pages to full e-commerce solutions.',
    details: ['Custom Web Design', 'Responsive Development', 'E-commerce Solutions', 'Website Maintenance'],
    color: 'from-cyan-500 to-primary-600',
  },
  {
    icon: Search,
    title: 'SEO & Website Optimization',
    description: 'Comprehensive SEO services including website audits, technical fixes, content optimization, on-page SEO, ranking strategy, blog content planning, and conversion optimization.',
    details: ['Website Audit', 'Technical SEO', 'Content Optimization', 'Conversion Optimization'],
    color: 'from-primary-300 to-accent-700',
  },
  {
    icon: Target,
    title: 'Digital Consulting & Strategy',
    description: 'Premium consulting services offering digital audits, brand positioning, content strategy development, platform selection, competitor analysis, and comprehensive growth roadmaps.',
    details: ['Digital Audits', 'Brand Positioning', 'Growth Roadmap', 'Competitor Analysis'],
    color: 'from-accent-800 to-primary-400',
  },
  {
    icon: Megaphone,
    title: 'Campaign Management',
    description: 'End-to-end campaign management from concept to execution. We create story-driven campaigns that engage your audience and drive measurable results.',
    details: ['Campaign Strategy', 'Creative Execution', 'Performance Tracking', 'Optimization'],
    color: 'from-primary-500 to-accent-700',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Clear, transparent reporting with actionable insights. Track performance, understand your audience, and make data-driven decisions for continuous growth.',
    details: ['Performance Analytics', 'Audience Insights', 'ROI Tracking', 'Custom Reports'],
    color: 'from-cyan-300 to-cyan-500',
  },
  {
    icon: Search,
    title: 'AI Search Optimization',
    description:
      'Leverage AI to improve how customers discover your brand across search, on-site experiences, and content. We blend SEO best practices with AI-assisted research and optimization.',
    details: ['AI-assisted keyword research', 'On-site search experience', 'Content optimization with AI', 'Search performance tracking'],
    color: 'from-slate-700 to-primary-500',
  },
  {
    icon: Target,
    title: 'AI Business Automation',
    description:
      'Streamline repetitive tasks with AI workflows that support customer service, lead qualification, reporting, and internal operations.',
    details: ['Workflow mapping', 'AI chatbot & assistant setup', 'Lead and inquiry routing', 'Reporting & follow-up automation'],
    color: 'from-primary-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'MVP Development',
    description:
      'Design and build lean MVPs that validate your idea fast—combining strategy, UX, and no-code/low-code or custom builds where needed.',
    details: ['Product scoping & strategy', 'MVP UX & interface design', 'Lean web/app builds', 'Launch & iteration support'],
    color: 'from-emerald-500 to-primary-700',
  },
  {
    icon: Megaphone,
    title: 'Short-form Event Coverage',
    description:
      'Real-time short-form content coverage for events, launches, and experiences—optimized for Instagram, TikTok, and Reels.',
    details: ['On-site content capture', 'Reels & TikTok editing', 'Live posting support', 'Post-event highlight packages'],
    color: 'from-orange-500 to-primary-700',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            View All Services
            <ArrowRight size={20} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-orange-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-orange-400 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
