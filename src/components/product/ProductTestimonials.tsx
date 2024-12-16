'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { styles } from '@/lib/styles'

const testimonials = [
  {
    quote: "Promptimize has transformed how we interact with AI. Our team's productivity has increased significantly.",
    author: "Sarah Chen",
    role: "AI Product Manager",
    company: "TechCorp"
  },
  {
    quote: "The A/B testing feature alone has saved us countless hours of manual prompt tweaking. Highly recommended!",
    author: "Michael Rodriguez",
    role: "Lead Developer",
    company: "AI Solutions Inc"
  },
  {
    quote: "Finally, a tool that helps us maintain consistency in our AI interactions across the entire organization.",
    author: "Emily Thompson",
    role: "Director of Innovation",
    company: "Future Labs"
  }
]

export default function ProductTestimonials() {
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
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            See what our customers are saying about Promptimize
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.glassMorphism} ${styles.cardHover} p-8 rounded-2xl relative`}
            >
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-6 left-6" />
              <div className="relative">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 