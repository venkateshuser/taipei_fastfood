'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { getImageUrl } from '@/utils/getImageUrl'

export default function FoodCard({
  item,
  isSelected,
  onSelect,
  onAddToOrder,
  index = 0,
}) {
  const [imgError, setImgError] = useState(false)

  const imageUrl = getImageUrl(item.imageQuery, item.imageSeed)

  const priceDisplay = item.singlePrice
    ? `₹${item.singlePrice}`
    : `Half ₹${item.halfPrice} | Full ₹${item.fullPrice}`

  const priceBadgeText = item.singlePrice
    ? `₹${item.singlePrice}`
    : `Half ₹${item.halfPrice} / Full ₹${item.fullPrice}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300 },
      }}
      onClick={onSelect}
      className={`relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-shadow duration-300 ${
        isSelected
          ? 'ring-2 ring-[#C0392B] shadow-xl shadow-red-100'
          : 'hover:shadow-xl'
      }`}
      style={{ willChange: 'transform' }}
    >
      {/* Image Area */}
      <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
        {!imgError ? (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
            loading={index < 4 ? 'eager' : 'lazy'}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center p-6">
            <span className="text-gray-600 font-semibold text-center text-lg">
              {item.name}
            </span>
          </div>
        )}

        {/* Veg/Non-veg indicator */}
        <div className="absolute top-3 left-3">
          {item.isVeg ? (
            <div className="w-5 h-5 bg-green-500 rounded-sm border-2 border-white shadow-sm" title="Vegetarian" />
          ) : (
            <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-sm" title="Non-Vegetarian" />
          )}
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-[#8B1A1A] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            {priceBadgeText}
          </span>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-lg text-[#1A1A1A] leading-tight pr-2">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-[#B8860B] shrink-0">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold text-sm">
              {item.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-2">{priceDisplay}</p>

        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {isSelected && onAddToOrder && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 w-full bg-[#C0392B] text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              onAddToOrder()
            }}
          >
            Add to Order
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
