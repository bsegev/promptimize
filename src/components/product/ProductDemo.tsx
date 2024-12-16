'use client'

import { motion } from 'framer-motion'
import { styles } from '@/lib/styles'

export default function ProductDemo() {
  return (
    <section className={`${styles.sectionPadding} relative bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            See It in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Watch how Promptimize transforms your prompts into powerful, effective commands
          </motion.p>
        </div>

        {/* Demo placeholder - we'll add interactive demo later */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${styles.glassMorphism} rounded-2xl p-8 aspect-video w-full max-w-4xl mx-auto`}
        >
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Demo Video Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 