# Muhammad Hassan — Portfolio

One React + Vite + Tailwind app that renders a different version of the portfolio per job role.
Same repo, same Cloudflare deployment.

## Role versions

Pick the role with the `role` query parameter:

| URL | Role |
| --- | --- |
| `/` | Default — Senior Mobile Developer & AI/ML Engineer |
| `/?role=android` | Senior Android Developer |
| `/?role=kmp` | Senior Kotlin Multiplatform Developer |
| `/?role=flutter` | Senior Flutter Developer |
| `/?role=ios` | Senior Native iOS & Android Engineer |
| `/?role=java` | Senior Java / Spring Boot Developer |
| `/?role=ai` | AI/ML Engineer (Python) |

Unknown values fall back to the default profile. Put the matching link on each resume,
e.g. `https://<your-domain>/?role=ai`.

## What changes per role

Only emphasis changes — headline, subtitle, highlighted pills, stats, skill-group order,
which projects come first (and the default project filter), the Upwork job title, and the contact text.
Employers, dates, years of experience and project facts are shared so every version stays consistent.

## Editing content

Everything lives in `src/data/profiles.js`:

- `person` — name, links, email
- `projects` — add a project once; list its title in a profile's `featured` to promote it
- `skillGroups` — years/levels shared by all roles
- `experience` — a `role` or `description` can be a string or `{ default, android, kmp, flutter, ios, java, ai }`
- `profiles` — one entry per role (add a new key to create a new version)

Years of experience used across the site: Android 10+, iOS 4+, Flutter 5+, KMP 5+, AI/ML (Python) 1+.

## Develop

```bash
npm install
npm run dev      # then open http://localhost:5173/?role=ai
npm run build    # outputs ./dist (served by Cloudflare)
```
