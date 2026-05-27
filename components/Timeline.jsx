'use client'

import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  Store,
  Award,
  Users,
  Home,
  Bike,
} from 'lucide-react'

const milestones = [
  {
    year: '2000',
    title: 'Humble Beginnings',
    desc: 'Started as a small street food stall with just 5 noodle varieties.',
    icon: UtensilsCrossed,
  },
  {
    year: '2005',
    title: 'First Restaurant',
    desc: 'Moved to a proper dine-in space with 20 seats.',
    icon: Store,
  },
  {
    year: '2010',
    title: 'Menu Expansion',
    desc: 'Added egg and chicken noodles to the menu.',
    icon: Award,
  },
  {
    year: '2015',
    title: 'Earned Popularity',
    desc: 'Became a local favorite among food lovers in the neighborhood.',
    icon: Users,
  },
  {
    year: '2020',
    title: 'Modern Makeover',
    desc: 'Renovated with contemporary interiors and digital menu.',
    icon: Home,
  },
  {
    year: '2025',
    title: 'Home Delivery',
    desc: 'Now delivering within 1km radius with express service.',
    icon: Bike,
  },
]

export default function Timeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-[#B8860B] text-sm font-medium tracking-[0.2em] mb-2">SINCE 2000</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">
          Our Journey
        </h2>
        <p className="text-gray-500">From a small stall to a city favorite</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#C0392B]/20 sm:-translate-x-px" />

        {milestones.map((m, index) => {
          const Icon = m.icon
          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-10 sm:mb-12 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="hidden sm:block sm:w-1/2" />

              <div className="absolute left-4 sm:left-1/2 w-8 h-8 bg-[#C0392B] rounded-full flex items-center justify-center -translate-x-1/2 border-4 border-white shadow-md z-10">
                <Icon className="w-4 h-4 text-white" />
              </div>

              <div
                className={`pl-12 sm:pl-0 sm:w-1/2 ${
                  index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
                }`}
              >
                <span className="inline-block bg-[#C0392B] text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                  {m.year}
                </span>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                  {m.title}
                </h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
