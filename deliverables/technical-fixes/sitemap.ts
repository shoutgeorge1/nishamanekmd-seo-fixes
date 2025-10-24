// CRITICAL FIX: Missing XML Sitemap
// File: app/sitemap.ts
// This creates a dynamic sitemap for Next.js 14 App Router

import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client'; // Adjust to your Sanity client path

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nishamanekmd.com';
  
  // Static pages (always include)
  const staticPages = [
    '',           // homepage
    '/about',
    '/book',
    '/course',
    '/events',
    '/speaking',
    '/contact',
    '/blog',
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Fetch blog posts from Sanity
  try {
    const posts = await client.fetch<Array<{ slug: string; _updatedAt: string }>>(
      `*[_type == "post" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }`
    );

    const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    return [...staticUrls, ...blogUrls];
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return staticUrls; // Return at least static pages
  }
}

// ALTERNATIVE: If NOT using Sanity or dynamic content, use this simpler version:
/*
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nishamanekmd.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-10-01'), // Update with actual date
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date('2025-10-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/course`,
      lastModified: new Date('2025-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date('2025-10-24'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/speaking`,
      lastModified: new Date('2025-10-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-10-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Add individual blog posts manually:
    {
      url: `${baseUrl}/blog/what-conventional-medicine-can-learn-from-consciousness-studies`,
      lastModified: new Date('2025-10-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/botanical-medicine-integrative-rheumatology`,
      lastModified: new Date('2025-10-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/information-medicine-practical-applications`,
      lastModified: new Date('2025-10-10'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
*/

// IMPLEMENTATION STEPS:
// 1. Create app/sitemap.ts in your Next.js project
// 2. Paste appropriate code (Sanity version or static version)
// 3. Update lastModified dates with actual page update dates
// 4. Commit and deploy
// 5. Next.js will auto-generate XML at /sitemap.xml
// 6. Verify: curl https://www.nishamanekmd.com/sitemap.xml
