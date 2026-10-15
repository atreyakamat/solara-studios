# Solara Studios

The Solara Studios website: website design and digital marketing in Goa, published at https://solara.atreyakamat.dev via Netlify.

- React, TypeScript and Vite, with Framer Motion for the scroll and pointer motion.
- All copy and prices live in `src/content.ts`.
- The engraved cobalt toile art is drawn in code in `src/art/` (seeded, so it draws the same every time).
- `/demo/` is the Casa Azulejo sample page, served as a static file from `public/demo/`.
- The enquiry form uses Netlify Forms (`enquiry`). Add a notification email in Netlify under Forms.

```bash
npm install
npm run dev      # local preview
npm run build    # production build into dist/ (what Netlify runs)
```
