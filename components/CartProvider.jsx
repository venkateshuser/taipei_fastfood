'use client'

import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, size) => {
    const price =
      size === 'half'
        ? item.halfPrice
        : size === 'full'
        ? item.fullPrice
        : item.singlePrice

    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === size)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === size ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...item, size, qty: 1, price }]
    })
  }

  const removeItem = (id, size) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)))
  }

  const updateQty = (id, size, qty) => {
    if (qty <= 0) return removeItem(id, size)
    setCart((prev) =>
      prev.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i))
    )
  }

  const clearCart = () => setCart([])

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQty, clearCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
