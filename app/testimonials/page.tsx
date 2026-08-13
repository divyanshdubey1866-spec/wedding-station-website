import SectionHeading from '../../components/SectionHeading';
import Testimonial from '../../components/Testimonial';

export default function TestimonialsPage(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="TESTIMONIALS">Client Stories</SectionHeading>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial quote="A flawlessly curated wedding that felt both intimate and grand." author="Neha & Arjun — Mumbai" />
        <Testimonial quote="Professional leadership, discreet problem solving and genuine care for our guests." author="Priya & Sameer — Delhi" />
        <Testimonial quote="They transformed the venue into an experience — guests still speak about it." author="Simran & Ajay — Jodhpur" />
      </div>
    </section>
  );
}
