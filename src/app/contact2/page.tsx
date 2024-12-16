import type { Metadata } from 'next'
import Contact2Hero from '@/components/contact2/Contact2Hero'
import Contact2Form from '@/components/contact2/Contact2Form'
import Contact2Resources from '@/components/contact2/Contact2Resources'

export const metadata: Metadata = {
  title: 'Contact | Promptimize',
  description: 'Get in touch with our team to learn how Promptimize can help optimize your AI operations.',
}

export default function Contact2Page() {
  return (
    <main>
      <Contact2Hero />
      <Contact2Form />
      <Contact2Resources />
    </main>
  )
} 