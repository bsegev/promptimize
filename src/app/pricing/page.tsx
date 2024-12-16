import Navbar from '@/components/layout/Navbar'
import PricingHero from '@/components/pricing/PricingHero'
import PricingPlans from '@/components/pricing/PricingPlans'
import PricingFeatures from '@/components/pricing/PricingFeatures'
import PricingFAQ from '@/components/pricing/PricingFAQ'
import PricingComparison from '@/components/pricing/PricingComparison'
import CTA from '@/components/shared/CTA'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingFeatures />
        <PricingComparison />
        <PricingFAQ />
        <CTA />
      </main>
    </>
  )
} 