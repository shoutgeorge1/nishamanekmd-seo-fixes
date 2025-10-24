// CRITICAL FIX: Missing Structured Data (Schema Markup)
// File: app/page.tsx (Homepage)
// Add this JSON-LD schema to fix missing rich snippets

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Nisha Manek - Integrative Medicine Speaker & Author',
  description: 'Former Mayo Clinic physician sharing Information Medicine—talks, book, and course on intention-based healing.',
  // ... other metadata
};

export default function HomePage() {
  // JSON-LD structured data for homepage
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.nishamanekmd.com/#organization",
        "name": "Dr. Nisha Manek",
        "url": "https://www.nishamanekmd.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nishamanekmd.com/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.linkedin.com/in/nisha-manek",
          "https://www.amazon.com/stores/Nisha-J.-Manek/author/B07W34G3C8"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nishamanekmd.com/#website",
        "url": "https://www.nishamanekmd.com/",
        "name": "Dr. Nisha Manek MD",
        "publisher": { "@id": "https://www.nishamanekmd.com/#organization" }
      },
      {
        "@type": ["Person", "Physician"],
        "@id": "https://www.nishamanekmd.com/#person",
        "name": "Nisha Manek",
        "honorificSuffix": "MD",
        "jobTitle": "Integrative Medicine Speaker",
        "description": "Former Mayo Clinic physician, author of Bridging Science and Spirit, expert in consciousness medicine and Information Medicine®",
        "url": "https://www.nishamanekmd.com/",
        "image": "https://cdn.sanity.io/images/3jsy74rr/production/620f326951ebc61bd036f978ecb8d89321fcfefe-1000x637.jpg",
        "affiliation": {
          "@type": "Organization",
          "name": "Mayo Clinic"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Mayo Clinic"
        }
      }
    ]
  };

  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Your existing page content */}
      <main>
        {/* ... homepage content ... */}
      </main>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally: npm run dev
// 4. Check view-source for JSON-LD
// 5. Deploy and verify with Google's Rich Results Tool
