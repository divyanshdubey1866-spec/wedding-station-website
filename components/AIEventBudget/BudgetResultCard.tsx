'use client';

import { useEffect, useState } from 'react';
import type { BudgetResponse } from '../../types/ai';

export default function BudgetResultCard({ id }: { id: string }) {
  const [data, setData] = useState<BudgetResponse | null>(null);

  useEffect(()=> {
    const key = `ai_budget_results_${id}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        setData(JSON.parse(raw));
      } catch (e) {
        setData(null);
      }
    }
  }, [id]);

  if (!data) {
    return <div className="border p-6 rounded">No estimate found. Please run a new estimate.</div>;
  }

  const { budget } = data;

  return (
    <div className="border rounded p-6 bg-white">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Total Estimated Budget</h3>
        <div className="text-3xl font-serif mt-2">₹{budget.total.toLocaleString()}</div>
        <div className="text-sm text-mutedBeige mt-1">Range: ₹{budget.min.toLocaleString()} — ₹{budget.max.toLocaleString()}</div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Category-wise breakdown</h4>
        <ul className="space-y-2">
          {budget.breakdown.map((b: any)=> (
            <li key={b.category} className="flex justify-between border-b pb-2">
              <div>
                <div className="font-medium">{b.category}</div>
                <div className="text-xs text-mutedBeige">{b.notes}</div>
              </div>
              <div className="font-medium">₹{b.amount.toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Assumptions</h4>
        <p className="text-sm text-mutedBeige">{budget.assumptions}</p>
      </div>

      <div className="mt-6 text-sm text-mutedBeige">Disclaimer: This is an indicative estimate to help with planning. It is not a firm quotation. Final costs depend on vendor selection and scope.</div>

      <div className="mt-6 flex items-center gap-4">
        <a href="/contact" className="px-4 py-2 border rounded">Contact Wedding Station</a>
        <a href="/ai-budget/new" className="px-4 py-2 bg-warmChampagne text-white rounded">Start another estimate</a>
      </div>
    </div>
  );
}
