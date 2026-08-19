export interface Product {
  id: string;
  name: string;
  category: 'tech' | 'home' | 'travel' | 'fashion';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Pro Wireless Active Noise-Canceling Headphones',
    category: 'tech',
    categoryLabel: 'Tech & Electronics',
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    badge: '🔥 Bestseller',
    description: 'High-fidelity acoustic drivers with advanced active noise cancellation and spatial 3D audio precision.',
    features: ['Active Noise Cancellation (ANC)', '40-Hour Battery Life', 'USB-C Fast Charging', 'Triple Beamforming Mics'],
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'Smart Travel Suitcase with Built-in Charger & TSA Lock',
    category: 'travel',
    categoryLabel: 'Travel Essentials',
    price: 119,
    originalPrice: 150,
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    badge: '⚡ Smart Travel Pick',
    description: 'Water-resistant carbon fiber chassis featuring an external USB power bank port and TSA-approved security lock.',
    features: ['Hydraulic Ergonomic Handle', '360° Spinner Wheels', 'External USB Power Pass', 'Impact Resistant Shell'],
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'Precision Touchscreen Smart Espresso Machine',
    category: 'home',
    categoryLabel: 'Home & Kitchen',
    price: 89,
    originalPrice: 120,
    rating: 4.7,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80',
    badge: '☕ Coffee Enthusiast Pick',
    description: 'Brew barista-grade espresso with PID temperature control, integrated bean grinder, and programmable touch UI.',
    features: ['Integrated Conical Burr Grinder', 'Steam Wand Milk Frother', 'Full-Color Touch Display', 'Auto-Brew Timer'],
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'Ultimate Fitness Smartwatch with Heart Rate & Blood Oxygen Monitor',
    category: 'tech',
    categoryLabel: 'Tech & Electronics',
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    badge: '✨ AI Recommendation',
    description: 'Comprehensive fitness, sleep, and wellness tracking with continuous SpO2 monitoring and 50+ sport modes.',
    features: ['Always-On AMOLED Display', '50m Water Resistance', '14-Day Battery Life', 'iOS & Android Compatible'],
    inStock: true
  },
  {
    id: 'prod-5',
    name: 'Ergonomic Cervical Memory Foam Sleeping Pillow',
    category: 'home',
    categoryLabel: 'Home & Kitchen',
    price: 45,
    originalPrice: 65,
    rating: 4.6,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    badge: '💤 Maximum Comfort',
    description: 'Contoured neck relief memory foam engineered to align the spine, wrapped in breathable bamboo viscose.',
    features: ['High-Density Contour Foam', 'Washable Antimicrobial Cover', 'Thermal Regulating Airflow'],
    inStock: true
  },
  {
    id: 'prod-6',
    name: 'Ultra-Light Windproof UV Travel Umbrella',
    category: 'travel',
    categoryLabel: 'Travel Essentials',
    price: 29,
    originalPrice: 40,
    rating: 4.8,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
    badge: '☂️ Travel Top Seller',
    description: 'Compact pocket umbrella featuring hydrophobic nano-fabric and reinforced fiberglass windproof ribs.',
    features: ['One-Touch Auto Open/Close', 'UPF 50+ Sun Protection', 'Featherweight 280g', 'Ergonomic Grip Handle'],
    inStock: true
  }
];
