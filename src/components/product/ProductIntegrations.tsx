'use client'

import { motion } from 'framer-motion'
import { styles } from '@/lib/styles'

const integrations = [
  {
    name: "ChatGPT",
    description: "Optimize prompts for OpenAI's ChatGPT models",
    logo: "🤖"
  },
  {
    name: "Claude",
    description: "Enhanced prompt engineering for Anthropic's Claude",
    logo: "🧠"
  },
  {
    name: "Stable Diffusion",
    description: "Perfect your image generation prompts",
    logo: "🎨"
  },
  {
    name: "Midjourney",
    description: "Create better artistic prompts",
    logo: "🖼️"
  },
  {
    name: "GitHub Copilot",
    description: "Improve your code generation prompts",
    logo: "👨‍💻"
  },
  {
    name: "Custom Models",
    description: "Support for your own fine-tuned models",
    logo: "⚙️"
  }
]

export default function ProductIntegrations() {
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
            Works With Your Favorite AI Tools
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Seamlessly integrate with popular AI models and platforms
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.glassMorphism} ${styles.cardHover} p-6 rounded-xl text-center`}
            >
              <div className="text-4xl mb-4">{integration.logo}</div>
              <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
              <p className="text-gray-600 text-sm">{integration.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              More integrations coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 