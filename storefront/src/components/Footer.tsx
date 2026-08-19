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
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">OmniMarket AI</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              متجر إلكتروني عام شامل مجهز بأحدث تقنيات التجارة الإلكترونية ومساعد الذكاء الاصطناعي الذكي، مربوط برمجياً عبر Shopify Storefront API و GitHub.
            </p>
            <div className="flex items-center space-x-3 space-x-reverse pt-2">
              <a
                href="https://github.com/Anas-ALAghbari/shopify-ai-store"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 space-x-reverse bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs px-3.5 py-2 rounded-xl transition-all"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>المستودع في GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">أقسام المتجر العام</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-blue-400">التقنية والإلكترونيات الذكية</a></li>
              <li><a href="#" className="hover:text-blue-400">المنزل والمطبخ العصري</a></li>
              <li><a href="#" className="hover:text-blue-400">مستلزمات السفر والأدوات الجانبية</a></li>
              <li><a href="#" className="hover:text-blue-400">توصيات الذكاء الاصطناعي</a></li>
            </ul>
          </div>

          {/* Guarantee Badges */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">الربط والضمان</h4>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-2 text-xs">
              <div className="flex items-center space-x-2 space-x-reverse text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Shopify API & GitHub Verified</span>
              </div>
              <p className="text-[11px] text-slate-500">تم التأسيس والمربط التلقائي بواسطة AI Coding Agent</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 OmniMarket AI — جميع الحقوق محفوظة لـ Anas AL-Aghbari.</p>
          <div className="flex items-center space-x-1 space-x-reverse mt-4 sm:mt-0">
            <span>تم الإنجاز والبرمجة بـ</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>باستخدام Next.js & Shopify API</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
