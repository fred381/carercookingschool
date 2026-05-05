interface CarerTipCardProps {
  title: string;
  body: string;
  variant?: 'default' | 'warning';
}

export default function CarerTipCard({ title, body, variant = 'default' }: CarerTipCardProps) {
  const isWarning = variant === 'warning';

  return (
    <div
      className={
        isWarning
          ? 'rounded-lg border-2 border-hg-red bg-hg-redlight p-4 sm:p-5'
          : 'rounded-lg border border-hg-sage/50 bg-white p-4 sm:p-5'
      }
    >
      <div className="flex items-start gap-2 mb-2">
        {isWarning && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C46A6A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 mt-0.5"
            aria-hidden
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )}
        <h3
          className={
            'font-serif text-lg ' +
            (isWarning ? 'text-hg-red' : 'text-hg-darkgreen')
          }
        >
          {title}
        </h3>
      </div>
      <p className="text-base leading-relaxed text-hg-darkgreen/90">{body}</p>
    </div>
  );
}
