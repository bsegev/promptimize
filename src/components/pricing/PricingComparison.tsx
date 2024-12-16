'use client'

import { motion } from 'framer-motion'
import { styles } from '@/lib/styles'

const plans = [
  {
    name: "Free Trial",
    idealFor: "Individuals & Small Projects",
    useCases: [
      "Testing prompt engineering concepts",
      "Small personal projects",
      "Learning AI development basics",
      "Experimenting with templates"
    ]
  },
  {
    name: "Pro",
    idealFor: "Professional Developers & Teams",
    useCases: [
      "Production-ready AI applications",
      "Team collaboration on prompts",
      "Advanced prompt chain development",
      "Custom AI agent integration",
      "API-driven workflows"
    ]
  },
  {
    name: "Enterprise",
    idealFor: "Large Organizations & Custom Solutions",
    useCases: [
      "Custom GPT model development",
      "Enterprise-wide AI deployment",
      "Full-scale AI transformation",
      "Dedicated AI strategy consulting",
      "Custom integrations & security",
      "Training & enablement programs"
    ]
  }
]

export default function PricingComparison() {
  return (
    <section className={`${styles.sectionPadding} bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Find Your Perfect Plan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Compare use cases and find the plan that matches your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${styles.glassMorphism} p-8 rounded-2xl`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-purple-600 font-medium mb-6">{plan.idealFor}</p>
              <h4 className="text-lg font-semibold mb-4">Perfect for:</h4>
              <ul className="space-y-3">
                {plan.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></span>
                    <span className="text-gray-600">{useCase}</span>
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