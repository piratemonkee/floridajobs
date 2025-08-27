# GONDI Careers

A premium careers page for GONDI built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Premium UI Design**: Clean, minimal design with Apple/Linear/Mercury-level polish
- **Responsive Design**: Mobile-first layout optimized for all devices
- **Job Listings**: Comprehensive job listing system with filtering and search
- **Email Applications**: Direct email integration for job applications
- **Micro-interactions**: Fluid animations and hover states
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   ├── jobs/              # Job-related components
│   └── application/       # Application flow components
├── data/                  # Static data
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Customization

### Adding New Jobs

Edit `/data/jobs.ts` to add new job listings:

```typescript
{
  id: 'unique-id',
  title: 'Job Title',
  department: 'Department',
  location: 'Location',
  type: 'Full-time',
  remote: true,
  // ... other properties
}
```

### Styling

The project uses Tailwind CSS with a custom color palette defined in `tailwind.config.js`. The primary color scheme uses shades of slate/gray for a professional appearance.

### Typography

The project uses Inter font with -5 letter spacing (`tracking-tight-5`) for a modern, clean look.

## Deployment

The site is ready for deployment on Vercel, Netlify, or any other Next.js-compatible hosting platform.

```bash
npm run build
npm start
```

## License

© 2024 GONDI. All rights reserved.
