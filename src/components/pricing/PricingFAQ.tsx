'use client'

import { motion } from 'framer-motion'
import { styles } from '@/lib/styles'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with our 14-day free trial to explore all Pro features. No credit card required. You'll get full access to our prompt engineering tools, templates, and basic AI development features. Cancel anytime during the trial period."
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, you'll maintain access to your current features until the end of your billing period."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Enterprise plans, we also support wire transfers and purchase orders."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for Pro plans. If you're not satisfied with our service, contact our support team for a full refund. Enterprise plans are handled on a case-by-case basis."
  },
  {
    question: "What's included in the Enterprise plan?",
    answer: "Enterprise plans include custom GPT development, dedicated support, advanced AI features, and personalized consulting. We'll work with you to create a tailored solution that meets your specific needs and scale requirements."
  },
  {
    question: "Do you offer educational or non-profit discounts?",
    answer: "Yes, we offer special pricing for educational institutions, non-profits, and open-source projects. Contact our sales team to learn more about our discount programs."
  }
]

export default function PricingFAQ() {
  return (
    <section className={`${styles.sectionPadding}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${styles.sectionTitle} ${styles.textGradient}`}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to know about our pricing and plans
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
} 