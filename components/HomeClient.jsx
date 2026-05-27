'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, UtensilsCrossed, Star, Bike } from 'lucide-react'
import Image from 'next/image'
import PopularPicks from './PopularPicks'
import Timeline from './Timeline'
import Reviews from './Reviews'
import { getHeroImageUrl } from '@/utils/getImageUrl'

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Screen Noodles Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img
            src={getHeroImageUrl()}
            alt="Delicious noodles"
            className="w-full h-full object-cover"
            style={{ opacity: 0.6 }}
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#C0392B] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-lg"
          >
            <UtensilsCrossed className="w-4 h-4" />
            AUTHENTIC CHINESE FAST FOOD
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 relative"
          >
            <Image
              src="/logo.png"
              alt="Taipei Fast Food Center"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Since 2000 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-[#B8860B] text-sm font-medium tracking-[0.3em] mb-2"
          >
            SINCE 2000
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-8xl font-bold text-white mb-2 tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            TAIPEI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-3xl text-[#B8860B] font-bold tracking-[0.25em] mb-6"
          >
            FAST FOOD CENTER
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bold flavors, fresh ingredients, and the best Chinese fast food in town. 
            From sizzling noodles to fiery Schezwan — we bring the taste of China to your plate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/menu"
              className="bg-[#C0392B] text-white font-bold px-10 py-4 rounded-full hover:bg-red-700 transition-colors shadow-lg text-center tracking-wide"
            >
              VIEW OUR MENU
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#B8860B] text-[#B8860B] font-bold px-10 py-4 rounded-full hover:bg-[#B8860B] hover:text-white transition-colors text-center tracking-wide"
            >
              FIND US
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-8 sm:gap-16"
          >
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#B8860B]">37+</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1">Dishes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-5 h-5 text-[#B8860B] fill-current" />
                <p className="text-3xl sm:text-4xl font-bold text-[#B8860B]">4.8</p>
              </div>
              <p className="text-xs sm:text-sm text-white/70 mt-1">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Bike className="w-5 h-5 text-[#B8860B]" />
                <p className="text-3xl sm:text-4xl font-bold text-[#B8860B]">1km</p>
              </div>
              <p className="text-xs sm:text-sm text-white/70 mt-1">Delivery</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      <PopularPicks />
      <Timeline />
      <Reviews />
    </main>
  )
}
