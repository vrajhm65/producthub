export const products = [
  {
    id: "1",
    name: "Aurora Wireless Headphones",
    category: "Audio",
    price: 89.99,
    image: "https://picsum.photos/seed/producthub-1/800/600",
    description: "Lightweight over-ear headphones with clear sound and 30-hour battery life.",
  },
  {
    id: "2",
    name: "Nimbus Smart Watch",
    category: "Wearables",
    price: 129.99,
    image: "https://picsum.photos/seed/producthub-2/800/600",
    description: "Fitness tracking, heart-rate monitoring and a bright always-on display.",
  },
  {
    id: "3",
    name: "Terra Backpack",
    category: "Accessories",
    price: 59.99,
    image: "https://picsum.photos/seed/producthub-3/800/600",
    description: "Durable 22L everyday backpack with padded laptop sleeve and water resistance.",
  },
  {
    id: "4",
    name: "Lumen Desk Lamp",
    category: "Home",
    price: 39.99,
    image: "https://picsum.photos/seed/producthub-4/800/600",
    description: "Minimal LED desk lamp with adjustable brightness and warm-to-cool tones.",
  },
  {
    id: "5",
    name: "Pulse Bluetooth Speaker",
    category: "Audio",
    price: 69.99,
    image: "https://picsum.photos/seed/producthub-5/800/600",
    description: "Compact portable speaker with 360° sound and 12-hour playtime.",
  },
  {
    id: "6",
    name: "Vertex Mechanical Keyboard",
    category: "Computing",
    price: 99.99,
    image: "https://picsum.photos/seed/producthub-6/800/600",
    description: "Tactile mechanical keyboard with backlit keys and solid aluminium frame.",
  },
  {
    id: "7",
    name: "Orbit Ergonomic Mouse",
    category: "Computing",
    price: 34.99,
    image: "https://picsum.photos/seed/producthub-7/800/600",
    description: "Comfortable ergonomic mouse with silent clicks and long battery life.",
  },
  {
    id: "8",
    name: "Hydra Steel Bottle",
    category: "Lifestyle",
    price: 24.99,
    image: "https://picsum.photos/seed/producthub-8/800/600",
    description: "750ml insulated steel bottle that keeps drinks cold for 24 hours.",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === String(id));
}

export function getFeaturedProducts(count = 3) {
  return products.slice(0, count);
}
