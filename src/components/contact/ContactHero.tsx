'use client'

import { motion } from 'framer-motion'
import { styles } from '@/lib/styles'
import { MessageSquare, Mail, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Contact Us',
    description: 'Get in touch with our team for any questions or support'
  },
  {
    icon: Mail,
    title: 'Newsletter',
    description: 'Weekly tips and insights on prompt engineering'
  },
  {
    icon: GraduationCap,
    title: 'Free Course',
    description: '5-day email course to master prompt engineering'
  }
]

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${styles.sectionTitle} ${styles.textGradient} mb-6`}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-12"
          >
            Get in touch with our team, join our newsletter, or start your prompt engineering journey with our free email course.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.title}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 