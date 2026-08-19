'use client';

import React from 'react';
import { Sparkles, Code2, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">Shopify AI Store</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Shopify AI-Powered E-Commerce Store & Shopping Agent — A production-grade commercial e-commerce engine integrated with autonomous Multi-Agent recommendation tools and Shopify Storefront API.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/Anas-ALAghbari/shopify-ai-store"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs px-3.5 py-2 rounded-xl transition-all"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-al-aghbari-71070440a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs px-3.5 py-2 rounded-xl transition-all"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Store Categories</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-blue-400">Smart Tech & Electronics</a></li>
              <li><a href="#" className="hover:text-blue-400">Home & Living Essentials</a></li>
              <li><a href="#" className="hover:text-blue-400">Travel & Lifestyle Gear</a></li>
              <li><a href="#" className="hover:text-blue-400">AI Shopping Recommendations</a></li>
            </ul>
          </div>

          {/* Guarantee Badges */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Verification</h4>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Shopify API & GitHub Verified</span>
              </div>
              <p className="text-[11px] text-slate-500">Architected & Engineered by Anas AL-Aghbari</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 Shopify AI-Powered E-Commerce Store & Shopping Agent. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-4 sm:mt-0">
            <span>Built with ❤️ using Next.js 14 & Shopify Storefront API</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
