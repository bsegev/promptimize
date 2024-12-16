'use client'

import Navbar from '@/components/layout/Navbar'
import ProductHero from '@/components/product/ProductHero'
import ProductFeatures from '@/components/product/ProductFeatures'
import ProductDemo from '@/components/product/ProductDemo'
import ProductBenefits from '@/components/product/ProductBenefits'
import ProductTestimonials from '@/components/product/ProductTestimonials'
import ProductIntegrations from '@/components/product/ProductIntegrations'
import CTA from '@/components/shared/CTA'

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductHero />
        <ProductFeatures />
        <ProductDemo />
        <ProductBenefits />
        <ProductTestimonials />
        <ProductIntegrations />
        <CTA />
      </main>
    </>
  )
} 