import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-hg-darkgreen mb-6">Privacy</h1>
      <p className="text-base leading-relaxed text-hg-darkgreen/90">
        We use Vercel Analytics to understand how the site is used. No personal data is
        collected. No cookies are used. We track aggregate page views and load times to
        help us improve the platform.
      </p>
    </div>
  );
}
