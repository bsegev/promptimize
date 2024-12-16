'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Lock, Zap } from 'lucide-react'

interface OptimizationResult {
  optimizedPrompt: string;
  improvements: string[];
  score: number;
  metadata: {
    processingTime: string;
    modelUsed: string;
    optimizationVersion: string;
  };
}

export default function PromptOptimizer() {
  const [prompt, setPrompt] = useState('')
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [result, setResult] = useState<OptimizationResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [charCount, setCharCount] = useState(0)
  const MAX_FREE_CHARS = 300

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setPrompt(text)
    setCharCount(text.length)
    setError(null)
  }

  const handleOptimize = async () => {
    try {
      setIsOptimizing(true)
      setError(null)

      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          options: {
            maxLength: MAX_FREE_CHARS,
            mode: 'free'
          }
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Optimization failed')
      }

      const result = await response.json()
      setResult(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsOptimizing(false)
    }
  }

  return (
    <section className="py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto relative space-y-16"
      >
        <Card className="border-0 shadow-xl bg-white/90">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Optimize Your Prompt
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Transform your ideas into powerful, context-rich prompts for better AI responses
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Textarea
                  placeholder="Enter your prompt here..."
                  value={prompt}
                  onChange={handlePromptChange}
                  className="min-h-[150px] text-lg bg-white/50"
                  maxLength={MAX_FREE_CHARS}
                />
                <div className="absolute bottom-2 right-2 text-sm text-gray-400">
                  {charCount}/{MAX_FREE_CHARS}
                </div>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  onClick={handleOptimize}
                  disabled={!prompt || isOptimizing || charCount > MAX_FREE_CHARS}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white hover-lift"
                >
                  {isOptimizing ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Optimizing...
                    </div>
                  ) : (
                    "Optimize Prompt"
                  )}
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Free trial limited to {MAX_FREE_CHARS} characters</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6"
            >
              <Card className="border-0 shadow-xl bg-white/90">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-500" />
                      <CardTitle className="text-xl font-bold text-green-500">
                        Optimized Result
                      </CardTitle>
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      Score: {result.score}/100
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Optimized Prompt:</h4>
                    <div className="p-4 rounded-lg bg-gray-50 text-gray-700">
                      {result.optimizedPrompt}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Improvements Made:</h4>
                    <ul className="space-y-2">
                      {result.improvements.map((improvement, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t text-sm text-gray-500">
                    <div className="flex items-center justify-between">
                      <span>Processing Time: {result.metadata.processingTime}</span>
                      <span>Model: {result.metadata.modelUsed}</span>
                      <span>Version: {result.metadata.optimizationVersion}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm">
                        Upgrade to Pro for advanced optimization features
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
} 