export type NavItem = { label: string; href: string };

export const SITE = {
  title: 'Wedding Station',
  description:
    'Wedding Station is a luxury wedding planning and management company creating extraordinary weddings and destination celebrations across India. We combine editorial storytelling, five-star hospitality and meticulous production to create unforgettable events.',
  url: 'https://wedding-station.example',
  logo: '/logo.png',
};

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  'Luxury Wedding Planning',
  'On-site Wedding Management',
  'Destination Weddings',
  'Hospitality & Guest Experience',
  'Production & Technical Management',
  'Design Direction & Styling',
  'Entertainment Curation',
  'RSVP & Guest Logistics',
  'Vendor & Venue Coordination',
];

export const PROCESS_STEPS = [
  'Initial Consultation',
  'Concept & Design',
  'Planning & Budgeting',
  'Vendor Selection',
  'On-site Coordination',
  'Execution & Handover',
];

export const PORTFOLIO = [
  { id: 'p1', title: 'Riverside Vows', image: '/assets/portfolio-1.svg', alt: 'Couple by the river' },
  { id: 'p2', title: 'Heritage Reception', image: '/assets/portfolio-2.svg', alt: 'Reception at heritage venue' },
  { id: 'p3', title: 'Seaside Soirée', image: '/assets/portfolio-3.svg', alt: 'Seaside wedding setup' },
];

export const DESTINATIONS = [
  { id: 'd1', name: 'Udaipur', region: 'Rajasthan', image: '/assets/destination-1.svg' },
  { id: 'd2', name: 'Jaipur', region: 'Rajasthan', image: '/assets/destination-2.svg' },
  { id: 'd3', name: 'Goa', region: 'Coastal', image: '/assets/destination-3.svg' },
];

export const CONTACT = {
  email: 'hello@weddingstation.example',
  phone: '+91 12345 67890',
  address: 'Mumbai, India',
};
