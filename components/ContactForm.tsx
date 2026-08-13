import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: any) {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.target);
    const body: any = {};
    form.forEach((v, k) => (body[k] = v));

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } });
      if (res.ok) {
        setStatus('sent');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="name" required placeholder="Name" className="p-3 bg-black/20 border border-black/20 rounded text-ivory" />
      <input name="email" required type="email" placeholder="Email" className="p-3 bg-black/20 border border-black/20 rounded text-ivory" />
      <input name="phone" required placeholder="Phone" className="p-3 bg-black/20 border border-black/20 rounded text-ivory" />
      <input name="date" type="date" placeholder="Wedding Date" className="p-3 bg-black/20 border border-black/20 rounded text-ivory" />
      <input name="location" placeholder="Wedding Location" className="p-3 bg-black/20 border border-black/20 rounded text-ivory" />
      <input name="guests" placeholder="Guest Count" className="p-3 bg-black/20 border border-black/20 rounded text-ivory" />
      <select name="budget" className="p-3 bg-black/20 border border-black/20 rounded text-ivory">
        <option value="">Estimated Budget</option>
        <option value="10-50L">₹10L - ₹50L</option>
        <option value="50L-1Cr">₹50L - ₹1Cr</option>
        <option value="1Cr-plus">₹1Cr+</option>
      </select>
      <select name="type" className="p-3 bg-black/20 border border-black/20 rounded text-ivory">
        <option value="">Wedding Type</option>
        <option>Traditional</option>
        <option>Destination</option>
        <option>Modern</option>
        <option>Multi-day</option>
      </select>

      <textarea name="message" placeholder="Tell us about your vision" className="md:col-span-2 p-3 bg-black/20 border border-black/20 rounded text-ivory h-32" />

      <div className="md:col-span-2 flex items-center justify-between">
        <button type="submit" className="px-6 py-3 bg-champagne text-brand-900 font-semibold">SUBMIT ENQUIRY</button>
        <div className="text-sm text-beige">{status === 'sent' ? 'Thank you — we will contact you shortly.' : status === 'error' ? 'Something went wrong.' : ''}</div>
      </div>
    </form>
  );
}
