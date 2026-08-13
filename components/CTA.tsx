import Link from 'next/link';
import type { ReactNode } from 'react';

export default function CTA({ children, href = '/contact' }: { children: ReactNode; href?: string }) {
  return (
    <Link href={href} className="btn-primary inline-block font-sans">
      {children}
    </Link>
  );
}
