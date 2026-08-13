export default function ServiceCard({ title }: { title: string }) {
  return (
    <article className="bg-black/30 p-6 rounded-md border border-black/20">
      <h3 className="font-semibold text-lg text-ivory">{title}</h3>
      <p className="mt-3 text-beige text-sm">Expertly conceived and executed. Tailored teams, white-glove service, and meticulous logistics.</p>
    </article>
  );
}
