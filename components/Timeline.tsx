export default function Timeline({ steps }: { steps: string[] }) {
  return (
    <div className="mt-8">
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-6">
            <div className="w-12 h-12 flex items-center justify-center border border-champagne rounded-full text-champagne font-semibold">{i + 1}</div>
            <div>
              <h4 className="font-semibold text-ivory text-lg">{s}</h4>
              <p className="text-beige mt-2 max-w-2xl">We collaborate closely to translate your vision into a layered, memorable experience — every vendor, timeline and guest moment considered.</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
