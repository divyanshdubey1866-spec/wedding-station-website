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
        <div key={d} className="relative h-44 bg-black/50 rounded overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h4 className="text-xl font-semibold text-ivory">{d}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
