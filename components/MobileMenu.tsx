import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center w-10 h-10 border border-champagne rounded"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-beige">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-softBlack text-ivory p-6">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="w-36" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-beige">Close</button>
          </div>

          <nav className="mt-12 flex flex-col gap-6 text-2xl">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/destinations">Destinations</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/experience">Experience</a>
            <a href="/contact">Contact</a>
            <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-warmChampagne text-deepBlack font-semibold">Plan your wedding</a>
          </nav>
        </div>
      )}
    </div>
  );
}
