---
name: Ishan Mitra, The Rookie Set
description: A premium trading-card set; every project is a collectible card, flagships are holo parallels.
colors:
  ground: "#0c0d12"
  ground-2: "#15161e"
  ground-3: "#1f2029"
  line: "#2c2d38"
  stock: "#e8e4da"
  stock-2: "#d8d2c3"
  ink: "#16161a"
  ink-soft: "#4a4740"
  text: "#ece9e1"
  text-soft: "#a8a5b3"
  red: "#ff3b1f"
  red-ink: "#e02a0a"
  cobalt: "#2b4bff"
  cobalt-hi: "#4a66ff"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Advercase, Times New Roman, serif"
    fontSize: "clamp(4.5rem, 9.5vw, 9.5rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Advercase, Times New Roman, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Advercase, Times New Roman, serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  nameplate:
    fontFamily: "Advercase, Times New Roman, serif"
    fontSize: "clamp(1.2rem, 10.5cqi, 3rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Advercase, Times New Roman, serif"
    fontWeight: 700
    lineHeight: 0.85
    fontFeature: "'kern' 0, 'tnum' 1"
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  chip: "3px"
  tag: "4px"
  tile: "6px"
  frame: "8px"
  sheet: "10px"
  pocket: "12px"
  card: "14px"
  panel: "18px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1440px"
  section: "clamp(80px, 10vw, 140px)"
  section-lg: "clamp(96px, 12vw, 160px)"
  split-gap: "clamp(32px, 6vw, 96px)"
  pocket-gap: "clamp(14px, 2vw, 24px)"
components:
  button-book:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "0px"
    padding: "1.05em 1.4em"
  button-book-hover:
    backgroundColor: "{colors.cobalt-hi}"
  button-book-compact:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "10px 16px 8px"
  button-stock:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tile}"
    padding: "14px 20px 11px"
  button-stock-hover:
    backgroundColor: "{colors.white}"
  tab-divider:
    backgroundColor: "transparent"
    textColor: "{colors.text-soft}"
    typography: "{typography.label}"
    rounded: "6px 6px 0 0"
    padding: "10px 14px 7px"
  tab-divider-active:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
  card-base:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  card-back:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "8% 8% 7%"
  stat-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    rounded: "{rounded.tile}"
    padding: "0.6em 0.7em 0.5em"
  stock-panel:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 4vw, 56px)"
  roster-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "6px 10px 3px"
---

# Design System: Ishan Mitra, The Rookie Set

## Overview

**Creative North Star: "The Rookie Set"**

The site is a premium chrome sports-card set laid on a grading-case black ground. Every project is a 5:7 collectible card: the work fills the front inside a stock border, a nameplate carries the client and the role, and the flagships are holo parallels with a chrome frame and a refractor sheen that follows the pointer. Click a holo and it flips to a stock back with real stats that roll up from zero. Everything else on the page is made from the same parts as the card: pack wrapper, binder sheet and pockets, card-back stat tables, checklist cards, set codes ("IM·26"), and serials ("01/03").

The world is built from two materials, black case and bone card stock, and most surfaces are one or the other. Colour is rationed by role. Cobalt means booking a call, red marks flagship rarity, and the client work supplies every other colour. Type pairs a condensed, uppercase display face for nameplates and numerals with plain Helvetica Neue for prose, so the voice sits in the card furniture and the prose stays quiet. Desktop is bold: fanned holos, pointer tilt, the pack dealing itself in. Phones and reduced motion are calm: no tilt, a static sheen, a horizontal snap rail of cards.

The build supersedes the direction contract on type. The contract named Big Shoulders Display and Schibsted Grotesk, but the shipped faces are Advercase and Helvetica Neue.

**Key Characteristics:**
- Two materials: grading-case black ground and bone card stock.
- Every project is a 5:7 card with a 14px corner, a stock border and a nameplate.
- Holo treatment (chrome frame, prizm refractor, red plate) appears only on flagships.
- Numerals are display-face, tabular, with kerning off, and they roll in.
- Colour is rationed by role, and the work supplies the rest of the palette.
- Bold on desktop, calm on touch and under reduced motion.

## Colors

The palette is two materials (black case, bone stock) plus two tightly rationed signal colours.

### Primary
- **Booking Cobalt** (cobalt): the colour of booking a call. Used on the perforated tear strip, the header "Book a call" button, and nothing else that acts. White text on it.
- **Booking Cobalt, Lit** (cobalt-hi): the hover state of a booking control.

### Secondary
- **Holo Red** (red): flagship rarity. Used on the holo nameplate gradient, the holo serial chip, stat numerals on flagship case pages, and the flagship back-link underline. It sits on the dark ground or behind ink text, never as text on stock.
- **Holo Red, Stock Ink** (red-ink): the same red, deepened so it holds 3:1 as text on card stock. Whenever red text sits on stock, use this.

### Neutral
- **Grading-Case Black** (ground): the page ground and the base of the world.
- **Case Black, Lifted** (ground-2): alternating section bands (binder, checklist, free pull).
- **Case Black, Raised** (ground-3): placeholder fill behind loading media on case pages.
- **Case Seam** (line): hairline borders, section dividers, tab outlines, scrollbar thumb.
- **Card Stock Bone** (stock): card fronts and backs, stat and checklist panels, the pack wrapper base, active tabs, chips on dark.
- **Stock, Aged** (stock-2): secondary text on dark card plates and stat-block labels.
- **Print Ink** (ink): text on stock, the dark card frame, stat blocks, chips on stock.
- **Print Ink, Soft** (ink-soft): secondary text on stock.
- **Case Text** (text): primary text on the ground.
- **Case Text, Soft** (text-soft): secondary text, nav links and labels on the ground.
- **Plate White** (white): nameplate text on the dark plate, text on cobalt, hover of the stock button.

### Named Rules
**The Cobalt Means Book Rule.** Cobalt fills only a control that books the intro call. If clicking it does not lead to booking, it is not cobalt.

**The Rarity Red Rule.** Red marks a flagship holo and nothing else. It is not a hover colour, an emphasis colour or a decoration for non-flagship cards. On stock it is always red-ink.

**The Work Supplies Colour Rule.** Apart from the two signals, the only other colour on the page comes from the client work itself: card art, and swatch rows sampled from the work.

## Typography

**Display Font:** Advercase (self-hosted WOFF, 400 and 700, with Times New Roman fallback)
**Body Font:** Helvetica Neue (local() only, with Helvetica and Arial fallback)
**Label Font:** Helvetica Neue Bold, uppercase and tracked

**Character:** Advercase in heavy uppercase is the card printer's voice: nameplates, headings, serials and stat numerals. Helvetica Neue stays neutral so the prose never competes with the work.

### Hierarchy
- **Display** (700, clamp(4.5rem, 9.5vw, 9.5rem), 0.88, uppercase): the name on the pack wrapper. Once per site.
- **Headline** (700, clamp(3rem, 8vw, 6rem), 0.9, uppercase, balanced): section headings.
- **Title** (700, clamp(1.6rem, 3vw, 2.25rem), 0.95, uppercase): step titles, subsections; scales up inside step lists (to 3.2rem) and checklist rows (to 2rem).
- **Nameplate** (700, container-scaled clamp(1.2rem, 10.5cqi, 3rem), 0.92, uppercase): the client name on a card plate. It scales with the card, not the viewport.
- **Numeral** (700, tabular, kerning off): every figure that is a stat, serial, count or set code. Sizes run from chip size up to clamp(3.5rem, 11vw, 9rem) for the career total.
- **Body** (400, 1.0625rem, 1.6): prose, capped at 34–62ch depending on context.
- **Lead** (400, 1.15rem): the intro paragraph beside a section heading.
- **Label** (700, 0.7–0.85rem, 0.06–0.12em tracking, uppercase): nav, tabs, button text, card team chips, set lines.

### Named Rules
**The Kerning-Off Figures Rule.** Any figure set in Advercase uses the numeral role, with `font-kerning: none` and `'kern' 0`. The font's figure kerning is broken. Headings keep normal kerning.

**The No Redistribution Rule.** Helvetica Neue loads only through `local()`, and Helvetica or Arial is the fallback. Never self-host or bundle it; the licence does not allow it.

**The Printer's Voice Rule.** Advercase is always uppercase and always 700 in the shipped build. Prose is never set in it.

## Layout

The page sits in a centred 1440px container with a fluid gutter (clamp(16px, 4vw, 56px)). Section rhythm is generous and uniform: standard bands get clamp(80px, 10vw, 140px) of vertical padding, and the binder, stats and close sections get the larger clamp(96px, 12vw, 160px). Bands alternate between the ground and ground-2, or are split by a single hairline.

The recurring two-column split is 5fr / 7fr (heading or intro left, content right) with a clamp(32px, 6vw, 96px) gap, and it collapses to one column at 860px. The first viewport is a 40 / 60 split of pack wrapper and card fan, and it collapses at 900px. The binder sheet is a pocketed grid: 5 columns from 1280px, 4 by default, 3 below 1100px, and 2 below 700px with tighter pockets. Case pages pair a sticky card and meta column (4fr) with a media column (8fr). Long series that are portrait or square become horizontal snap strips with a counter and arrows.

On phones the hero fan becomes a horizontal scroll-snap rail with the centre holo first. The set tabs become a single scrolling row, and the header drops to mark plus booking button.

## Elevation & Depth

Depth is physical. Cards and stock panels are objects lying on the case: they cast soft, deep, downward shadows, never offset or glowing ones. Inside the case, depth comes from tonal bands and translucent pockets (faint white gradients with an inset 1px ring and a diagonal sleeve glint), not from shadows. The holo's depth comes from light: a pointer-tracked glare in overlay mode and a prizm foil in colour-dodge.

### Shadow Vocabulary
- **Card on case** (`box-shadow: 0 2px 4px rgb(0 0 0 / 0.35), 0 24px 48px -12px rgb(0 0 0 / 0.6)`): every card face.
- **Panel on case** (`box-shadow: 0 30px 60px -24px rgb(0 0 0 / 0.7)`): stats and checklist stock panels; the pack wrapper uses the same family at -20px spread.
- **Device on case** (`box-shadow: 0 20px 40px -12px rgb(0 0 0 / 0.7)`): fanned phone wallpapers.
- **Pocket sleeve** (`box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.07)`): binder pockets.

### Named Rules
**The Objects Cast, Furniture Doesn't Rule.** Only physical things (cards, stock panels, the wrapper, devices) carry drop shadows. Tabs, buttons, nav and text never do.

**The Foil Is Earned Rule.** Chrome frame, prizm refractor and pointer glare at full strength belong to flagship holos only. Standard cards get only a faint glare.

## Shapes

Corners follow print-production sizes, nested from outside in: panels 18px, cards 14px, pockets 12px, binder sheet 10px, inner card art frame 8px, media tiles and stat blocks 6px, chips 3–4px. The card is always 5:7. Shapes taken from print are used literally: a perforated tear edge (scalloped radial-gradient strips above and below) on the booking strip, a jagged torn top on the pack wrapper, a dashed fold line, a rotated round seal, and tab dividers with square-cornered bottoms and a heavy 3px base. The checklist panel is laid slightly askew (-0.6deg) like a card set down by hand. Icons are inline stroked SVG at 2 to 2.6px.

## Components

### Buttons
Tactile, printed, and rationed.
- **Booking tear strip (primary):** a cobalt rectangle with square corners and perforated scallops top and bottom, uppercase bold label with 0.06em tracking, white text, and a trailing arrow. Hover lifts it 2px, shifts it to cobalt-hi and nudges the arrow 4px right (0.3–0.4s, the ease-out curve). It is used wherever the page asks for the call: hero, close, case-page foot.
- **Booking compact:** the header version. Cobalt, 4px corners, 0.78rem label.
- **Stock button (secondary):** bone stock with ink text, 6px corners, turning white on hover. Used for the free download.
- **Text link:** underlined in the line colour, and the underline brightens to the text colour on hover.
- **Round control:** 44px outlined circle for strip arrows. It fills with stock on hover.

### Chips
- **Team chip / serial chip:** small stock-on-ink (or ink-on-stock) labels at 3px corners, set in the card's top corners. The holo serial chip is red with ink text.
- **Roster tag:** ink-outlined label on stock, 4px corners.
- **Set tabs:** binder dividers with an outlined top and a 3px base. The active tab fills with stock and has ink text. Each tab carries its card count as a numeral.

### Cards / Containers
- **Corner Style:** 14px card, 18px panels.
- **Background:** stock border around an ink frame that holds the art. Holos swap the border for the chrome foil raster.
- **Shadow Strategy:** "Card on case" (see Elevation).
- **Border:** the stock or chrome border is about 4.2% of the card width, with an 8px inner frame.
- **Internal Padding:** in percentages, so the card scales as a unit: 7% for plate and chips, 8% on backs.

### Navigation
A fixed top bar over a black-to-transparent gradient. On the left, the "IM" mark in a stock chip with a "Rookie Set · 26" set line. In the middle, four uppercase tracked links in text-soft that turn text on hover. On the right, the compact booking button. Below 860px the links and set line are hidden.

### Collectible Card (signature)
The atomic unit of the world. The front holds full-bleed art inside the frame, a team chip and serial at the top, and a nameplate at the bottom on an ink gradient (red gradient on holos). On fine pointers the card tilts toward the pointer (8deg standard, 14deg holo, 0.08s while tracking, 0.6s settle). The glare and foil positions follow the pointer. Flip cards turn 180deg over 0.9s to a stock back. The back has a fine ruled-line texture, an ink-ruled header with the set code, stat blocks whose numerals roll from zero (1.4s, 0.25s delay), a blurb, a swatch row sampled from the work, and a link to the full set. Binder cards are links into the case page, and their art keeps its view-transition name across the navigation.

### Stock Panel
A large card-stock sheet on the case with the same ruled-line texture, an 18px corner, panel shadow, and a 3px ink rule under its header. It holds the career-stats table (display-face names, numerals right-aligned and scaled up, total row emphasised) and the membership checklist.

## Do's and Don'ts

### Do:
- **Do** make every project a 5:7 card with a 14px corner, stock border, ink frame and a nameplate in the nameplate role.
- **Do** set every stat, serial, count and set code in the numeral role (Advercase 700, tabular, kerning off).
- **Do** keep cobalt for booking controls only, with white text and the cobalt-hi hover.
- **Do** use red-ink, never red, when red text sits on card stock.
- **Do** turn off tilt on coarse pointers and under reduced motion, and leave the sheen as a static gradient.
- **Do** use inline stroked SVG for icons and arrows.
- **Do** keep Helvetica Neue on `local()` with the Helvetica and Arial fallback.

### Don't:
- **Don't** use cobalt for anything that doesn't book a call.
- **Don't** use red on non-flagship cards, as a hover colour or as general emphasis.
- **Don't** give standard cards the chrome frame, prizm foil or red plate. Holo is a rarity.
- **Don't** self-host or ship Helvetica Neue files.
- **Don't** turn on kerning for Advercase figures.
- **Don't** put drop shadows on buttons, tabs, nav or text.
- **Don't** add tiny uppercase labels above headings. Set codes and serials belong on cards, chips and stat panels, not as section kickers.
