# Weekly Report — Capital Chain Website

**Author:** Ali Mehtab
**Project:** Capital Chain marketing website (`capitalchain-v2`, Next.js 16 / App Router)

---

## Summary

This week I completed and finalized the **full Capital Chain website** — all pages, the shared
navigation/footer, the 3D hero globe, and multi-language support. Across the project I built
**three full versions** of the site; the **third and latest version is now finalized** and is the
one in active development (`capitalchain-v2`).

### Website versions

| Version | Status | Notes |
|---------|--------|-------|
| v1 | Superseded | First iteration / initial concept build |
| v2 | Superseded | Second iteration |
| **v3** | ✅ **Finalized** | Current build — the finalized version, completed this week |

---

## Pages built (whole website)

The finalized site ships **6 routes**, all responsive and theme-aware:

### 1. Home (`/`)
The main landing page, built from ~17 sections:
- **Hero** with the animated 3D globe background (traveling dots + geometric outline)
- **Trust band** (paid-to-traders / funded accounts / countries / reviews)
- **Live ticker** of recent payouts
- **Who We Are & Services**
- **The Chain** — 4-step "how it works"
- **Programs** — interactive configurator (1-Step / 2-Step / Instant × account sizes, live pricing)
- **Payouts** — four payout-cycle cards
- **Calculator** — interactive payout calculator (sliders)
- **Why Capital Chain** — bento feature grid
- **Execution / Platforms** — MetaTrader, cTrader, API, speed, leverage
- **Leaderboard** — top funded traders
- **Scaling Plan** — allocation ladder to $2M
- **Live Rewards** — auto-scrolling settlements feed with hover-to-pause + detail card
- **Testimonials**, **Community (Discord + support)**, **Affiliate teaser**, **FAQ**, **Final CTA**

### 2. Rewards (`/rewards`)
A dedicated **verified-payouts dashboard**: status bar, live running total with corner ticks,
milestones sparkline, hall-of-fame + reward-rails panels, live reward stream, and a full
reward-ledger table — styled in the site's light + teal scheme.

### 3. About Us (`/about`)
Company story page: hero split, **Our Vision** (Reliability / Innovation / Transparency pillars),
**Partner With Us / Community**, **Our Mission**, and team/members.

### 4. Affiliate Program (`/affiliate`)
Partner landing page: hero, **How it works** (three simple steps), **The Benefits / why partner**,
and a **Partner FAQ** accordion.

### 5. Contact Us (`/contact`)
Hero, a **contact form**, and support/bento cards (live chat, email, Discord, response time).

### 6. Terms of Use (`/terms`)
Legal page with a sticky side-nav and sections: **Introduction, Trading Rules** (drawdown limits,
profit targets, min days), **Prohibited Practices** (latency arbitrage, HFT, copy trading, account
sharing), **Payouts** (profit split, cycles), **Refund Policy**, and **Risk Disclosure**.

---

## Shared systems (used across every page)

- **3D hero globe** — WebGL/Three.js globe with traveling reward arcs, revolving country payout
  pills, parallax, theme-aware colors, and the geometric outline band.
- **Navigation + footer** — sticky nav with active states, theme toggle, language switcher, and a
  full-width footer (newsletter, link columns, legal disclaimer).
- **Light/Dark theme** toggle.
- **Multi-language (EN / AR / HI)** — language dropdown, persisted choice, **RTL** support for
  Arabic, and translated content.
- **Design system** — shared CSS variables (teal/green brand palette, typography, surfaces) and
  reusable section/card/button styles.
- **Micro-interactions** — scroll reveals, magnetic buttons, tilt cards, count-up stats.

---

## Work completed this week

### Hero globe
- Restored the **geometric outline** around the globe — a faceted heptagon band sized to the globe
  and parented to it so it **rotates with the globe**.
- **Slowed down the green traveling dots** for a calmer motion.

### Home page structure
- Re-ordered all home sections into the approved sequence and re-numbered the section counters.
- Created the new **"Who We Are & Services"** section.
- Created the new **"Live Rewards"** section (auto-scrolling feed, pause-on-hover, detail card,
  6 visible rows).

### Rewards page
- Built the full **Rewards / verified-payouts dashboard** page (reference-matched, recolored to the
  brand scheme).
- Navigation update: **added "Rewards"**, **removed "FAQ"**.

### Multi-language (EN / AR / HI)
- Added the internationalization system: a **language dropdown** in the navbar that persists choice.
- **Right-to-left** layout for Arabic + Arabic/Hindi font fallbacks.
- Translated the **entire home page** and all shared chrome (promo bar, nav, footer, final CTA).

---

## Status & next steps

- **Finalized version (v3) is complete and stable** — type-checks and the production build both
  pass; all 6 routes prerender as static pages.
- **Remaining:** translate the inner-page bodies (About, Contact, Terms, Affiliate, Rewards) into
  Arabic and Hindi. The **Terms** page is legal text and is flagged for native/legal review before
  publishing.
- Replace illustrative placeholders (payout figures, ledger rows, leaderboard names, Discord links)
  with the real live data and production URLs.

---

*Report generated 2026-06-05.*
