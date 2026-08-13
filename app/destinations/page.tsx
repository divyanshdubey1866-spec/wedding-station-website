import SectionHeading from '../../components/SectionHeading';
import DestinationGrid from '../../components/DestinationGrid';

export default function DestinationsPage(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="DESTINATION WEDDINGS">Curated Destinations</SectionHeading>
      <p className="mt-6 text-beige">We specialise in destination celebrations across India's most iconic locales. From desert palaces to coastal retreats, we manage venue logistics, hospitality, travel and production.</p>
      <div className="mt-8"><DestinationGrid /></div>
    </section>
  );
}
