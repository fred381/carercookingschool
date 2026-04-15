import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="text-xs uppercase tracking-widest text-hg-green mb-2">
        Not found
      </div>
      <h1 className="font-serif text-4xl text-hg-darkgreen mb-4">
        We could not find that page
      </h1>
      <p className="text-hg-darkgreen/80 mb-8">
        The recipe or stage you asked for is not in the course yet.
      </p>
      <Link
        href="/"
        className="inline-block bg-hg-green text-hg-cream px-6 py-3 rounded-full font-medium hover:bg-hg-darkgreen"
      >
        Back to the home page
      </Link>
    </div>
  );
}
