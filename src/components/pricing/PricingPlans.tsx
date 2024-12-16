'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { styles } from '@/lib/styles'

const plans = [
  {
    name: "Free Trial",
    description: "Perfect for testing and small projects",
    price: "0",
    features: [
      "Up to 300 characters per prompt",
      "Basic optimization features",
      "Standard response time",
      "Community support",
      "Limited templates",
      "Basic analytics"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    description: "For professionals and teams",
    price: "19",
    features: [
      "Unlimited characters",
      "Advanced optimization features",
      "Priority processing",
      "Premium support",
      "Custom templates",
      "Advanced analytics",
      "API access",
      "Team collaboration",
      "Custom integrations"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom prompt engineering solutions",
    price: "Custom",
    features: [
      "Custom GPT & AI Agent Development",
      "Advanced Prompt Chain Engineering",
      "AI Strategy Consulting",
      "Custom LLM Fine-tuning",
      "Workflow & Process Automation",
      "Training & Team Enablement",
      "24/7 Priority Support",
      "Performance Analytics & ROI",
      "And much more..."
    ],
    cta: "Contact Us",
    popular: false,
    enterprise: true
  }
]

export default function Pricing() {
  return (
    <section className={`${styles.sectionPadding} relative overflow-hidden`} style={styles.gradientBg}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Start free, upgrade when you need more
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div 
                className={`${styles.glassMorphism} ${styles.cardHover} p-8 rounded-2xl relative`}
                style={styles.cardGlow}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold py-1.5 px-4 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-16">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    {typeof plan.price === 'string' && plan.price !== 'Custom' ? (
                      <>
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-600">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant={plan.popular ? "primary" : plan.enterprise ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 