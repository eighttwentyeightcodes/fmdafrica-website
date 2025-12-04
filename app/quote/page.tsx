import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import QuoteClient from './QuoteClient'

type QuotePageProps = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function QuotePage({ searchParams }: QuotePageProps) {
  const serviceParam = searchParams?.service
  const preselectedService = Array.isArray(serviceParam) ? serviceParam[0] : serviceParam

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Suspense fallback={<div className="text-gray-500">Loading quote form...</div>}>
            <QuoteClient preselectedService={preselectedService} />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  )
}
