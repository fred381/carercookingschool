import Link from 'next/link';
import { course } from '@/data/course';

export default function HomePage() {
  return (
    <div>
      <section className="bg-hg-green text-hg-cream">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-20">
          <div className="text-xs uppercase tracking-widest text-hg-gold mb-3">
            Hamilton George Care presents
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 max-w-3xl break-words">
            The Carer&apos;s Cookery Course
          </h1>
          <p className="text-hg-cream/90 text-base md:text-xl max-w-2xl leading-relaxed">
            An audio led cooking course for professional live in carers. Six stages, built around
            gentle confidence at the stove and care for the person you cook for.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/stage/1"
              className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-hg-cream text-hg-green text-base font-medium hover:bg-hg-gold"
            >
              Start stage one
            </Link>
            <Link
              href="/progress"
              className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-full border border-hg-cream/40 text-hg-cream text-base font-medium hover:bg-hg-cream/10"
            >
              View progress
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-16">
        <h2 className="font-serif text-2xl md:text-3xl mb-5 text-hg-darkgreen">
          The six stages
        </h2>
        <ul className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-3">
          {course.map((stage) => {
            const available = stage.recipes.length > 0;
            return (
              <li key={stage.id}>
                <Link
                  href={`/stage/${stage.id}`}
                  className={
                    (available
                      ? 'bg-white border-hg-sage/40 hover:border-hg-green'
                      : 'bg-hg-sagelight border-hg-sage/40 hover:border-hg-sage') +
                    ' block h-full border rounded-lg p-5 md:p-6 min-h-[128px] active:bg-hg-sagelight transition-colors'
                  }
                >
                  <div className="text-xs text-hg-green/70 uppercase tracking-wider mb-2">
                    Stage {stage.id}
                  </div>
                  <h3 className="font-serif text-xl text-hg-darkgreen mb-2 leading-snug break-words">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-hg-darkgreen/70 mb-4">
                    Core technique: {stage.coreTechnique}
                  </p>
                  <div className="text-base font-medium text-hg-green">
                    {available ? `${stage.recipes.length} recipes` : 'Coming soon'}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <section className="mt-12 md:mt-20 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 md:items-start">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-hg-darkgreen">
              About Margaret
            </h2>
            <p className="text-base text-hg-darkgreen/90 leading-relaxed mb-3">
              Margaret has cooked for private households for over forty years. She trained in the
              English kitchen tradition and has spent the last two decades cooking for older
              people at home, including those living with dementia, low appetite, and the quiet
              work of recovery.
            </p>
            <p className="text-base text-hg-darkgreen/90 leading-relaxed mb-3">
              She recorded this course for the carers at Hamilton George Care because she believes
              that a good plate of food, made with care, is one of the most powerful things a
              carer can offer. Every lesson is in her own voice, and you can listen while you
              work.
            </p>
            <p className="text-base text-hg-darkgreen/90 leading-relaxed">
              You do not need a signed in account. Your progress is saved on this device.
            </p>
          </div>

          <div className="bg-hg-sagelight border-l-4 border-hg-green rounded-r-lg p-5 md:p-6">
            <h3 className="font-serif text-xl mb-3 text-hg-darkgreen">How the course works</h3>
            <ol className="space-y-3 text-base text-hg-darkgreen/90">
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none shrink-0">1.</span>
                <span>Open a recipe on your phone when you start cooking.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none shrink-0">2.</span>
                <span>Press play on Margaret&apos;s audio. She walks you through each step.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none shrink-0">3.</span>
                <span>Use the written method and the carer notes as you go.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-hg-green font-serif text-lg leading-none shrink-0">4.</span>
                <span>Mark the recipe complete, and move on when you are ready.</span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
