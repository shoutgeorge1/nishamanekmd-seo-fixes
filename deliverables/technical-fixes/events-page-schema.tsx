// CRITICAL FIX: Missing Structured Data for Events Page
// File: app/events/page.tsx
// Add this JSON-LD schema for the Events page

export default function EventsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Put Out the Fire in Your Body: Integrative Approaches to Inflammatory Conditions",
    "description": "Dr. Nisha Manek presents evidence-based botanical medicine and consciousness strategies for managing rheumatoid arthritis and inflammatory conditions at the ACR Annual Scientific Meeting.",
    "startDate": "2025-10-24T09:00:00-04:00",
    "endDate": "2025-10-29T17:00:00-04:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "ACR Convergence 2025 - Annual Scientific Meeting",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Washington",
        "addressRegion": "DC",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "American College of Rheumatology",
      "url": "https://www.rheumatology.org"
    },
    "performer": {
      "@type": "Person",
      "name": "Dr. Nisha Manek",
      "url": "https://www.nishamanekmd.com/about"
    },
    "url": "https://www.nishamanekmd.com/events",
    "image": "https://www.nishamanekmd.com/images/acr-event-2025.jpg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>{/* Events page content */}</main>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/events/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally and verify JSON-LD appears in view-source
// 4. Deploy and test with Google's Rich Results Tool
// 5. This will enable rich snippets for events in search results
