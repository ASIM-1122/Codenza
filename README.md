# Codenza — Client (React + Vite)

This repository contains the frontend "client" for Codenza — a React + Vite app with Tailwind CSS. The client implements marketing pages, pricing tables, and simple contact flow (EmailJS). Use this README to run and understand the main pieces.

## Quick start

1. Install dependencies
```sh
cd client
npm install
```

2. Run development server
```sh
npm run dev
```

3. Open in browser (Vite will print the local URL).

Build for production:
```sh
npm run build
npm run preview
```

See available scripts in [client/package.json](client/package.json).

## Project entry points

- App root: [client/src/main.jsx](client/src/main.jsx)
- HTML template: [client/index.html](client/index.html)
- Router & routes: [client/src/App.jsx](client/src/App.jsx)

## Environment variables

Contact form uses EmailJS via client-side API. Set these in [client/.env](client/.env) (Vite exposes env vars prefixed with `VITE_`):

- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

Referenced in [client/src/screens/userScreens/ContactUs.jsx](client/src/screens/userScreens/ContactUs.jsx).

## Key files & components

- Global config
  - Tailwind config: [client/tailwind.config.js](client/tailwind.config.js)
  - Vite config: [client/vite.config.js](client/vite.config.js)
  - ESLint config: [client/eslint.config.js](client/eslint.config.js)

- Common components
  - Navbar: [client/src/components/common/Navbar.jsx](client/src/components/common/Navbar.jsx)
  - Footer: [client/src/components/common/Footer.jsx](client/src/components/common/Footer.jsx)

- Pages / Screens
  - Landing: [client/src/components/users/Landing/LandingPage.jsx](client/src/components/users/Landing/LandingPage.jsx)
  - Services detail: [client/src/screens/userScreens/ServicesPage.jsx](client/src/screens/userScreens/ServicesPage.jsx)
  - Pricing page wrapper: [client/src/components/users/ServicesPage/PricingHeader.jsx](client/src/components/users/ServicesPage/PricingHeader.jsx)
  - About: [client/src/screens/userScreens/AboutUs.jsx](client/src/screens/userScreens/AboutUs.jsx)
  - Contact: [client/src/screens/userScreens/ContactUs.jsx](client/src/screens/userScreens/ContactUs.jsx)
  - Auth page: [client/src/screens/userScreens/SingUpANDLogin.jsx](client/src/screens/userScreens/SingUpANDLogin.jsx)

- Pricing & services data
  - Canonical plans used across the UI: [`PLANS`](client/src/utils/services.js) — [client/src/utils/services.js](client/src/utils/services.js)
  - Service rows used in pricing tables/accordion: [`SERVICES`](client/src/data/services.js) — [client/src/data/services.js]

- Services detail components (exports)
  - See [client/src/components/users/servicesDetail/index.js](client/src/components/users/servicesDetail/index.js) which exports [`Layout`](client/src/components/users/servicesDetail/index.js), [`ServiceDetailHero`](client/src/components/users/servicesDetail/index.js), [`PricingTable`](client/src/components/users/servicesDetail/index.js), [`PricingAccordion`](client/src/components/users/servicesDetail/index.js), [`ServiceRow`](client/src/components/users/servicesDetail/index.js), and [`CTAContact`](client/src/components/users/servicesDetail/index.js).

## Architecture notes

- Routing uses React Router v6+ (see [client/src/main.jsx](client/src/main.jsx) and [client/src/App.jsx](client/src/App.jsx)).
- Desktop vs mobile pricing UI:
  - Desktop table: [client/src/components/users/servicesDetail/PricingTable.jsx](client/src/components/users/servicesDetail/PricingTable.jsx)
  - Mobile accordion fallback: [client/src/components/users/servicesDetail/PricingAccordion.jsx](client/src/components/users/servicesDetail/PricingAccordion.jsx)
- Plans comparison logic dynamically derives features from [`PLANS`](client/src/utils/services.js) in [client/src/components/users/ServicesPage/PlansCompare.jsx](client/src/components/users/ServicesPage/PlansCompare.jsx).

## Styling

- Tailwind is used via PostCSS + Vite:
  - Tailwind directives are in [client/src/index.css](client/src/index.css)
  - Tailwind config: [client/tailwind.config.js](client/src/tailwind.config.js)
- Some images referenced from [client/src/assets/](client/src/assets)

## Linting

Run the linter:
```sh
cd client
npm run lint
```
Configuration: [client/eslint.config.js](client/eslint.config.js)

## Troubleshooting

- If images do not load, ensure assets exist under [client/src/assets](client/src/assets).
- If EmailJS fails, confirm env vars in [client/.env](client/.env) and that the EmailJS template expects the fields sent by [client/src/screens/userScreens/ContactUs.jsx](client/src/screens/userScreens/ContactUs.jsx).
- If Tailwind classes are not applied, ensure Vite dev server was restarted after adding new classes or updating tailwind config.

## Contribution

- Follow code style in existing components.
- Add new UI pieces under [client/src/components](client/src/components).
- Keep shared data in [client/src/utils/services.js](client/src/utils/services.js) or [client/src/data/services.js](client/src/data/services.js).

---

If you want, I can:
- Add a short CONTRIBUTING.md or PR template.
- Add a sample .env.example with EmailJS variables.