# Jishnu Infotech — Enterprise PERN Stack Web Platform
> **Tagline:** Innovate • Integrate • Inspire  
> **Aesthetic:** Modern, premium SaaS & Enterprise Digital Engineering Portal (Stripe / Linear / Vercel grade polish)

---

## 🌟 Executive Overview
**Jishnu Infotech** is a premier technology partner specializing in Enterprise Multi-Cloud Systems, Applied AI & Autonomous Agentic Workflows, High-Throughput Modern SaaS Platforms, and Zero-Trust Cybersecurity.

This project is a complete, production-ready full-stack application built on the **PERN stack** (PostgreSQL, Express.js, React, Node.js) featuring an enterprise design system, blue and orange blended theme, responsive mobile drawer, animated timeline, interactive portfolio, blog engine, protected admin dashboard, and automated email notifications.

---

## 🎨 Design System & Color Palette
- **Primary Color:** Deep Blue (`#0B3D91`) to Bright Royal Blue (`#1E90FF`)
- **Accent Color:** High-energy Orange (`#FF7A00`) and Light Amber (`#FFA040`) for buttons, badges, highlights, and CTAs
- **Backgrounds:** Slate-50 / White for Light Mode; Dark Obsidian (`#080E1A`) & Deep Navy (`#0F172A`) for Dark Mode
- **Typography:**
  - Headings: `Poppins`, sans-serif (Weights: 600, 700, 800)
  - Body: `Inter`, sans-serif (Weights: 400, 500, 600)
- **Visual Effects:** Glassmorphism cards, glowing radial hero gradients, custom scrollbar, Framer Motion transitions, responsive mobile drawers, and floating WhatsApp support widget.

---

## 🏗️ Architecture & Tech Stack

### Frontend (`/client`)
- **Framework:** React 18 + Vite 5 (Lightning-fast HMR and optimized production bundles)
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v3 with dark/light mode toggle
- **Animations:** Framer Motion (scroll triggers, fade-ins, modal popups, carousels)
- **Forms & Validation:** React Hook Form + Zod schema validation
- **Icons:** React Icons (`react-icons/fa6`) & Lucide React (`lucide-react`)
- **API Client:** Axios with JWT request interceptors
- **SEO & Social:** React Helmet Async, OpenGraph tags, sitemap.xml, robots.txt
- **Interactions:** Canvas-confetti, custom toast notifications context

### Backend (`/server`)
- **Runtime:** Node.js (v20+) with Express.js REST API
- **Design Pattern:** MVC folder structure (`config`, `controllers`, `middleware`, `routes`, `services`)
- **Database & ORM:** PostgreSQL with Prisma ORM (`schema.prisma`, migrations, and seed script) + automated development in-memory data store fallback
- **Authentication:** Admin authentication with JSON Web Tokens (JWT) & bcrypt password hashing
- **Security:** Helmet headers, CORS policies, rate limiting (`express-rate-limit`) on public endpoints and login attempts
- **Email Dispatch:** Nodemailer service with branded HTML email templates

---

## 📁 Repository Structure
```
JIT_Website/
├── package.json               # Root scripts (concurrent execution, install:all)
├── README.md                  # Complete documentation and setup guide
├── client/                    # React Frontend
│   ├── public/
│   │   ├── logo.jpg           # Official Jishnu Infotech logo
│   │   ├── robots.txt         # SEO robots directives
│   │   └── sitemap.xml        # Search engine sitemap
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js      # Axios instance with auth interceptor
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Sticky navbar, logo, theme toggle, mobile drawer
│   │   │   ├── Hero.jsx       # Hero headline, CTAs, animated badges, client marquee
│   │   │   ├── About.jsx      # Story, mission, vision, animated counter stats
│   │   │   ├── Services.jsx   # 6 core cards with detail modal
│   │   │   ├── Portfolio.jsx  # Category filterable project grid & modal
│   │   │   ├── Process.jsx    # 5-step delivery methodology timeline
│   │   │   ├── Team.jsx       # Leadership photo cards with social links
│   │   │   ├── Testimonials.jsx # Auto-sliding client review carousel
│   │   │   ├── Pricing.jsx    # 3-tier pricing cards with monthly/annual toggle
│   │   │   ├── FAQ.jsx        # Searchable accordion FAQ
│   │   │   ├── BlogSection.jsx # Home preview of engineering articles
│   │   │   ├── Contact.jsx    # Validated contact form + Google map iframe
│   │   │   ├── Footer.jsx     # Newsletter form, social links with orange hover
│   │   │   ├── WhatsAppFloat.jsx # Floating WhatsApp beacon button
│   │   │   ├── ScrollProgress.jsx # Top scroll indicator bar
│   │   │   └── ...
│   │   ├── context/
│   │   │   ├── ThemeContext.jsx # Light/dark mode state
│   │   │   ├── AuthContext.jsx  # Admin JWT state and session
│   │   │   └── ToastContext.jsx # Toast notification alert system
│   │   ├── pages/
│   │   │   ├── HomePage.jsx     # Primary landing page
│   │   │   ├── BlogPage.jsx     # Full blog archive with search & filters
│   │   │   ├── BlogPostPage.jsx # Rich individual article reader view
│   │   │   ├── AdminPage.jsx    # Secure admin dashboard (CRUD + metrics)
│   │   │   ├── PrivacyPolicy.jsx # Legal privacy policy
│   │   │   ├── TermsConditions.jsx # Legal terms & conditions
│   │   │   └── NotFoundPage.jsx # 404 page
│   │   ├── App.jsx            # Router and layout configuration
│   │   ├── index.css          # Tailwind base & custom utility classes
│   │   └── main.jsx           # React DOM root entry
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
└── server/                    # Express REST API Backend
    ├── prisma/
    │   ├── schema.prisma      # PostgreSQL Prisma schema (9 models)
    │   └── seed.js            # Database seeder with realistic data
    ├── src/
    │   ├── config/
    │   │   ├── env.js         # Centralized environment variables
    │   │   ├── db.js          # Unified DB adapter (Prisma + Dev fallback)
    │   │   └── seedData.js    # Initial enterprise seed payload
    │   ├── controllers/       # Business logic controllers
    │   │   ├── authController.js
    │   │   ├── serviceController.js
    │   │   ├── projectController.js
    │   │   ├── teamController.js
    │   │   ├── testimonialController.js
    │   │   ├── pricingController.js
    │   │   ├── blogController.js
    │   │   ├── contactController.js
    │   │   ├── newsletterController.js
    │   │   └── adminStatsController.js
    │   ├── middleware/        # Security, validation, and error handlers
    │   │   ├── authMiddleware.js
    │   │   ├── errorHandler.js
    │   │   ├── rateLimiter.js
    │   │   └── validation.js
    │   ├── routes/            # Express route definitions
    │   ├── services/
    │   │   └── emailService.js # Nodemailer notification service
    │   └── index.js           # Server entry point & middleware mounting
    ├── .env                   # Local configuration
    └── .env.example           # Template environment configuration
```

---

## ⚡ Quick Start & Setup Instructions

### 1. Prerequisites
- **Node.js**: v18.x or v20.x
- **npm**: v9+ or v10+
- **PostgreSQL**: (Optional for local development; if not running, the application automatically uses the persistent development memory store so you can evaluate all features immediately without any database setup friction).

### 2. Installation
From the root directory:
```bash
# Install root, client, and server dependencies
npm run install:all
```
Or individually:
```bash
cd client && npm install
cd ../server && npm install
```

### 3. Environment Variables
In `server/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/jishnu_infotech?schema=public"
JWT_SECRET="jishnu_infotech_super_secret_jwt_key_2026_!@#$%^"
JWT_EXPIRES_IN="7d"

# Admin Seed Login Credentials
ADMIN_EMAIL="admin@jishnuinfotech.com"
ADMIN_PASSWORD="admin123Password!"
ADMIN_NAME="Jishnu Administrator"

# Email Notifications (optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="notifications@jishnuinfotech.com"
SMTP_PASS="your-app-password"
NOTIFICATION_EMAIL="contact@jishnuinfotech.com"
```

### 4. Running PostgreSQL Migrations & Seeding (When using PostgreSQL)
```bash
cd server
# Push schema to your PostgreSQL database
npx prisma db push

# Populate with full enterprise seed data
npm run prisma:seed
```

### 5. Running the Application
From the root directory, run both frontend and backend concurrently:
```bash
npm run dev
```
Or run separately:
- **Server:** `cd server && npm run dev` (Starts at `http://localhost:5000`)
- **Client:** `cd client && npm run dev` (Starts at `http://localhost:5173`)

---

## 🔐 Admin Dashboard & Default Credentials
Navigate to `http://localhost:5173/admin` or click the **Admin Portal** link in the navigation or footer.

- **Admin Email:** `admin@jishnuinfotech.com`
- **Password:** `admin123Password!`

### Dashboard Features:
1. **Overview & Metrics:** Real-time counters of active services, case studies, inbound inquiries, newsletter subscribers, and active database connection state.
2. **Project Management:** Add new case studies (title, client, category, live demo link, GitHub link, tech stack) and delete existing entries.
3. **Contact Inquiries:** View customer inquiries, toggle status (`unread` / `replied`), and delete records.
4. **Newsletter Audience:** Inspect email subscriber list and manage subscriptions.
5. **Team & Testimonials:** Direct operational visibility.

---

## 🚀 Deployment Guide

### 1. Database (Neon or Supabase)
1. Create a free serverless PostgreSQL database on [Neon.tech](https://neon.tech) or [Supabase.com](https://supabase.com).
2. Copy the connection string (e.g., `postgres://user:password@ep-sample.us-east-2.aws.neon.tech/neondb?sslmode=require`).
3. Set this as `DATABASE_URL` in your backend environment variables.
4. Run `npx prisma db push` and `node prisma/seed.js`.

### 2. Backend (Render / Railway / Fly.io)
1. Connect your Git repository.
2. Root Directory: `server`.
3. Build Command: `npm install && npx prisma generate`.
4. Start Command: `node src/index.js`.
5. Set environment variables:
   - `DATABASE_URL`: (Your Neon/Supabase PostgreSQL URL)
   - `JWT_SECRET`: (A strong random 64-character secret)
   - `CLIENT_URL`: `https://your-frontend.vercel.app`
   - `PORT`: `5000` (or leave default for platform)

### 3. Frontend (Vercel / Netlify)
1. Connect your Git repository.
2. Root Directory: `client`.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Set Environment Variable / Vite proxy:
   - Ensure API calls point to your deployed backend URL.

---

## 📱 Social Media & Communication Channels
All social media buttons in the footer and contact sections open official channels in a new tab:
- **LinkedIn:** `https://linkedin.com/company/jishnu-infotech`
- **X / Twitter:** `https://twitter.com/jishnu_infotech`
- **Facebook:** `https://facebook.com/jishnuinfotech`
- **Instagram:** `https://instagram.com/jishnuinfotech`
- **YouTube:** `https://youtube.com/@jishnuinfotech`
- **Telegram:** `https://t.me/jishnuinfotech`
- **WhatsApp:** Direct click-to-chat via `https://wa.me/919876543210` with pre-filled consultation request message.
