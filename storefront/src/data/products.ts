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
    name: 'سماعات رأس لاسلكية إلغاء الضوضاء الفائقة Pro',
    category: 'tech',
    categoryLabel: 'إلكترونيات وتقنية',
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    badge: '🔥 الأكثر مبيعاً',
    description: 'سماعات صوتية عالية الدقة مع تقنية عزل الضوضاء النشط وتكيف تلقائي مع البيئة المحيطة وصوت محيطي 3D.',
    features: ['عزل ضوضاء نشط ANC', 'بطارية تدوم 40 ساعة', 'شحن سريع عبر USB-C', 'ميكروفون ثلاثي للمكالمات'],
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'حقيبة سفر ذكية مع شاحن مضمن وقفل رقمي TSA',
    category: 'travel',
    categoryLabel: 'مستلزمات سفر',
    price: 119,
    originalPrice: 150,
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    badge: '⚡ خيار السفر الذكي',
    description: 'حقيبة مقاومة للماء مع مخرج شحن USB خارجي، هيكل خفيف الوزن من الكاربون المقوى، وقفل للأمان معتمد دولياً.',
    features: ['مقبض هيدروليكي مريح', 'عجلات دائرية 360 درجة', 'منفذ شحن خارجي', 'مقاومة الصدمات'],
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'آلة إعداد القهوة الذكية باللمس والبرمجة التلقائية',
    category: 'home',
    categoryLabel: 'المنزل والمطبخ',
    price: 89,
    originalPrice: 120,
    rating: 4.7,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80',
    badge: '☕ اختيار عشاق القهوة',
    description: 'استمتع بأجود أنواع القهوة مع تحكم بدقة الحرارة، طحن حبوب القهوة الفوري، وإمكانية المزامنة مع الهاتف.',
    features: ['طاحونة سيراميك مدمجة', 'مبخر حليب احترافي', 'شاشة لمس ملونة', 'مؤقت تشغيل تلقائي'],
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'ساعة ذكية رياضية مع مراقب الأكسجين وضربات القلب',
    category: 'tech',
    categoryLabel: 'إلكترونيات وتقنية',
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    badge: '✨ توصية الذكاء الاصطناعي',
    description: 'متابعة فائقة للأنشطة الرياضية والنوم ومستوى التوتر مع تتبع GPS ودعم وضع التمارين لـ 50 رياضة.',
    features: ['شاشة AMOLED دائمًا قيد التشغيل', 'مقاومة للماء حتى 50 متر', 'بطارية تدوم 14 يومًا', 'تطبيق متوافق مع iOS/Android'],
    inStock: true
  },
  {
    id: 'prod-5',
    name: 'وسادة نوم ميموري فوم مريحة للرقبة والعمود الفقري',
    category: 'home',
    categoryLabel: 'المنزل والمطبخ',
    price: 45,
    originalPrice: 65,
    rating: 4.6,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    badge: '💤 الأكثر راحة',
    description: 'تصميم مريح يخفف الضغط عن الرقبة والأكتاف أثناء النوم، غطاء من ألياف البامبو الطبيعية القابلة للغسل.',
    features: ['إسفنج ميموري فوم عالي الكثافة', 'غطاء خارجي مضاد للبكتيريا', 'تنظيم حراري تهوية تبريد'],
    inStock: true
  },
  {
    id: 'prod-6',
    name: 'مظلة سفر فائقة الخفة مقاومة للرياح والأشعة البنفسجية',
    category: 'travel',
    categoryLabel: 'مستلزمات سفر',
    price: 29,
    originalPrice: 40,
    rating: 4.8,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
    badge: '☂️ الأكثر مبيعاً للسفر',
    description: 'تصميم مطوي جيب صغير الحجم، قماش نانو يمنع نفاذ الماء وتصمد أمام الرياح الشديدة بدون انثناء.',
    features: ['فتح وإغلاق بنقرة واحدة', 'حماية UV 50+', 'وزن خفيف 280 جرام', 'مقبض مريح غطاء حافظ'],
    inStock: true
  }
];
