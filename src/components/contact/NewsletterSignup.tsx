'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

type SignupStatus = {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SignupStatus>({
    type: 'idle'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading' })
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      if (!res.ok) throw new Error('Failed to subscribe')
      
      setStatus({ 
        type: 'success', 
        message: 'Thanks for subscribing! Check your email to confirm.' 
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
    <section className="py-12 lg:py-16 bg-gradient-to-b from-blue-50/50 to-purple-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Weekly Prompt Engineering Tips
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Level up your prompt game
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Get weekly insights, tips, and best practices for crafting better prompts and getting more out of AI.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={status.type === 'loading'}
                />
                <Button 
                  type="submit"
                  variant="primary"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </div>

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
            </div>

            <p className="text-sm text-gray-500 mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 