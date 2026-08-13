import { useState } from 'react';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/og-image.jpg')] bg-cover bg-center -z-10" />
      <div className="absolute inset-0 hero-overlay -z-5" />

      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-serif text-ivory">
          WE DON'T JUST PLAN WEDDINGS.
          <br />
          <span>WE <span className="text-champagne">CREATE LEGACIES.</span></span>
        </h1>
        <p className="mt-6 text-xl text-beige max-w-2xl mx-auto">Luxury wedding planning & management, thoughtfully orchestrated across India.</p>

        <div className="mt-10 flex items-center gap-6 justify-center">
          <a href="/contact" className="btn-primary">PLAN YOUR WEDDING</a>
          <a href="#portfolio" className="btn-secondary">EXPLORE OUR WORK</a>
        </div>

        {showScroll && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-beige animate-bounce">Scroll</div>
        )}
      </div>
    </section>
  );
}
