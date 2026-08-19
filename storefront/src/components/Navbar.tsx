'use client';

import React from 'react';
import { ShoppingBag, Search, Bot, Sparkles, Heart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAI: () => void;
  onSelectCategory: (cat: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenAI,
  onSelectCategory,
  activeCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 space-x-reverse cursor-pointer" onClick={() => onSelectCategory('all')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Shopify AI
                </span>
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold px-2 py-0.5 rounded-full">
                  E-Commerce OS
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">Shopify AI-Powered E-Commerce Store & Shopping Agent</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse text-sm font-medium">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              جميع المنتجات
            </button>
            <button
              onClick={() => onSelectCategory('tech')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === 'tech'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              ⚡ التقنية والإلكترونيات
            </button>
            <button
              onClick={() => onSelectCategory('home')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === 'home'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              🏠 المنزل والمطبخ
            </button>
            <button
              onClick={() => onSelectCategory('travel')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === 'travel'
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              🎒 مستلزمات السفر
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 space-x-reverse">
            
            {/* AI Shopping Agent Button */}
            <button
              onClick={onOpenAI}
              className="relative group bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all flex items-center space-x-2 space-x-reverse"
            >
              <Bot className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
              <span>مساعد AI التسوق</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60 transition-all"
              aria-label="السلة"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
              className="block w-full text-right px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
            >
              جميع المنتجات
            </button>
            <button
              onClick={() => { onSelectCategory('tech'); setMobileMenuOpen(false); }}
              className="block w-full text-right px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
            >
              ⚡ التقنية والإلكترونيات
            </button>
            <button
              onClick={() => { onSelectCategory('home'); setMobileMenuOpen(false); }}
              className="block w-full text-right px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
            >
              🏠 المنزل والمطبخ
            </button>
            <button
              onClick={() => { onSelectCategory('travel'); setMobileMenuOpen(false); }}
              className="block w-full text-right px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
            >
              🎒 مستلزمات السفر
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
