# KodNest Premium Build System

A design system for serious B2C product companies. Calm, intentional, coherent, confident.

---

## Design Philosophy

- **Calm** — No visual noise. Every element earns its place.
- **Intentional** — Purpose-driven hierarchy and spacing.
- **Coherent** — One mind designed it. No drift.
- **Confident** — Clear typography, deliberate choices.

**Avoid:** Gradients, glassmorphism, neon colors, animation noise, hackathon-style, playful, loud.

---

## Color System

| Token | Value | Use |
|-------|-------|-----|
| Background | `#F7F6F3` | Page, cards, inputs |
| Primary text | `#111111` | Headings, body |
| Muted text | `#444444` | Secondary copy |
| Accent | `#8B0000` | Primary actions, links |
| Accent hover | `#6d0000` | Button hover |
| Success | `#5a6b5a` | Shipped, completed |
| Warning | `#8b7355` | Attention needed |
| Border | `#e0dfdc` | Dividers, inputs, cards |

Maximum 4 core colors across the system. Success and warning are minimal semantic accents.

---

## Typography

### Rules
- **Headings (h1, h2, h3):** Serif font only (Source Serif 4)
- **Body text:** Clean sans-serif (Source Sans 3)
- **Body font size:** 16–18px
- **Line height:** 1.6–1.8
- **No random font sizes** — use only the defined scale
- **Applied globally** — native `h1`–`h6` and `p` elements inherit these rules

### Scale (strict)
| Element | Size | Line height |
|---------|------|-------------|
| h1 | 2.25rem (36px) | 1.2 |
| h2 | 1.5rem (24px) | 1.2 |
| h3 | 1.25rem (20px) | 1.2 |
| h4–h6 | 1.125rem (18px) | 1.2 |
| Body | 1rem (16px) | 1.7 |
| Body large | 1.125rem (18px) | 1.7 |
| Small | 0.875rem (14px) | 1.5 |

Text blocks: max-width 720px. No decorative fonts.

---

## Spacing System

Only these values. No 13px, 27px, etc.

| Token | Value |
|-------|-------|
| xs | 8px |
| sm | 16px |
| md | 24px |
| lg | 40px |
| xl | 64px |

---

## Layout Structure

Every page follows this order:

```
[Top Bar]
    ↓
[Context Header]
    ↓
[Primary Workspace (70%) | Secondary Panel (30%)]
    ↓
[Proof Footer]
```

### Top Bar
- **Left:** Project name
- **Center:** Progress (Step X / Y)
- **Right:** Status badge (Not Started / In Progress / Shipped)

### Context Header
- Large serif headline
- 1-line subtext
- Clear purpose, no hype

### Primary Workspace
- Main product interaction
- Clean cards, predictable components
- No crowding

### Secondary Panel
- Step explanation (short)
- Copyable prompt box
- Buttons: Copy, Build in Lovable, It Worked, Error, Add Screenshot

### Proof Footer
- Checklist: □ UI Built □ Logic Working □ Test Passed □ Deployed
- Each checkbox requires user proof input

---

## Components

### Buttons
- **Primary:** Solid deep red (`kn-btn--primary`)
- **Secondary:** Outlined (`kn-btn--secondary`)
- Same hover (150–175ms ease-in-out), same border radius (6px) everywhere

### Inputs
- Clean borders, no heavy shadows
- Clear focus state (border → `#111111`)

### Cards
- Subtle border, no drop shadows
- Balanced padding (24px)

### Status Badge
- `kn-status--not-started` | `kn-status--in-progress` | `kn-status--shipped`

---

## Interaction Rules

- **Transitions:** 150–200ms, ease-in-out
- No bounce, no parallax

---

## Error & Empty States

**Errors:** Explain what went wrong + how to fix. Never blame the user.

**Empty states:** Provide next action. Never feel dead.

Use `kn-error` and `kn-empty` classes.

---

## Usage

```html
<link rel="stylesheet" href="design-system/design-system.css" />
```

Or in your build:

```css
@import "design-system/design-system.css";
```

---

## Class Reference

| Class | Purpose |
|-------|---------|
| `kn-app` | App shell wrapper |
| `kn-topbar` | Top bar container |
| `kn-context-header` | Context header section |
| `kn-workspace` | Main + panel wrapper |
| `kn-workspace__main` | Primary workspace (70%) |
| `kn-workspace__panel` | Secondary panel (30%) |
| `kn-proof-footer` | Proof checklist footer |
| `kn-headline` | Serif headline |
| `kn-subhead` | Muted subtext |
| `kn-body` | Body text |
| `kn-btn` | Base button |
| `kn-btn--primary` | Primary button |
| `kn-btn--secondary` | Secondary button |
| `kn-status` | Status badge |
| `kn-input` | Text input |
| `kn-card` | Card container |
| `kn-prompt-box` | Copyable prompt |
| `kn-error` | Error state |
| `kn-empty` | Empty state |
