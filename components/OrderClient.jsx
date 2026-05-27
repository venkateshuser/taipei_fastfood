'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Trash2, ShoppingBag, Send } from 'lucide-react'
import { useCart } from './CartProvider'
import menuItems from '@/data/menu'
import { getImageUrl } from '@/utils/getImageUrl'

const categoryOrder = [
  'Fried Rice',
  'Noodles', 
  'Chicken Starters',
  'Veg Starters',
  'Main Course Curries',
  'Egg Specials',
  'Rolls',
  'Soups'
]

export default function OrderClient() {
  const { cart, addItem, removeItem, updateQty, total, count, clearCart } =
    useCart()
  const [selectedItems, setSelectedItems] = useState({})

  const toggleItem = (id) => {
    setSelectedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleAddToCart = (item, size) => {
    addItem(item, size)
  }

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return ''
    let msg = 'Hello! I would like to place an order:\n\n'
    cart.forEach((item, i) => {
      const sizeLabel = item.size === 'single' ? '' : `(${item.size})`
      msg += `${i + 1}. ${item.name} ${sizeLabel} x${item.qty} - ₹${
        item.price * item.qty
      }\n`
    })
    msg += `\nTotal: ₹${total}\n\nPlease confirm. Thank you!`
    return encodeURIComponent(msg)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2">
          Place Your Order
        </h1>
        <p className="text-gray-500">
          Select items and sizes to build your order
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items Selection */}
        <div className="lg:col-span-2 space-y-6">
          {categoryOrder.map((category) => {
            const items = menuItems.filter((item) => item.category === category)
            if (items.length === 0) return null

            return (
              <div key={category}>
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 pb-2 border-b border-gray-200">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.01 }}
                      className={`bg-white rounded-xl shadow-sm border-2 transition-all cursor-pointer overflow-hidden ${
                        selectedItems[item.id]
                          ? 'border-[#C0392B]'
                          : 'border-transparent'
                      }`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <div className="flex gap-4 p-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          <img
                            src={getImageUrl(item.imageQuery, item.imageSeed)}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                              e.target.parentElement.innerHTML = `<span class="text-xs text-gray-400 text-center px-2">${item.name}</span>`
                            }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h3 className="font-bold text-[#1A1A1A] truncate">
                              {item.name}
                            </h3>
                            {item.isVeg ? (
                              <div className="w-4 h-4 bg-green-500 rounded-sm shrink-0" />
                            ) : (
                              <div className="w-4 h-4 bg-red-600 rounded-full shrink-0" />
                            )}
                          </div>

                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {item.description}
                          </p>

                          <div className="flex items-center gap-3 mt-2 flex-wrap">
                            {item.halfPrice && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleAddToCart(item, 'half')
                                }}
                                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded font-medium transition-colors"
                              >
                                Half ₹{item.halfPrice}
                              </button>
                            )}
                            {item.fullPrice && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleAddToCart(item, 'full')
                                }}
                                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded font-medium transition-colors"
                              >
                                Full ₹{item.fullPrice}
                              </button>
                            )}
                            {item.singlePrice && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleAddToCart(item, 'single')
                                }}
                                className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded font-medium transition-colors"
                              >
                                ₹{item.singlePrice}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="w-6 h-6 text-[#C0392B]" />
              <h2 className="text-xl font-bold text-[#1A1A1A]">
                Order Summary
              </h2>
              {count > 0 && (
                <span className="bg-[#C0392B] text-white text-xs px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>Your cart is empty</p>
                <p className="text-sm mt-1">Select items to start your order</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto">
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.size}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.size === 'single'
                              ? 'Standard'
                              : item.size}{' '}
                            × ₹{item.price}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQty(item.id, item.size, item.qty - 1)
                            }
                            className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold">
                            {item.qty}
                          </span>
                          <button
                            onClick={() =>
                              updateQty(item.id, item.size, item.qty + 1)
                            }
                            className="w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-xl text-[#C0392B]">
                      ₹{total}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919849331848?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Order via WhatsApp
                  </a>

                  <button
                    onClick={clearCart}
                    className="w-full text-gray-500 text-sm py-2 hover:text-gray-700 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
