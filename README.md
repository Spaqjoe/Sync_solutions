<img src="https://github.com/user-attachments/assets/a1d7ced5-e6fc-41fd-9256-9d73a5f33597" alt="Sync Solutions logo" width="50" height="50">

# 🔗 Sync Solutions – AI Marketing Landing Page

<!-- <img src="https://github.com/user-attachments/assets/deab03fd-4234-44c3-a6ad-484c4a1a02a1" alt="Landing page preview"> -->
<img src="https://github.com/user-attachments/assets/0ff7129e-2f5d-48ae-913d-d4fd1507e613" alt="Sync Solutions landing page preview" style="border-radius: 12px;" width="1280">

## 🌟 Overview

Sync Solutions is a fully client-owned marketing landing page. There are no third-party authentication, licensing, or hosted dependencies bundled with this template—you can fork it, rename it, and deploy it without requesting access from anyone else. Configure a few environment variables and the site is ready to run under your own branding.

## 🚀 Core Features

- Hero, features, perks, testimonials, and pricing sections
- Dashboard-themed UI components built with shadcn/ui primitives
- Responsive layout optimized for Tailwind CSS
- Motion, parallax, and particle effects powered by Framer Motion, GSAP, and Magic UI
- TypeScript-first codebase with linting and formatting presets

## 💻 Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS + shadcn/ui + Magic UI
- Framer Motion & GSAP
- Prisma (MongoDB ready schema)
- React Hook Form & Zod

## 🛠️ Getting Started

1. **Clone**
   ```bash
   git clone https://github.com/Spaqjoe/Sync_solutions.git
   cd Sync_solutions
   ```
2. **Install**
   ```bash
   pnpm install
   ```
3. **Configure**
   Create a `.env` file at the project root and set at minimum:
   ```
   NEXT_PUBLIC_APP_NAME=Sync Solutions
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_APP_DOMAIN=localhost
   NEXT_PUBLIC_AUTHOR_NAME=Your Name
   DATABASE_URL="mongodb+srv://USER:PASS@HOST/db?retryWrites=true&w=majority"
   ```
   > These defaults ensure the site builds without relying on any external accounts. Adjust or remove database usage depending on your deployment needs.

4. **Run**
   ```bash
   pnpm dev
   ```
   The dev server runs on `http://localhost:3000`.

## 🎨 Customisation Tips

- Replace the logos in `public/icons/` and update favicons through `components.json` if desired.
- Update `NEXT_PUBLIC_APP_NAME` to change branding copy across the UI.
- Tailor marketing copy under `src/components/marketing` and dashboard copy in `src/components/dashboard`.

## 📦 Deployment

Deploy to any platform that supports Next.js (Vercel, Netlify, Render, etc.). Because the project no longer references gated resources, you can connect your repository and deploy immediately.

## 📜 License

This project remains under the MIT License. See [LICENSE](LICENSE) for details.
