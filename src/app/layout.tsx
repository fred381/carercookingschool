import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: "The Carer's Cookery Course",
  description:
    'An audio led cooking course for professional live in carers, by Hamilton George Care.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#004225',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-hg-cream text-hg-darkgreen text-base">
        <header className="bg-hg-green text-hg-cream">
          <div className="mx-auto max-w-5xl px-4 flex items-center justify-between gap-3 min-h-[60px]">
            <Link
              href="/"
              className="font-serif tracking-wide flex items-center min-h-[44px] py-2 pr-2 min-w-0"
            >
              <span className="text-base sm:hidden truncate">HG Cookery Course</span>
              <span className="hidden sm:inline text-lg md:text-xl">
                The Carer&apos;s Cookery Course
              </span>
            </Link>
            <nav className="flex items-center gap-1 shrink-0">
              <Link
                href="/"
                className="flex items-center min-h-[44px] px-3 text-base hover:text-hg-gold"
              >
                Home
              </Link>
              <Link
                href="/progress"
                className="flex items-center min-h-[44px] px-3 text-base hover:text-hg-gold"
              >
                Progress
              </Link>
            </nav>
          </div>
        </header>

        <main className="pb-36 md:pb-0">{children}</main>

        <footer className="bg-hg-darkgreen text-hg-cream">
          <div className="mx-auto max-w-5xl px-4 py-6 pb-28 md:pb-6 text-center text-sm">
            The Carer&apos;s Cookery Course · Hamilton George Care
          </div>
        </footer>
      </body>
    </html>
  );
}
