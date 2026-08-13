import Link from 'next/link';

export default function CTA({ children, href = '/contact' }: { children: React.ReactNode; href?: string }) {
  return (
    <Link href={href} className="inline-block px-7 py-3 bg-champagne text-brand-900 font-semibold hover:opacity-95 transition rounded">
      {children}
    </Link>
  );
}
