import type { EventForm, BudgetResponse } from '../types/ai';

export function estimateBudget(event: EventForm): BudgetResponse {
  const guest = Math.max(1, event.guestCount || 100);
  const pref = event.budgetPreference || 'balanced';

  // base per-guest catering rates (INR)
  const perGuestCatering = pref === 'economy' ? 900 : pref === 'balanced' ? 3000 : 8000;
  const perGuestHospitality = pref === 'economy' ? 300 : pref === 'balanced' ? 700 : 1500;
  const photographyPerEvent = pref === 'economy' ? 50000 : pref === 'balanced' ? 150000 : 500000;
  const decorPerEvent = pref === 'economy' ? 50000 : pref === 'balanced' ? 200000 : 700000;
  const entertainmentPerEvent = pref === 'economy' ? 30000 : pref === 'balanced' ? 100000 : 400000;
  const makeupPerEvent = pref === 'economy' ? 8000 : pref === 'balanced' ? 20000 : 60000;
  const logisticsPerGuest = pref === 'economy' ? 50 : pref === 'balanced' ? 150 : 400;
  const productionPerEvent = pref === 'economy' ? 20000 : pref === 'balanced' ? 80000 : 250000;

  const breakdown = [] as any[];

  // Venue: approximate per-guest * factor
  const venue = Math.round(guest * (pref === 'luxury' ? 1200 : pref === 'balanced' ? 800 : 400));
  breakdown.push({ category: 'Venue', amount: venue, notes: `Estimated venue allocation` });

  const catering = Math.round(perGuestCatering * guest);
  breakdown.push({ category: 'Catering', amount: catering, notes: `Per guest × ${guest}` });

  breakdown.push({ category: 'Decor', amount: decorPerEvent, notes: 'Styling, florals and set design' });
  breakdown.push({ category: 'Photography & Videography', amount: photographyPerEvent, notes: 'Coverage and deliverables' });
  breakdown.push({ category: 'Entertainment', amount: entertainmentPerEvent, notes: 'Artists, DJs and performers' });
  breakdown.push({ category: 'Makeup', amount: makeupPerEvent, notes: 'Bridal & key members' });

  const guestHospitality = Math.round(perGuestHospitality * guest);
  breakdown.push({ category: 'Guest Hospitality', amount: guestHospitality, notes: 'Welcome gifts, guest meals & rooms (if applicable)' });

  const logistics = Math.round(logisticsPerGuest * guest);
  breakdown.push({ category: 'Logistics', amount: logistics, notes: 'Transfers and on-site coordination' });

  breakdown.push({ category: 'Production/AV', amount: productionPerEvent, notes: 'Stage, lighting & sound' });

  // Misc as contingency 10%
  const subtotal = breakdown.reduce((s, b) => s + b.amount, 0);
  const misc = Math.round(subtotal * 0.1);
  breakdown.push({ category: 'Miscellaneous', amount: misc, notes: 'Contingency & incidentals (approx 10%)' });

  const total = breakdown.reduce((s, b) => s + b.amount, 0);

  // Provide a min/max range +/- 12% depending on preference
  const variance = pref === 'economy' ? 0.12 : pref === 'balanced' ? 0.15 : 0.2;
  const min = Math.round(total * (1 - variance));
  const max = Math.round(total * (1 + variance));

  return {
    id: `local-${Date.now()}`,
    createdAt: new Date().toISOString(),
    budget: {
      currency: 'INR',
      total,
      min,
      max,
      breakdown,
      assumptions: `Estimates based on typical vendor rates for ${event.city || 'your city'} and a ${pref} budget preference. Final costs depend on vendor selection.`,
    },
    lead: null,
  };
}
