import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: "The Carer's Cookery Course",
  description:
    'An audio led cooking course for professional live in carers, by Hamilton George Care.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-hg-cream text-hg-darkgreen">
        <header className="bg-hg-green text-hg-cream">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-serif text-lg sm:text-xl tracking-wide">
              The Carer&apos;s Cookery Course
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-hg-gold">
                Home
              </Link>
              <Link href="/progress" className="hover:text-hg-gold">
                Progress
              </Link>
            </nav>
          </div>
        </header>

        <main className="pb-32">{children}</main>

        <footer className="bg-hg-darkgreen text-hg-cream">
          <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm">
            The Carer&apos;s Cookery Course · Hamilton George Care
          </div>
        </footer>
      </body>
    </html>
  );
}
