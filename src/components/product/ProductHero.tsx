'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from 'lucide-react'
import { styles } from '@/lib/styles'

export default function ProductHero() {
  return (
    <section className={`${styles.sectionPadding} pt-32 relative overflow-hidden`}>
      {/* Background effects */}
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
          {/* Pre-title badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Prompt Engineering
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className={`text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight ${styles.textGradient}`}>
              Transform Your AI Prompts<br />into Powerful Results
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 leading-relaxed"
          >
            Optimize, test, and perfect your prompts with our advanced engineering platform.
            Get better responses from AI models and improve your workflow efficiency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="primary"
                size="lg"
                className="min-w-[180px] whitespace-nowrap"
              >
                Start Optimizing
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <Button 
              variant="secondary"
              size="lg"
              className="min-w-[180px] whitespace-nowrap"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats or social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { label: "Active Users", value: "10,000+" },
              { label: "Prompts Optimized", value: "1M+" },
              { label: "Success Rate", value: "95%" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 