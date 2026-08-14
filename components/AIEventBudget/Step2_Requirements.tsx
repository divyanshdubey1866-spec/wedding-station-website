'use client';

import type { EventForm } from '../../types/ai';

const SERVICES = [
  'Venue',
  'Catering',
  'Decor',
  'Photography & Videography',
  'Entertainment',
  'Makeup',
  'Guest Hospitality',
  'Logistics',
  'Production/AV',
  'Miscellaneous',
];

export default function Step2({ form, setForm, next, back }: { form: EventForm; setForm: (f: EventForm) => void; next: () => void; back: () => void }) {
  function toggle(service: string) {
    const exists = form.requirements.includes(service);
    setForm({ ...form, requirements: exists ? form.requirements.filter(s=> s !== service) : [...form.requirements, service] });
  }

  return (
    <div>
      <p className="text-sm mb-4">Select the services you require. You can refine later.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SERVICES.map(s=> (
          <label key={s} className={`border rounded p-3 flex items-center gap-3 cursor-pointer ${form.requirements.includes(s) ? 'bg-warmIvory' : ''}`}>
            <input type="checkbox" checked={form.requirements.includes(s)} onChange={()=> toggle(s)} />
            <span className="text-sm">{s}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">Back</button>
        <button onClick={next} className="px-6 py-2 bg-warmChampagne text-white rounded">Continue</button>
      </div>
    </div>
  );
}
