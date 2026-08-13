export default function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="bg-black/30 p-6 border border-black/20 rounded">
      <p className="text-beige italic">“{quote}”</p>
      <footer className="mt-4 text-sm text-ivory">— {author}</footer>
    </blockquote>
  );
}
