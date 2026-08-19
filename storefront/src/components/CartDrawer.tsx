'use client';

import React from 'react';
import { Product } from '../data/products';
import { X, Trash2, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-slate-900 border-r border-slate-800 text-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <ShoppingBag className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-slate-100">سلة التسوق</h2>
              <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                {items.reduce((a, b) => a + b.quantity, 0)} عناصر
              </span>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto animate-pulse" />
                <p className="text-slate-400 font-medium">سلة التسوق فارغة حالياً</p>
                <button onClick={onClose} className="text-blue-400 text-xs font-semibold hover:underline">
                  تصفح المنتجات وأضف ما يعجبك 🛒
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-3 space-x-reverse bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover bg-slate-900 shrink-0" />
                  <div className="flex-1 min-w-0 text-right">
                    <h4 className="font-semibold text-slate-200 text-xs line-clamp-1">{item.product.name}</h4>
                    <span className="text-blue-400 font-bold text-sm block mt-1">${item.product.price}</span>
                    <div className="flex items-center space-x-2 space-x-reverse mt-2">
                      <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold text-xs">-</button>
                      <span className="text-xs font-bold text-slate-200 px-1">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold text-xs">+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemoveItem(item.product.id)} className="p-2 text-slate-500 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950 space-y-4">
              <div className="flex items-center justify-between text-slate-300 text-sm">
                <span>المجموع الكلي:</span>
                <span className="text-2xl font-black text-white">${totalAmount}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>دفع آمن وتأكيد فوري عبر Shopify API</span>
              </div>
              <button
                onClick={() => alert(`سيتم تحويلك إلى صفحة الدفع الآمنة لمشروع OmniMarket AI بقيمة $${totalAmount}`)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2 space-x-reverse text-sm"
              >
                <span>متابعة إتمام الدفع (Checkout)</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
