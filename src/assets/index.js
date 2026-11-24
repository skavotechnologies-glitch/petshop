// PAWS & POLISH — Central Asset Configuration
// Inspired by the luxury pet care brand reference

export const ASSETS = {
  // ── Cinematic Background Videos ──────────────────────────────────────
  videos: {
    hero: {
      mp4: 'https://assets.mixkit.co/videos/preview/mixkit-dogs-playing-in-the-park-46346-large.mp4',
      poster: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80',
      alt: 'Happy golden retriever and pets running in nature'
    },
    cinematic: {
      mp4: 'https://assets.mixkit.co/videos/preview/mixkit-little-dog-getting-groomed-43093-large.mp4',
      poster: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1920&q=80',
      alt: 'Artisanal pet grooming with warm water hydrobath and gentle brushing'
    }
  },

  // ── High-Resolution Pet Imagery & Cutouts ────────────────────────────
  pets: {
    // Primary Golden Retriever Puppy cutout for Hero (matches reference video)
    goldenPuppyHero: '/assets/pets/golden_puppy_hero.png',
    // Grooming section central dog cutout (matches reference video)
    goldenGroomingCenter: '/assets/pets/golden_grooming_center.png',
    // Editorial Dog
    goldenEditorial: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80',
    // Editorial Cat
    catEditorial: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    // Puppy playing
    puppyPlay: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
  },

  // ── Floating & Editorial Pet Photography ─────────────────────────────
  floating: {
    puppyPlay: {
      src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      alt: 'Playful golden puppy enjoying playtime'
    },
    catPlay: {
      src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      alt: 'Curious British Shorthair cat relaxing'
    }
  },

  // ── Category Cover Visuals ───────────────────────────────────────────
  categories: {
    dogs: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    cats: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    food: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
    toys: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    grooming: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    beds: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80'
  }
};

export default ASSETS;