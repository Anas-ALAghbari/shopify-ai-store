'use client';

import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, ShoppingBag, Check } from 'lucide-react';
import { MOCK_PRODUCTS, Product } from '../data/products';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  recommendedProducts?: Product[];
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'مرحباً بك! أنا مساعد تسوق الذكاء الاصطناعي الخاص بمتجر OmniMarket AI 🤖. كيف يمكنني مساعدتك اليوم؟ يمكنك كتابة ميزانيتك، احتياجك، أو نوع المنتجات التي تبحث عنها!',
      recommendedProducts: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[3]]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: input
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentQuery = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      // AI Matching & Recommendation logic
      let matched: Product[] = [];
      if (currentQuery.includes('سفر') || currentQuery.includes('حقيبة') || currentQuery.includes('مظلة')) {
        matched = MOCK_PRODUCTS.filter((p) => p.category === 'travel');
      } else if (currentQuery.includes('منزل') || currentQuery.includes('قهوة') || currentQuery.includes('نوم')) {
        matched = MOCK_PRODUCTS.filter((p) => p.category === 'home');
      } else if (currentQuery.includes('تقنية') || currentQuery.includes('ساعة') || currentQuery.includes('سماعة')) {
        matched = MOCK_PRODUCTS.filter((p) => p.category === 'tech');
      } else {
        matched = MOCK_PRODUCTS.slice(0, 2);
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `بناءً على طلبك، قمت بتحليل كتالوج متجر OmniMarket AI واخترت لك أفضل الخيارات التالية الموصى بها:`,
        recommendedProducts: matched
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-white overflow-hidden flex flex-col h-[600px] z-10">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <h3 className="font-bold text-slate-100 text-sm">مساعد AI للتسوق والتوصيات</h3>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-semibold">نشط ومتصل</span>
              </div>
              <p className="text-[11px] text-slate-400">يفهم احتياجك ويرشح لك أفضل المنتجات فوراً</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col ${m.sender === 'user' ? 'items-start' : 'items-end'}`}>
              <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-100 border border-slate-700/80 rounded-bl-none'
              }`}>
                {m.text}
              </div>

              {/* Recommended Product Cards inside Chat */}
              {m.recommendedProducts && (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-full">
                  {m.recommendedProducts.map((p) => (
                    <div key={p.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center space-x-3 space-x-reverse">
                      <img src={p.image} alt={p.name} className="w-14 h-14 rounded-lg object-cover bg-slate-900 shrink-0" />
                      <div className="flex-1 min-w-0 text-right">
                        <h5 className="font-bold text-slate-200 text-xs line-clamp-1">{p.name}</h5>
                        <span className="text-blue-400 font-extrabold text-xs block">${p.price}</span>
                        <button
                          onClick={() => onAddToCart(p)}
                          className="mt-1.5 w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-[11px] font-bold py-1 rounded-lg flex items-center justify-center space-x-1 space-x-reverse transition-all"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>إضافة للسلة</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 space-x-reverse text-slate-400 text-xs bg-slate-800/60 p-3 rounded-xl w-max border border-slate-700/50">
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
              <span>جاري تحليل الكتالوج واختيار أفضل التوصيات...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2 space-x-reverse bg-slate-900 rounded-xl p-1.5 border border-slate-800 focus-within:border-blue-500/50 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب طلبك هنا (مثلاً: أريد سماعات بسعر ممتاز أو حقيبة سفر)..."
              className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none text-right"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-lg shadow-md transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
