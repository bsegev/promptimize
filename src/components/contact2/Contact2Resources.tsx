'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GraduationCap, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

type SignupStatus = {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

const courseHighlights = [
  'Master the fundamentals of prompt engineering',
  'Learn advanced techniques for better AI outputs',
  'Real-world examples and case studies',
  'Best practices and common pitfalls'
]

export default function Contact2Resources() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SignupStatus>({
    type: 'idle'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading' })
    
    try {
      const res = await fetch('/api/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      if (!res.ok) throw new Error('Failed to register')
      
      setStatus({ 
        type: 'success', 
        message: "You're registered! Check your email for the first lesson."
      })
      setEmail('')
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      })
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Free Course Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Free Email Course
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Master Prompt Engineering
            </h2>

            <div className="space-y-4 mb-6">
              {courseHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={status.type === 'loading'}
              />

              <Button 
                type="submit"
                variant="primary"
                className="w-full"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Get Free Course'
                )}
              </Button>
            </form>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Weekly Tips & Updates
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>

            <p className="text-gray-600 mb-6">
              Get weekly insights on prompt engineering, AI developments, and optimization techniques delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <Button 
                  type="submit"
                  variant="secondary"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </motion.div>

        {status.message && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg max-w-md mx-auto ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-700' 
                : 'bg-red-50 text-red-700'
            }`}
          >
            <div className="flex items-center gap-2">
              {status.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <p>{status.message}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 