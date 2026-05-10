# Vercel Build Error Fix - "Unsupported Server Component type: undefined"

## Problem Summary

Your Next.js 14 app is failing to build on Vercel with the error:
```
Error: Unsupported Server Component type: undefined
```

This error occurs during static page generation (SSR) for ALL pages in your application.

## Root Cause

The issue is caused by **client-side-only components** (Aurora, TargetCursor) that use browser APIs (WebGL, GSAP, DOM manipulation) being rendered during server-side static generation. When Next.js tries to pre-render these pages, these components return `undefined` because:

1. The Aurora component uses WebGL/OGL library which requires browser APIs
2. The TargetCursor component uses GSAP and DOM manipulation
3. All your pages are marked as `"use client"` but Next.js still tries to pre-render them for static optimization

## Solutions (Choose One)

### Solution 1: Disable Static Optimization (Quick Fix)

Add this line to EVERY page file that's failing:

```typescript
export const dynamic = 'force-dynamic'
```

**Example for `app/page.tsx`:**
```typescript
"use client"

export const dynamic = 'force-dynamic' // Add this line

import type React from "react"
// ... rest of imports

export default function Page() {
  // ... component code
}
```

**Pros:** Quick fix, will make build succeed immediately
**Cons:** Pages won't be statically generated, slower initial page loads

### Solution 2: Remove Aurora Background (Recommended)

The Aurora component is causing the most issues. Consider:

1. **Remove it entirely** from `app/layout.tsx`
2. **Replace with CSS gradient** for similar visual effect:

```tsx
// In app/layout.tsx, replace the Aurora div with:
<div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[600px] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black opacity-50 blur-3xl" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
</div>
```

**Pros:** Cleaner, faster, no build issues
**Cons:** Less dynamic visual effect

### Solution 3: Conditional Rendering (Best Long-term)

Only render Aurora and TargetCursor on the client side after mount:

```typescript
"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Aurora = dynamic(() => import("@/components/aurora"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-black via-purple-900/20 to-black" />
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <html lang="en">
      <body>
        {mounted && (
          <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[600px] overflow-hidden">
            <div className="absolute inset-0 opacity-25 blur-3xl">
              <Aurora
                colorStops={["#000000", "#1a1a2e", "#7c3aed"]}
                blend={0.5}
                amplitude={1.2}
                speed={0.15}
              />
            </div>
          </div>
        )}
        {children}
      </body>
    </html>
  )
}
```

## Immediate Action Required

**To deploy NOW**, use Solution 1:

1. Add `export const dynamic = 'force-dynamic'` to these files:
   - `app/page.tsx`
   - `app/about/page.tsx`
   - `app/apply/page.tsx`
   - `app/apply-as-sponsor/page.tsx`
   - `app/contact/page.tsx`
   - `app/criteria/page.tsx`
   - `app/faq/page.tsx`
   - `app/prizes/page.tsx`
   - `app/reveal/page.tsx`
   - `app/schedule/page.tsx`
   - `app/schools/page.tsx`
   - `app/sessions/page.tsx`
   - `app/speakers/page.tsx`
   - `app/sponsors/page.tsx`
   - All track pages in `app/tracks/*/page.tsx`

2. Commit and push to trigger new Vercel build

## Files Already Modified

I've already made these changes:
- ✅ `components/fx/reveal.tsx` - Fixed typing
- ✅ `components/section-header.tsx` - Fixed conditional rendering
- ✅ `components/page-layout.tsx` - Added dynamic import for TargetCursor
- ✅ `components/target-cursor.tsx` - Added "use client" directive
- ✅ `app/layout.tsx` - Added dynamic import for Aurora

However, these changes alone are NOT sufficient. You need to choose one of the solutions above.

## Testing

After applying the fix:
```bash
pnpm run build
```

Should complete without errors.

## Questions?

This is a complex Next.js SSR issue. The core problem is mixing client-only WebGL/Canvas components with static site generation. Choose the solution that best fits your needs.
