import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function ClearCommunicationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format"
              alt="Account manager discussing reports with a client in an office"
              className="w-full h-72 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Clear communication</h1>
          <p className="text-sm uppercase tracking-wide text-primary-600 mb-4 font-semibold">Transparent updates so you always know what&apos;s happening online</p>
          <p className="text-lg text-gray-600 mb-8">
            Great partnerships are built on clarity. We keep you updated on what&apos;s live, what&apos;s
            planned, and how your content is performing—without drowning you in noise.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why transparency builds trust and results</h2>
            <p>
              Most agencies leave you in the dark: content goes live, reports arrive weeks later, and you’re never quite sure what’s working. That opacity kills trust and slows down optimization. We believe clear communication isn’t just nice—it’s essential for growth.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format"
                alt="Account manager discussing reports with a client in an office"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our communication framework</h2>
            <ul>
              <li><strong>Shared content calendars:</strong> Real-time access to what’s scheduled, what’s in production, and what’s performing.</li>
              <li><strong>Weekly performance snapshots:</strong> One-page summaries with key metrics, insights, and next actions—no confusing dashboards.</li>
              <li><strong>Bi-weekly strategy calls:</strong> 30-minute sessions to review results, align on priorities, and adjust the plan.</li>
              <li><strong>Direct Slack access:</strong> Your team can reach ours instantly for quick questions and approvals.</li>
              <li><strong>Monthly business reviews:</strong> Deep dives into ROI, learnings, and roadmap updates with stakeholders.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80"
                alt="Team meeting with digital dashboard and analytics on screen"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How clear communication drives ROI</h2>
            <p>
              When communication flows freely, decisions happen faster and campaigns perform better. Our transparent approach delivers:
            </p>
            <ul>
              <li><strong>40% faster campaign optimization</strong> because issues are identified and addressed immediately.</li>
              <li><strong>Higher team alignment</strong>—your internal team stays in sync with our specialists, reducing duplicated work.</li>
              <li><strong>Better budget utilization</strong>—we reallocate spend in real-time based on performance data you can see.</li>
              <li><strong>Stronger stakeholder buy-in</strong>—clear reporting makes it easy to justify marketing investment and demonstrate value.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Analytics dashboard showing clear performance metrics"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">From updates to outcomes</h2>
            <p>
              We don’t just report metrics—we translate them into business insights. You’ll know not just that engagement increased, but why it matters for your pipeline, how it affects lead quality, and what we’re doing next to amplify the results.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for a partner that communicates like yours?</h2>
            <p>
              If you value transparency, proactive updates, and clear insights, we’re built for you. No more wondering what’s happening with your marketing—just clear, actionable communication that helps your business grow.
            </p>
            <p>
              <a href="/quote" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold mt-4">
                Start with Transparent Communication
                <ArrowRight size={20} />
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
