import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function DataDrivenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Marketing team reviewing charts and dashboards on screens"
              className="w-full h-72 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Data-driven decisions</h1>
          <p className="text-sm uppercase tracking-wide text-primary-600 mb-4 font-semibold">Turning numbers into smarter content, campaigns, and revenue</p>
          <p className="text-lg text-gray-600 mb-8">
            Every decision at FMD Africa is backed by analytics, not guesses. We combine platform data,
            audience insights, and business KPIs to decide what we create, where we publish, and how we
            optimize.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why data beats guessing every time</h2>
            <p>
              Most brands create content based on gut feelings or what competitors are doing. That’s like driving blindfolded. At FMD Africa, we let the numbers guide every creative decision—from which hooks stop the scroll to which offers convert best.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Analytics dashboard showing marketing metrics and performance data"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our data framework in action</h2>
            <ul>
              <li><strong>Audience behavior mapping:</strong> We analyze when your followers are most active, what formats they prefer, and which messages trigger saves, shares, and clicks.</li>
              <li><strong>Content performance tracking:</strong> Every reel, carousel, and post gets tagged and measured so we know exactly what drives profile visits and website traffic.</li>
              <li><strong>Competitor benchmarking:</strong> We compare your metrics against industry standards to spot opportunities others miss.</li>
              <li><strong>Monthly optimization cycles:</strong> Insights from your data feed directly into next month’s content calendar—no more repeating what doesn’t work.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Team analyzing data charts and graphs on multiple screens"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Real ROI from data-driven content</h2>
            <p>
              When we put data behind your marketing, you stop wasting budget and start seeing compound returns. Our clients typically experience:
            </p>
            <ul>
              <li><strong>35–50% higher engagement rates</strong> within the first quarter by focusing on proven formats.</li>
              <li><strong>2–3x more profile visits</strong> because we optimize every piece for discovery and click-through.</li>
              <li><strong>Clearer lead attribution</strong>—you’ll know exactly which content brings inquiries and sales.</li>
              <li><strong>Reduced content waste</strong>—no more creating posts that never perform.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                alt="Growth chart showing upward trending business metrics"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">From insights to income</h2>
            <p>
              Data isn’t just about reports—it’s about revenue. We help you connect the dots between what your audience loves and what your business needs. Whether that’s more demo bookings, product sales, or consultation calls, your content will be engineered to deliver.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to turn your analytics into growth?</h2>
            <p>
              Stop guessing and start growing. Our data-driven approach has helped brands across fintech, SaaS, and e-commerce transform their social presence into predictable lead generators. Let’s do the same for you.
            </p>
            <p>
              <a href="/quote" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold mt-4">
                Get Your Data-Driven Growth Plan
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
