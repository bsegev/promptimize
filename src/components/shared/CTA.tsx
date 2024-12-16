'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { styles } from '@/lib/styles'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-0 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content container - reduce bottom padding */}
      <div className={`${styles.sectionPadding} pt-24 pb-12 relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="inline-block text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-1">
                Ready to Optimize Your Prompts?
              </h2>
            </motion.div>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join thousands of users who are already getting better results with optimized prompts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="primary"
                  size="lg"
                  className="min-w-[180px] whitespace-nowrap"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <Button 
                variant="secondary"
                size="lg"
                className="min-w-[180px] whitespace-nowrap"
              >
                View Pricing
              </Button>
            </div>
            
            <div className="text-gray-500">
              No credit card required • Free trial • Cancel anytime
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 