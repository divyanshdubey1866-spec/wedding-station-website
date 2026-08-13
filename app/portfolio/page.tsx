import SectionHeading from '../../components/SectionHeading';
import PortfolioGallery from '../../components/PortfolioGallery';

export default function Page(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="PORTFOLIO">Our portfolio</SectionHeading>

      <p className="mt-6 text-charcoal max-w-3xl">An editorial gallery showcasing weddings we have designed and produced. Each image represents a curated moment — from intimate portraits to ceremony details and reception productions.</p>

      <div className="mt-10">
        <PortfolioGallery />
      </div>
    </section>
  );
}
