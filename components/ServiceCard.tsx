export default function ServiceCard({ title }: { title: string }) {
  return (
    <article className="p-6 rounded-md" style={{border: '1px solid rgba(214,179,106,0.06)'}}>
      <h3 className="font-semibold text-lg text-charcoal">{title}</h3>
      <p className="mt-3 text-muted text-sm text-charcoal/80">Expertly conceived and executed. Tailored teams, white‑glove service and meticulous logistics.</p>
    </article>
  );
}
