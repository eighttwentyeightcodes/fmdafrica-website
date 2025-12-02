import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function PersonalizedStrategyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&sat=-40&auto=format"
              alt="Strategy workshop with sticky notes and laptops on a table"
              className="w-full h-72 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Personalized strategy</h1>
          <p className="text-sm uppercase tracking-wide text-primary-600 mb-4 font-semibold">A roadmap built around your stage, resources, and goals</p>
          <p className="text-lg text-gray-600 mb-8">
            No two brands are the same. We design roadmaps that respect your current stage, team
            capacity, and growth goals instead of forcing you into a one‑size‑fits‑all playbook.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why one-size-fits-all kills growth</h2>
            <p>
              Most agencies push the same playbook on every client: post 3x per week, use trending audio, run Instagram ads. That’s lazy marketing. Your brand has unique strengths, a specific market position, and real constraints. A strategy that ignores those realities is destined to fail.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&sat=-40&auto=format"
                alt="Strategy workshop with sticky notes and laptops on a table"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How we build your personalized roadmap</h2>
            <ul>
              <li><strong>Deep discovery phase:</strong> We audit your current performance, interview your team, and map your customer journey before suggesting any tactics.</li>
              <li><strong>Resource reality check:</strong> We align our recommendations with your budget, team capacity, and technical capabilities—no magic wands.</li>
              <li><strong>Stage-appropriate goals:</strong> Early-stage brands get focus on awareness and validation; growth-stage brands get scaling and optimization systems.</li>
              <li><strong>Platform prioritization:</strong> We don’t try to win everywhere. We focus on 1–2 platforms where your audience actually spends time and converts.</li>
              <li><strong>Iterative refinement:</strong> Your strategy evolves as we learn what works, ensuring we double down on winners and cut losers quickly.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
                alt="Custom roadmap planning with charts and diagrams"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The ROI of getting the strategy right</h2>
            <p>
              When your strategy matches your reality, every dollar works harder. Our personalized approach delivers:
            </p>
            <ul>
              <li><strong>50% faster time-to-results</strong> because we skip generic tactics and focus on what works for your market.</li>
              <li><strong>3x higher marketing efficiency</strong>—no budget wasted on platforms or content types that don’t move the needle for you.</li>
              <li><strong>Smoother team execution</strong>—your internal team can actually implement and sustain the plan we design together.</li>
              <li><strong>Better decision-making</strong>—clear criteria for what to say yes to and what to decline, saving time and money.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Business growth metrics and performance charts"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">From strategy to sustainable growth</h2>
            <p>
              A personalized strategy isn’t a document that sits in a drawer—it’s a living roadmap that guides daily decisions. We help you prioritize the 20% of activities that drive 80% of results, then build systems to make those activities repeatable and scalable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for a strategy built for your brand?</h2>
            <p>
              If you’re tired of generic advice and want a plan that respects your unique position, let’s talk. We’ll design a strategy that works with your resources, against your competitors, and toward your specific growth targets.
            </p>
            <p>
              <a href="/quote" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold mt-4">
                Get Your Personalized Growth Strategy
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
