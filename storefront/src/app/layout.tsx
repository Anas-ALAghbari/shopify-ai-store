import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OmniMarket AI — متجر إلكتروني عام ومساعد تسوق ذكي',
  description: 'متجر إلكتروني عام شامل لكل الأدوات والمستلزمات العصرية في التقنية والمنزل والسفر مع مساعد ذكاء اصطناعي تفاعلي ومربط عبر Shopify API.',
  keywords: ['OmniMarket AI', 'Shopify Store', 'AI Shopping Agent', 'Next.js 14', 'E-commerce'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
