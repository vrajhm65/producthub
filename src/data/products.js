export const CATEGORIES = [
  {
    name: "Electronics",
    description: "Headphones, wearables and sound gear.",
    icon: "🔌",
  },
  {
    name: "Fashion",
    description: "Everyday carry and lifestyle essentials.",
    icon: "🎒",
  },
  {
    name: "Home",
    description: "Lighting and comfort for your space.",
    icon: "🏠",
  },
  {
    name: "Accessories",
    description: "Keyboards, mice and desk upgrades.",
    icon: "⌨️",
  },
];

export const products = [
  {
    id: "1",
    name: "Aurora Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.5,
    image: "https://picsum.photos/seed/producthub-1/800/600",
    description: "Lightweight over-ear headphones with clear sound and 30-hour battery life.",
  },
  {
    id: "2",
    name: "Nimbus Smart Watch",
    category: "Electronics",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.4,
    image: "https://picsum.photos/seed/producthub-2/800/600",
    description: "Fitness tracking, heart-rate monitoring and a bright always-on display.",
  },
  {
    id: "3",
    name: "Terra Backpack",
    category: "Fashion",
    price: 59.99,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    image: "https://picsum.photos/seed/producthub-3/800/600",
    description: "Durable 22L everyday backpack with padded laptop sleeve and water resistance.",
  },
  {
    id: "4",
    name: "Lumen Desk Lamp",
    category: "Home",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.3,
    image: "https://picsum.photos/seed/producthub-4/800/600",
    description: "Minimal LED desk lamp with adjustable brightness and warm-to-cool tones.",
  },
  {
    id: "5",
    name: "Pulse Bluetooth Speaker",
    category: "Electronics",
    price: 69.99,
    originalPrice: null,
    discount: 0,
    rating: 4.2,
    image: "https://picsum.photos/seed/producthub-5/800/600",
    description: "Compact portable speaker with 360° sound and 12-hour playtime.",
  },
  {
    id: "6",
    name: "Vertex Mechanical Keyboard",
    category: "Accessories",
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.7,
    image: "https://picsum.photos/seed/producthub-6/800/600",
    description: "Tactile mechanical keyboard with backlit keys and solid aluminium frame.",
  },
  {
    id: "7",
    name: "Orbit Ergonomic Mouse",
    category: "Accessories",
    price: 34.99,
    originalPrice: null,
    discount: 0,
    rating: 4.1,
    image: "https://picsum.photos/seed/producthub-7/800/600",
    description: "Comfortable ergonomic mouse with silent clicks and long battery life.",
  },
  {
    id: "8",
    name: "Hydra Steel Bottle",
    category: "Fashion",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.5,
    image: "https://picsum.photos/seed/producthub-8/800/600",
    description: "750ml insulated steel bottle that keeps drinks cold for 24 hours.",
  },
  {
    id: "9",
    name: "Drift Canvas Sneakers",
    category: "Fashion",
    price: 74.99,
    originalPrice: 94.99,
    discount: 21,
    rating: 4.3,
    image: "https://picsum.photos/seed/producthub-9/800/600",
    description: "Breathable canvas sneakers with cushioned soles for all-day comfort.",
  },
  {
    id: "10",
    name: "Ember Ceramic Mug Set",
    category: "Home",
    price: 29.99,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    image: "https://picsum.photos/seed/producthub-10/800/600",
    description: "Set of two stoneware mugs with a matte finish. Dishwasher safe.",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === String(id));
}

export function getFeaturedProducts(count = 4) {
  return products.slice(0, count);
}

export function getOfferProducts() {
  return products.filter((p) => p.discount > 0 && p.originalPrice);
}

export function getProductCountByCategory(category) {
  return products.filter((p) => p.category === category).length;
}
