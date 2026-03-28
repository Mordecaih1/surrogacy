# Surrogacy Consulting Services Limited

Static multi-page website prepared for Vercel and GitHub Pages deployment, and suitable for manual static hosting elsewhere.

## Structure

- `index.html` redirects visitors to `/home/`
- `home/`, `about-us/`, `services/`, and `contact-us/` each contain their own `index.html`
- `assets/` contains shared CSS, JavaScript, and brand icons

## Deployment Notes

- Custom domain: `surrogacyconsultingltd.com`
- Contact form: opens a drafted email to `info@surrogacyconsultingltd.com`
- External dependencies: Google Fonts, Google Maps embed, and remote image URLs

## Netlify

1. Create a new static site in Netlify from this folder or connected repository.
2. Publish directory: `.`
3. Build command: leave blank
4. Add the custom domain `surrogacyconsultingltd.com` in Netlify domain settings.
5. No Netlify-specific config file is required for this project.

## Vercel

1. Import the project into Vercel.
2. Framework preset: `Other`
3. Build command: leave blank
4. Output directory: leave blank
5. Add the custom domain `surrogacyconsultingltd.com` in Vercel project settings.
6. Keep `vercel.json` in the project root so `/` redirects to `/home/`.

## GitHub Pages

1. Push the project to a GitHub repository.
2. In repository settings, enable GitHub Pages and deploy from the default branch root.
3. Keep `.nojekyll` in the root so the folder structure is served as-is.
4. Keep `CNAME` in the root for the custom domain.
5. Point your DNS records to GitHub Pages.

## Recommended Next Step

If you want form submissions to send without relying on the visitor's email app, connect the form to a backend or hosted form service before going live.
