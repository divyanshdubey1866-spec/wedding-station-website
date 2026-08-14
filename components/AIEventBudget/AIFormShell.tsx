'use client';

import { useState } from 'react';
import Step1 from './Step1_EventDetails';
import Step2 from './Step2_Requirements';
import Step3 from './Step3_BudgetPreference';
import Step4 from './Step4_ReviewAndLeadCapture';

import type { EventForm } from '../../types/ai';

const initialForm: EventForm = {
  eventType: 'wedding',
  date: '',
  city: '',
  guestCount: 100,
  style: 'luxury',
  requirements: [],
  budgetPreference: 'balanced',
  additionalNotes: '',
  name: '',
  email: '',
  phone: '',
};

export default function AIFormShell() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<EventForm>(initialForm);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-warmChampagne flex items-center justify-center text-white">{step}</div>
          <h2 className="text-xl font-semibold">{step === 1 ? 'Event details' : step === 2 ? 'Requirements' : step === 3 ? 'Budget preference' : 'Review & contact'}</h2>
        </div>
      </div>

      <div className="min-h-[320px]">
        {step === 1 && <Step1 form={form} setForm={setForm} next={next} />}
        {step === 2 && <Step2 form={form} setForm={setForm} next={next} back={back} />}
        {step === 3 && <Step3 form={form} setForm={setForm} next={next} back={back} />}
        {step === 4 && <Step4 form={form} setForm={setForm} back={back} />}
      </div>

      <div className="mt-4 text-xs text-mutedBeige">We respect your privacy. Your details are only used to send the estimate.</div>
    </div>
  );
}
