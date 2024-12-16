'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { styles } from '@/lib/styles'

const benefits = [
  {
    title: "Save Time",
    description: "Reduce prompt iteration time by up to 70% with our AI-powered optimization engine.",
    items: [
      "Instant prompt analysis",
      "Quick A/B testing",
      "Automated improvements",
      "Reusable templates"
    ]
  },
  {
    title: "Improve Quality",
    description: "Get consistently better responses from AI models with optimized prompts.",
    items: [
      "Context enhancement",
      "Clarity optimization",
      "Bias detection",
      "Performance tracking"
    ]
  },
  {
    title: "Scale Effectively",
    description: "Manage and optimize prompts across your entire organization.",
    items: [
      "Team collaboration",
      "Version control",
      "Best practices library",
      "Performance analytics"
    ]
  }
]

export default function ProductBenefits() {
  return (
    <section className={`${styles.sectionPadding} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Why Choose Promptimize?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Unlock the full potential of AI with optimized prompts
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.glassMorphism} ${styles.cardHover} p-8 rounded-2xl`}
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 