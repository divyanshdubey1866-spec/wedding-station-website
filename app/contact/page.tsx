import SectionHeading from '../../components/SectionHeading';
import ContactForm from '../../components/ContactForm';

export default function Page(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="CONTACT">Get in touch</SectionHeading>

      <p className="mt-6 text-charcoal">Tell us about your plans — the date, approximate guest count, and a short note about your vision. We’ll respond within 48 hours to schedule a consultation.</p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
