import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { NAV } from '../lib/content';

export default function Header() {
  return (
    <header className="w-full border-b py-4" style={{ background: 'var(--white)', borderColor: 'rgba(214,179,106,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4" aria-label="Wedding Station home">
          <img src="/logo.png" alt="Wedding Station" width={160} height={48} className="object-contain" onError={(e:any)=>{ e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg'; }} />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Primary">
          {NAV.map((item)=> (
            <a key={item.href} href={item.href} className="text-charcoal hover:text-warm-champagne">{item.label.toUpperCase()}</a>
          ))}

          <a href="/contact" className="ml-6 inline-block px-5 py-2 border border-champagne-strong text-warm-champagne hover:bg-warmChampagne/90 transition" aria-label="Plan your wedding">PLAN YOUR WEDDING</a>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
