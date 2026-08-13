import SectionHeading from '../../components/SectionHeading';
import { PROCESS_STEPS } from '../../lib/content';

export default function Page(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="PROCESS">Our process</SectionHeading>

      <p className="mt-6 text-charcoal max-w-3xl">Our approach blends editorial design with hospitality-led planning and rigorous production. We manage creative direction, vendor coordination, guest experience and on-site leadership so you can focus on the celebration.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROCESS_STEPS.map((s, i) => (
          <div key={s} className="bg-warm-ivory p-6 rounded card-rounded">
            <div className="text-3xl font-serif text-charcoal">{String(i+1).padStart(2, '0')}</div>
            <h4 className="mt-4 font-semibold text-charcoal">{s}</h4>
            <p className="mt-2 text-sm text-charcoal/80">We progress with a disciplined timeline and clear milestones to keep every production detail aligned and on schedule.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
