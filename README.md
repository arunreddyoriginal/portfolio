# Arun Reddy — Portfolio

A static portfolio for Arun Reddy in Hyderabad. The site uses plain semantic HTML, CSS, and focused JavaScript; it has no package install, build step, database, analytics, or framework dependency.

## Run locally

From the `portfolio` directory, serve the files on any static server. The verified preview URL is `http://127.0.0.1:4173/`.

## Structure

- `index.html` contains the identity, proof, capabilities, about, process, and contact sections.
- `styles.css` contains the design tokens, responsive layouts, component states, motion, and reduced-motion behavior.
- `app.js` handles the compact navigation, active section state, orchestrated reveals, scroll progress, restrained depth and pointer response, email copying, email-draft preparation, and enquiry text download.
- `assets/favicon.svg` provides the site icon.
- `check_site.py` validates the static document and preview responses.

## Enquiry delivery

The form validates locally and prepares an email draft addressed to `arunreddy.co@gmail.com`. It does not send or store data. A text download appears after draft preparation if the visitor needs a fallback.

## Content policy

The page contains only the identity, location, contact details, skills, and working approach supported by the existing project. Earlier self-initiated demo projects and their walkthrough pages were removed from the portfolio narrative. The portfolio itself is presented as the implementation proof; no client work, results, metrics, testimonials, or employment history are invented.

## Publishing

Upload this directory to a static host and use it as the public root. Add canonical and social-preview URLs after a final production domain is selected. The Google Fonts request may be replaced with self-hosted Instrument Sans and IBM Plex Mono files if the deployment requires no third-party font request.

## Verification

See `REVIEW.md` for the current browser, accessibility, syntax, and link checks.
See `MOTION_ENHANCEMENT_PLAN.md` for the locked motion direction, opportunity map, technology decision, and rejected effects.
