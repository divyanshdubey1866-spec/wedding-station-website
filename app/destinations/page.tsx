import SectionHeading from '../../components/SectionHeading';
import DestinationGrid from '../../components/DestinationGrid';

export default function Page(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="DESTINATIONS">Destinations</SectionHeading>

      <p className="mt-6 text-charcoal max-w-3xl">We plan and execute destination weddings across India — from palaces and forts to beaches and modern resorts. Below are a selection of regions where we operate frequently.</p>

      <div className="mt-10">
        <DestinationGrid />
      </div>
    </section>
  );
}
