export default function Head() {
  const siteUrl = 'https://wedding-station-website-abc.vercel.app';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wedding Station",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": ["https://www.instagram.com/", "https://www.facebook.com/"]
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Wedding Station | Luxury Wedding Planning & Management</title>
      <meta
        name="description"
        content="Wedding Station is a luxury wedding planning and management company creating extraordinary weddings and destination celebrations across India."
      />

      <meta property="og:title" content="Wedding Station | Luxury Wedding Planning & Management" />
      <meta
        property="og:description"
        content="Wedding Station is a luxury wedding planning and management company creating extraordinary weddings and destination celebrations across India."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content="/og-image.svg" />

      <meta name="twitter:card" content="summary_large_image" />

      <link rel="canonical" href={siteUrl} />
      <link rel="icon" href="/favicon.svg" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Playfair+Display:wght@400;600;700;900&display=swap"
        rel="stylesheet"
      />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}
