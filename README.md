# fmdafrica Website

>![fmdafrica Logo](public/logo.svg)

A modern, conversion-focused digital marketing website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 🎯 **Lead Generation**: Optimized contact forms and CTAs for maximum conversions
- 📱 **Fully Responsive**: Perfect experience on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal speed and SEO
- 🎭 **Smooth Animations**: Engaging animations using Framer Motion
- 🎨 **Two-Color Palette**: Primary blue and accent purple gradient theme

## Color Scheme

- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Accent**: Purple gradient (#d946ef to #a21caf)

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind config
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Services.tsx      # Services showcase
│   ├── Testimonials.tsx  # Client testimonials
│   ├── ContactForm.tsx   # Lead capture form
│   └── Footer.tsx        # Footer with links
└── public/               # Static assets
```

## Sections

1. **Hero**: Eye-catching hero section with gradient background and animated elements
2. **Services**: Six core digital marketing services with icons and descriptions
3. **Testimonials**: Client reviews with star ratings and statistics
4. **Contact Form**: Lead generation form with contact information
5. **Footer**: Company information, links, and newsletter signup

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content

Update the content in each component file:
- Company name in `Navbar.tsx` and `Footer.tsx`
- Services in `Services.tsx`
- Testimonials in `Testimonials.tsx`
- Contact info in `ContactForm.tsx`

## License

MIT License - feel free to use this for your projects!
