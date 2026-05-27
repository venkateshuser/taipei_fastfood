// Real Unsplash photo IDs mapped to each dish for reliable, relevant images
const unsplashPhotos = {
  // FRIED RICE
  "veg-fried-rice": "photo-1603133872878-684f208fb84b",
  "egg-fried-rice": "photo-1512058564366-18510be2db19",
  "chicken-fried-rice": "photo-1512058564366-18510be2db19",
  "schezwan-fried-rice": "photo-1603133872878-684f208fb84b",
  "mixed-fried-rice": "photo-1512058564366-18510be2db19",

  // NOODLES
  "veg-noodles": "photo-1552611052-33e04de081de",
  "egg-noodles": "photo-1569718212165-3a8278d5f624",
  "chicken-noodles": "photo-1612929633738-8fe44f7ec841",
  "chicken-schezwan-noodles": "photo-1612929633738-8fe44f7ec841",
  "singapore-noodles": "photo-1552611052-33e04de081de",

  // CHICKEN STARTERS
  "chicken-65": "photo-1626082927389-6cd097cdc6ec",
  "chilli-chicken": "photo-1603894584373-5ac82b2ae398",
  "chicken-manchurian": "photo-1603894584373-5ac82b2ae398",
  "apollo-chicken": "photo-1626082927389-6cd097cdc6ec",
  "chicken-lollipop": "photo-1626082927389-6cd097cdc6ec",
  "pepper-chicken": "photo-1603894584373-5ac82b2ae398",
  "crispy-chicken": "photo-1626082927389-6cd097cdc6ec",

  // VEG STARTERS - FIXED
  "gobi-manchurian": "photo-1564834724105-918b73d1b9e0",
  "paneer-manchurian": "photo-1567188040759-fb8a883dc6d8",
  "mushroom-65": "photo-1504545102780-26774c1bb073",
  "crispy-corn": "photo-1551754655-cd27e38d2076",
  "baby-corn-manchurian": "photo-1540420773420-3366772f4999",

  // MAIN COURSE
  "butter-chicken": "photo-1603894584373-5ac82b2ae398",
  "kadai-chicken": "photo-1603894584373-5ac82b2ae398",
  "chicken-tikka-masala": "photo-1603894584373-5ac82b2ae398",
  "paneer-butter-masala": "photo-1567188040759-fb8a883dc6d8",
  "kadai-paneer": "photo-1567188040759-fb8a883dc6d8",
  "dal-fry": "photo-1589302168068-964664d93dc0",

  // EGG SPECIALS
  "egg-curry": "photo-1512058564366-18510be2db19",
  "egg-manchurian": "photo-1589302168068-964664d93dc0",
  "egg-fried-rice-special": "photo-1512058564366-18510be2db19",

  // ROLLS
  "veg-spring-roll": "photo-1534422298391-e4f8c172dddb",
  "chicken-spring-roll": "photo-1534422298391-e4f8c172dddb",

  // SOUPS
  "veg-manchow-soup": "photo-1547592166-23ac45744acd",
  "chicken-manchow-soup": "photo-1547592166-23ac45744acd",
  "sweet-corn-soup": "photo-1547592166-23ac45744acd",
  "hot-sour-soup": "photo-1547592166-23ac45744acd",

  // Hero background
  "hero-noodles": "photo-1569718212165-3a8278d5f624",
}

export const getImageUrl = (query, seed) => {
  const photoId = unsplashPhotos[query]

  if (photoId) {
    return `https://images.unsplash.com/${photoId}?w=800&h=600&fit=crop&q=80&auto=format`
  }

  // Fallback
  const searchTerms = encodeURIComponent(query.replace(/-/g, ' '))
  return `https://images.unsplash.com/photo-${seed.toString().padStart(10, '0')}?w=800&h=600&fit=crop&q=80&auto=format`
}

export const getHeroImageUrl = () => {
  return `https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1920&h=1080&fit=crop&q=80&auto=format`
}
