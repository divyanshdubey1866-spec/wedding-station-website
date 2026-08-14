'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { EventForm } from '../../types/ai';
import ProgressSpinner from './ProgressSpinner';

export default function Step4({ form, setForm, back }: { form: EventForm; setForm: (f: EventForm) => void; back: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function submit() {
    setError(null);
    if (!form.name || !form.email) {
      setError('Please provide your name and email to receive the estimate.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/ai/budget/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: form, lead: { name: form.name, email: form.email, phone: form.phone } }),
      });
      const data = await res.json();
      // save result locally for the result page
      const key = `ai_budget_results_${data.id}`;
      localStorage.setItem(key, JSON.stringify(data));
      router.push(`/ai-budget/result/${data.id}`);
    } catch (e: any) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={form.name} onChange={(e)=> setForm({ ...form, name: e.target.value })} className="mt-1 block w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input value={form.phone} onChange={(e)=> setForm({ ...form, phone: e.target.value })} className="mt-1 block w-full border p-2 rounded" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Email</label>
          <input value={form.email} onChange={(e)=> setForm({ ...form, email: e.target.value })} className="mt-1 block w-full border p-2 rounded" />
        </div>
      </div>

      {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

      <div className="mt-6 flex items-center justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">Back</button>
        <div>
          <button onClick={submit} className="px-6 py-2 bg-warmChampagne text-white rounded flex items-center gap-3">
            {loading ? <ProgressSpinner /> : null}
            Generate My Tentative Budget
          </button>
        </div>
      </div>

      <div className="mt-4 text-xs text-mutedBeige">By requesting this estimate you agree to be contacted by Wedding Station for planning and follow-up.</div>
    </div>
  );
}
