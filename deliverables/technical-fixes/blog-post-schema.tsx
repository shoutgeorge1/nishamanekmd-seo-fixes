// CRITICAL FIX: Missing Structured Data for Blog Posts
// File: app/blog/[slug]/page.tsx
// Add this JSON-LD schema template for blog posts

export default function BlogPost({ params, post }: { params: { slug: string }, post: any }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title, // e.g., "What Conventional Medicine Can Learn from Consciousness Studies"
    "description": post.excerpt || post.description,
    "image": post.mainImage?.url || "https://www.nishamanekmd.com/default-blog-image.jpg",
    "datePublished": post.publishedAt,
    "dateModified": post._updatedAt,
    "author": {
      "@type": "Person",
      "name": "Dr. Nisha Manek",
      "url": "https://www.nishamanekmd.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Nisha Manek",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nishamanekmd.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nishamanekmd.com/blog/${params.slug}`
    },
    "articleSection": "Integrative Medicine",
    "keywords": post.keywords || "integrative medicine, consciousness healing, information medicine",
    "wordCount": post.wordCount || 1500
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <article>{/* Blog post content */}</article>
    </>
  );
}

// IMPLEMENTATION STEPS:
// 1. Find your app/blog/[slug]/page.tsx file
// 2. Add the schemaData object and script tag
// 3. Test locally and verify JSON-LD appears in view-source
// 4. Deploy and test with Google's Rich Results Tool
// 5. This will enable rich snippets for blog articles in search results

// NOTE: Update the post object properties to match your Sanity CMS structure:
// - post.title
// - post.excerpt or post.description
// - post.mainImage?.url
// - post.publishedAt
// - post._updatedAt
// - post.keywords
// - post.wordCount
