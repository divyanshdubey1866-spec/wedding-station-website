import type { ReactNode } from 'react';

export default function SectionHeading({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <header className="text-center">
      {eyebrow && <div className="text-sm text-beige tracking-widest">{eyebrow}</div>}
      <h2 className="mt-3 text-3xl md:text-4xl font-serif text-ivory">{children}</h2>
    </header>
  );
}
