// PAWS & POLISH — Central Asset Configuration
// Inspired by the luxury pet care brand reference

export const ASSETS = {
  // ── Cinematic Background & Subject Videos ────────────────────────────
  videos: {
    hero: {
      mp4: '/assets/videos/hero_bg_pets.mp4',
      fallbackMp4: 'https://cdn.coverr.co/videos/coverr-dog-walking-on-the-grass-4877/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80',
      alt: 'Happy pets enjoying nature in peaceful landscape'
    },
    heroDog: {
      mp4: '/videos/golden-retriever-hero.mp4',
      fallbackMp4: '/assets/videos/golden_toy.mp4',
      poster: '/assets/pets/golden_puppy_hero.png',
      alt: 'Generated living cinematic Golden Retriever hero'
    },
    cinematic: {
      mp4: 'https://cdn.coverr.co/videos/coverr-golden-retriever-on-a-mountain-top-761/1080p.mp4',
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