# CoreERP — Landing page

Professional, responsive landing page for **CoreERP**, an all-in-one business management platform (ERP) for SMEs.

The site showcases the platform end to end: a dashboard demo, the 9 business modules, realistic interface previews (CRM, inventory, finance, HR, reporting…), roles & permissions, integrations, security, pricing, an FAQ, and a final call-to-action.

> **[🇫🇷 Version française](/README.md)**

## Project description

CoreERP centralizes a company's operations — customers, sales, inventory, accounting, and employees — into a single platform. This landing page presents the product with **realistic ERP previews built in pure HTML/CSS** (no images), in a restrained enterprise-software style:

- neutral backgrounds, thin borders, simple cards
- generous spacing, structured grids
- no gradients, no unnecessary animations

### Page sections

1. **Navbar** — anchor links (Product, Modules, Solutions, Pricing, Resources), mobile menu.
2. **Hero** — *"Run your business from one platform."* + ERP dashboard (revenue €124,850, orders 842, customers 1,284, products 3,542, pending invoices 27, revenue chart, recent orders, stock alerts, invoices).
3. **Modules** — 9 modules (CRM, Sales, Inventory, Purchasing, Invoices, Accounting, HR, Projects, Analytics), each with a working mini-preview.
4. **Deep dives** — CRM (customer table), Inventory (low-stock indicators), sales workflow (Quote → Order → Invoice → Payment), Finance (revenue/expenses, cash flow), Employees (HR directory), Reporting (KPIs and charts).
5. **Roles & permissions** — permission matrix per team.
6. **Integrations** — Stripe, PayPal, Google Workspace, Microsoft 365, Slack, Webhooks & API.
7. **Security** — encryption, permissions, backups, audit logs.
8. **Pricing** — Starter / Professional / Enterprise with a monthly/annual toggle (−20%).
9. **FAQ** — accordion of frequently asked questions.
10. **Final CTA** — *"Manage your entire business from one place."*
11. **Footer** — links, legal, social networks.

## Tech stack

| Technology | Role |
| --- | --- |
| [Next.js 16](https://nextjs.org) (App Router) | React framework, server/static rendering |
| TypeScript | Static typing |
| Tailwind CSS v4 | Utility styles |
| lucide-react | Icons |
| framer-motion | Scroll-reveal animations (minimal) |

> ⚠️ This project uses **Next.js 16**, which has compatibility changes: **Node.js 20.9 or newer** is required. Read the documentation bundled in `node_modules/next/dist/docs/` before making any changes.

## Prerequisites

- **Node.js ≥ 20.9** ([download](https://nodejs.org))
- npm (bundled with Node) — or pnpm, declared as the package manager in `package.json`

Check your version:

```bash
node --version
```

## Installation

```bash
# 1. Clone the repository
git clone <repository-url> core-erp
cd core-erp

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open **http://localhost:3000** in your browser.

> If port 3000 is already in use, Next.js automatically picks another port (e.g. 3002) and prints it in the console.

## Usage

### Development server

```bash
npm run dev
```

- Hot reloading (Turbopack): changes are applied instantly.
- The site is **fully static** (server-rendered): the home page is pre-generated at build time.

### Production build

```bash
npm run build
```

Compiles the application, checks TypeScript types, and pre-generates the static pages.

### Production start

```bash
npm start
```

Serves the production build on **http://localhost:3000**.

### Linting

```bash
npm run lint
```

Runs ESLint (flat config). `next lint` no longer exists in Next.js 16 — the `lint` script calls ESLint directly.

## Project structure

```
core-erp/
├── app/
│   ├── globals.css        # Tailwind v4 theme, design tokens, base styles
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── page.tsx           # Assembles all sections
├── components/
│   ├── ui/                # Primitives: buttons, badges, tables, charts,
│   │                      # KPI cards, window chrome, containers…
│   ├── previews/          # ERP interface previews (dashboard, CRM, inventory…)
│   └── sections/          # Landing page sections (hero, pricing, FAQ…)
├── lib/utils.ts           # `cn` helper (class merging)
└── public/                # Favicon and default SVGs
```

### Key entry points

| File | Role |
| --- | --- |
| `app/page.tsx` | Order of the page sections |
| `app/layout.tsx` | Geist fonts, metadata, `<html>` tag |
| `app/globals.css` | `brand` colors, responsive table → mobile cards |
| `components/sections/*` | Each block of the landing page |
| `components/previews/*` | The product's UI mockups |
| `components/ui/charts.tsx` | Hand-built SVG/HTML charts (line, bars, donut, sparkline) |

## Customization

- **Primary color**: edit the `--color-brand-*` palette in `app/globals.css`.
- **Content**: the demo data (customers, products, orders…) are typed constants at the top of each file in `components/previews/*` and `components/sections/*`.
- **Pricing & FAQ**: edit `components/sections/pricing.tsx` and `components/sections/faq.tsx`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (typecheck + static pre-generation) |
| `npm start` | Production server |
| `npm run lint` | ESLint check |
