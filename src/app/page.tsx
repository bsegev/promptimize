import Navbar from '@/components/layout/Navbar'
import Hero3 from '@/components/home/Hero3'
import Features from '@/components/home/Features'
import HowItWorks from '@/components/home/HowItWorks'
import UseCases2 from '@/components/home/UseCases2'
import Testimonials from '@/components/home/Testimonials'
import PricingPlans from '@/components/pricing/PricingPlans'
import CTA from '@/components/shared/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero3 />
        <Features />
        <HowItWorks />
        <UseCases2 />
        <Testimonials />
        <PricingPlans />
        <CTA />
      </main>
    </>
  )
}
