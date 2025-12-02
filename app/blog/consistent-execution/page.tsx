import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function ConsistentExecutionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Team reviewing a content calendar on a wall with sticky notes"
              className="w-full h-72 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Consistent execution</h1>
          <p className="text-sm uppercase tracking-wide text-primary-600 mb-4 font-semibold">Building systems that keep your brand visible every single week</p>
          <p className="text-lg text-gray-600 mb-8">
            Strategy only matters when it&apos;s executed week after week. Our processes are built so that
            your brand shows up consistently, on time, and on-message across every channel.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why consistency compounds into growth</h2>
            <p>
              One viral post feels great, but consistent presence builds trust. Brands that show up every week become part of their audience’s routine. That’s when you move from “nice to follow” to “must follow”—and that’s when leads start flowing in naturally.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt="Team reviewing a content calendar on a wall with sticky notes"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our execution system</h2>
            <ul>
              <li><strong>Content banking:</strong> We always work 2–3 weeks ahead so your brand never goes dark, even during busy periods.</li>
              <li><strong>Platform-specific workflows:</strong> Tailored processes for Instagram reels, TikTok, LinkedIn, and email so nothing falls through the cracks.</li>
              <li><strong>Approval chains that don’t break:</strong> Clear review cycles with deadlines so content launches on time, every time.</li>
              <li><strong>Weekly performance syncs:</strong> 30-minute check-ins to review what worked and adjust the upcoming calendar.</li>
              <li><strong>Crisis-proof scheduling:</strong> Backup content and automated queues for holidays, travel, or unexpected events.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1603726817553-f2d0b5b5c2f2?w=1200&q=80"
                alt="Calendar with scheduled tasks and deadlines"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The business impact of showing up</h2>
            <p>
              Consistency isn’t just about looking active—it’s about building a predictable growth engine. Our clients see measurable results from reliable execution:
            </p>
            <ul>
              <li><strong>40% faster audience growth</strong> compared to sporadic posting schedules.</li>
              <li><strong>3x more inbound inquiries</strong> because prospects see you as established and trustworthy.</li>
              <li><strong>Higher customer lifetime value</strong>—existing clients stay engaged and refer others.</li>
              <li><strong>Better algorithm favorability</strong>—platforms reward consistent posting with more reach.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Growth chart showing consistent upward trend"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">From routine to revenue</h2>
            <p>
              When your audience knows they can count on you, they stop just scrolling and start engaging. They save your posts, tag friends, and eventually click through to your offers. That’s the power of consistency—turning passive viewers into active customers over time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for a team that delivers every week?</h2>
            <p>
              If you’ve experienced the "start strong, fade fast" cycle with other agencies, you’ll appreciate our commitment to reliable delivery. We build systems that keep your brand visible and growing, month after month.
            </p>
            <p>
              <a href="/quote" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold mt-4">
                Build Your Consistent Growth Engine
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
