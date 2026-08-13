import SectionHeading from '../../components/SectionHeading';
import Testimonial from '../../components/Testimonial';

export default function Page(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="TESTIMONIALS">Kind words</SectionHeading>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial quote="Wedding Station made our wedding feel effortless — every moment was intentional and beautifully staged." author="Asha & Vikram — Udaipur" />
        <Testimonial quote="They understood the brief without us saying a word. From guest logistics to entertainment, everything was flawless." author="Rohit & Meera — Jaipur" />
        <Testimonial quote="The attention to detail and calm leadership on-site gave us peace of mind. A premium experience throughout." author="Sonal & Karan — Goa" />
      </div>

      <p className="mt-12 text-charcoal">For more references and full event case studies, please contact us — we’re happy to share curated samples tailored to your style and scale.</p>
    </section>
  );
}
