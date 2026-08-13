import Image from 'next/image';

const items = [
  { title: 'Editorial Wedding', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1' },
  { title: 'Destination Wedding', src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde' },
  { title: 'Production', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
  { title: 'Decor', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' },
  { title: 'Hospitality', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },
  { title: 'Celebration', src: 'https://images.unsplash.com/photo-1505653751701-0d43d8b3aa43' }
];

export default function PortfolioGallery() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.title} className="relative h-64 bg-black/40 rounded overflow-hidden">
          <Image src={it.src + '?auto=format&fit=crop&w=1200&q=60'} fill alt={it.title} className="object-cover" />
          <div className="absolute bottom-4 left-4">
            <h4 className="text-2xl font-serif text-ivory">{it.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
