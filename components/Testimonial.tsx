import Link from 'next/link';

export default function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="bg-warm-ivory p-6 border border-champagne-strong rounded">
      <p className="text-charcoal italic">“{quote}”</p>
      <footer className="mt-4 text-sm text-charcoal/80">— {author}</footer>
    </blockquote>
  );
}
