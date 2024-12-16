'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { styles } from '@/lib/styles'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Researcher",
    company: "TechLabs",
    image: "/testimonials/sarah.jpg",
    content: "Promptimize has completely transformed how I approach AI research. The optimized prompts generate much more precise and relevant responses, saving me hours of iteration time.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    company: "DevCorp",
    image: "/testimonials/michael.jpg",
    content: "As a developer, the code generation prompts are incredibly useful. The structured format and context awareness make a huge difference in code quality.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Content Manager",
    company: "ContentFirst",
    image: "/testimonials/emily.jpg",
    content: "The difference in content quality between basic and optimized prompts is night and day. Our team's productivity has increased significantly.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of satisfied users
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${styles.glassMorphism} ${styles.cardHover} p-8 rounded-2xl`}
              style={styles.cardGlow}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                  <div className="absolute inset-0 backdrop-blur-sm" />
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5" 
                    style={{
                      fill: 'url(#star-gradient)',
                      stroke: 'url(#star-gradient)'
                    }}
                  />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* SVG Gradient Definitions */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0070f3" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 