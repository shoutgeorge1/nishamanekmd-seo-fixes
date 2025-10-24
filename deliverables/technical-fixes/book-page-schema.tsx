// CRITICAL FIX: Missing Structured Data for Book Page
// File: app/book/page.tsx
// Add this JSON-LD schema for the Book page

export default function BookPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Bridging Science and Spirit: The Genius of William A. Tiller's Physics and the Promise of Information Medicine",
    "author": {
      "@type": "Person",
      "name": "Nisha J. Manek",
      "honorificSuffix": "MD",
      "url": "https://www.nishamanekmd.com/about"
    },
    "isbn": "978-1950559022",
    "bookFormat": "https://schema.org/Paperback",
    "publisher": {
      "@type": "Organization",
      "name": "Balboa Press"
    },
    "datePublished": "2019-08-15",
    "inLanguage": "en-US",
    "numberOfPages": 310,
    "description": "A revolutionary view bridging particle physics to consciousness. Dr. Nisha Manek translates William A. Tiller's groundbreaking Stanford research into accessible wisdom for healing and transformation.",
    "url": "https://www.nishamanekmd.com/book",
    "image": "https://cdn.sanity.io/images/3jsy74rr/production/383b1975cbd194aa0020805d93a3423037e25111-454x594.png",
    "about": [
      {
        "@type": "Thing",
        "name": "Information Medicine"
      },
      {
        "@type": "Thing",
        "name": "Consciousness Medicine"
      },
      {
        "@type": "Thing",
        "name": "William Tiller"
      },
      {
        "@type": "Thing",
        "name": "Quantum Healing"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "16.95",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.amazon.com/dp/1950559025",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "89",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Dr. Patrick Rudden"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "A most timely and important book, revealing the quiet genius of William Tiller and the enormous potential of Information Medicine."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>{/* Book page content */}</main>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/book/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally and verify JSON-LD appears in view-source
// 4. Deploy and test with Google's Rich Results Tool
// 5. This will enable rich snippets for the book in search results
