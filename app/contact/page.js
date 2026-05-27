export const metadata = {
  title: 'Contact Us | Location, Phone & WhatsApp Order',
  description:
    'Get in touch with Taipei Fast Food Center. Visit us or order online via WhatsApp. Find our location on Google Maps. Phone: +91 98493 31848',
  keywords: [
    'taipei fast food contact',
    'chinese restaurant location',
    'order via whatsapp',
    'fast food phone number',
    'restaurant address',
  ],
  openGraph: {
    title: 'Contact Us | Taipei Fast Food Center',
    description: 'Visit us or order online. Find our location on Google Maps.',
    url: 'https://taipeifastfood.vercel.app/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://taipeifastfood.vercel.app/contact',
  },
}

import ContactClient from '@/components/ContactClient'

export default function ContactPage() {
  return <ContactClient />
}
