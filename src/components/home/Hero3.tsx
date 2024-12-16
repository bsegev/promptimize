'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { styles } from '@/lib/styles'

const examples = [
  {
    input: "Help me write an email to my boss asking for a raise",
    thinking: "Adding structure, confidence markers, and specific context points...",
    output: "Help me write a professional email to my boss asking for a raise. Include: 1) My key achievements in the past year, 2) Market research about industry salaries, 3) A clear but respectful ask. Use a confident but diplomatic tone."
  },
  {
    input: "Give me ideas for my friend's 30th birthday party",
    thinking: "Adding preference parameters, constraints, and outcome goals...",
    output: "Suggest creative ideas for my friend's 30th birthday party. Consider: budget range $200-500, 10-15 people, preferably outdoors or at home, focus on memorable experiences rather than just drinks. They enjoy photography and indie music."
  },
  {
    input: "How do I start learning Python?",
    thinking: "Adding learning context, goals, and experience level parameters...",
    output: "How do I start learning Python as a complete beginner? I want to focus on data analysis. Break down the learning path into clear steps, suggest reliable free resources, and include small practice projects I can try. Assume 5-7 hours per week study time."
  }
]

export default function Hero3() {
  const [currentExample, setCurrentExample] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isThinking, setIsThinking] = useState(false)
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [displayThinking, setDisplayThinking] = useState("")
  const [displayOutput, setDisplayOutput] = useState("")

  useEffect(() => {
    let mounted = true

    const typeInput = async () => {
      if (!mounted) return

      setIsTyping(true)
      setIsThinking(false)
      setIsOptimizing(false)
      setDisplayText("")
      setDisplayThinking("")
      setDisplayOutput("")
      
      // Type input
      for (let i = 0; i <= examples[currentExample].input.length; i++) {
        if (!mounted) return
        setDisplayText(examples[currentExample].input.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Show thinking
      setIsThinking(true)
      for (let i = 0; i <= examples[currentExample].thinking.length; i++) {
        if (!mounted) return
        setDisplayThinking(examples[currentExample].thinking.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 30))
      }
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Show output
      setIsOptimizing(true)
      for (let i = 0; i <= examples[currentExample].output.length; i++) {
        if (!mounted) return
        setDisplayOutput(examples[currentExample].output.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 20))
      }
      
      if (mounted) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        setCurrentExample((prev) => (prev + 1) % examples.length)
      }
    }

    typeInput()
    return () => { mounted = false }
  }, [currentExample])

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20 min-h-[800px]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="relative flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[700px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center -mt-20">
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-blue-200/10 mb-8"
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                AI-Powered Prompt Engineering
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
            >
              <span className="block text-gray-900">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Interactions
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Get consistently better AI responses with our intelligent prompt optimizer. 
              Turn basic prompts into powerful, context-aware instructions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-[200px] group"
                >
                  <span>Try It Free</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-[200px]"
                >
                  View Examples
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Demo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:ml-auto w-full lg:min-w-[500px]"
            style={styles.cardGlow}
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 lg:p-10">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <h3 className="text-lg font-medium text-gray-600">Basic Prompt</h3>
                  </div>
                  <div className="bg-gray-50/70 rounded-xl border border-gray-200/50 p-5">
                    <p className="text-gray-600 font-mono whitespace-pre-wrap break-words">
                      {displayText}
                      {isTyping && (
                        <span className="inline-block w-[2px] h-5 bg-blue-500 ml-1 animate-pulse"/>
                      )}
                    </p>
                  </div>
                </div>

                {isThinking && (
                  <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-100/50 p-5">
                    <div className="flex items-center gap-2 text-blue-600 font-mono text-sm">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        ⚡
                      </motion.span>
                      <span className="whitespace-pre-wrap break-words">{displayThinking}</span>
                      <span className="inline-block w-[2px] h-4 bg-blue-500 ml-1 animate-pulse"/>
                    </div>
                  </div>
                )}

                {isOptimizing && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <h3 className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Enhanced Prompt
                      </h3>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-100/50 p-5">
                      <p className="text-gray-800 font-mono whitespace-pre-wrap break-words">
                        {displayOutput}
                        <span className="inline-block w-[2px] h-5 bg-blue-500 ml-1 animate-pulse"/>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToFeatures}
      >
        <div className="relative flex flex-col items-center gap-2 group">
          <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
            Explore Features
          </span>
          <div className="w-8 h-14 border-2 border-gray-300 rounded-full p-1 group-hover:border-blue-500 transition-colors">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
} 