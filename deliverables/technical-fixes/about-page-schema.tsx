// CRITICAL FIX: Missing Structured Data for About Page
// File: app/about/page.tsx
// Add this JSON-LD schema for the About page

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Person", "Physician"],
    "name": "Nisha Manek",
    "givenName": "Nisha",
    "familyName": "Manek",
    "honorificSuffix": "MD",
    "jobTitle": "Integrative Medicine Physician, Speaker & Author",
    "description": "Board-certified rheumatologist and former Mayo Clinic physician specializing in integrative medicine, consciousness medicine, and botanical therapies for inflammatory conditions.",
    "url": "https://www.nishamanekmd.com/about",
    "image": "https://cdn.sanity.io/images/3jsy74rr/production/60faefec83a650f286fb1f6228f72403f1f38292-3000x2000.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/nisha-manek",
      "https://www.amazon.com/stores/Nisha-J.-Manek/author/B07W34G3C8"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Dr. Nisha Manek"
    },
    "affiliation": [
      {
        "@type": "Organization",
        "name": "Mayo Clinic",
        "url": "https://www.mayoclinic.org"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Mayo Clinic Division of Rheumatology"
    },
    "knowsAbout": [
      "Integrative Medicine",
      "Rheumatology",
      "Consciousness Medicine",
      "Information Medicine",
      "William Tiller Physics",
      "Botanical Medicine",
      "Mind-Body Healing"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Physician",
      "occupationalCategory": "29-1069.00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>{/* About page content */}</main>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/about/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally and verify JSON-LD appears in view-source
// 4. Deploy and test with Google's Rich Results Tool
