# S'Tacos Dashboard — Vercel deploy

This folder is a static site: `index.html` (the whole dashboard) + `vercel.json` (security headers, no search-engine indexing).

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

To update later: replace `index.html` with the new version and run `npx vercel --prod` again.

## Important before sharing the link

- **Change the PINs.** The default PINs (manager 1234, staff 0000) are written in the page, so anyone with the link could log in. On Vercel, a PIN change is saved only in that browser.
- **No online sync on Vercel.** Each device keeps its own data (orders, stock, rota…). Online sync, the AI assistant and leave documents only work in the Claude version of the dashboard.
