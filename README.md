# Abdulelah Habashneh — Portfolio Website

A professional, self-contained static portfolio for a **Junior .NET Core Developer**
specializing in healthcare web applications (ASP.NET Core MVC, C#, Entity Framework Core,
Clean Architecture, CQRS/MediatR).

Built with pure HTML, CSS, and vanilla JavaScript — no build tools, no dependencies.
You can upload this entire `site/` folder to **any** static host.

---

## Live Preview & Test Locally

**Option A — Open directly (recommended):**
Just double-click `index.html` in your browser. Everything works instantly.

**Option B — Local server:**
```bash
cd site
npx serve .
# or
python -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## How to Publish (Pick One)

### 1) GitHub Pages (free, most professional for developers)
1. Create a GitHub account if you don't have one.
2. Create a **new repository** named exactly `yourusername.github.io`.
3. Upload the contents of the `site/` folder into the repo.
4. Go to **Settings → Pages** → Source → **Deploy from a branch** → `main` → `/ (root)`.
5. Your site is live at `https://yourusername.github.io`.

> Pro tip: A GitHub Pages site linked from your resume shows recruiters you
> understand **version control and deployment** — a huge plus for a developer role.

### 2) Netlify Drop (fastest, no account needed initially)
1. Go to `https://app.netlify.com/drop`.
2. Drag and drop the `site/` folder.
3. You get a live URL instantly, e.g. `https://abdulelah-site.netlify.app`.
4. (Optional) Create a free account to keep it permanent and add a custom domain.

### 3) Vercel
1. Go to `https://vercel.com` and sign up.
2. Click **New Project → Upload** → select a folder containing `index.html`.
3. Click **Deploy**. You get a URL instantly.

### 4) cPanel / traditional hosting
1. Log into your hosting cPanel.
2. Open **File Manager** → `public_html` (or `htdocs`).
3. Upload all files from the `site/` folder.
4. Delete any existing `index.html` to avoid conflicts.

---

## How to Get the Print-Ready PDF Files

The site includes two downloadable documents reachable from the **Downloads** section:

- **Executive Summary** (`print-executive.html`) — one page
- **Detailed Portfolio** (`print-detailed.html`) — four pages

To save them as PDF:
1. Click the "View / Print" button (opens in a new tab).
2. The print dialog appears automatically.
3. Choose **Save as PDF** as the destination, then Save.

These are what you attach to job applications and bring to interviews.

---

## Customization

### Update your real metrics
Currently the site uses your CV-derived numbers (200+ users, 3 modules, 500+ records, etc.).
Replace these with real figures from Microcare when available:

- `index.html` — hero stats, project impact lines, achievements
- `print-executive.html` / `print-detailed.html` — the printable documents

### Change your contact / links
Open `index.html` and update:
- Email: `alhabashnehabood@gmail.com`
- LinkedIn: your profile URL
- Add a GitHub link if you have one

### Replace the placeholder logo
The favicon (`AH`) is generated inline as an SVG. To use your own photo:
1. Add your photo to the `assets/` folder.
2. Reference it in the hero or a new About section.

---

## File Structure

```
site/
├── index.html            # Main portfolio (single page)
├── 404.html              # Custom not-found page
├── print-executive.html  # One-page printable summary
├── print-detailed.html   # Four-page printable portfolio
├── css/
│   └── style.css         # All styles
├── js/
│   └── main.js           # Nav, scroll, reveal animations
├── assets/               # For images/files you add later
└── downloads/            # Place additional PDFs here if needed
```

---

## Tips for Maximum Hiring Impact

1. **Link this site from your resume** — recruiters can see your work instantly.
2. **Add the URL to your LinkedIn** → Featured section, About section, and Contact info.
3. **Keep metrics truthful** — only use figures you can defend in an interview.
4. **Refresh it as you grow** — add new projects, certifications, and metrics.
5. **Analytics (optional):** add a free [Plausible](https://plausible.io) or
   [Google Analytics](https://analytics.google.com) snippet to see who visits.

---

© 2026 Abdulelah Habashneh
