import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { CartProvider } from '@/components/CartProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://taipeifastfood.vercel.app'),
  title: {
    default: 'Taipei Fast Food Center | Best Chinese & Asian Fast Food Since 2000',
    template: '%s | Taipei Fast Food Center',
  },
  description:
    'Order authentic Chinese & Asian fast food online. Best noodles, fried rice, manchurian, chicken starters, veg starters, rolls & soups. Delivery within 1km. Since 2000.',
  keywords: [
    'Taipei fast food',
    'Chinese fast food',
    'Asian fast food',
    'noodles',
    'manchurian',
    'fried rice',
    'order food online',
    'fast food delivery',
    'chicken starters',
    'veg starters',
    'Hyderabad chinese food',
    'best chinese restaurant',
    'schezwan noodles',
    'gobi manchurian',
    'chilli chicken',
    'paneer manchurian',
    'spring rolls',
    'soup',
    'egg noodles',
    'chicken noodles',
    'butter chicken',
  ],
  authors: [{ name: 'Taipei Fast Food Center', url: 'https://taipeifastfood.vercel.app' }],
  creator: 'Taipei Fast Food Center',
  publisher: 'Taipei Fast Food Center',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Taipei Fast Food Center | Best Chinese & Asian Fast Food Since 2000',
    description: 'Order noodles, rice, manchurian, chicken starters, veg starters, rolls & soups. Authentic Chinese fast food delivery within 1km.',
    url: 'https://taipeifastfood.vercel.app',
    siteName: 'Taipei Fast Food Center',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://taipeifastfood.vercel.app/logo.png',
        width: 512,
        height: 512,
        alt: 'Taipei Fast Food Center Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taipei Fast Food Center | Best Chinese & Asian Fast Food',
    description: 'Order authentic Chinese fast food online. Noodles, rice, manchurian & more.',
    images: ['https://taipeifastfood.vercel.app/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://taipeifastfood.vercel.app',
    languages: {
      'en-IN': 'https://taipeifastfood.vercel.app',
    },
  },
  category: 'food',
  classification: 'Restaurant, Fast Food, Chinese Food',
  referrer: 'origin-when-cross-origin',
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'ICBM': '17.3574, 78.5119',
    'revisit-after': '7 days',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="theme-color" content="#C0392B" />
        <meta name="msapplication-TileColor" content="#C0392B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Taipei Fast Food" />
        <meta name="application-name" content="Taipei Fast Food Center" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Restaurant',
                  '@id': 'https://taipeifastfood.vercel.app/#restaurant',
                  name: 'Taipei Fast Food Center',
                  image: {
                    '@type': 'ImageObject',
                    url: 'https://taipeifastfood.vercel.app/logo.png',
                    width: 512,
                    height: 512,
                  },
                  url: 'https://taipeifastfood.vercel.app',
                  telephone: '+91-98493-31848',
                  email: 'info@taipeifastfood.com',
                  priceRange: '$$',
                  servesCuisine: ['Chinese', 'Asian', 'Indo-Chinese', 'Fast Food'],
                  currenciesAccepted: 'INR',
                  paymentAccepted: 'Cash, UPI, Card',
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                      opens: '11:00',
                      closes: '23:00',
                    },
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '123 Connaught Place, Block C',
                    addressLocality: 'Hyderabad',
                    addressRegion: 'Telangana',
                    postalCode: '500001',
                    addressCountry: 'IN',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 17.3574,
                    longitude: 78.5119,
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.8',
                    reviewCount: '2500',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  hasMenu: {
                    '@type': 'Menu',
                    name: 'Taipei Fast Food Menu',
                    url: 'https://taipeifastfood.vercel.app/menu',
                  },
                  acceptsReservations: 'True',
                  servesCuisine: ['Chinese', 'Asian', 'Indo-Chinese'],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Food Menu',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Home Delivery',
                          areaServed: {
                            '@type': 'GeoCircle',
                            geoMidpoint: {
                              '@type': 'GeoCoordinates',
                              latitude: 17.3574,
                              longitude: 78.5119,
                            },
                            geoRadius: '1000',
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://taipeifastfood.vercel.app/#website',
                  url: 'https://taipeifastfood.vercel.app',
                  name: 'Taipei Fast Food Center',
                  description: 'Best Chinese & Asian Fast Food in Hyderabad',
                  publisher: {
                    '@id': 'https://taipeifastfood.vercel.app/#restaurant',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://taipeifastfood.vercel.app/menu?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://taipeifastfood.vercel.app/#organization',
                  name: 'Taipei Fast Food Center',
                  url: 'https://taipeifastfood.vercel.app',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://taipeifastfood.vercel.app/logo.png',
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    'https://wa.me/919849331848',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-98493-31848',
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Hindi', 'Telugu'],
                    areaServed: 'IN',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://taipeifastfood.vercel.app',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Menu',
                      item: 'https://taipeifastfood.vercel.app/menu',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Order Online',
                      item: 'https://taipeifastfood.verce.app/order',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Contact Us',
                      item: 'https://taipeifastfood.vercel.app/contact',
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F9F9F9] text-[#1A1A1A]">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
