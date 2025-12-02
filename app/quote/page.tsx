"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const AVAILABLE_SERVICES = [
  'Social Media Management',
  'Content Creation',
  'Web Design & Development',
  'SEO & Website Optimization',
  'Digital Consulting & Strategy',
  'AI Search Optimization',
  'AI Business Automation',
  'MVP Development',
  'Short-form Event Coverage',
]

export default function QuotePage() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service')

  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    if (preselectedService && AVAILABLE_SERVICES.includes(preselectedService)) {
      return [preselectedService]
    }
    return []
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [budget, setBudget] = useState('')
  const [goals, setGoals] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const qualifiesForDiscount = selectedServices.length > 2

  const handleToggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const isFormValid = useMemo(() => {
    return name.trim() !== '' && email.trim() !== '' && selectedServices.length > 0
  }, [name, email, selectedServices.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid || isSubmitting) return

    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          budget,
          goals,
          selectedServices,
          qualifiesForDiscount,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.message || 'Failed to submit quotation request')
      }

      setSubmitSuccess(true)

      // Optionally clear some fields but keep services so they see what they requested
      setGoals('')
    } catch (error: any) {
      setSubmitError(error?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Design Your <span className="text-gradient">Custom Growth Package</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your brand, the services you&apos;re interested in, and your goals.
              We&apos;ll craft a custom proposal for you – with flexible options and transparent pricing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10 items-stretch">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 bg-white shadow-lg p-8 space-y-6 h-full flex flex-col"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Company / Brand</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your brand name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number (with country code)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g. +254 700 000 000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Start Date</label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Approximate Monthly Budget</label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g. $1,000 - $3,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">What are your goals?</label>
                <textarea
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your objectives, timelines, and any important details."
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all ${
                  isFormValid && !isSubmitting
                    ? 'bg-orange-400 hover:bg-orange-500 hover:shadow-xl'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Sending your request...' : 'Request My Custom Quotation'}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>

              <div className="mt-4 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Selected services</span>
                  <span className="text-gray-900">{selectedServices.length}</span>
                </div>
                {selectedServices.length > 0 && (
                  <p className="text-xs text-gray-600">
                    {selectedServices.join(' • ')}
                  </p>
                )}
                {qualifiesForDiscount ? (
                  <p className="text-xs text-emerald-600 font-medium">
                    You qualify for our 10% multi-service discount. We&apos;ll include this in your proposal.
                  </p>
                ) : (
                  <p className="text-xs text-gray-500">
                    Add more than two services to unlock a 10% discount on your overall package.
                  </p>
                )}
              </div>

              {submitSuccess && (
                <p className="text-xs text-green-600 mt-2">
                  Thank you! Your quotation request has been received. We will get back to you shortly.
                </p>
              )}

              {submitError && (
                <p className="text-xs text-red-600 mt-2">
                  {submitError}
                </p>
              )}

              <p className="text-xs text-gray-500 mt-2">
                By submitting this form you&apos;re simply requesting a quotation—no commitment required.
              </p>
            </motion.form>

            {/* Summary & services selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 bg-accent-900 text-white p-8 space-y-6 h-full flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-2">Select Your Services</h2>
              <p className="text-sm text-white/80 mb-4">
                Choose one or more services you&apos;d like a quotation for. If you select more than
                two services, we automatically apply a <span className="font-semibold text-orange-300">10% multi-service discount</span> to your proposal.
              </p>

              <div className="space-y-3">
                {AVAILABLE_SERVICES.map((service) => {
                  const active = selectedServices.includes(service)
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleToggleService(service)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border text-left transition-all ${
                        active
                          ? 'bg-orange-400/10 border-orange-300 text-white'
                          : 'bg-accent-800/40 border-accent-600 text-white/80 hover:bg-accent-800'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold ${
                            active
                              ? 'bg-orange-400 border-orange-300 text-accent-900'
                              : 'border-accent-400 text-accent-100'
                          }`}
                        >
                          {active ? <Check size={14} /> : '+'}
                        </span>
                        <span>{service}</span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                <p className="text-sm flex items-center justify-between">
                  <span>Selected services</span>
                  <span className="font-semibold">{selectedServices.length}</span>
                </p>

                {qualifiesForDiscount ? (
                  <p className="text-sm text-orange-200 font-semibold">
                    You qualify for our <span className="underline">10% multi-service discount</span>. We&apos;ll
                    reflect this in your custom quotation.
                  </p>
                ) : (
                  <p className="text-xs text-white/70">
                    Select more than two services to unlock a 10% discount on your overall package.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
