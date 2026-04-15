'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  body: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hg-sage/40 border border-hg-sage/40 rounded-lg overflow-hidden bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-hg-sagelight"
              aria-expanded={open}
            >
              <span className="font-serif text-hg-darkgreen">{item.title}</span>
              <span className="text-hg-green text-lg leading-none">{open ? '−' : '+'}</span>
            </button>
            {open && (
              <div className="px-4 pb-4 text-sm leading-relaxed text-hg-darkgreen/90">
                {item.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
