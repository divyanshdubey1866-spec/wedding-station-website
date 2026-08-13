import SectionHeading from '../../components/SectionHeading';

export default function Page(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="ABOUT">About Wedding Station</SectionHeading>

      <div className="mt-8 prose prose-lg text-charcoal">
        <p>
          Wedding Station is a luxury wedding planning and management atelier. We craft editorial-led celebrations with a hospitality-first approach — designing every detail to reflect each couple’s story.
        </p>

        <p>
          Our team blends creative direction, logistics mastery and an unrivalled vendor network to create destination celebrations across India. From intimate heritage ceremonies to multi-day productions, we deliver seamless experiences rooted in calm leadership and elevated taste.
        </p>

        <h3>Our approach</h3>
        <ul>
          <li>Editorial storytelling & creative direction</li>
          <li>Ground-level logistics & on-site leadership</li>
          <li>Curated vendor network & hospitality management</li>
        </ul>

        <p className="mt-6">
          <a href="/contact" className="btn-primary">Begin your journey</a>
        </p>
      </div>
    </section>
  );
}
