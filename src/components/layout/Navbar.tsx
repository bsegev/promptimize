'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { styles } from '@/lib/styles'

export default function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold ${styles.textGradient}`}>
              Promptimize
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              Home
            </Link>
            <Link 
              href="/product" 
              className={`${isActive('/product') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              Product
            </Link>
            <Link 
              href="/pricing" 
              className={`${isActive('/pricing') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600'} hover:text-gray-900`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/get-started"
                className="bg-gradient-to-r from-primary to-[#8b5cf6] text-white px-6 py-2 rounded-lg font-medium
                         hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
} 