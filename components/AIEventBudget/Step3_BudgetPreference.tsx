'use client';

import type { EventForm } from '../../types/ai';

export default function Step3({ form, setForm, next, back }: { form: EventForm; setForm: (f: EventForm) => void; next: () => void; back: () => void }) {
  return (
    <div>
      <p className="text-sm mb-4">Choose a budget preference. This helps us scale estimates to your expectations.</p>
      <div className="space-y-3">
        <label className={`block border p-3 rounded ${form.budgetPreference === 'economy' ? 'bg-warmIvory' : ''}`}>
          <input type="radio" name="pref" checked={form.budgetPreference === 'economy'} onChange={()=> setForm({ ...form, budgetPreference: 'economy' })} /> <span className="ml-2 font-medium">Economy — cost-conscious</span>
          <div className="text-xs text-mutedBeige mt-1">Smart choices and smaller scale. Good for intimate events.</div>
        </label>

        <label className={`block border p-3 rounded ${form.budgetPreference === 'balanced' ? 'bg-warmIvory' : ''}`}>
          <input type="radio" name="pref" checked={form.budgetPreference === 'balanced'} onChange={()=> setForm({ ...form, budgetPreference: 'balanced' })} /> <span className="ml-2 font-medium">Balanced — value & quality</span>
          <div className="text-xs text-mutedBeige mt-1">A considered mix of premium and value choices.</div>
        </label>

        <label className={`block border p-3 rounded ${form.budgetPreference === 'luxury' ? 'bg-warmIvory' : ''}`}>
          <input type="radio" name="pref" checked={form.budgetPreference === 'luxury'} onChange={()=> setForm({ ...form, budgetPreference: 'luxury' })} /> <span className="ml-2 font-medium">Luxury — premium experience</span>
          <div className="text-xs text-mutedBeige mt-1">High-end vendors, fine-dining and elevated production.</div>
        </label>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">Back</button>
        <button onClick={next} className="px-6 py-2 bg-warmChampagne text-white rounded">Continue</button>
      </div>
    </div>
  );
}
