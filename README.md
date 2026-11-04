# S'Tacos Dashboard — Vercel deploy

This folder is a static site: `index.html` (the whole dashboard), `vercel.json` (security headers, no search-engine indexing), and the files that make it an installable app that opens without internet: `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`.

## Deploy (Windows, from this folder)

1. Install Node.js LTS from https://nodejs.org (skip if `node -v` already works).
2. Open **PowerShell** in this folder (Shift + right-click → "Open PowerShell window here").
3. Run:
   ```
   npx vercel login
   npx vercel --prod
   ```
   Answer the questions: *Set up and deploy?* **Y** · *Which scope?* your account · *Link to existing project?* **N** · *Project name?* `stacos-dashboard` · *In which directory is your code?* **./** · *Modify settings?* **N**.
4. Vercel prints your live link, e.g. `https://stacos-dashboard.vercel.app`.

To update later: replace the files with the new version and run `npx vercel --prod` again.

## Install it like an app

On a tablet or phone, open the link, then **Add to Home Screen** (iPhone: Share → Add to Home Screen; Android/Chrome: menu → Install app). It opens full screen and still opens when the internet is down.

## Table QR codes

In the Manager dashboard → **Menu display** → **Table QR codes**, write this Vercel link as the web address, choose the number of tables and press **Print all**. Each code opens the kiosk in table mode (`?table=5`).

## Important before sharing the link

- **Change the PINs.** The default PINs (manager 1234, staff 0000) are written in the page, so anyone with the link could log in. On Vercel, a PIN change is saved only in that browser.
- **No online sync on Vercel.** This also means orders from customers' own phones (table QR) do not reach the kitchen screen yet — that needs the online database step.
- **Each device on its own:** Each device keeps its own data (orders, stock, rota…). Online sync, the AI assistant and leave documents only work in the Claude version of the dashboard.

- **Live weather** for the forecast works on Vercel (Open-Meteo, free, no key).
