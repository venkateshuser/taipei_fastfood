'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Rahul S.',
    rating: 5,
    text: 'Best Chinese food in the area! The noodles are always perfectly cooked.',
  },
  {
    name: 'Priya M.',
    rating: 5,
    text: 'The veg manchurian is absolutely amazing. My family orders every weekend.',
  },
  {
    name: 'Amit K.',
    rating: 4,
    text: 'Quick delivery and hot food. The chicken fried rice is my go-to order.',
  },
  {
    name: 'Sneha R.',
    rating: 5,
    text: 'Love the spicy Schezwan noodles here. Authentic flavors and great portions.',
  },
  {
    name: 'Vikram P.',
    rating: 4,
    text: 'Affordable prices and consistent quality. Highly recommended for fast food.',
  },
  {
    name: 'Ananya D.',
    rating: 5,
    text: 'The chilli chicken is crispy and flavorful. Best Indo-Chinese in town!',
  },
]

export default function Reviews() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId
    let scrollPos = 0

    const animate = () => {
      scrollPos += 0.5
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0
      el.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500">Real reviews from real food lovers</p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] bg-gray-50 rounded-2xl p-6 shadow-sm"
          >
            <Quote className="w-8 h-8 text-[#C0392B]/20 mb-3" />
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? 'text-[#B8860B] fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{review.text}</p>
            <p className="font-semibold text-[#1A1A1A]">{review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
