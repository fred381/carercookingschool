import { tagColours, type TagKey } from '@/types/course';

const defaultColour = { bg: '#EEF4ED', text: '#002D18' };

export default function TagPill({ label }: { label: string }) {
  const colour =
    (tagColours as Record<string, { bg: string; text: string }>)[label] ?? defaultColour;
  return (
    <span
      className="inline-block text-xs font-medium px-3 py-1 rounded-full"
      style={{ backgroundColor: colour.bg, color: colour.text }}
    >
      {label}
    </span>
  );
}
