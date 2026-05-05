import type { IddsiEntry } from '@/lib/cookbook';

export default function IddsiTable({ entries }: { entries: IddsiEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full min-w-[480px] sm:min-w-0 text-base border-collapse">
        <thead>
          <tr className="bg-hg-green text-hg-cream text-left">
            <th className="px-4 py-3 font-serif font-semibold w-20 sm:w-24">Level</th>
            <th className="px-4 py-3 font-serif font-semibold w-32 sm:w-40">Texture</th>
            <th className="px-4 py-3 font-serif font-semibold">Adaptation</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr
              key={entry.level}
              className={i % 2 === 0 ? 'bg-white' : 'bg-hg-sagelight'}
            >
              <td className="px-4 py-3 align-top">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-hg-green text-hg-cream font-serif font-bold text-lg">
                  {entry.level}
                </span>
              </td>
              <td className="px-4 py-3 align-top font-medium text-hg-darkgreen">
                {entry.texture}
              </td>
              <td className="px-4 py-3 align-top text-hg-darkgreen/90 leading-relaxed">
                {entry.adaptation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
