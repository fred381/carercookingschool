import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foreword',
  description: 'A foreword from Fred Lloyd George, co-founder of Hamilton George Care.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <p className="text-xs uppercase tracking-widest text-hg-gold mb-2">
            Hamilton George Care
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Foreword
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 md:py-14">
        <article className="space-y-6 text-base md:text-lg leading-relaxed text-hg-darkgreen/90">
          <p>
            When I started Hamilton George Care, I was struck again and again by how much
            a good meal matters. Not just for nutrition, though that is vital. But for
            dignity. For joy. For the quiet feeling that someone has taken care over you.
          </p>

          <p>
            Cooking is one of the most intimate things a carer can do for a client. You
            are entering their home, using their kitchen, feeding them from memory and
            instinct. At its best, it is an act of love. A shepherd&apos;s pie that smells
            the way their mother&apos;s did. A bowl of rice pudding on a grey afternoon.
            A proper breakfast with the newspapers. These things matter enormously.
          </p>

          <p>
            Our clients are people who have lived full, rich lives. Many have eaten well,
            cooked with care, and taken pleasure in food. As they age and need support,
            that relationship with food should not diminish. It should be protected, and
            where possible, deepened.
          </p>

          <p>
            This book was born from a simple belief: that our carers deserve proper
            culinary training, and that our clients deserve food made with real skill and
            understanding. Not institutional food. Not shortcuts. Real cooking, made with
            thought and care.
          </p>

          <p>
            We have drawn on the traditions of the great British cookery schools in
            putting this together, and we have worked carefully to connect every recipe
            to the health needs of the people being cared for. You will find guidance on
            nutrition, texture adaptation, dementia-sensitive cooking, and the art of
            making food feel like an occasion, because for many of our clients, mealtimes
            are among the most important moments of their day.
          </p>

          <p>
            I hope this book becomes something you return to often. Something you feel
            proud to cook from. And I hope that the people you care for taste the
            difference.
          </p>

          <footer className="pt-4 border-t border-hg-sage/40">
            <p className="font-serif text-xl text-hg-darkgreen">Fred Lloyd George</p>
            <p className="text-base text-hg-darkgreen/70">
              Co-founder, Hamilton George Care
            </p>
            <p className="text-sm text-hg-darkgreen/60">London</p>
          </footer>
        </article>

        <div className="mt-10 pt-6 border-t border-hg-sage/40">
          <Link
            href="/cookbook"
            className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-hg-green text-hg-cream text-base font-medium hover:bg-hg-darkgreen transition-colors"
          >
            Browse the cookbook
          </Link>
        </div>
      </div>
    </div>
  );
}
