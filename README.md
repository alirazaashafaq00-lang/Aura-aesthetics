# Aura Aesthetics

Luxury aesthetics clinic platform — marketing site, patient dashboard, AI skin analyzer.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Three.js · MongoDB (Mongoose) · Cloudinary · Resend

## Getting started
```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

## Structure
See `app/` for routes grouped by (marketing), (auth), (dashboard), and `api/`.
Components live under `components/`, data models under `models/`, and shared logic under `lib/` and `hooks/`.

This is a scaffold: homepage and shared layout (navbar/hero/footer) are fully built out;
inner pages are functional starting points ready to be filled in with real content and wired to the API routes.
