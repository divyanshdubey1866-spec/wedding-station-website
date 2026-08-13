const destinations = [
  'Rajasthan',
  'Goa',
  'Udaipur',
  'Jaipur',
  'Jodhpur',
  'Delhi NCR',
  'Mumbai',
  'Indore',
  'Pan India'
];

export default function DestinationGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {destinations.map((d) => (
        <div key={d} className="relative h-44 bg-warm-ivory rounded overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true" />
          <div className="absolute bottom-4 left-4">
            <h4 className="text-xl font-semibold text-charcoal">{d}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
