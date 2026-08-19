'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { CartDrawer, CartItem } from '../components/CartDrawer';
import { AIAssistantModal } from '../components/AIAssistantModal';
import { Footer } from '../components/Footer';
import { MOCK_PRODUCTS, Product } from '../data/products';
import { Search, Sparkles, Bot } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  // Filter products by active category & search query
  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col dir-ltr" dir="ltr">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium border-b border-blue-800/40 flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-blue-300 animate-spin" />
        <span>Shopify AI-Powered E-Commerce Store & Shopping Agent — Express Global Delivery & AI Recommendations 🤖</span>
      </div>

      {/* Navbar Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        activeCategory={activeCategory}
      />

      {/* Hero Section */}
      <Hero
        onOpenAI={() => setIsAIOpen(true)}
        onExploreClick={() => {
          const el = document.getElementById('catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Catalog & Filter Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Section Title & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
              <span>Featured Storefront Products</span>
              <span className="bg-slate-800 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold border border-slate-700">
                {filteredProducts.length} items
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Browse our commercial catalog or filter by collection
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative min-w-[280px] sm:min-w-[340px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or gear..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800/80">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Products ({MOCK_PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveCategory('tech')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'tech'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            ⚡ Tech & Gadgets ({MOCK_PRODUCTS.filter((p) => p.category === 'tech').length})
          </button>
          <button
            onClick={() => setActiveCategory('home')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'home'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🏠 Home & Living ({MOCK_PRODUCTS.filter((p) => p.category === 'home').length})
          </button>
          <button
            onClick={() => setActiveCategory('travel')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'travel'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🎒 Travel Gear ({MOCK_PRODUCTS.filter((p) => p.category === 'travel').length})
          </button>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
            <Search className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-slate-300 font-bold">No products match your search query</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-blue-400 text-xs font-semibold hover:underline"
            >
              Reset Filters & View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isAdded={!!addedIds[product.id]}
              />
            ))}
          </div>
        )}

      </main>

      {/* Floating AI Shopping Assistant Badge */}
      <button
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl shadow-purple-600/50 hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="AI Assistant"
      >
        <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-md">
          AI Active
        </span>
      </button>

      {/* Cart Drawer & AI Assistant Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <AIAssistantModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
