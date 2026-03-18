# 🦁 Simhaavatar — Premium Men's Temple Jewellery Rental

> Royal Heritage meets High-Tech Minimalism  
> Next.js 14 · React · GSAP · Zustand · Mysore

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
simhaavatar/
├── app/
│   ├── page.js              # Homepage — hero + bento grid
│   ├── contact/page.js      # Contact us + inquiry form
│   ├── faq/page.js          # FAQ accordion
│   ├── about/page.js        # Brand story + team + timeline
│   ├── not-found.js         # 404 page
│   ├── layout.js            # Root layout + metadata
│   ├── globals.css          # Design tokens + reset
│   ├── components/
│   │   ├── Header.js        # Sticky nav with active link highlighting
│   │   ├── Footer.js        # Site footer
│   │   ├── JewelCanvas.js   # Animated 2D jewellery renderer (5 models)
│   │   ├── BentoCard.js     # Look card for the grid
│   │   ├── LookModal.js     # Full-screen look detail modal
│   │   └── RentalForm.js    # Booking form → WhatsApp
│   └── lib/
│       ├── tokens.js        # All data: looks, hours, FAQ, team, colors
│       └── store.js         # Zustand state management
├── next.config.js
├── jsconfig.json
└── package.json
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Portfolio homepage — hero, bento grid, 5 looks |
| `/contact` | Contact form, studio hours, map, social links |
| `/faq` | Accordion FAQ — 13 questions across 3 categories |
| `/about` | Brand story, values, timeline, team |

---

## Customising Content

All content lives in **`app/lib/tokens.js`** — edit this file to update:

- Look names, descriptions, prices → `LOOKS` array
- Studio hours → `STUDIO_HOURS` array
- FAQ questions & answers → `FAQ_DATA` array
- Team members → `TEAM` array
- WhatsApp number → `buildWhatsAppLink()` function (replace `919999999999`)

---

## Wiring the Contact Form

The form currently opens WhatsApp with a pre-filled message.  
To also capture submissions by email, add Formspree:

1. Go to [formspree.io](https://formspree.io) → create a free form
2. Copy your form ID
3. In `app/contact/page.js`, find `handleSubmit()` and uncomment the Formspree fetch block
4. Replace `YOUR_FORM_ID` with your actual ID

---

## Deploy to Vercel

```bash
npx vercel
```

That's it. Vercel auto-detects Next.js and deploys in ~2 minutes.

---

## Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--gold` | `#D4AF37` | Mysore Gold — primary accent |
| `--gold-light` | `#F5E27A` | Shine gold — highlights |
| `--gold-dark` | `#8B6914` | Antique gold — muted |
| `--obsidian` | `#0B0B0B` | Primary dark background |
| `--void` | `#050505` | Deepest black |
| `--ivory` | `#F8F3E8` | Light text / Samskriti bg |

Fonts: `Cormorant Garamond` (display) · `Montserrat` (body) · `JetBrains Mono` (labels)

---

## The 5 Looks

| # | Look | Piece | Price |
|---|------|-------|-------|
| 01 | Maharaja | Ganda Berunda Kanthi Necklace | ₹4,800/day |
| 02 | Yoddha | Narasimha Baju Band | ₹3,200/day |
| 03 | Dharma | Rudraksha Lingam Kanthi | ₹2,100/day |
| 04 | Samskriti | Kasina Coin Ring / Thick Kada | ₹1,400/day |
| 05 | Kalakaar | Karna Kundala & Headgear | ₹2,800/day |

---

*Simhaavatar · Mysore, Karnataka · © 2025*
