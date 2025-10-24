// CRITICAL FIX: Missing Structured Data for Course Page
// File: app/course/page.tsx
// Add this JSON-LD schema for the Course page

export default function CoursePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Rheumatoid Relief: Integrative Healing for Inflammatory Conditions",
    "description": "A comprehensive program combining evidence-based integrative medicine, botanical therapies, and consciousness-based healing for rheumatoid arthritis and inflammatory conditions.",
    "provider": {
      "@type": "Person",
      "name": "Dr. Nisha Manek",
      "url": "https://www.nishamanekmd.com/about"
    },
    "url": "https://www.nishamanekmd.com/course",
    "image": "https://www.nishamanekmd.com/images/course-hero.jpg",
    "coursePrerequisites": "None",
    "educationalLevel": "Beginner to Intermediate",
    "teaches": [
      "Botanical medicine for inflammation",
      "Mind-body healing techniques",
      "Intention-based healing practices",
      "Integrative approaches to autoimmune conditions"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT8H"
    },
    "offers": {
      "@type": "Offer",
      "category": "Online Course",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>{/* Course page content */}</main>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/course/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally and verify JSON-LD appears in view-source
// 4. Deploy and test with Google's Rich Results Tool
// 5. This will enable rich snippets for the course in search results
