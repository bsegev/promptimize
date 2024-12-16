'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { styles } from '@/lib/styles'

const benefits = [
  { text: "No credit card required", delay: 0 },
  { text: "14-day free trial", delay: 0.1 },
  { text: "Cancel anytime", delay: 0.2 }
]

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const glowAnimation = {
  initial: { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.4)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(34, 197, 94, 0.4)",
      "0 0 0 8px rgba(34, 197, 94, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function PricingHero() {
  return (
    <section className={`${styles.sectionPadding} pt-32 pb-24 relative overflow-hidden min-h-[500px]`} style={styles.gradientBg}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className={`text-4xl sm:text-5xl font-bold leading-[1.2] sm:leading-[1.2] tracking-tight ${styles.textGradient}`}>
              Choose the Perfect Plan<br className="hidden sm:block" /> for Your AI Journey
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed"
          >
            From experimenting with prompts to building enterprise AI solutions,{' '}
            we have the right tools and expertise for every stage of your development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
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
              Compare Plans
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={pulseAnimation}
                  className="relative"
                >
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={glowAnimation}
                    className="absolute inset-0 rounded-full"
                  />
                  <div className="w-4 h-4 rounded-full bg-green-500 relative z-10" />
                </motion.div>
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 