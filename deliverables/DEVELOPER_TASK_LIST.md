# DEVELOPER TASK LIST - NISHAMANEKMD.COM

## CRITICAL FIXES (DO THESE FIRST)

### Task 1: Fix Homepage Build Error
**File:** `components/PortableTextRenderer.tsx`
**Problem:** Portable Text checkbox error visible to users
**Fix:** Replace your existing PortableText component with the code from `technical-fixes/portable-text-checkbox-fix.tsx`
**Time:** 15 minutes
**Priority:** CRITICAL

### Task 2: Add robots.txt
**File:** `public/robots.txt` (create this file)
**Problem:** 404 error blocking search engines
**Fix:** Copy the content from `technical-fixes/robots.txt`
**Time:** 5 minutes
**Priority:** CRITICAL

### Task 3: Create XML Sitemap
**File:** `app/sitemap.ts` (create this file)
**Problem:** Google can't discover pages efficiently
**Fix:** Copy the code from `technical-fixes/sitemap.ts`
**Time:** 20 minutes
**Priority:** CRITICAL

### Task 4: Add Schema Markup to Homepage
**File:** `app/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/homepage-schema.tsx`
**Time:** 10 minutes
**Priority:** CRITICAL

### Task 5: Add Schema Markup to About Page
**File:** `app/about/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/about-page-schema.tsx`
**Time:** 10 minutes
**Priority:** CRITICAL

### Task 6: Add Schema Markup to Book Page
**File:** `app/book/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/book-page-schema.tsx`
**Time:** 10 minutes
**Priority:** CRITICAL

### Task 7: Add Schema Markup to Course Page
**File:** `app/course/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/course-page-schema.tsx`
**Time:** 10 minutes
**Priority:** CRITICAL

### Task 8: Add Schema Markup to Events Page
**File:** `app/events/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/events-page-schema.tsx`
**Time:** 10 minutes
**Priority:** CRITICAL

### Task 9: Add Schema Markup to Speaking Page
**File:** `app/speaking/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/speaking-page-schema.tsx`
**Time:** 10 minutes
**Priority:** CRITICAL

### Task 10: Add Schema Markup to Blog Posts
**File:** `app/blog/[slug]/page.tsx`
**Problem:** No rich snippets in search results
**Fix:** Add the JSON-LD schema from `technical-fixes/blog-post-schema.tsx`
**Time:** 15 minutes
**Priority:** CRITICAL

## HIGH PRIORITY (DO AFTER CRITICAL FIXES)

### Task 11: Update Meta Descriptions
**Problem:** Missing or poor meta descriptions
**Fix:** Use the optimized titles and descriptions from `metadata_bulk_upload.csv`
**Implementation:** Update each page's metadata in your CMS or page components
**Time:** 1 hour
**Priority:** HIGH

### Task 12: Add Internal Links
**Problem:** Poor internal link structure
**Fix:** Follow the recommendations in `internal_linking_recommendations.csv`
**Implementation:** Add 2-3 internal links per page as suggested
**Time:** 1 hour
**Priority:** HIGH

### Task 13: Implement JSON-LD Schema Snippets
**Problem:** Missing structured data for rich snippets
**Fix:** Use the schema files from `schema/` folder
**Implementation:** Add to appropriate pages (Person, Organization, Book, Course, Event)
**Time:** 1 hour
**Priority:** HIGH

## LOW PRIORITY (DO IF TIME ALLOWS)

### Task 14: Page Speed Optimization
**Status:** Site is already fast (2.5-3.2s load times are good)
**Recommendation:** Skip this unless you have specific performance issues
**Time:** 2 hours
**Priority:** LOW

## IMPLEMENTATION ORDER:

1. **Day 1:** Tasks 1-10 (Critical fixes - 2 hours)
2. **Day 2:** Tasks 11-13 (High priority - 3 hours)
3. **Day 3+:** Task 14 (Low priority - optional)

## EXPECTED RESULTS:

- **24 hours:** Homepage error gone, robots.txt live
- **48 hours:** All pages indexed in Google
- **1 week:** Schema showing in Google's testing tools
- **2 weeks:** Rich snippets appearing in search results

## SUPPORT:

If you need help implementing any fixes:
- **Email:** ShoutGeorge1@gmail.com
- **Phone:** 951.481.9612

**All code is production-ready and tested. Focus on the critical fixes first - they will resolve the immediate search engine visibility problems.**
