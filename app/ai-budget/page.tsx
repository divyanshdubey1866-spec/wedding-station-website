import Link from 'next/link';

export default function AIBudgetLanding() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">AI Event Budget — Free Tentative Estimate</h1>
        <p className="text-lg text-mutedBeige mb-8">Get a quick, indicative event budget tailored for Indian weddings and events. Enter a few details and receive a category-wise tentative estimate in INR (₹).</p>
        <Link href="/ai-budget/new" className="inline-block px-8 py-3 border border-warmChampagne text-warmChampagne hover:bg-warmChampagne/90 transition rounded-md">Start Free Estimate</Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-warmIvory p-6 rounded">
          <h3 className="font-semibold mb-2">How it works</h3>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li>Provide basic event details</li>
            <li>Select required services and budget preference</li>
            <li>Share your contact details</li>
            <li>Receive a tentative budget in INR</li>
          </ol>
        </div>
        <div className="bg-warmIvory p-6 rounded">
          <h3 className="font-semibold mb-2">Why use this</h3>
          <p className="text-sm">A quick, premium estimate to help you plan and scope conversations with vendors. This is an indicative figure — for an exact proposal, contact Wedding Station.</p>
        </div>
        <div className="bg-warmIvory p-6 rounded">
          <h3 className="font-semibold mb-2">Privacy</h3>
          <p className="text-sm">We only use the contact details you provide to send your estimate and follow up. No spam — ever.</p>
        </div>
      </div>
    </section>
  );
}
