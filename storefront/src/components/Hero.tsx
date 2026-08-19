'use client';

import React from 'react';
import { Bot, Zap, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenAI: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAI, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
      
      {/* Glow Ambient Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400 animate-bounce" />
            <span>Shopify AI-Powered E-Commerce Store & Shopping Agent 🤖</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Next-Gen Shopping Engine Powered by{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Autonomous AI Agent
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover premium products across tech, home, and travel gear with real-time AI recommendations, instant checkout routing, and Shopify Storefront API integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenAI}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center space-x-3 text-sm sm:text-base"
            >
              <Bot className="w-5 h-5 text-purple-200" />
              <span>Try AI Shopping Agent</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-8 py-4 rounded-xl transition-all text-sm sm:text-base"
            >
              Explore Catalog 🛒
            </button>
          </div>

          {/* Value Propositions Features Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-slate-300 text-sm">
            <div className="flex items-center justify-center space-x-3 bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl">
              <Truck className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="text-left">
                <p className="font-bold text-white text-xs sm:text-sm">Express Global Shipping</p>
                <p className="text-slate-400 text-xs">Insured & Tracked Worldwide</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="font-bold text-white text-xs sm:text-sm">Authentic Guarantee</p>
                <p className="text-slate-400 text-xs">Full Shopify Buyer Protection</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl">
              <Bot className="w-5 h-5 text-purple-400 shrink-0" />
              <div className="text-left">
                <p className="font-bold text-white text-xs sm:text-sm">AI Shopping Intelligence</p>
                <p className="text-slate-400 text-xs">Tailored Real-time Matches</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
