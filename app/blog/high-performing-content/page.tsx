import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function HighPerformingContentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
              alt="Creative team reviewing social media content on multiple devices"
              className="w-full h-72 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">High-performing content</h1>
          <p className="text-sm uppercase tracking-wide text-primary-600 mb-4 font-semibold">Content that doesn&apos;t just get views, but drives real business outcomes</p>
          <p className="text-lg text-gray-600 mb-8">
            High-performing content is not an accident. It&apos;s the result of clear positioning,
            strong creative, and relentless testing of hooks, formats, and offers.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content that converts, not just impresses</h2>
            <p>
              Beautiful content that doesn’t drive business results is expensive art. We create content with purpose—every reel, carousel, and story is designed to move your audience closer to a decision. That’s the difference between content that gets likes and content that gets leads.
            </p>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                alt="Creative team reviewing social media content on multiple devices"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our performance-first content framework</h2>
            <ul>
              <li><strong>Hook engineering:</strong> We test dozens of opening patterns to find what stops your specific audience from scrolling.</li>
              <li><strong>Platform-native formats:</strong> Reels optimized for Instagram, short videos for TikTok, carousels for LinkedIn—each tailored to how people consume on that platform.</li>
              <li><strong>Value-layered storytelling:</strong> Every piece delivers immediate value while subtly positioning your offer as the solution.</li>
              <li><strong>Conversion-oriented CTAs:</strong> Clear next steps that match where your audience is in their journey—awareness, consideration, or decision.</li>
              <li><strong>Performance tagging:</strong> We categorize and track every piece so we know exactly which formats, topics, and styles drive results.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
                alt="Social media content creation with video and graphics"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Measurable impact on your bottom line</h2>
            <p>
              High-performing content isn't about vanity metrics—it's about business outcomes. Our clients consistently see:
            </p>
            <ul>
              <li><strong>60–80% higher click-through rates</strong> from social to website compared to industry averages.</li>
              <li><strong>2.5x more qualified leads</strong> from the same content volume because we attract the right audience.</li>
              <li><strong>Shorter sales cycles</strong>—prospects arrive pre-educated and ready to buy.</li>
              <li><strong>Better ad efficiency</strong>—organic content that performs well reduces paid acquisition costs.</li>
            </ul>

            <div className="my-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                alt="Business growth chart showing increasing revenue"
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">From content to customer journey</h2>
            <p>
              We map every piece of content to your customer's path. Awareness posts introduce problems, consideration posts showcase solutions, and decision posts demonstrate proof and urgency. The result is a seamless experience that guides followers from discovery to conversion without feeling salesy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for content that actually grows your business?</h2>
            <p>
              Stop creating content just to fill a calendar. Let's build a content engine that delivers measurable ROI for your brand. Whether you're in B2B SaaS, e-commerce, or professional services, we'll craft content that speaks to your market and drives results.
            </p>
            <p>
              <a href="/quote" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold mt-4">
                Get Your High-Performance Content Strategy
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
