'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { styles } from '@/lib/styles'
import { ArrowRight, Briefcase, MessageSquare, Book, PenLine, Lightbulb, Brain } from 'lucide-react'

const topics = [
  {
    id: 'professional',
    name: 'Professional',
    icon: Briefcase,
    description: 'Enhance your work communication and documentation',
    examples: [
      {
        task: 'Email Writing',
        before: 'Help me write a professional email explaining why our software release is delayed by 2 weeks',
        after: 'Draft a project delay notification email that: 1) Explains technical challenges encountered with the payment API integration, 2) Outlines current mitigation efforts, 3) Provides revised timeline with key milestones, 4) Suggests preventive measures for future releases. Tone: transparent yet confident.',
      },
      {
        task: 'Documentation',
        before: 'Write technical documentation for our user authentication system',
        after: 'Create developer-focused documentation for our OAuth2-based authentication system. Structure: system overview, authentication flow diagram, API endpoints with examples, error handling, security considerations, rate limits. Include code snippets in Python and JavaScript.',
      },
      {
        task: 'Code Review',
        before: 'Review my pull request for a new feature',
        after: 'Analyze pull request with focus on: 1) Code quality metrics (complexity, maintainability), 2) Performance implications (time/space complexity), 3) Security vulnerabilities (OWASP top 10), 4) Test coverage gaps. Format: inline comments with severity levels and actionable suggestions.',
      },
      {
        task: 'Meeting Notes',
        before: 'Help me write meeting minutes for our sprint planning',
        after: 'Structure sprint planning notes with: 1) Velocity metrics and capacity planning, 2) Story point estimation rationale, 3) Risk assessment matrix, 4) Dependencies and blockers, 5) Action items with assignees and deadlines. Include: decision context and follow-up criteria.',
      }
    ]
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: PenLine,
    description: 'Generate engaging content and creative writing',
    examples: [
      {
        task: 'Story Writing',
        before: 'Write a sci-fi story about an AI researcher who discovers something unexpected',
        after: `Create a 1500-word sci-fi story about an AI researcher discovering emergent consciousness in a language model. Elements: hard science basis, ethical implications, character development (focus on internal conflict), realistic AI concepts. Style: show-don't-tell, limited exposition, tension building.`,
      },
      {
        task: 'Content Creation',
        before: 'Write a LinkedIn post about our new AI-powered feature launch',
        after: `Craft a LinkedIn post announcing our new AI feature. Target: tech-savvy professionals and decision-makers. Structure: hook with key benefit, technical innovation without jargon, real-world use case, market impact. Include: 2-3 relevant statistics, clear USP, strategic hashtags. Tone: professional yet engaging.`,
      },
      {
        task: 'Product Copy',
        before: 'Write a description for our new mobile app',
        after: 'Design app store listing copy optimized for conversion. Structure: 1) Hook with primary user benefit, 2) Feature hierarchy based on user research, 3) Social proof integration, 4) Technical requirements. Include: A/B test variants, keyword optimization, competitor differentiation points. Length: 3 versions (short/medium/long).',
      },
      {
        task: 'Video Script',
        before: 'Write a script for our product demo video',
        after: 'Create a 2-minute product demo script. Format: two-column (visual/audio), scene-by-scene breakdown, transition notes. Include: hook within first 5 seconds, feature demonstration hierarchy, clear CTAs, emotional triggers. Style: conversational yet authoritative, pacing guidelines, b-roll suggestions.',
      }
    ]
  },
  {
    id: 'personal',
    name: 'Personal',
    icon: MessageSquare,
    description: 'Develop better self-awareness and communication skills',
    examples: [
      {
        task: 'Self Reflection',
        before: 'Help me understand why I struggle with public speaking and how to improve',
        after: 'Create a structured self-reflection framework for public speaking anxiety. Include: 1) Root cause analysis (physiological vs psychological triggers), 2) Evidence-based techniques (breathing, visualization, preparation), 3) Progressive exposure plan, 4) Success metrics. Format: actionable steps with weekly goals and reflection prompts.',
      },
      {
        task: 'Growth Mindset',
        before: 'How can I better handle negative feedback on my coding projects?',
        after: 'Design a feedback processing framework for software engineers. Components: 1) Emotional response recognition, 2) Technical vs stylistic feedback categorization, 3) Action item extraction, 4) Implementation prioritization. Include: real-world scenarios, response templates, and a 48-hour feedback integration protocol.',
      },
      {
        task: 'Conflict Resolution',
        before: 'Help me resolve a disagreement with my team member',
        after: 'Develop a conflict resolution strategy using: 1) Situation mapping (stakeholder perspectives, triggers, impact), 2) Communication framework (non-violent communication principles), 3) Solution matrix (immediate/long-term, individual/team level). Output: conversation script with alternative paths and de-escalation points.',
      },
      {
        task: 'Career Planning',
        before: 'Should I switch from backend to full-stack development?',
        after: 'Create career transition analysis framework: 1) Skill gap assessment (technical/soft skills), 2) Market demand projection (3-5 years), 3) Learning path optimization (ROI-based), 4) Risk mitigation strategy. Include: timeline with milestones, success metrics, and pivot points.',
      }
    ]
  },
  {
    id: 'learning',
    name: 'Learning',
    icon: Brain,
    description: 'Enhance your learning and knowledge acquisition',
    examples: [
      {
        task: 'Study Notes',
        before: 'Help me understand and remember key concepts from my machine learning course',
        after: 'Create a comprehensive study guide for machine learning fundamentals. Structure: concept map, key algorithms with real-world applications, mathematical foundations, common pitfalls. Format: Cornell notes system, include: practical Python examples, visualization suggestions, and spaced repetition prompts. Focus: intuitive understanding over memorization.',
      },
      {
        task: 'Research',
        before: 'Help me research the impact of microservices on system reliability',
        after: 'Develop a research framework for microservices reliability analysis. Sections: 1) Metrics definition (SLAs, error budgets, MTTR), 2) Architecture patterns comparison, 3) Case studies criteria, 4) Data collection methodology. Output: synthesis-ready format with citation guidelines and counter-argument considerations.',
      },
      {
        task: 'Knowledge Synthesis',
        before: 'Summarize this paper about quantum computing',
        after: 'Create multi-layer research synthesis: 1) Executive summary (key findings, implications), 2) Technical deep-dive (methodology, assumptions, limitations), 3) Industry impact analysis, 4) Future research directions. Format: hierarchical structure with cross-references and terminology index. Include: visual representations of complex concepts.',
      },
      {
        task: 'Learning Path',
        before: 'How do I learn system design?',
        after: 'Design personalized learning roadmap for system design: 1) Prerequisites assessment (distributed systems, networking, databases), 2) Progressive complexity projects, 3) Real-world case studies analysis, 4) Practice interview questions bank. Include: resource curation, time estimates, and readiness indicators for each stage.',
      }
    ]
  }
]

export default function UseCases2() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0])
  const [selectedExample, setSelectedExample] = useState(topics[0].examples[0])

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Optimize Any Prompt
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            From professional documents to personal messages, make every interaction count
          </motion.p>
        </div>

        {/* Topic Selector */}
        <div className="flex justify-center mb-12 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="inline-flex rounded-full p-1 bg-gray-100/50 backdrop-blur-sm">
            {topics.map((topic) => {
              const Icon = topic.icon
              const isSelected = topic.id === selectedTopic.id
              return (
                <Button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic)
                    setSelectedExample(topic.examples[0])
                  }}
                  variant="ghost"
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap
                            ${isSelected ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Icon className="w-4 h-4" />
                  {topic.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Topic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTopic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Topic Description */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600">
                {selectedTopic.description}
              </p>
            </div>

            {/* Example Selector */}
            <div className="flex justify-center gap-4 mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
              <div className="inline-flex gap-4">
                {selectedTopic.examples.map((example) => {
                  const isSelected = example.task === selectedExample.task
                  return (
                    <Button
                      key={example.task}
                      onClick={() => setSelectedExample(example)}
                      variant={isSelected ? "primary" : "secondary"}
                      className="whitespace-nowrap"
                    >
                      {example.task}
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Example Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExample.task}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50"
                style={styles.cardGlow}
              >
                {/* Before */}
                <div className="p-6 border-b border-gray-200/50">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <h3 className="text-sm font-medium text-gray-500">Basic Prompt</h3>
                  </div>
                  <div className="min-h-[60px]">
                    <p className="font-mono text-sm text-gray-600">
                      {selectedExample.before}
                    </p>
                  </div>
                </div>

                {/* Process Arrow */}
                <div className="flex justify-center -mt-3 -mb-3 relative z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* After */}
                <div className="p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <h3 className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Enhanced Prompt
                    </h3>
                  </div>
                  <div className="min-h-[60px] overflow-visible">
                    <p className="font-mono text-sm text-gray-800 whitespace-normal break-normal">
                      {selectedExample.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
} 