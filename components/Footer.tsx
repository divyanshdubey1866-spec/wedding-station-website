import Link from 'next/link';
import { CONTACT, NAV } from '../lib/content';

export default function Footer() {
  return (
    <footer className="bg-warm-ivory text-charcoal py-12" style={{ borderTop: '1px solid rgba(214,179,106,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.png" alt="Wedding Station" className="w-40 object-contain" />
          <p className="mt-4 text-sm text-charcoal">Luxury Wedding Planning & Management · Pan India</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">Navigation</h4>
          <ul className="space-y-2 text-sm text-charcoal">
            {NAV.filter(n=> n.href !== '/').map(n=> (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">Contact</h4>
          <p className="text-sm">Email: <a href={`mailto:${CONTACT.email}`} className="underline text-charcoal">{CONTACT.email}</a></p>
          <p className="mt-2 text-sm">Phone: <a href={`tel:${CONTACT.phone}`} className="underline text-charcoal">{CONTACT.phone}</a></p>
          <div className="mt-4 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-charcoal">Instagram</a>
            <a href="#" aria-label="Facebook" className="text-charcoal">Facebook</a>
            <a href="#" aria-label="LinkedIn" className="text-charcoal">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-charcoal">© {new Date().getFullYear()} Wedding Station — All rights reserved.</div>
    </footer>
  );
}
