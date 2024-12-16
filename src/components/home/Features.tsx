'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Compass, 
  Zap,  // Use Zap instead of Bolt
  Eye,  // Use Eye instead of Glasses
  BarChart2, 
  ShieldCheck,
  Sparkles 
} from 'lucide-react'
import { styles } from '@/lib/styles'

const features = [
  {
    icon: Brain,
    title: "Smart Optimization",
    description: "Advanced algorithms analyze and enhance your prompts for maximum effectiveness",
    iconClass: "group-hover:text-blue-600"
  },
  {
    icon: Compass,
    title: "Context Awareness",
    description: "Tailored suggestions based on your specific use case and goals",
    iconClass: "group-hover:text-purple-600"
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get optimized prompts in seconds with our real-time processing",
    iconClass: "group-hover:text-yellow-500"
  },
  {
    icon: Eye,
    title: "Enhanced Clarity",
    description: "Clear, precise prompts that generate better AI responses",
    iconClass: "group-hover:text-cyan-500"
  },
  {
    icon: BarChart2,
    title: "Performance Metrics",
    description: "Track and measure the effectiveness of your prompts",
    iconClass: "group-hover:text-green-500"
  },
  {
    icon: ShieldCheck,
    title: "Best Practices",
    description: "Built-in guidelines and templates from industry experts",
    iconClass: "group-hover:text-indigo-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to create perfect prompts
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 hover:border-blue-500/20 transition-all duration-300"
              style={styles.cardGlow}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon 
                    className={`w-8 h-8 ${styles.textGradient} group-hover:rotate-[-8deg] transition-all duration-300 ${feature.iconClass}`} 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-semibold mb-4 ${styles.textGradient} group-hover:scale-105 transition-transform duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}