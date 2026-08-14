import BudgetResultCard from '../../../../components/AIEventBudget/BudgetResultCard';

interface Props {
  params: { id: string };
}

export default function ResultPage({ params }: Props) {
  const { id } = params;
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif font-semibold mb-4">Your Tentative Budget</h1>
      <p className="text-sm text-mutedBeige mb-6">This is an indicative estimate in INR (₹). For an exact proposal, please get in touch.</p>
      <BudgetResultCard id={id} />
    </section>
  );
}
