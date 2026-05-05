import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
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
              className="font-serif font-semibold tracking-wide flex items-center min-h-[44px] py-2 pr-2 min-w-0"
            >
              <span className="text-base sm:hidden truncate">HG Cookery Book</span>
              <span className="hidden sm:inline text-lg md:text-xl">
                The Carer&apos;s Cookery Book
              </span>
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
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
            The Carer&apos;s Cookery Book · Hamilton George Care
          </div>
        </footer>
      </body>
    </html>
  );
}
