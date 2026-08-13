import SectionHeading from '../../components/SectionHeading';
import PortfolioGallery from '../../components/PortfolioGallery';

export default function PortfolioPage(){
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="PORTFOLIO">Selected Work</SectionHeading>
      <p className="mt-6 text-beige">An editorial selection of weddings, production and hospitality moments. Each photograph is chosen to reflect the tone and craft of our work.</p>
      <div className="mt-8"><PortfolioGallery /></div>
    </section>
  );
}
