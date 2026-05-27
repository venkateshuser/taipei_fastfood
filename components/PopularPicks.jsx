'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FoodCard from './FoodCard'
import menuItems from '@/data/menu'

// Pick top rated items from different categories
const popularItems = [
  menuItems.find(i => i.name === 'Chicken 65'),
  menuItems.find(i => i.name === 'Paneer Manchurian'),
  menuItems.find(i => i.name === 'Butter Chicken'),
  menuItems.find(i => i.name === 'Chicken Fried Rice'),
  menuItems.find(i => i.name === 'Veg Noodles'),
  menuItems.find(i => i.name === 'Chicken Manchurian'),
].filter(Boolean)

export default function PopularPicks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-[#B8860B] text-sm font-medium tracking-[0.2em] mb-2">SINCE 2000</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">
          Popular Picks
        </h2>
        <p className="text-gray-500">
          Customer favorites that keep everyone coming back
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularItems.map((item, index) => (
          <FoodCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/menu"
          className="inline-block bg-[#C0392B] text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-colors shadow-md"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  )
}
