'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Target, RefreshCw } from 'lucide-react'
import { styles } from '@/lib/styles'

const features = [
  {
    icon: Sparkles,
    title: "Smart Prompt Analysis",
    description: "Our AI analyzes your prompts for clarity, context, and effectiveness, providing real-time suggestions for improvement.",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "Get immediate recommendations to enhance your prompts, with side-by-side comparisons of before and after results.",
    color: "purple"
  },
  {
    icon: Target,
    title: "A/B Testing",
    description: "Test multiple prompt variations simultaneously to identify the most effective approach for your specific needs.",
    color: "indigo"
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Our platform learns from successful prompts across industries to provide ever-improving recommendations.",
    color: "violet"
  }
]

export default function ProductFeatures() {
  return (
    <section className={`${styles.sectionPadding} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Powerful Features for Better Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to create, optimize, and manage your AI prompts effectively
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.glassMorphism} ${styles.cardHover} p-8 rounded-2xl`}
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              New: Advanced Analytics Dashboard
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 