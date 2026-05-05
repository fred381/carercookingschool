import Image from 'next/image';
import Link from 'next/link';
import { meta } from '@/lib/cookbook';

export default function HomePage() {
  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
          <Image
            src="/hgc-logo-green-bg.png"
            alt="Hamilton George Care"
            width={120}
            height={120}
            className="rounded-md mb-6"
            priority
          />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 max-w-3xl">
            {meta.title}
          </h1>
          <p className="text-hg-cream/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-2">
            {meta.subtitle}
          </p>
          <p className="text-hg-cream/70 text-base max-w-2xl leading-relaxed">
            {meta.recipe_count} recipes written for professional carers cooking for older people.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/cookbook"
              className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-hg-cream text-hg-green text-base font-medium hover:bg-hg-gold transition-colors"
            >
              Browse the cookbook
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full border border-hg-cream/40 text-hg-cream text-base font-medium hover:bg-hg-cream/10 transition-colors"
            >
              Read the foreword
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <section className="max-w-3xl">
          <blockquote className="border-l-4 border-hg-green pl-5 md:pl-6">
            <p className="text-lg md:text-xl leading-relaxed text-hg-darkgreen/90 font-serif italic">
              Cooking is one of the most intimate things a carer can do for a client.
              You are entering their home, using their kitchen, feeding them from memory
              and instinct. At its best, it is an act of love.
            </p>
          </blockquote>
          <p className="mt-4 text-base text-hg-darkgreen/70">
            Fred Lloyd George, co-founder, Hamilton George Care
          </p>
        </section>
      </div>
    </div>
  );
}
