import type { GuideSection } from '@/lib/guide';
import GuideCallout from './GuideCallout';
import GuideTable from './GuideTable';

export default function GuideSectionRenderer({ section }: { section: GuideSection }) {
  return (
    <div className="space-y-4">
      {section.heading && (
        <h2 className="font-serif text-2xl text-hg-darkgreen mt-8 mb-2">
          {section.heading}
        </h2>
      )}

      {section.body?.map((p, i) => (
        <p key={i} className="text-base leading-relaxed text-hg-darkgreen/90">
          {p}
        </p>
      ))}

      {section.callout && (
        <GuideCallout title={section.callout.title}>
          {section.callout.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </GuideCallout>
      )}

      {section.bullets && (
        <ul className="space-y-2 pl-1">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed text-hg-darkgreen/90">
              <span className="text-hg-green shrink-0 mt-1.5" aria-hidden>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <GuideTable headers={section.table.headers} rows={section.table.rows} />
      )}
    </div>
  );
}
