'use client';

import { ChangeEvent } from 'react';
import type { EventForm } from '../../types/ai';

export default function Step1({ form, setForm, next }: { form: EventForm; setForm: (f: EventForm) => void; next: () => void }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Event type</label>
          <select value={form.eventType} onChange={(e)=> setForm({ ...form, eventType: e.target.value })} className="mt-1 block w-full border p-2 rounded">
            <option value="wedding">Wedding</option>
            <option value="reception">Reception</option>
            <option value="engagement">Engagement</option>
            <option value="sangeet">Sangeet</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Event date</label>
          <input type="date" value={form.date} onChange={(e)=> setForm({ ...form, date: e.target.value })} className="mt-1 block w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">City / Location</label>
          <input type="text" value={form.city} onChange={(e)=> setForm({ ...form, city: e.target.value })} placeholder="e.g. Jaipur" className="mt-1 block w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Guest count</label>
          <input type="number" value={form.guestCount} onChange={(e)=> setForm({ ...form, guestCount: Number(e.target.value) })} className="mt-1 block w-full border p-2 rounded" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Wedding / Event style</label>
          <select value={form.style} onChange={(e)=> setForm({ ...form, style: e.target.value })} className="mt-1 block w-full border p-2 rounded">
            <option value="luxury">Luxury</option>
            <option value="premium">Premium</option>
            <option value="balanced">Balanced</option>
            <option value="economy">Economy</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Additional requirements / notes (optional)</label>
          <textarea value={form.additionalNotes} onChange={(e)=> setForm({ ...form, additionalNotes: e.target.value })} className="mt-1 block w-full border p-2 rounded" rows={3} />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={next} className="px-6 py-2 bg-warmChampagne text-white rounded">Continue</button>
      </div>
    </div>
  );
}
