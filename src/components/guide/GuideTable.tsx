export default function GuideTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0 my-4">
      <table className="w-full min-w-[480px] sm:min-w-0 text-base border-collapse">
        <thead>
          <tr className="bg-hg-green text-hg-cream text-left">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-serif font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-hg-sagelight'}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={
                    'px-4 py-3 align-top text-hg-darkgreen/90 leading-relaxed' +
                    (j === 0 ? ' font-medium text-hg-darkgreen' : '')
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
