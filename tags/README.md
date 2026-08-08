# CodeFromKerala Personal Website

A modern personal website built with React, TypeScript, and Vite. Focused on programming projects, mathematical research, technical writing, and occasional personal essays.

## Philosophy

This website follows a minimalist, content-first design philosophy:

- **Content first**: Information hierarchy and readability over decoration
- **Timeless design**: Academic and open-source aesthetics rather than trendy styles
- **Fast and accessible**: Optimal performance and WCAG compliance
- **Maintainable**: Clean architecture with minimal dependencies

## Features

- 6-page structure (Home, About, Projects, Research, Blog, Contact)
- Responsive design with mobile-first approach
- Reusable React components with TypeScript
- CSS variables for consistent theming
- Academic typography with serif and monospace fonts
- Minimal external dependencies

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS** - No CSS-in-JS, pure CSS with variables

## Project Structure

```
src/
  components/
    Layout/          # Header, Footer, Container
    Cards/          # ProjectCard, ResearchCard, BlogPostCard
    Typography/     # Heading, Text
  pages/            # Page components
  styles/           # Global CSS and design tokens
  App.tsx          # Main app with routing
  main.tsx         # Entry point
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Type Checking

```bash
npm run tsc
```

## Customization

### Colors and Theme

Edit `src/styles/variables.css` to customize the color palette, typography scale, and spacing system.

### Content

- Edit page components in `src/pages/` to add your content
- Update card components to match your project/research/blog structure
- Modify Footer.tsx with your actual contact information

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Update navigation in `src/components/Layout/Header.tsx`

## Deployment

This site is optimized for static hosting. Deploy the `dist/` folder to:

- GitHub Pages
- Netlify
- Vercel
- Any static host

## License

Licensed under the LICENSE file included in this repository.
