import SectionHeading from '../../components/SectionHeading';
import ContactForm from '../../components/ContactForm';

export default function ContactPage(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="PLAN YOUR WEDDING">Contact & Enquiry</SectionHeading>
      <p className="mt-6 text-beige">Share your details and one of our senior planners will contact you to craft your bespoke celebration.</p>

      <div className="mt-10 bg-black/30 p-8 rounded">
        <ContactForm />
      </div>

      <div className="mt-8 text-sm text-beige">
        <p>WhatsApp: <a href="https://wa.me/911234567890" className="underline">+91 12345 67890</a></p>
        <p className="mt-2">Email: <a href="mailto:hello@weddingstation.example" className="underline">hello@weddingstation.example</a></p>
      </div>
    </section>
  );
}
