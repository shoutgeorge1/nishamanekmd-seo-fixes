// CRITICAL FIX: Missing Structured Data for Speaking Page
// File: app/speaking/page.tsx
// Add this JSON-LD schema for the Speaking page

export default function SpeakingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Keynote Speaking & Medical Presentations",
    "name": "Integrative Medicine Keynote Speaker - Dr. Nisha Manek",
    "description": "Book Dr. Nisha Manek for transformative talks on consciousness medicine, information medicine, integrative healing, and bridging science with spirit for medical conferences, wellness events, and healthcare organizations.",
    "provider": {
      "@type": "Person",
      "name": "Dr. Nisha Manek",
      "url": "https://www.nishamanekmd.com/about",
      "jobTitle": "Keynote Speaker, Physician, Author"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.nishamanekmd.com/speaking",
      "serviceType": "Speaking Inquiries"
    },
    "category": [
      "Medical Speaking",
      "Keynote Speaking",
      "Healthcare Education",
      "Integrative Medicine",
      "Consciousness Medicine"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    },
    "url": "https://www.nishamanekmd.com/speaking"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>{/* Speaking page content */}</main>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/speaking/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally and verify JSON-LD appears in view-source
// 4. Deploy and test with Google's Rich Results Tool
// 5. This will enable rich snippets for speaking services in search results
