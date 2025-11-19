'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Instagram } from 'lucide-react'

export default function FeaturedWork() {
  const projects = [
    {
      title: 'Collin Tower',
      description: 'Social media management + website SEO audit & optimization',
      services: ['Social Media', 'SEO Audit', 'Content Strategy'],
      link: '#'
    },
    {
      title: 'JM Aesthetics',
      subtitle: 'Implant & Aesthetic Medical Center',
      description: 'Professional content creation + comprehensive social media management',
      services: ['Content Creation', 'Social Media', 'Photography'],
      link: '#'
    },
    {
      title: 'FMD Africa Brand',
      description: 'Internal brand content, strategy execution, and social campaigns',
      services: ['Brand Strategy', 'Content Reels', 'Campaigns'],
      link: 'https://www.instagram.com/fmdafrica',
      isInstagram: true
    },
  ]

  return (
    <section id="results" className="py-24 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured <span className="text-orange-400">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Real results for real businesses across Kenya and beyond
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            View Full Portfolio
            <ExternalLink size={20} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target={project.isInstagram ? "_blank" : undefined}
                  rel={project.isInstagram ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  {project.isInstagram ? (
                    <>
                      <Instagram size={20} />
                      See Our Work
                    </>
                  ) : (
                    <>
                      <ExternalLink size={20} />
                      View Case Study
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
