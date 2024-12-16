'use client'

import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { styles } from '@/lib/styles'

const features = {
  categories: [
    {
      name: "Learning & Onboarding",
      features: [
        {
          name: "Interactive Tutorials",
          free: "Basic",
          pro: "Industry-Specific",
          enterprise: "Custom"
        },
        {
          name: "Use-Case Library",
          free: "General",
          pro: "Industry-Focused",
          enterprise: "Custom"
        },
        {
          name: "Guided Optimization",
          free: "Basic",
          pro: "Advanced",
          enterprise: "1-on-1 Support"
        },
        {
          name: "Success Tracking",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom Reports"
        }
      ]
    },
    {
      name: "Practical Tools",
      features: [
        {
          name: "Quick-Start Templates",
          free: "5 templates",
          pro: "Unlimited",
          enterprise: "Custom"
        },
        {
          name: "Time-Saving Analysis",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "AI Response Quality",
          free: "Basic",
          pro: "Detailed",
          enterprise: "Custom"
        },
        {
          name: "Smart Suggestions",
          free: "3/day",
          pro: "Unlimited",
          enterprise: "Priority"
        }
      ]
    },
    {
      name: "Task Simplification",
      features: [
        {
          name: "One-Click Optimization",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Visual Prompt Builder",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Easy Organization",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Results Dashboard",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        }
      ]
    },
    {
      name: "Advanced Features",
      features: [
        {
          name: "Framework Selection",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Role & Context Designer",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "A/B Testing",
          free: "3/month",
          pro: "Unlimited",
          enterprise: "Advanced"
        },
        {
          name: "Output Analysis",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        }
      ]
    },
    {
      name: "Power Features",
      features: [
        {
          name: "Chain-of-Thought Builder",
          free: false,
          pro: true,
          enterprise: "Advanced"
        },
        {
          name: "Semantic Refinement",
          free: false,
          pro: true,
          enterprise: "Advanced"
        },
        {
          name: "Bias Detection",
          free: false,
          pro: true,
          enterprise: "Advanced"
        },
        {
          name: "Custom Variables",
          free: "3",
          pro: "Unlimited",
          enterprise: "Advanced"
        }
      ]
    },
    {
      name: "Enterprise Features",
      features: [
        {
          name: "Team Collaboration",
          free: "Coming Q3",
          pro: "Coming Q3",
          enterprise: "Coming Q3"
        },
        {
          name: "API Integration",
          free: false,
          pro: "Coming Q4",
          enterprise: "Coming Q4"
        },
        {
          name: "Custom Analytics",
          free: false,
          pro: "Coming Q4",
          enterprise: "Coming Q4"
        },
        {
          name: "Export & Integration",
          free: "Basic",
          pro: "Advanced",
          enterprise: "Custom"
        }
      ]
    }
  ]
}

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-green-500" />
      </div>
    ) : (
      <div className="flex justify-center">
        <Minus className="w-5 h-5 text-gray-300" />
      </div>
    )
  }
  return <div className="text-center text-gray-700">{value}</div>
}

export default function PricingFeatures() {
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
            Compare Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to know about our plans
          </motion.p>
        </div>

        <div className="space-y-16">
          {features.categories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-6 text-left w-1/3">Feature</th>
                      <th className="py-4 px-6 text-center w-1/5">Free</th>
                      <th className="py-4 px-6 text-center w-1/5">Pro</th>
                      <th className="py-4 px-6 text-center w-1/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {category.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-gray-100">
                        <td className="py-4 px-6 text-gray-600">{feature.name}</td>
                        <td className="py-4 px-6">
                          <FeatureValue value={feature.free} />
                        </td>
                        <td className="py-4 px-6">
                          <FeatureValue value={feature.pro} />
                        </td>
                        <td className="py-4 px-6">
                          <FeatureValue value={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 