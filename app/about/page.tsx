'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Excellence', description: 'We deliver exceptional quality in every project' },
    { icon: Users, title: 'Accountability', description: 'We take ownership of our commitments' },
    { icon: Lightbulb, title: 'Transparency', description: 'Clear communication and honest reporting' },
    { icon: TrendingUp, title: 'Innovation', description: 'We stay ahead with creative solutions' },
  ]

  const team = [
    {
      name: 'Victor Musyoka',
      role: 'Founder & Digital Strategist',
      responsibilities: 'Strategy, SEO, consulting, oversight, and client onboarding',
      bio: 'Victor leads FMD Africa\'s strategic vision, bringing expertise in digital strategy and SEO to help businesses achieve measurable growth.'
    },
    {
      name: 'Shalom Munene',
      role: 'Co-founder / CEO',
      responsibilities: 'Operations, client relations, reporting, and overall business management',
      bio: 'Shalom oversees operations and client success, ensuring every partnership delivers exceptional results and strategic value.'
    },
    {
      name: 'Shalom Gatwiri',
      role: 'Social Media Manager',
      responsibilities: 'Content posting, scheduling, community management, analytics, and content rollout',
      bio: 'Shalom manages day-to-day social media operations, engaging communities and executing content strategies that drive results.'
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-accent-900 via-accent-800 to-accent-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-orange-400">FMD Africa</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              A Creative and Tech Collective transforming brands through innovative digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  FMD Africa is a digital and content agency helping businesses grow through strategic content, 
                  social media management, and digital optimization. We specialize in turning your brand vision 
                  into measurable results.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Based in Nairobi, Kenya, we work with businesses across Africa and beyond, delivering 
                  data-driven strategies that create lasting impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Founded by Victor Musyoka and Shalom Munene, FMD Africa evolved from consulting roots 
                  into a comprehensive digital agency. What started as individual client projects grew into 
                  a structured agency focused on delivering consistent, high-quality results.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Today, we combine strategic thinking with creative execution, helping businesses build 
                  their digital presence, engage their audiences, and achieve sustainable growth through 
                  integrated content and digital strategies.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Digital strategy planning"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The people behind FMD Africa's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">{member.name}</h3>
                <p className="text-orange-400 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4 italic">{member.responsibilities}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Approach</h2>
              <p className="text-xl text-gray-600">
                A systematic process that delivers consistent results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { number: '01', title: 'Strategy First', description: 'We start with understanding your goals and building a roadmap' },
                { number: '02', title: 'Content Second', description: 'Create compelling content that resonates with your audience' },
                { number: '03', title: 'Distribution Third', description: 'Strategic distribution across the right channels' },
                { number: '04', title: 'Optimization Continuous', description: 'Ongoing analysis and refinement for better results' },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="text-5xl font-bold text-orange-400">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
