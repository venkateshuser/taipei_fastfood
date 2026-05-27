export const metadata = {
  title: 'Best Chinese & Asian Fast Food in Hyderabad | Since 2000',
  description:
    'Taipei Fast Food Center - Authentic Chinese fast food in Hyderabad. Order noodles, fried rice, manchurian, chicken starters, veg starters, rolls & soups online. Home delivery within 1km.',
  keywords: [
    'chinese food hyderabad',
    'best noodles hyderabad',
    'fast food delivery',
    'schezwan noodles',
    'chicken fried rice',
    'gobi manchurian',
    'chilli chicken',
    'paneer manchurian',
    'chinese restaurant near me',
    'indian chinese food',
  ],
  openGraph: {
    title: 'Taipei Fast Food Center | Best Chinese Fast Food Since 2000',
    description: 'Order authentic Chinese & Asian fast food online. Noodles, rice, manchurian & more.',
    url: 'https://taipeifastfood.vercel.app',
    siteName: 'Taipei Fast Food Center',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://taipeifastfood.vercel.app/logo.png',
        width: 512,
        height: 512,
        alt: 'Taipei Fast Food Center - Chinese Fast Food',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taipei Fast Food Center | Best Chinese Fast Food',
    description: 'Order authentic Chinese fast food online.',
    images: ['https://taipeifastfood.vercel.app/logo.png'],
  },
  alternates: {
    canonical: 'https://taipeifastfood.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import HomeClient from '@/components/HomeClient'

export default function Home() {
  return <HomeClient />
}
