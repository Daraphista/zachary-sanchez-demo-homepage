# CLAUDE.md — Homepage Content Population

## Project Context

This is a luxury real estate website built with Next.js (App Router) and Tailwind CSS. It was rebuilt from a reference website and currently contains the reference site's content. Your job is to replace that content with the client's actual content and build any missing sections.

## Content Source

The client's homepage content is in `homepage-content.json` at the project root. This file contains 21 sections, each with:

- `id` — kebab-case section identifier
- `name` — human-readable section name
- `status` — either `"include"` (real client content) or `"example"` (fictional placeholder to demonstrate the section)
- `order` — position number 1-21 defining the section order on the page
- `content` — object with the section's text content (headings, body copy, CTAs, etc.)
- `needsInput` (optional) — if `true`, some content fields have `[Client to provide]` placeholders that still need real content

## Phase 4 Workflow

Execute these steps in order.

### Step 1: Audit the existing homepage and set up stock photos

**1a. Read the homepage file** (likely `app/page.tsx` or `app/page.jsx`) and catalog:

1. Which sections currently exist in the JSX
2. What order they're in
3. The component/styling patterns being used (class naming conventions, Tailwind patterns, layout structures, spacing between sections)

**1b. Set up stock photos.** Before writing any code:

1. Copy all images from `template-files/images/` into `public/images/stock/`
2. Run `ls public/images/stock/` and list every file
3. Shuffle the list randomly to create the image assignment queue
4. Assign a stock photo to every section (except Navigation Bar) following the assignment rules in the Stock Photo Usage section below
5. Output the full assignment list as part of the audit summary

**CRITICAL: Gray placeholder divs are BANNED.** Do not use `<div className="... bg-gray-200 ...">Placeholder Text</div>` or any variation of gray/muted background divs with descriptive text labels as image substitutes. Every place where an image should appear MUST use the Next.js `<Image>` component with an actual stock photo file from `public/images/stock/`. If `public/images/stock/` is empty or missing, STOP and ask the user to add stock photos before proceeding.

Output a brief summary of what you found before proceeding. Example:

```
Found 12 sections in app/page.tsx:
1. Navbar — sticky, transparent, uses <nav> with flex layout
2. Hero — full-height, background image, centered text overlay
3. Listings — grid layout, 3 columns
...
Pattern notes: Sections use <section> tags with py-24 spacing, max-w-7xl containers, font classes from local font config.

Stock photos (10 files in public/images/stock/):
interior-1.jpg, interior-2.jpg, exterior-1.jpg, exterior-2.jpg, living-room.jpg, kitchen.jpg, pool.jpg, aerial.jpg, bedroom.jpg, entrance.jpg

Shuffled image queue and assignments (with overlay treatments):
1. Navigation Bar — no image (exception)
2. Hero — pool.jpg | Treatment C (gradient top-to-bottom)
3. Listings — interior-2.jpg, entrance.jpg, bedroom.jpg (cards) | Cards: gradient-to-top overlays
4. About — aerial.jpg | Treatment F (split: image left, solid right)
5. Stats — exterior-1.jpg | Treatment A (dark overlay)
6. Communities — kitchen.jpg, living-room.jpg, interior-1.jpg (cards) | Section: Treatment B (light), cards: dark overlays
7. Navigation/CTA — exterior-2.jpg | Treatment D (side gradient)
...all 21 sections assigned with treatments
```

### Step 2: Map JSON sections to existing sections

Compare ALL 21 sections in `homepage-content.json` against the existing sections found in Step 1. Every section in the JSON must be mapped — both `"include"` and `"example"` status sections. Categorize each into one of three buckets:

- **REPLACE** — section exists in the JSX, swap the reference content with the JSON content
- **BUILD** — section does not exist in the JSX, needs to be created from scratch. This includes `"example"` status sections — they get built and rendered with the example badge, they are NOT skipped.
- **REORDER** — section exists but is in the wrong position relative to the JSON's `order` field

The mapping must contain exactly 21 sections. If your mapping has fewer than 21, you missed some. `status: "example"` does NOT mean skip — it means build the section and add the example badge.

Output the mapping before proceeding, with status noted. Example:

```
REPLACE (9 sections):
  1. Navigation Bar (include)
  2. Hero (include)
  3. Listings (include)
  4. About / Founder Spotlight (include)
  5. Stats / Why Choose Us (include)
  6. Communities / Areas Served (include)
  14. Testimonials (include)
  18. CTA Form (include)
  21. Footer (include)

BUILD (11 sections):
  8. Guides (example) ← will render with example badge
  9. Press / Media (include)
  10. Featured Videos (example) ← will render with example badge
  11. App Spotlight (example) ← will render with example badge
  12. Magazine Spotlight (example) ← will render with example badge
  13. Custom Services (example) ← will render with example badge
  15. Blog (example) ← will render with example badge
  16. Philanthropy (example) ← will render with example badge
  17. Social Media (include)
  19. Office Locations (example) ← will render with example badge
  20. Newsletter CTA (include)

REORDER (1 section):
  Social Media (currently after Footer, should be position 17)

Total: 21 sections mapped
```

Wait for confirmation before continuing.

### Step 3: Replace content in existing sections

For each REPLACE section:

1. Read the JSON content for that section from `homepage-content.json`
2. Find the corresponding JSX block in the homepage file
3. Replace the reference site's text content (headings, body copy, CTAs, links, stats, names, etc.) with the client's content
4. Do NOT change the layout, styling, or structure — only swap text content
5. If the section has `status: "example"`, add the example badge (see Example Section Badge below)
6. If the section has `needsInput: true`, leave a `{/* TODO: Client to provide */}` comment next to incomplete fields

### Step 4: Build missing sections

For each BUILD section (this includes both `"include"` AND `"example"` status sections — build all of them):

1. Read the JSON content for that section from `homepage-content.json`
2. Study the existing sections' patterns — match these exactly:
   - Same `<section>` tag structure
   - Same Tailwind spacing classes (padding, max-width, container patterns)
   - Same heading hierarchy and font sizes
   - Same responsive breakpoint patterns
   - Same animation/transition patterns if present
3. Build the new section JSX with the JSON content hardcoded in
4. If the section has `status: "example"`, include the example badge (see Example Section Badge below). This is what makes example sections visually distinct — they are fully built and rendered, just marked with a badge.
5. Place a `{/* NEW SECTION */}` comment above each newly built section for easy identification during review

### Step 5: Reorder sections

After all content is replaced and new sections are built, reorder the JSX blocks in the homepage file to match the `order` field (1-21) from the JSON. The final page structure should be sections 1 through 21, top to bottom.

### Step 6: Verify

After completing all changes:

1. Run `npm run build` (or `next build`) to check for compilation errors
2. List all 21 sections in their final order with their status (include/example)
3. **Image audit:** Search the homepage file for any remaining gray placeholder divs (`bg-gray-200`, `bg-gray-300`, `bg-gray-400`, `bg-gray-500` used as image substitutes). If any are found, replace them with stock photos from the queue. Every section except Navigation Bar must have at least one `<Image>` component referencing a file in `/images/stock/`.
4. Verify all `<Image>` `src` paths point to files that actually exist in `public/images/stock/`
5. Flag any issues found

## Example Section Badge

When a section has `status: "example"`, render a visible badge in the UI. Add this to the top of the section, inside the section container:

```jsx
<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
  <span>✦</span>
  <span>Example Section — This is a preview of what this section could look like on your site</span>
</div>
```

Position it as the first element inside the section's container div, before the heading. It should be visible but not disruptive to the layout.

## Design Patterns: Navigation / CTA and Guides Sections

The "Navigation / CTA — Offers & Services" and "Guides" sections should follow one of these three layout patterns. Choose whichever best matches the number of link items in the JSON content and the overall aesthetic of the existing project.

### Pattern A: Full-Width Vertical Columns

A single full-width background image (luxury interior) with the link items overlaid as evenly-spaced columns separated by thin vertical dividers (1px white/light lines). Each column contains a short uppercase label centered vertically and horizontally within its column. The entire section is one row.

Structure:
- Full-width `<section>` with a background image from stock photos
- CSS Grid or Flexbox: one row, N equal columns where N = number of link items
- Each column: centered uppercase text, white color, letter-spacing wide (tracking-widest)
- Between each column: a 1px vertical divider line (border-r or absolute positioned)
- Section height: roughly 40-50vh, enough to feel like a visual break
- Hover: subtle background darken or text scale on each column
- Best for: 4-6 link items

```jsx
{/* Pattern A example structure */}
<section className="relative h-[50vh] w-full">
  <Image src="/images/stock/[assigned-image].jpg" alt="Luxury interior" fill className="object-cover" />
  <div className="absolute inset-0 bg-black/30" /> {/* dark overlay for text readability */}
  <div className="relative z-10 grid h-full grid-cols-5"> {/* adjust cols to item count */}
    {items.map((item, i) => (
      <a key={i} className="flex items-center justify-center border-r border-white/30 last:border-r-0 text-white uppercase tracking-[0.25em] text-sm font-light hover:bg-black/20 transition-colors">
        {item.label}
      </a>
    ))}
  </div>
</section>
```

### Pattern B: Asymmetric Image Grid (Bento Style)

A grid of image cards in an asymmetric/bento layout — a mix of larger and smaller cards arranged in 2-3 rows. Each card has a background image (grayscale or muted) with an uppercase label centered on it. The overall feel is editorial and magazine-like. Cards have slight gaps between them.

Structure:
- Container with max-width and padding
- CSS Grid with defined template areas or spanning columns: `grid-cols-3` with some items spanning 1 col and others spanning 2
- Row 1: 3 cards (1 small, 1 large centered, 1 small)
- Row 2: 3 cards (1 large, 1 large centered, 1 small) — adjust to item count
- Each card: aspect-ratio (4/3 or 3/2), background image placeholder (use gray tones), centered uppercase white text
- Card images should use grayscale filter or a dark overlay for muted look
- Hover: slight scale or overlay lighten
- Best for: 5-8 link items

```jsx
{/* Pattern B example structure */}
<section className="mx-auto max-w-7xl px-6 py-24">
  <div className="grid grid-cols-3 gap-4">
    <a className="group relative aspect-[4/3] overflow-hidden">
      <Image src="/images/stock/[assigned-image].jpg" alt="Luxury property" fill className="object-cover grayscale" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      <span className="relative z-10 flex h-full items-center justify-center text-white uppercase tracking-[0.2em] text-sm font-light">
        Sell My Home
      </span>
    </a>
    <a className="group relative aspect-[4/3] overflow-hidden col-span-1">
      <Image src="/images/stock/[different-image].jpg" alt="Luxury interior" fill className="object-cover grayscale" />
      {/* ... same pattern */}
    </a>
    {/* Continue for each item, varying col-span for asymmetry */}
  </div>
</section>
```

### Pattern C: Full-Width Three-Column Panels

Full-width section with a background image, divided into exactly 3 equal panels separated by thin vertical and horizontal lines (forming a grid). Each panel has a centered uppercase label. Minimal, architectural feel — like the section itself is a window divided into panes.

Structure:
- Full-width `<section>` with a background image from stock photos
- 3 equal columns in a single row
- Each panel separated by thin lines (1px borders, white or light gray)
- A subtle horizontal line may run through the middle of the section for additional grid structure
- Each panel: centered uppercase text, light/white color, wide letter-spacing
- Hover: subtle background shift per panel
- Best for: exactly 3 link items (or multiples of 3 across rows)

```jsx
{/* Pattern C example structure */}
<section className="relative h-[45vh] w-full">
  <Image src="/images/stock/[assigned-image].jpg" alt="Luxury interior" fill className="object-cover" />
  <div className="absolute inset-0 bg-black/30" /> {/* dark overlay */}
  <div className="relative z-10 grid h-full grid-cols-3 divide-x divide-white/30">
    {items.map((item, i) => (
      <a key={i} className="flex items-center justify-center text-white uppercase tracking-[0.25em] text-sm font-light hover:bg-black/20 transition-colors">
        {item.label}
      </a>
    ))}
  </div>
</section>
```

### Which Pattern to Choose

- Count the link items in the JSON for that section
- 3 items → Pattern C
- 4-6 items → Pattern A
- 5-8 items with visual variety needed → Pattern B
- If the existing project already has a similar navigation grid section, match that pattern instead of picking from these three
- Both the "Navigation / CTA" and "Guides" sections should use one of these patterns. They can use the same pattern or different ones — pick what fits the content best.

## Coding Standards

- Use TypeScript if the project is in TypeScript, JavaScript if it's in JavaScript — match whatever the existing project uses
- All text content comes from the JSON — do not write copy, just place what's in the file
- Preserve all existing Tailwind classes and patterns — do not "improve" or refactor the styling
- Keep the homepage as a single file (server component) unless the project already splits sections into separate component files
- If the project uses local fonts or custom Tailwind config, use those — do not introduce new font classes
- Responsive design: match the breakpoint patterns (sm/md/lg/xl) used in existing sections
- Images: use stock photos from the monorepo's `template-files/images/` folder. Follow the Stock Photo Usage instructions below.

## Stock Photo Usage

Stock photos are stored in the monorepo at `template-files/images/`. Before starting the content population workflow:

1. **Copy stock photos into the client project.** Copy all images from `template-files/images/` into the client project's `public/images/stock/` directory.

2. **List and randomize.** List all image files in `public/images/stock/`, then shuffle the order randomly. This randomized list becomes the image assignment queue — each image gets used once before any image repeats.

3. **Assign images to sections in queue order.** Walk through the sections in order 1-21. For each section that needs a background image or visual, pull the next image from the shuffled queue. When the queue runs out, reshuffle and start again.

Assignment rules:

**MANDATORY: Every section must utilize at least one background image.** No section should be purely flat/white/text-only. Apply stock photos using these patterns based on section structure:

- **Sections with cards** (Communities, Listings, Press/Media, Office Locations, Blog, Guides with Pattern B) — each card gets a stock photo as its background image with a dark overlay for text readability. The card content (text, labels) sits on top of the overlay.
- **Sections with one large content block** (About/Founder Spotlight, Stats/Why Choose Us, App Spotlight, Magazine Spotlight, Philanthropy, Featured Videos, Custom Services) — either the main content card or the section itself gets a background image. If the content sits in a card/panel, put the background image on the section behind it. If the content fills the section, put the background image on the section with an overlay.
- **Full-width navigation/CTA sections** (Hero, Navigation/CTA, Guides with Pattern A or C) — the section itself gets a full-bleed background image with text overlaid.
- **Form sections** (CTA Form, Newsletter CTA) — the section gets a background image with a dark/branded overlay. The form itself can sit in a semi-transparent card on top.
- **Testimonials** — the section gets a background image with a dark overlay. Testimonial cards/slides sit on top.
- **Social Media** — section background image with overlay, social links/stats on top.
- **Footer** — background image with heavy dark overlay (90%+ opacity) so footer text remains readable.
- **Navigation Bar** — this is the one exception. No background image needed since it uses transparent/scroll-triggered styling.

For overlay implementation, use the **Visual Variety System** below. NEVER use the same overlay style on two adjacent sections.

### Visual Variety System

No two adjacent sections should look the same. Alternate between these overlay treatments as you go down the page. The goal is visual rhythm — dark, light, dark, gradient, light, etc.

**Treatment A: Dark Overlay** — dark, moody, immersive. White/light text.
```jsx
<section className="relative">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10">{/* light text content */}</div>
</section>
```

**Treatment B: Light/Frosted Overlay** — bright, airy, clean. Dark text. Image still visible but softened.
```jsx
<section className="relative">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />
  <div className="relative z-10">{/* dark text content */}</div>
</section>
```

**Treatment C: Gradient Overlay (top-to-bottom)** — dramatic reveal. Image more visible at top, content readable at bottom.
```jsx
<section className="relative">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
  <div className="relative z-10">{/* light text content */}</div>
</section>
```

**Treatment D: Gradient Overlay (side)** — image visible on one side, content on the other.
```jsx
<section className="relative">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
  <div className="relative z-10">{/* light text on left, image peeks through on right */}</div>
</section>
```

**Treatment E: Brand Color Overlay** — uses the project's primary/accent color instead of black or white. Creates a tinted, editorial feel.
```jsx
<section className="relative">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-[var(--primary-color)]/70" /> {/* or use the project's brand color class */}
  <div className="relative z-10">{/* text content */}</div>
</section>
```

**Treatment F: Split — half image, half solid** — no overlay on the image side. Clean panel for content on the other side.
```jsx
<section className="grid grid-cols-2">
  <div className="relative">
    <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  </div>
  <div className="bg-white p-16">{/* dark text content on solid background */}</div>
</section>
```

**Card-level overlays** also get variety:
```jsx
{/* Dark card */}
<div className="group relative overflow-hidden">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
  <div className="relative z-10 p-6">{/* content */}</div>
</div>

{/* Frosted glass card */}
<div className="group relative overflow-hidden rounded-xl">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
  <div className="relative z-10 p-6">{/* dark text content */}</div>
</div>

{/* Gradient card */}
<div className="group relative overflow-hidden">
  <Image src="/images/stock/[image].jpg" alt="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <div className="relative z-10 flex items-end p-6">{/* text anchored at bottom */}</div>
</div>
```

### Section Treatment Assignment

Assign overlay treatments in Step 1b alongside image assignments. Follow these rules:

1. **Front-load the most visually impactful treatments.** The first 5-7 sections (Hero through Navigation/CTA) should use the most dramatic, image-forward treatments (A, C, D, F). These are what the visitor sees first — they need to be engaging.

2. **Never use the same treatment on two adjacent sections.** If section 4 uses Treatment A (dark), section 5 must use something different (B, C, D, E, or F).

3. **Alternate light and dark feel.** Aim for a rhythm like: dark → light → dark → gradient → light → brand color → dark. This creates visual breathing room.

4. **Match treatment to content density:**
   - Text-heavy sections (About, Stats, Blog) → Treatment B (light) or F (split) so body copy is easy to read
   - Visual/CTA sections (Hero, Navigation/CTA, Guides) → Treatment A (dark) or C/D (gradient) for drama
   - Form sections → Treatment A (dark) or E (brand color) with form in a frosted glass card
   - Card-based sections → Mix dark and gradient card overlays within the same section for variety

5. **Use the project's brand colors.** If the project has gold/amber accents (like the Spinelli project), use those for Treatment E instead of generic colors.

Example treatment assignment for the first 10 sections:
```
1.  Navigation Bar — transparent (no treatment)
2.  Hero — Treatment C (gradient top-to-bottom, dramatic reveal)
3.  Listings — Treatment A (dark overlay, dark bg), cards use gradient-to-top overlays
4.  About — Treatment F (split: image left, solid white panel right)
5.  Stats — Treatment A (dark overlay, stats pop in gold/white)
6.  Communities — Treatment B (light/frosted), cards use dark overlays
7.  Navigation/CTA — Treatment D (side gradient, image peeks through right)
8.  Guides — Treatment A (dark, full-width Pattern A or C)
9.  Press/Media — Treatment B (light/frosted), cards use gradient overlays
10. Featured Videos — Treatment C (gradient, video thumbnail visible at top)
```

4. **Use Next.js `<Image>` component** with `src="/images/stock/[filename]"`. Make sure `import Image from "next/image"` is at the top of the file. Set appropriate `alt` text describing what the image represents in context (e.g., `alt="Luxury living room interior"` not `alt="stock-photo-3.jpg"`).

5. **Do not reuse the same image in adjacent sections.** If the queue gives you the same image for sections 6 and 7, skip it and pull the next one.

6. **NEVER use gray placeholder divs as image substitutes.** This means no `<div className="bg-gray-200 ...">Label Text</div>` anywhere an image should be. If you find yourself writing a gray div with descriptive text inside it, STOP and use an `<Image>` component with a stock photo instead. The only acceptable use of a gray div is as a fallback if `public/images/stock/` is completely empty, which should never happen if Step 1b was followed.

Example randomization in the audit step:

```bash
# List stock images
ls public/images/stock/

# Output (example):
# interior-1.jpg  interior-2.jpg  exterior-1.jpg  exterior-2.jpg
# living-room.jpg  kitchen.jpg  pool.jpg  aerial.jpg
# bedroom.jpg  entrance.jpg
```

```
Shuffled queue: pool.jpg, interior-2.jpg, entrance.jpg, bedroom.jpg, aerial.jpg, exterior-1.jpg, kitchen.jpg, living-room.jpg, interior-1.jpg, exterior-2.jpg

Section assignments:
1. Navigation Bar — no image (exception)
2. Hero — pool.jpg (section background)
3. Listings — interior-2.jpg, entrance.jpg, bedroom.jpg (card backgrounds)
4. About — aerial.jpg (section background behind content card)
5. Stats — exterior-1.jpg (section background with overlay)
6. Communities — kitchen.jpg, living-room.jpg, interior-1.jpg (card backgrounds)
7. Navigation/CTA — exterior-2.jpg (section background)
8. Guides — pool.jpg [reshuffled] (section or card backgrounds)
9. Testimonials — interior-2.jpg (section background with dark overlay)
10. CTA Form — entrance.jpg (section background, form in semi-transparent card)
...and so on for all 21 sections
```

## Common Commands

```bash
# Start dev server
npm run dev

# Build check
npm run build

# Lint
npm run lint
```

## File Structure Reference

```
app/
  page.tsx          # Homepage — this is the main file you're editing
  layout.tsx        # Root layout
  globals.css       # Global styles / Tailwind imports
homepage-content.json  # Client content from Phase 3
```

Adjust paths if the project structure differs — audit first, then proceed.