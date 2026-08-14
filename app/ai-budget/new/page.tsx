import AIFormShell from '../../components/AIEventBudget/AIFormShell';

export default function NewAIBudgetPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif font-semibold mb-4">Start your free tentative estimate</h1>
      <p className="text-sm text-mutedBeige mb-6">Answer a few quick questions about your event — it only takes a couple minutes.</p>
      <AIFormShell />
    </section>
  );
}
