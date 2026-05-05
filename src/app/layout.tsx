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
    default: "The Carer's Cookery School",
    template: "%s | Carer's Cookery School",
  },
  description:
    'An audio led cooking course and interactive cookbook for professional live in carers, by Hamilton George Care.',
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
              <span className="text-base sm:hidden truncate">HG Cookery</span>
              <span className="hidden sm:inline text-lg md:text-xl">
                Carer&apos;s Cookery School
              </span>
            </Link>
            <nav className="flex items-center gap-0.5 shrink-0">
              <Link
                href="/stage/1"
                className="flex items-center min-h-[44px] px-2.5 sm:px-3 text-sm sm:text-base hover:text-hg-gold transition-colors"
              >
                Course
              </Link>
              <Link
                href="/cookbook"
                className="flex items-center min-h-[44px] px-2.5 sm:px-3 text-sm sm:text-base hover:text-hg-gold transition-colors"
              >
                Cookbook
              </Link>
              <Link
                href="/"
                className="flex items-center min-h-[44px] px-2.5 sm:px-3 text-sm sm:text-base hover:text-hg-gold transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="pb-36 md:pb-0">{children}</main>

        <footer className="bg-hg-darkgreen text-hg-cream">
          <div className="mx-auto max-w-6xl px-4 py-6 pb-28 md:pb-6 text-center text-sm">
            The Carer&apos;s Cookery School · Hamilton George Care
          </div>
        </footer>
      </body>
    </html>
  );
}
