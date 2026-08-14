export type EventForm = {
  eventType: string;
  date: string;
  city: string;
  guestCount: number;
  style: string;
  requirements: string[];
  budgetPreference: string;
  additionalNotes?: string;
  name?: string;
  email?: string;
  phone?: string;
};

export type BudgetBreakdownItem = {
  category: string;
  amount: number;
  notes?: string;
};

export type Budget = {
  currency: string;
  total: number;
  min: number;
  max: number;
  breakdown: BudgetBreakdownItem[];
  assumptions: string;
};

export type BudgetResponse = {
  id: string;
  createdAt: string;
  budget: Budget;
  lead?: { name?: string; email?: string; phone?: string } | null;
};
