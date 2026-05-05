const TAG_COLOURS: Record<string, { bg: string; text: string }> = {
  'Heart health': { bg: '#FCEBEB', text: '#791F1F' },
  'Dementia': { bg: '#EEF4ED', text: '#002D18' },
  'Bone health': { bg: '#FAEEDA', text: '#633806' },
  'Diabetes': { bg: '#E6F1FB', text: '#0C447C' },
  'Appetite/nutrition': { bg: '#F7F2D9', text: '#004225' },
  "Parkinson's": { bg: '#EEE7F5', text: '#3E2063' },
  'Dysphagia': { bg: '#E5F0EE', text: '#08423A' },
  'COPD': { bg: '#EAF0F5', text: '#1F3B52' },
  'Cancer support': { bg: '#F5EBEF', text: '#5C1B3A' },
  'Kidney friendly': { bg: '#EAF2E3', text: '#2E4A14' },
};

const DEFAULT = { bg: '#EEF4ED', text: '#002D18' };

export default function ConditionTag({ label }: { label: string }) {
  const c = TAG_COLOURS[label] ?? DEFAULT;
  return (
    <span
      className="inline-block text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {label}
    </span>
  );
}
