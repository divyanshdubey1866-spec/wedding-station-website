import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Timeline from '../components/Timeline';
import DestinationGrid from '../components/DestinationGrid';
import PortfolioGallery from '../components/PortfolioGallery';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

export default function Page() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="THE ART OF CELEBRATION">How we craft each moment</SectionHeading>
        <p className="mt-6 text-lg text-beige leading-relaxed max-w-3xl">
          At Wedding Station we manage the complete wedding experience — from the first whispered idea to the final farewell.
          Our process weaves editorial storytelling, hospitality-led service, and faultless execution so every celebration is
          singular.
        </p>
      </section>

      <section className="bg-black/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="SERVICES">What we do</SectionHeading>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Luxury Wedding Planning',
              'Wedding Management',
              'Destination Weddings',
              'Hospitality & Guest Experience',
              'Wedding Production',
              'Decor & Design Supervision',
              'Entertainment Curation',
              'RSVP & Guest Management',
              'Vendor & Venue Coordination'
            ].map((s) => (
              <ServiceCard key={s} title={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="FROM FIRST IDEA TO FINAL FAREWELL">Our process</SectionHeading>
        <Timeline steps={[ 'Discover', 'Design', 'Plan', 'Coordinate', 'Execute', 'Celebrate' ]} />
      </section>

      <section className="bg-black/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="DESTINATION WEDDINGS">Pan India destinations</SectionHeading>
          <DestinationGrid />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="PORTFOLIO">An editorial gallery</SectionHeading>
        <PortfolioGallery />
      </section>

      <section className="bg-black/40 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-ivory">One team. One vision. Every detail managed.</h3>
          <p className="mt-6 text-beige">Pan India execution · End-to-end management · 24×7 support · Premium vendor network</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="TESTIMONIALS">Kind words from our clients</SectionHeading>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            quote="Wedding Station made our wedding feel effortless — every moment was intentional and beautifully staged."
            author="Asha & Vikram — Udaipur"
          />
          <Testimonial
            quote="They understood the brief without us saying a word. From guest logistics to entertainment, everything was flawless."
            author="Rohit & Meera — Jaipur"
          />
          <Testimonial
            quote="The attention to detail and calm leadership on-site gave us peace of mind. A premium experience throughout."
            author="Sonal & Karan — Goa"
          />
        </div>
      </section>

      <section className="relative bg-[url('/og-image.jpg')] bg-cover bg-center py-28 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center bg-black/40 backdrop-blur-sm py-20 rounded">
          <h2 className="text-4xl md:text-5xl font-serif text-ivory">YOUR WEDDING DESERVES MORE THAN A CHECKLIST.</h2>
          <p className="mt-6 text-beige">Let’s create something unforgettable — a celebration that endures.</p>
          <div className="mt-10">
            <CTA href="/contact">START YOUR WEDDING JOURNEY</CTA>
          </div>
        </div>
      </section>
    </>
  );
}
