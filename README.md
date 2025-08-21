# DoeHetZelfWijs.nl

Next.js website met dynamische projectdetailpagina's, API-routes en stock afbeeldingen (Unsplash).

## Scripts

```bash
npm install
npm run images   # download de stock afbeeldingen naar public/images
npm run dev      # start lokale dev server
npm run build    # build voor productie
npm start        # start productie build
npm test         # voer tests uit
```

## Deploy op Cloudflare Pages + Functions
- Build command: `npm run build`
- Output directory: `.vercel/output/static` (Cloudflare bepaalt dit automatisch voor Next.js)
- Zet **Functions** aan voor API routes.

## Licentie afbeeldingen
Afbeeldingen worden gedownload vanaf Unsplash via het `images` script. Voeg waar nodig credits toe in /public of footer volgens het Unsplash-licentiebeleid.
