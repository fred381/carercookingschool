import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "The Carer's Cookery Book",
    template: "%s | Carer's Cookery Book",
  },
  description:
    'Nourishing recipes for exceptional care, by Hamilton George Care. 99 recipes designed for professional carers cooking for older people.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#004225',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-hg-cream text-hg-darkgreen font-sans text-base">
        <header className="bg-hg-green text-hg-cream">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-between gap-3 min-h-[60px]">
            <Link
              href="/"
              className="flex items-center min-h-[44px] py-1.5 pr-2 min-w-0"
              aria-label="Hamilton George Care, home"
            >
              <Image
                src="/hgc-logo-green-bg.png"
                alt="Hamilton George Care"
                width={44}
                height={44}
                className="rounded-sm"
                priority
              />
            </Link>
            <nav className="flex items-center gap-0.5 shrink-0">
              <Link
                href="/cookbook"
                className="flex items-center min-h-[44px] px-2.5 sm:px-3 text-sm sm:text-base hover:text-hg-gold transition-colors"
              >
                Cookbook
              </Link>
              <Link
                href="/about"
                className="flex items-center min-h-[44px] px-2.5 sm:px-3 text-sm sm:text-base hover:text-hg-gold transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-hg-darkgreen text-hg-cream">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center gap-4 text-center text-sm">
            <Image
              src="/hgc-logo-transparent.png"
              alt="Hamilton George Care"
              width={100}
              height={100}
              className="opacity-40"
            />
            <p>The Carer&apos;s Cookery Book · Hamilton George Care</p>
            <Link href="/privacy" className="text-hg-cream/50 hover:text-hg-cream/80 transition-colors">
              Privacy
            </Link>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
