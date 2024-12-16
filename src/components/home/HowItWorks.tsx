'use client'

import { motion } from 'framer-motion'
import { PenLine, Cpu, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { styles } from '@/lib/styles'

const steps = [
  {
    icon: PenLine,
    title: "Write Your Prompt",
    description: "Start with your initial prompt idea. Don't worry about making it perfect - that's our job.",
    iconClass: "group-hover:text-blue-600"
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your prompt for clarity, context, and effectiveness.",
    iconClass: "group-hover:text-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Get Better Results",
    description: "Use your optimized prompt to generate higher-quality AI responses.",
    iconClass: "group-hover:text-cyan-500"
  }
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Three simple steps to transform your prompts
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200 transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div 
                  className={`${styles.glassMorphism} ${styles.cardHover} p-8 rounded-2xl relative flex flex-col items-center text-center h-full`}
                  style={styles.cardGlow}
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <step.icon 
                      className={`w-10 h-10 text-gray-600 ${step.iconClass} transition-colors duration-300`} 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-semibold text-center mb-4 ${styles.textGradient} group-hover:scale-105 transition-transform duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Connection arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500/50 md:hidden"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Insight section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Main insight card */}
            <div 
              className={`${styles.glassMorphism} ${styles.cardHover} md:col-span-2 p-10 rounded-2xl relative`}
              style={styles.cardGlow}
            >
              <div className="space-y-6">
                <h3 className={`text-2xl md:text-3xl font-semibold ${styles.textGradient}`}>
                  Beyond Just Words
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Prompt engineering is a bridge between human thought and machine understanding. 
                    While we naturally communicate with context and assumptions, AI requires 
                    precision and structure to truly understand our intent.
                  </p>
                  <p className="text-lg">
                    Think of it as learning a new language—not just the words, but the way 
                    ideas are structured and conveyed. The difference between a basic prompt 
                    and an optimized one isn't just technical; it's about crafting a clear 
                    path for AI to follow.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Mission card */}
            <div 
              className={`${styles.glassMorphism} ${styles.cardHover} p-10 rounded-2xl relative`}
              style={styles.cardGlow}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2">
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    In the AI era, effective communication with machines isn't just a technical skill—it's a form of literacy. 
                    Promptimize exists to empower everyone with this essential knowledge, making AI more accessible and useful 
                    for all.
                  </p>
                  <p className="text-lg font-medium text-blue-600">
                    What could your AI interactions achieve with the right communication?
                  </p>
                </div>
              </div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 