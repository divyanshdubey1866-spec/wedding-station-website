import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="w-full border-b border-black/20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Wedding Station" width={160} height={48} className="object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/about" className="text-beige hover:text-ivory">ABOUT</a>
          <a href="/services" className="text-beige hover:text-ivory">SERVICES</a>
          <a href="/destinations" className="text-beige hover:text-ivory">DESTINATIONS</a>
          <a href="/portfolio" className="text-beige hover:text-ivory">PORTFOLIO</a>
          <a href="/experience" className="text-beige hover:text-ivory">EXPERIENCE</a>
          <a href="/contact" className="text-beige hover:text-ivory">CONTACT</a>
          <a href="/contact" className="ml-6 inline-block px-5 py-2 border border-champagne text-champagne hover:bg-champagne hover:text-brand-900 transition">PLAN YOUR WEDDING</a>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
