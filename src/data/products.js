// Single source of truth for the catalogue.
// The same object drives cards, details, offers, search, categories and cart.

export const CATEGORIES = [
  {
    name: "Electronics",
    description: "Smart devices and everyday technology.",
    icon: "🔌",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Fashion",
    description: "Clothing and footwear for everyday style.",
    icon: "👕",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Home & Kitchen",
    description: "Cookware, lighting and home essentials.",
    icon: "🏠",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Accessories",
    description: "Bags, wallets, watches and eyewear.",
    icon: "🎒",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Beauty & Personal Care",
    description: "Skincare, grooming and personal care.",
    icon: "💄",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sports & Fitness",
    description: "Training gear for an active lifestyle.",
    icon: "🏋️",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  },
];

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const products = [
  // ---------------- Electronics (5) ----------------
  {
    id: "1",
    name: "Galaxy F55 5G Smartphone (8GB, 128GB)",
    brand: "Samsung",
    category: "Electronics",
    price: 27999,
    originalPrice: 34999,
    discount: 20,
    rating: 4.4,
    image: img("photo-1511707171634-5f897ff02aa9"),
    description:
      "6.7-inch AMOLED smartphone with 50MP camera, 5000mAh battery and 5G connectivity for everyday use.",
  },
  {
    id: "2",
    name: "MacBook Air Laptop (M2, 8GB, 256GB)",
    brand: "Apple",
    category: "Electronics",
    price: 94900,
    originalPrice: 99900,
    discount: 5,
    rating: 4.8,
    image: img("photo-1496181133206-80ce9b88a853"),
    description:
      "Thin and light Apple laptop with M2 chip, 13.6-inch Retina display and up to 18 hours of battery life.",
  },
  {
    id: "3",
    name: "WH-1000XM5 Wireless Noise-Cancelling Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    rating: 4.7,
    image: img("photo-1505740420928-5e560c06d30e"),
    description:
      "Comfortable wireless over-ear headphones with industry-leading noise cancelling, Bluetooth multipoint and 30-hour battery life.",
  },
  {
    id: "4",
    name: "Galaxy Watch 6 Bluetooth Smartwatch (44mm)",
    brand: "Samsung",
    category: "Electronics",
    price: 24999,
    originalPrice: 32999,
    discount: 24,
    rating: 4.5,
    image: img("photo-1523275335684-37898b6baf30"),
    description:
      "Fitness tracking smartwatch with heart-rate monitoring, sleep coaching and a bright always-on AMOLED display.",
  },
  {
    id: "5",
    name: "Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "Electronics",
    price: 9999,
    originalPrice: 12999,
    discount: 23,
    rating: 4.6,
    image: img("photo-1608043152269-423dbba4e7e1"),
    description:
      "Portable Bluetooth speaker with powerful bass, IP67 water resistance and 12 hours of playtime.",
  },
  // ---------------- Fashion (5) ----------------
  {
    id: "6",
    name: "Pure Cotton Crew-Neck T-Shirt",
    brand: "H&M",
    category: "Fashion",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.2,
    image: img("photo-1521572163474-6864f9cf17ab"),
    description:
      "Soft pure-cotton T-shirt with a regular fit. Breathable everyday fashion essential, machine washable.",
  },
  {
    id: "7",
    name: "511 Slim Fit Stretch Jeans",
    brand: "Levi's",
    category: "Fashion",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    rating: 4.4,
    image: img("photo-1542272604-787c3835535d"),
    description:
      "Classic slim-fit stretch jeans in indigo denim. Comfortable all-day fashion staple with a modern cut.",
  },
  {
    id: "8",
    name: "Air Zoom Running Shoes",
    brand: "Nike",
    category: "Fashion",
    price: 5950,
    originalPrice: 7999,
    discount: 26,
    rating: 4.6,
    image: img("photo-1542291026-7eec264c27ff"),
    description:
      "Lightweight Nike running shoes with responsive cushioning and breathable mesh for daily runs and casual wear.",
  },
  {
    id: "9",
    name: "Essential Fleece Hoodie",
    brand: "Puma",
    category: "Fashion",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.3,
    image: img("photo-1556821840-3a63f95609a7"),
    description:
      "Warm fleece hoodie with kangaroo pocket and ribbed cuffs. A cozy fashion layer for winter evenings.",
  },
  {
    id: "10",
    name: "Classic Faux-Leather Biker Jacket",
    brand: "H&M",
    category: "Fashion",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.5,
    image: img("photo-1551028719-00167b16eac5"),
    description:
      "Stylish faux-leather biker jacket with quilted shoulders and zip pockets. A timeless fashion statement.",
  },
  // ---------------- Home & Kitchen (5) ----------------
  {
    id: "11",
    name: "Non-Stick Cookware Set (5-Piece)",
    brand: "Prestige",
    category: "Home & Kitchen",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.4,
    image: img("photo-1556911220-bff31c812dba"),
    description:
      "5-piece non-stick Prestige cookware set with glass lids. Even heating, gas and induction compatible.",
  },
  {
    id: "12",
    name: "Premium Filter Coffee Powder (500g)",
    brand: "Tata",
    category: "Home & Kitchen",
    price: 499,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    image: img("photo-1495474472287-4d71bcdd2085"),
    description:
      "Aromatic South Indian filter coffee powder, 80% coffee and 20% chicory. Makes about 60 strong cups.",
  },
  {
    id: "13",
    name: "LED Table Lamp with Touch Control",
    brand: "Philips",
    category: "Home & Kitchen",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.3,
    image: img("photo-1507473885765-e6ed057f782c"),
    description:
      "Minimal Philips LED table lamp with touch dimming and warm-to-cool light modes for study and bedside use.",
  },
  {
    id: "14",
    name: "Thermosteel Insulated Bottle (1L)",
    brand: "Milton",
    category: "Home & Kitchen",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.5,
    image: img("photo-1602143407151-7111542de6e8"),
    description:
      "1-litre Milton vacuum-insulated steel bottle. Keeps drinks hot for 12 hours or cold for 24 hours.",
  },
  {
    id: "15",
    name: "Pure Cotton King Bedsheet Set",
    brand: "IKEA",
    category: "Home & Kitchen",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    rating: 4.4,
    image: img("photo-1522771739844-6a9f6d5f14af"),
    description:
      "King-size pure cotton bedsheet with two pillow covers. Soft, breathable and machine washable home essential.",
  },
  // ---------------- Accessories (5) ----------------
  {
    id: "16",
    name: "Laptop Backpack 32L with USB Port",
    brand: "American Tourister",
    category: "Accessories",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.5,
    image: img("photo-1553062407-98eeb64c6a62"),
    description:
      "Durable 32L American Tourister backpack with padded 15.6-inch laptop sleeve, USB charging port and water resistance.",
  },
  {
    id: "17",
    name: "Slim Leather Wallet for Men",
    brand: "Tommy Hilfiger",
    category: "Accessories",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    rating: 4.3,
    image: img("photo-1627123424574-724758594e93"),
    description:
      "Genuine leather bifold wallet with 6 card slots and 2 currency compartments. Slim everyday accessory.",
  },
  {
    id: "18",
    name: "Aviator UV-Protection Sunglasses",
    brand: "Ray-Ban",
    category: "Accessories",
    price: 4490,
    originalPrice: 5990,
    discount: 25,
    rating: 4.6,
    image: img("photo-1572635196237-14b3f281503f"),
    description:
      "Classic Ray-Ban aviator sunglasses with 100% UV protection and lightweight metal frame. Includes hard case.",
  },
  {
    id: "19",
    name: "Analog Leather-Strap Wrist Watch",
    brand: "Fastrack",
    category: "Accessories",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.4,
    image: img("photo-1524805444758-089113d48a6d"),
    description:
      "Stylish Fastrack analog watch with genuine leather strap, date display and 2-year warranty.",
  },
  {
    id: "20",
    name: "Women's Leather Tote Handbag",
    brand: "H&M",
    category: "Accessories",
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.2,
    image: img("photo-1548036328-c9fa89d128fa"),
    description:
      "Spacious faux-leather tote handbag with inner zip pocket and adjustable strap. Fits laptop and daily essentials.",
  },
  // ---------------- Beauty & Personal Care (5) ----------------
  {
    id: "21",
    name: "Oil-Clear Face Wash (150ml)",
    brand: "Nivea",
    category: "Beauty & Personal Care",
    price: 299,
    originalPrice: null,
    discount: 0,
    rating: 4.3,
    image: img("photo-1556228720-195a672e8a03"),
    description:
      "Nivea oil-clear face wash for daily use. Gently removes dirt and excess oil for fresh, clear skin.",
  },
  {
    id: "22",
    name: "Wild Musk Eau De Parfum (100ml)",
    brand: "Fogg",
    category: "Beauty & Personal Care",
    price: 649,
    originalPrice: 999,
    discount: 35,
    rating: 4.4,
    image: img("photo-1541643600914-78b084683601"),
    description:
      "Long-lasting Fogg perfume with woody and musky notes. 100ml Eau De Parfum for daily wear.",
  },
  {
    id: "23",
    name: "Professional Ionic Hair Dryer (1800W)",
    brand: "Philips",
    category: "Beauty & Personal Care",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.5,
    image: img("photo-1522337660859-02fbefca4702"),
    description:
      "Philips 1800W ionic hair dryer with 2 speed and 3 heat settings. Fast drying with less frizz, ideal for salon-style hair.",
  },
  {
    id: "24",
    name: "Beard Trimmer with 20 Length Settings",
    brand: "Philips",
    category: "Beauty & Personal Care",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    rating: 4.4,
    image: img("photo-1621605815971-fbc98d665033"),
    description:
      "Philips cordless beard trimmer with self-sharpening blades, 20 length settings and 60 minutes of runtime.",
  },
  {
    id: "25",
    name: "Complete Skincare Kit (Cleanser, Toner, Moisturiser)",
    brand: "Lakme",
    category: "Beauty & Personal Care",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    rating: 4.3,
    image: img("photo-1571781926291-c477ebfd024b"),
    description:
      "Lakme 3-step skincare kit for daily routine. Suitable for all skin types, dermatologically tested.",
  },
  // ---------------- Sports & Fitness (5) ----------------
  {
    id: "26",
    name: "Non-Slip Yoga Mat 6mm with Strap",
    brand: "Boldfit",
    category: "Sports & Fitness",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.4,
    image: img("photo-1544367567-0f2fcb009e0b"),
    description:
      "6mm anti-skid Boldfit yoga mat for yoga and fitness workouts. Sweat resistant and easy to roll, with carry strap.",
  },
  {
    id: "27",
    name: "Hex Dumbbell Pair (7.5kg x 2)",
    brand: "Decathlon",
    category: "Sports & Fitness",
    price: 1499,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    image: img("photo-1517836357463-d25dfeac3438"),
    description:
      "Pair of 7.5kg hex dumbbells for home gym strength training. Rubber coated for floor protection and firm grip.",
  },
  {
    id: "28",
    name: "Men's Running Shoes (Lightweight)",
    brand: "Adidas",
    category: "Sports & Fitness",
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    rating: 4.5,
    image: img("photo-1595950653106-6c9ebd614d3a"),
    description:
      "Adidas lightweight running shoes with cushioned sole and breathable upper. Ideal for running and gym fitness training.",
  },
  {
    id: "29",
    name: "Resistance Band Set (Pack of 5)",
    brand: "Boldfit",
    category: "Sports & Fitness",
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.2,
    image: img("photo-1598289431512-b97b0917affc"),
    description:
      "Set of 5 loop resistance bands with different strengths for full-body fitness workouts at home or gym.",
  },
  {
    id: "30",
    name: "Gym Sipper Bottle with Time Markers (1L)",
    brand: "Milton",
    category: "Sports & Fitness",
    price: 699,
    originalPrice: null,
    discount: 0,
    rating: 4.3,
    image: img("photo-1523362628745-0c100150b504"),
    description:
      "1-litre Milton gym sipper with hourly time markers to track water intake during fitness training.",
  },
];

export function formatINR(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

export function getProductById(id) {
  return products.find((p) => p.id === String(id));
}

export function getFeaturedProducts(count = 4) {
  return products.slice(0, count);
}

export function getPopularProducts(count = 6) {
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getOfferProducts() {
  return products.filter((p) => p.discount > 0 && p.originalPrice);
}

export function getProductCountByCategory(category) {
  return products.filter((p) => p.category === category).length;
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) =>
    [p.name, p.brand, p.category, p.description].some((field) =>
      String(field).toLowerCase().includes(q)
    )
  );
}
