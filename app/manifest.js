export default function manifest() {
  return {
    name: 'Taipei Fast Food Center',
    short_name: 'Taipei Fast Food',
    description: 'Authentic Chinese & Asian Fast Food. Order noodles, rice, manchurian, and more online.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F9F9',
    theme_color: '#C0392B',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
