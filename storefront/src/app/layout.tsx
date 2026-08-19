import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shopify AI-Powered E-Commerce Store & Shopping Agent',
  description: 'متجر إلكتروني احترافي متكامل مع مساعد تسوق ذكي مدعوم بالذكاء الاصطناعي ومربط عبر Shopify Storefront API و Next.js 14.',
  keywords: ['Shopify AI Store', 'AI Shopping Agent', 'E-Commerce AI OS', 'Next.js 14', 'TypeScript'],
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
