'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UtensilsCrossed, 
  Soup, 
  Flame, 
  Salad, 
  ChefHat, 
  Egg, 
  Croissant, 
  CircleDot 
} from 'lucide-react'
import FoodCard from './FoodCard'
import menuItems from '@/data/menu'
import { useCart } from './CartProvider'

const categories = [
  { id: 'Fried Rice', label: 'Fried Rice', icon: UtensilsCrossed },
  { id: 'Noodles', label: 'Noodles', icon: CircleDot },
  { id: 'Chicken Starters', label: 'Chicken Starters', icon: Flame },
  { id: 'Veg Starters', label: 'Veg Starters', icon: Salad },
  { id: 'Main Course Curries', label: 'Main Course', icon: ChefHat },
  { id: 'Egg Specials', label: 'Egg Specials', icon: Egg },
  { id: 'Rolls', label: 'Rolls', icon: Croissant },
  { id: 'Soups', label: 'Soups', icon: Soup },
]

export default function MenuClient() {
  const [activeTab, setActiveTab] = useState('Fried Rice')
  const [selectedItem, setSelectedItem] = useState(null)
  const { addItem } = useCart()

  const filteredItems = menuItems.filter((item) => item.category === activeTab)

  const handleAddToOrder = (item) => {
    if (item.singlePrice) {
      addItem(item, 'single')
    } else {
      addItem(item, 'full')
    }
    setSelectedItem(null)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2">Our Menu</h1>
        <p className="text-gray-500">Fresh, flavorful, and made to order</p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon
          const isActive = activeTab === cat.id
          const count = menuItems.filter((i) => i.category === cat.id).length

          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id)
                setSelectedItem(null)
              }}
              className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#C0392B] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
              <span
                className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Category Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">{activeTab}</h2>
        <span className="text-[#C0392B] font-semibold">
          {filteredItems.length} Items
        </span>
      </div>

      {/* Food Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <FoodCard
              key={item.id}
              item={item}
              index={index}
              isSelected={selectedItem === item.id}
              onSelect={() =>
                setSelectedItem(selectedItem === item.id ? null : item.id)
              }
              onAddToOrder={() => handleAddToOrder(item)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
