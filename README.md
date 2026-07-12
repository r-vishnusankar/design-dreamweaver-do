# The Virtual Invite

Premium **paper and digital** invitation platform — a scalable monorepo for lead generation and client invitation websites.

## Structure

```text
project-root/
├── src/                          # Studio (marketing site) — Lovable-compatible
├── apps/invitations/
│   ├── _template/                # Scaffold for new clients
│   └── arjun-meera/              # Sample wedding invitation
├── packages/
│   ├── types/                    # InvitationConfig, PortfolioEntry
│   ├── ui/                       # Shared styles + utilities
│   ├── invitation-kit/           # Reusable invitation sections
│   └── config/                   # Shared TypeScript config
└── tooling/create-invitation/    # CLI to add new clients
```

## Quick start

```bash
# Install dependencies
npm install

# Run marketing studio
npm run dev:studio

# Run sample invitation (Arjun & Meera)
npm run dev:invitation
```

## Add a new client

```bash
npm run create-invitation -- --slug ram-sitha --type wedding --tier standard --names "Ram & Sitha"
npm run dev -w @invitations/ram-sitha
npm run build -w @invitations/ram-sitha
```

Deploy the `dist/` folder to Netlify. Site name convention: `tvi-<slug>`.

## Packages

| Package | Price | Best for | Hosting (customer-facing) |
|---------|-------|----------|---------------------------|
| **Essential** | ₹999 | Template + countdown + location | Private shareable link |
| **Signature** | ₹2,999 | Custom domain + RSVP + **template music** | Custom domain |
| **Atelier** | ₹9,999 | Full RSVP, YouTube live, photo album, custom design, **music by choice** | Custom domain |
| **Custom** | Quote | Unique scope (multi-language, paper+digital, extras) | Bespoke |

> **Note:** Netlify is used internally for hosting. Never mention Netlify in customer-facing copy — say “private shareable link” or “custom domain”.

### Feature categories

| Category | Essential | Signature | Atelier |
|----------|-----------|-----------|---------|
| **Design** | Template | Template + colours | Custom design + fonts |
| **Core pages** | Countdown, location, event info | + Itinerary, story | All |
| **RSVP & guests** | — | Yes/No RSVP | Full form (meals, +1, dietary), messages, export |
| **Media & live** | — | Background music (from template) | Photo album, YouTube live, **music by choice**, welcome video |
| **Hosting & share** | Private shareable link | + Custom domain, WhatsApp, QR | All |
| **Support** | 1 revision | 2 revisions | Unlimited + priority |

## Environment variables

| Variable | App | Description |
|----------|-----|-------------|
| `VITE_SAMPLE_INVITE_URL` | Studio | URL for portfolio live sample (e.g. `https://tvi-arjun-meera.netlify.app`) |
| `VITE_STUDIO_URL` | Invitations | Link back to marketing site in invitation footer |

## Architecture notes

- Each client invitation is an **independent Vite app** under `apps/invitations/<slug>/`.
- Shared UI and sections live in `packages/` — update once, all clients benefit.
- Studio stays at repo root for **Lovable** compatibility.
- **Essential** → private shareable link. **Signature / Atelier** → custom domain. Hosting is Netlify internally (never shown to customers).
