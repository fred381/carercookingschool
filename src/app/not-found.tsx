import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-20 text-center">
      <div className="text-xs uppercase tracking-widest text-hg-green mb-2">
        Not found
      </div>
      <h1 className="font-serif text-3xl md:text-4xl text-hg-darkgreen mb-4">
        We could not find that page
      </h1>
      <p className="text-base text-hg-darkgreen/80 mb-8">
        The recipe or chapter you asked for does not seem to exist.
      </p>
      <Link
        href="/cookbook"
        className="inline-flex items-center justify-center min-h-[52px] bg-hg-green text-hg-cream px-6 rounded-full text-base font-medium hover:bg-hg-darkgreen transition-colors"
      >
        Browse the cookbook
      </Link>
    </div>
  );
}
