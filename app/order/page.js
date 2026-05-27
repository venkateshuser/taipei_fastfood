export const metadata = {
  title: 'Order Online | Chinese Food Delivery in Hyderabad',
  description:
    'Order your favorite Chinese and Asian fast food online. Noodles, rice, manchurian, starters, rolls and drinks delivered to your door within 1km.',
  keywords: [
    'order chinese food online',
    'chinese food delivery',
    'noodles delivery',
    'fast food order online',
    'home delivery chinese food',
  ],
  openGraph: {
    title: 'Order Online | Taipei Fast Food Center',
    description: 'Order Chinese fast food online. Delivery within 1km.',
    url: 'https://taipeifastfood.vercel.app/order',
    type: 'website',
  },
  alternates: {
    canonical: 'https://taipeifastfood.vercel.app/order',
  },
}

import OrderClient from '@/components/OrderClient'

export default function OrderPage() {
  return <OrderClient />
}
