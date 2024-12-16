import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactResources from '@/components/contact/ContactResources'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Promptimize',
  description: 'Get in touch with our team to learn how Promptimize can help optimize your AI operations.',
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactHero />
      <ContactResources />
      <ContactForm />
    </main>
  )
} 