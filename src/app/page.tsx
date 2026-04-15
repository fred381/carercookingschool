import Link from 'next/link';
import { course } from '@/data/course';

export default function HomePage() {
  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-3">
            Hamilton George Care presents
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
            The Carer&apos;s Cookery Course
          </h1>
          <p className="text-hg-cream/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            An audio led cooking course for professional live in carers. Six stages, built around
            gentle confidence at the stove and care for the person you cook for.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/stage/1"
              className="inline-block bg-hg-cream text-hg-green px-6 py-3 rounded-full font-medium hover:bg-hg-gold"
            >
              Start stage one
            </Link>
            <Link
              href="/progress"
              className="inline-block border border-hg-cream/40 text-hg-cream px-6 py-3 rounded-full font-medium hover:bg-hg-cream/10"
            >
              View progress
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl mb-6 text-hg-darkgreen">
          The six stages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {course.map((stage) => {
            const available = stage.recipes.length > 0;
            return (
              <Link
                key={stage.id}
                href={`/stage/${stage.id}`}
                className={
                  available
                    ? 'block bg-white border border-hg-sage/40 rounded-lg p-6 hover:border-hg-green transition-colors'
                    : 'block bg-hg-sagelight border border-hg-sage/40 rounded-lg p-6 hover:border-hg-sage transition-colors'
                }
              >
                <div className="text-xs text-hg-green/70 uppercase tracking-wider mb-2">
                  Stage {stage.id}
                </div>
                <h3 className="font-serif text-xl text-hg-darkgreen mb-2 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-sm text-hg-darkgreen/70 mb-4">
                  Core technique: {stage.coreTechnique}
                </p>
                <div className="text-sm font-medium text-hg-green">
                  {available ? `${stage.recipes.length} recipes` : 'Coming soon'}
                </div>
              </Link>
            );
          })}
        </div>

        <section className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-hg-darkgreen">
              About Margaret
            </h2>
            <p className="text-hg-darkgreen/90 leading-relaxed mb-3">
              Margaret has cooked for private households for over forty years. She trained in the
              English kitchen tradition and has spent the last two decades cooking for older
              people at home, including those living with dementia, low appetite, and the quiet
              work of recovery.
            </p>
            <p className="text-hg-darkgreen/90 leading-relaxed mb-3">
              She recorded this course for the carers at Hamilton George Care because she believes
              that a good plate of food, made with care, is one of the most powerful things a
              carer can offer. Every lesson is in her own voice, and you can listen while you
              work.
            </p>
            <p className="text-hg-darkgreen/90 leading-relaxed">
              You do not need a signed in account. Your progress is saved on this device.
            </p>
          </div>

          <div className="bg-hg-sagelight border-l-4 border-hg-green rounded-r-lg p-6">
            <h3 className="font-serif text-xl mb-3 text-hg-darkgreen">How the course works</h3>
            <ul className="space-y-3 text-sm text-hg-darkgreen/90">
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none">1.</span>
                <span>Open a recipe on your phone when you start cooking.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none">2.</span>
                <span>Press play on Margaret&apos;s audio. She walks you through each step.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none">3.</span>
                <span>Use the written method and the carer notes as you go.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none">4.</span>
                <span>Mark the recipe complete, and move on when you are ready.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
