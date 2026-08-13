import SectionHeading from '../../components/SectionHeading';

export default function AboutPage(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="ABOUT">Wedding Station</SectionHeading>
      <p className="mt-6 text-beige">Wedding Station is a Pan India luxury wedding planning and management company. We specialise in creating cinematic, guest-centric celebrations that combine editorial design with logistical precision. Our clients entrust us with the entire journey — from creative concept and vendor curation to on-site leadership and guest hospitality.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-ivory">Philosophy</h4>
          <p className="text-beige mt-2">Every wedding is a story. We translate your story into a layered experience — sensory, emotional and memorable.</p>
        </div>
        <div>
          <h4 className="font-semibold text-ivory">Approach</h4>
          <p className="text-beige mt-2">Editorial design, meticulous production and a hospitality-first mindset. We plan for how each guest will feel, move and remember.</p>
        </div>
        <div>
          <h4 className="font-semibold text-ivory">Coverage</h4>
          <p className="text-beige mt-2">Pan India — including Rajasthan, Goa, Udaipur, Jaipur, Jodhpur, Delhi NCR, Mumbai and beyond.</p>
        </div>
      </div>
    </section>
  );
}
