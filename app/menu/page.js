export const metadata = {
  title: 'Menu | Chinese Noodles, Fried Rice, Starters, Rolls & Soups',
  description:
    'Full menu - Fried Rice, Noodles, Chicken Starters, Veg Starters, Main Course Curries, Egg Specials, Rolls & Soups. Veg & Non-veg options. Order online now.',
  keywords: [
    'chinese menu',
    'noodles menu',
    'fried rice menu',
    'chicken starters',
    'veg starters',
    'manchurian menu',
    'spring rolls',
    'soup menu',
    'order chinese food online',
  ],
  openGraph: {
    title: 'Menu | Taipei Fast Food Center',
    description: 'Full menu - noodles, rice, manchurian, starters, rolls & soups.',
    url: 'https://taipeifastfood.vercel.app/menu',
    type: 'website',
  },
  alternates: {
    canonical: 'https://taipeifastfood.vercel.app/menu',
  },
}

import MenuClient from '@/components/MenuClient'

export default function MenuPage() {
  return <MenuClient />
}
