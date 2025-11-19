import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}
