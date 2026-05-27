export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/_next'],
    },
    sitemap: 'https://taipeifastfood.vercel.app/sitemap.xml',
    host: 'https://taipeifastfood.vercel.app',
  }
}
