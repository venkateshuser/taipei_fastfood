'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import FindUs from './FindUs'

export default function ContactClient() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2">Contact Us</h1>
        <p className="text-gray-500">We would love to hear from you</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <FindUs />
      </div>
    </main>
  )
}
