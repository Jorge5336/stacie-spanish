stacie — Spanish practice web app (static build)
===============================================

This folder is already "deployable" as a static website.

How to deploy on Netlify (drag and drop):
1) Go to https://app.netlify.com/drop
2) Drag the **contents of this folder** (or the whole zip) into the drop area.
3) Wait ~30 seconds; you'll get a live URL like
   https://stacie-something.netlify.app

How to deploy on Vercel (import):
1) Create a new project and select "Other" framework (it's a static site).
2) Deploy from this folder. Output directory is the project root.

Local preview (double-click):
- You can simply open index.html in a modern browser.
- Some features (microphone) require using a local server due to browser security rules.
  Quick way: `python3 -m http.server` then open http://localhost:8000

Notes:
- Tailwind, React, and Babel are loaded from public CDNs at runtime.
- Speech recognition uses the browser's Web Speech API (works best on Chrome).
- Accents are optional for pass/fail; scoring is word-based with small tolerance.

Cute site name ideas if "stacie" is taken:
- stacie-apapacho
- stacie-habla
- stacie-suave
- stacie-comunidad
- stacie-otisycia
- stacie-queremos
- stacie-animada

— Built with cariño.

## Deploy steps (GitHub → Netlify)

1. Create a new empty repo on GitHub (e.g., `stacie-spanish`) — keep it Public.
2. Click **Add file → Upload files** and drag the **files from this folder** (not the folder itself).
3. Commit to `main`.
4. On Netlify: **Add new site → Import from Git → GitHub → select your repo**.
5. Build command: *(leave blank)*. Publish directory: `/`.
6. Deploy.

## Edit and update
- Make changes in `index.html` inside the `<script type="text/babel">` block.
- Commit to GitHub — Netlify auto-deploys.
- Local test for mic features: `python3 -m http.server` then open http://localhost:8000

## Cute domain ideas if `stacie` is taken
- stacie-apapacho
- stacie-habla
- stacie-suave
- stacie-comunidad
- stacie-otisycia
- stacie-queremos
- stacie-animada
