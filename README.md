# JC Coder Portfolio 🚀

A modern, high-performance portfolio website built with **TanStack Start**, **React**, and **Tailwind CSS v4**. This version is optimized for speed, SEO, and aesthetics, featuring dynamic animations and a clean professional layout.

---

## 🛠 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React with TanStack Router + Vite)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **State & Routing**: [TanStack Router](https://tanstack.com/router)
- **Validation**: [Zod](https://zod.dev/)
- **Analytics**: [PostHog](https://posthog.com/) & [Google Analytics](https://analytics.google.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd my-portfolio-v2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

---

## ✍️ How to Edit Content

Most of the content is configuration-driven, meaning you don't need to touch the UI components to update your information.

### 1. Main Portfolio Data

All personal info, projects, experience, education, and tools are located in:
👉 `src/data/portfolio.ts`

To update your info:

- Open the file and modify the `portfolioData` object.
- **Projects**: Add or edit objects in the `projects` array.
- **Experience**: Update your roles in the `experience` array.
- **Tools**: Add your tech stack icons and categories in the `tools` array.

### 2. SEO & Metadata

Meta tags, OG images, and page titles are managed in:
👉 `src/lib/seo.ts`

- Update `SITE_URL` to your production domain.
- Modify `DEFAULT_SEO` for site-wide settings.
- Customize `PAGE_SEO` for specific routes (Home, Projects, etc.).

### 3. Media & Assets

Images and logos should be placed in the `public/` directory:

- **Project Logos**: `public/projects-logo/`
- **OG Image**: `public/og-image-jc.jpg`
- **Social Icons**: Managed via `lucide-react` in components or internal logic.

---

## 🔑 Environment Variables

To enable analytics and other services, create a `.env.local` file in the root directory:

```env
VITE_PUBLIC_POSTHOG_KEY=your_posthog_key
VITE_PUBLIC_POSTHOG_HOST=https://app.posthog.com
VITE_PUBLIC_GA_ID=your_google_analytics_id
```

---

## 📊 Analytics & Tracking

This project is integrated with two powerful analytics tools:

1.  **PostHog**: Used for deep product analytics, session recordings, and feature flags. Configuration resides in `src/routes/__root.tsx`.
2.  **Google Analytics**: Used for high-level traffic analysis. The GTAG script is automatically injected if `VITE_PUBLIC_GA_ID` is present in your environment variables.

---

## 🏗 Project Structure

- `src/routes/`: TanStack Router file-based routing.
- `src/components/`: Reusable UI components (Shadcn + Custom).
- `src/data/`: Static data and content configurations.
- `src/lib/`: Utility functions and SEO configurations.
- `public/`: Static assets (images, redirects, robots.txt, sitemap).

---

## 🚢 Deployment

The project is configured for **Netlify**.

1. Build for production:
   ```bash
   npm run build
   ```
2. The output will be in the `.output` directory.
3. Push to GitHub and connect to Netlify for automatic deployments (configured via `netlify.toml`).

---

## 🧪 Testing & Linting

- **Test**: `npm run test` (Vitest)
- **Lint**: `npm run lint`
- **Format**: `npm run format`
- **Full Check**: `npm run check`

---

Built with ❤️ by [JC Coder](https://jccoder.xyz)
