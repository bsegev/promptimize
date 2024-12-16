'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GraduationCap, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const courseHighlights = [
  'Master the fundamentals of prompt engineering',
  'Learn advanced techniques for better AI outputs',
  'Real-world examples and case studies',
  'Hands-on exercises and templates',
  'Best practices and common pitfalls'
]

type CourseStatus = {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function EmailCourse() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<CourseStatus>({
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
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  5-Day Free Email Course
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Become a Prompt Engineering Expert
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Master the art of crafting effective prompts in just 5 days. Get daily lessons, examples, and exercises delivered straight to your inbox.
              </p>

              <div className="space-y-4">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:flex lg:items-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200/50 w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Start Learning Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Join hundreds of others who have transformed their prompt writing skills.
                </p>

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

                  {status.message && (
                    <div className={`p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-700' 
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-700'
                        : ''
                    }`}>
                      <div className="flex items-center gap-2">
                        {status.type === 'success' ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : status.type === 'error' ? (
                          <AlertCircle className="w-5 h-5" />
                        ) : null}
                        <p>{status.message}</p>
                      </div>
                    </div>
                  )}

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
                  
                  <p className="text-sm text-gray-500 text-center">
                    First lesson arrives immediately after signup
                  </p>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 