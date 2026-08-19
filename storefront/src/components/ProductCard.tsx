'use client';

import React from 'react';
import { Product } from '../data/products';
import { Star, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isAdded: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, isAdded }) => {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-blue-300 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow text-left">
        
        {/* Category Label & Rating */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-700 text-slate-300">
            {product.categoryLabel}
          </span>
          <div className="flex items-center space-x-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-semibold text-slate-200 text-xs">{product.rating}</span>
            <span className="text-slate-500 text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-100 text-base mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Price & Action Button */}
        <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-left">
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-extrabold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">In Stock & Ships Free</span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-2 transition-all ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
