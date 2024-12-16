'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "../components/ui/button"
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { styles } from '@/lib/styles'

const examples = [
  {
    input: "Write an email asking for a raise",
    thinking: "Enhancing with achievements and data...",
    output: "Write a persuasive email requesting a raise, highlighting: recent project successes, market salary data, and quantifiable impact on company goals"
  },
  {
    input: "Plan a team building event",
    thinking: "Adding engagement parameters...",
    output: "Design a team building event considering: diverse team interests, budget $50/person, hybrid-friendly activities, measurable engagement goals"
  },
  {
    input: "Create a product launch post",
    thinking: "Optimizing for engagement...",
    output: "Craft a product launch post with: clear value proposition, social proof, early-bird incentives, and compelling call-to-action"
  }
]

const buttonGradient = {
  backgroundImage: 'linear-gradient(to right, #0070f3, #8b5cf6)',
}

export default function Hero() {
  const [currentExample, setCurrentExample] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [phase, setPhase] = useState<'input' | 'thinking' | 'output'>('input')
  const [isTyping, setIsTyping] = useState(true)

  const typeText = async (text: string, speed: number = 40) => {
    setIsTyping(true)
    setDisplayedText('')
    
    const characters = text.split('')
    
    for (const char of characters) {
      await new Promise(resolve => setTimeout(resolve, speed))
      setDisplayedText(prev => prev + char)
    }
    
    setIsTyping(false)
  }

  useEffect(() => {
    let mounted = true

    const runPhase = async () => {
      if (!mounted) return

      const currentText = examples[currentExample]
      
      switch(phase) {
        case 'input':
          await typeText(currentText.input, 50)
          if (mounted) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setPhase('thinking')
          }
          break
          
        case 'thinking':
          await typeText(currentText.thinking, 40)
          if (mounted) {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setPhase('output')
          }
          break
          
        case 'output':
          await typeText(currentText.output, 30)
          if (mounted) {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setPhase('input')
            setCurrentExample((prev) => (prev + 1) % examples.length)
          }
          break
      }
    }

    runPhase()
    return () => { mounted = false }
  }, [currentExample, phase])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="block">Ready to Optimize</span>
              <span className={styles.textGradient}>Your Prompts?</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600/90">
              Join thousands of users who are already getting better results with optimized prompts.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg"
                  className="px-8 py-3 text-lg font-medium rounded-lg text-white"
                  style={buttonGradient}
                >
                  Get Started Free
                </Button>
              </motion.div>
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg font-medium rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm
                          hover:bg-white/80 transition-colors"
              >
                View Pricing
              </Button>
            </div>

            <p className="text-sm text-gray-500 pt-2">
              No credit card required • Free trial • Cancel anytime
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="chat-window">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className={`h-5 w-5 text-primary ${phase === 'thinking' ? 'animate-spin' : ''}`} />
                  <span className="font-semibold text-gray-900 flex items-center gap-2">
                    {phase === 'input' ? (
                      <>Basic Prompt <span className="text-xs text-gray-500">(before)</span></>
                    ) : phase === 'thinking' ? (
                      <span className="text-primary flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          ⚡
                        </motion.span>
                        Optimizing...
                      </span>
                    ) : (
                      <>Enhanced Prompt <span className="text-xs text-gray-500">(after)</span></>
                    )}
                  </span>
                </div>
                
                <div className="min-h-[150px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={phase + currentExample}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-sm"
                    >
                      <p className={`
                        leading-relaxed rounded-lg p-4
                        ${phase === 'thinking' ? 'text-primary/90 bg-blue-50' : 'text-gray-600'}
                        ${phase === 'output' ? 'font-medium bg-green-50' : ''}
                        ${phase === 'input' ? 'bg-gray-50' : ''}
                      `}>
                        {displayedText}
                        {isTyping && <span className="typing-cursor" />}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 