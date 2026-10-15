# URSPACE website

A plain HTML/CSS/JavaScript site with no build step. Upload the folder anywhere that serves static files, such as GitHub Pages, Netlify or Cloudflare Pages.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us |
| `programs.html` | Programs |
| `gallery.html` | Design Gallery (development projects + design sites) |
| `site.html#sajeong` (any site id) | One design site, with comments |
| `case-studies.html` | Case Studies |
| `apply.html` | Apply (`#education` opens the Education tab, `#site-sajeong` preselects a site) |
| `login.html`, `signup.html` | Accounts |
| `privacy.html`, `terms.html` | Privacy Policy and Terms of Service (English and Korean, edited directly in each file) |
| `404.html` | Shown for broken links on GitHub Pages |

## Where to edit things

- **Projects and design sites:** `assets/js/data-places.js`. Copy a `{ ... }` block to add one, then put its photo in `assets/img/gallery/` or `assets/img/sites/`.
- **Case studies:** `assets/js/data-cases.js`.
- **Any text in English or Korean:** `assets/js/i18n.js`. Every key has an `en` and a `ko` line.
- **Brochures:** the PDFs are in `assets/brochure/`, with page previews in `assets/img/brochure/` (`en-1.webp`, `ko-1.webp`, …). If you replace a brochure, replace its previews too and update `pages` in `config.js`.
- **Email, Instagram, default language:** `assets/js/config.js`.
- **Colors and fonts:** the top of `assets/css/style.css`.

The header, mobile menu and footer are built once in `assets/js/layout.js`, so a menu change there applies to every page.

## Forms, accounts and comments

- **Log in / sign up / Google / password reset:** Firebase Authentication (project `urspace-e2a51`, settings in `config.js`).
- **Comments:** Cloud Firestore. Paste `firestore.rules` into Firebase console → Firestore Database → Rules. Only the author can delete a comment.
- **Education applications and design uploads:** emailed through FormSubmit to the address in `config.js` (`educationEmail`, `designEmail`). Design files can be up to 10 MB. The first submission of each sends an activation email; click its link once.
- If Firebase or FormSubmit can't be reached (for example on your computer or in a preview), the site falls back to preview mode and says so on the form.

## Publishing on GitHub Pages

1. Create a repository and upload everything in this folder (keep the folder structure).
2. Go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. For `urspacedesign.com`, add the domain under **Settings → Pages → Custom domain**, then point the domain's DNS to GitHub Pages as described there, and tick **Enforce HTTPS** once it's available.
4. In Firebase console → Authentication → Settings → Authorized domains, make sure `urspacedesign.com` (and your `github.io` address, if you test there) is listed.

## After you change a file

Browsers keep old copies of scripts and styles. Each page loads them with `?v=20261015e` at the end. When you publish changes, change that number in every `.html` file (for example to `?v=20261102`) so visitors get the new version.

## Clean addresses

On the live site, pages show without `.html` (urspacedesign.com/privacy, /about, /gallery). This is switched on with `cleanUrls` in `config.js`. If your host doesn't serve `/privacy` directly, `404.html` sends the visitor to `privacy.html`, which then shows the clean address again. Keep `404.html` in the root folder.
