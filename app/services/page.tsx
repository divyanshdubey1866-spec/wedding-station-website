import SectionHeading from '../../components/SectionHeading';
import ServiceCard from '../../components/ServiceCard';

export default function ServicesPage(){
  const services = [
    'Luxury Wedding Planning',
    'Wedding Management',
    'Destination Weddings',
    'Hospitality & Guest Experience',
    'Wedding Production',
    'Decor & Design Supervision',
    'Entertainment Curation',
    'RSVP & Guest Management',
    'Vendor & Venue Coordination'
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="SERVICES">Our Services</SectionHeading>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(s => <ServiceCard key={s} title={s} />)}
      </div>
    </section>
  );
}
