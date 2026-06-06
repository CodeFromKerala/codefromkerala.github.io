# CodeFromKerala Website Architecture

## Overview

This is a modern personal website built with React, TypeScript, and Vite. The architecture emphasizes clarity, maintainability, and performance while following a minimalist design philosophy.

## Core Design Principles

### 1. Content First
- Information hierarchy prioritized over visual effects
- Readable typography with proper spacing
- Clear navigation structure

### 2. Minimal Dependencies
- React + React Router only
- Pure CSS (no CSS-in-JS libraries)
- No UI component libraries
- Lightweight and fast

### 3. Accessibility
- WCAG compliance throughout
- Semantic HTML
- Keyboard navigation support
- Screen reader friendly
- Focus visible styles
- Reduced motion support

### 4. Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid system
- Touch-friendly interactions

## Component Architecture

### Layout Layer (`components/Layout/`)

**Header.tsx**
- Sticky navigation bar
- Logo/branding link
- Navigation menu
- Responsive collapse on mobile

**Footer.tsx**
- Site footer with sections
- Links and metadata
- Copyright information
- Flexible grid layout

**Container.tsx**
- Responsive width wrapper
- Three variants: default (42rem), wide (56rem), full (72rem)
- Consistent horizontal padding

### Content Components (`components/Cards/`)

**ProjectCard.tsx**
- Project title and year
- Description
- Technology tags
- Links to code/demo

**ResearchCard.tsx**
- Paper title and year
- Authors list
- Journal/publication info
- Abstract
- Links to PDF/arXiv

**BlogPostCard.tsx**
- Article title
- Publication date
- Category badge
- Reading time estimate
- Excerpt
- Read more link

### Typography Components (`components/Typography/`)

**Heading.tsx**
- Dynamic heading levels (h1-h6)
- Consistent styling across levels
- Optional CSS classes

**Text.tsx**
- Flexible text element
- Dynamic HTML element selection
- CSS class support

## Styling Architecture

### Design Tokens (`styles/variables.css`)

**Colors**
- Background colors (primary, secondary, tertiary)
- Text colors (primary, secondary, tertiary, muted)
- Borders and accents
- Semantic colors (code, links)

**Typography**
- Font families (serif, sans-serif, monospace)
- Font sizes (xs to 4xl)
- Line heights (tight, normal, relaxed)

**Spacing**
- 8px-based scale (xs to 3xl)
- Consistent throughout

**Layout**
- Max-widths for content
- Responsive breakpoints
- Border radius and shadows

### Global Styles (`styles/global.css`)

- CSS reset
- Base HTML/body styles
- Heading styles
- Link styles
- Code and pre formatting
- Blockquote styles
- Table styles
- Focus and print styles

### Layout Utilities (`styles/layout.css`)

- Container and responsive variants
- Grid utilities
- Flexbox helpers
- Spacing utilities
- Text utilities
- Responsive typography scaling

## Deployment

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

### Netlify
Connect repository, set build command to `npm run build`, deploy `dist/`

### Vercel
Connect repository, automatic deploys on push

### Any Static Host
Upload contents of `dist/` directory

## Dependencies

**Production:**
- react (18+)
- react-dom (18+)
- react-router-dom (7+)

**Development:**
- @vitejs/plugin-react
- typescript
- vite

No other dependencies! Intentionally minimal.
