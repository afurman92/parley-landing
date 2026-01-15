# PARLEY Landing Page - Project Context

## Project Overview
Landing page for **PARLEY** - a real-time political intelligence module of StakeManager® by DAAT.

## Key Product Info
- **Tagline:** "Be smart, be human"
- **Main differentiator:** Alerts in 2-3 minutes (fastest in market), Reports in 15-20 minutes
- **Value prop:** "We're a service, not just a platform" - 25+ years experience
- **Target users:** Advocacy orgs, Government Relations, Public Affairs Consulting
- **Validated client:** CIJA (Canada)

## Tech Stack
- React 19 + Vite 7
- Tailwind CSS v4 (uses @theme in CSS, not config file)
- Framer Motion 12
- Lucide React icons
- React Hook Form

## Color Palette (in `src/index.css`)
```css
--color-parley-navy: #0A1628
--color-parley-deep-blue: #1E3A5F
--color-parley-slate: #7D8592
--color-parley-steel: #4A6FA5
--color-parley-gold: #B8985F
--color-parley-blue: #4A90E2
```

## Project Structure
```
parley-landing/
├── public/
│   └── logo.png              # PARLEY logo (transparent)
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Fixed nav + language toggle
│   │   ├── Hero.jsx          # Main hero with mock dashboard
│   │   ├── SpeedBanner.jsx   # Gold banner with metrics
│   │   ├── ProblemStatement.jsx
│   │   ├── Features.jsx      # 3 deliverables
│   │   ├── ServiceNotPlatform.jsx
│   │   ├── AdvancedCapabilities.jsx
│   │   ├── SourcesMonitored.jsx
│   │   ├── SocialProof.jsx   # CIJA testimonial
│   │   ├── UseCases.jsx      # 3 audience cards
│   │   ├── FinalCTA.jsx      # Demo request form
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useLanguage.jsx   # EN/ES context provider
│   ├── i18n/
│   │   └── translations.js   # All EN + ES copy
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Tailwind + PARLEY theme
└── index.html                # SEO meta tags
```

## Key Files to Edit
- **Copy/text:** `src/i18n/translations.js` (both EN and ES)
- **Colors:** `src/index.css` (@theme section)
- **Contact email:** Currently `hello@daat.cloud`

## Commands
```bash
cd parley-landing
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## Features Implemented
- [x] 11 sections as per MASTER_RULE.txt
- [x] EN/ES language toggle (persists in localStorage)
- [x] Framer Motion scroll animations
- [x] Demo request form with validation
- [x] Responsive design (mobile-first)
- [x] PARLEY color palette
- [x] Mock UI previews in features

## Competitor Analysis Summary
See full analysis in: `C:\Users\afurm\.claude\plans\cheeky-wandering-eagle.md`

**Key insight:** PARLEY's 2-3 minute alerts are FASTER than all competitors:
- Parlamento.ia: vague "real-time"
- WithPage: ~12 minutes
- FiscalNote: 60 minutes

## To Share with Team
```bash
ngrok http 5173
```
This creates a public URL like `https://xxxx.ngrok.io`

## Assets Location
- Logo: `c:\Entornos\WEB_PARLEY\Logos parley\`
- Brochure: `c:\Entornos\WEB_PARLEY\DAAT_PARLEY_BROCHURE_2026.pptx`
- Master spec: `c:\Entornos\WEB_PARLEY\MASTER_RULE.txt`
