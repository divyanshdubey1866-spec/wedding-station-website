import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-softBlack text-beige py-12" style={{borderTop: '1px solid rgba(214,179,106,0.06)'}}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.png" alt="Wedding Station" className="w-40 object-contain" />
          <p className="mt-4 text-sm text-ivory">Luxury Wedding Planning & Management · Pan India</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-ivory">Navigation</h4>
          <ul className="space-y-2 text-sm text-beige">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-ivory">Contact</h4>
          <p className="text-sm">Email: <a href="mailto:hello@weddingstation.example" className="underline text-beige">hello@weddingstation.example</a></p>
          <p className="mt-2 text-sm">Phone: <a href="tel:+911234567890" className="underline text-beige">+91 12345 67890</a></p>
          <div className="mt-4 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-beige">Instagram</a>
            <a href="#" aria-label="Facebook" className="text-beige">Facebook</a>
            <a href="#" aria-label="LinkedIn" className="text-beige">LinkedIn</a>
            <a href="#" aria-label="WhatsApp" className="text-beige">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-beige">© {new Date().getFullYear()} Wedding Station — All rights reserved.</div>
    </footer>
  );
}
