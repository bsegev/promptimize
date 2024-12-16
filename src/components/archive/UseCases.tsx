'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { MessageSquare, Briefcase, Book, PenLine, Lightbulb, GraduationCap } from 'lucide-react'
import { styles } from '@/lib/styles'

const useCases = [
  {
    icon: Briefcase,
    title: "Professional Writing",
    description: "Get better results for work-related writing tasks",
    example: "Before: 'Write a project proposal'\nAfter: 'Write a project proposal for a 3-month website redesign. Include: timeline, resource requirements, expected ROI, and risk mitigation strategies. Target audience: senior management.'"
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Learn and practice better communication techniques",
    example: "Before: 'How to have difficult conversations'\nAfter: 'Guide me through techniques for having difficult conversations. Focus on: active listening, emotional intelligence, conflict resolution. Include example phrases and reflection questions to improve my communication skills.'"
  },
  {
    icon: Book,
    title: "Learning & Research",
    description: "Get clearer explanations and learning paths",
    example: "Before: 'Explain quantum computing'\nAfter: 'Explain quantum computing for someone with basic physics knowledge. Focus on practical applications, use relevant analogies, and break down key concepts like superposition and entanglement.'"
  },
  {
    icon: PenLine,
    title: "Creative Writing",
    description: "Generate better creative content and stories",
    example: "Before: 'Write a story about time travel'\nAfter: 'Write a 1000-word story about time travel from the perspective of a historian who discovers their research has unintended consequences. Include sensory details and focus on ethical dilemmas.'"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Get more structured solutions to problems",
    example: "Before: 'How to improve team productivity'\nAfter: 'Suggest ways to improve remote team productivity, considering: different time zones, current bottlenecks in communication, tools we use (Slack, Jira), and maintaining work-life balance.'"
  },
  {
    icon: GraduationCap,
    title: "Academic Work",
    description: "Enhance research and academic writing",
    example: "Before: 'Help with thesis statement'\nAfter: 'Help craft a thesis statement for my research paper on social media's impact on mental health among teenagers. Focus on: anxiety levels, sleep patterns, and social comparison. Include counter-arguments to address.'"
  }
]

export default function UseCases() {
  return (
    <section className={`${styles.sectionPadding} relative overflow-hidden`} style={styles.gradientBg}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${styles.textGradient}`}
          >
            Use Cases
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Optimize prompts for any scenario
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card 
                className={`h-full ${styles.glassMorphism} ${styles.cardHover}`}
                style={styles.cardGlow}
              >
                <div className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                    </div>
                    <h3 className={`text-xl font-semibold ${styles.textGradient}`}>
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600">{useCase.description}</p>
                  
                  <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-4 space-y-4 backdrop-blur-sm border border-blue-100/20">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-500">Before:</div>
                      <div className="text-gray-600 font-mono text-sm">
                        {useCase.example.split('\n')[0].replace('Before: ', '')}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        After:
                      </div>
                      <div className="text-gray-800 font-mono text-sm">
                        {useCase.example.split('\n')[1].replace('After: ', '')}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 