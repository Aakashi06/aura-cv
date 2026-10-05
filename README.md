<div align="center">

# Aura CV

**Craft your dream CV. A few clicks. A lasting first impression.**

A cinematic template gallery for people who refuse to ship a boring resume.
Pick a look, open the editor, and start writing.

<br />

[![Live](https://img.shields.io/badge/live-aura--cv--pi.vercel.app-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://aura-cv-pi.vercel.app/)
[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/Aakashi06/aura-cv)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/Aakashi06/aura-cv)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://github.com/Aakashi06/aura-cv)
[![Canva](https://img.shields.io/badge/edit%20in-Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white)](https://aura-cv-pi.vercel.app/)

<br />

[Live demo](https://aura-cv-pi.vercel.app/) · [Report a bug](https://github.com/Aakashi06/aura-cv/issues) · [Author](https://github.com/Aakashi06)

</div>

---

## What it does

Aura CV is a front door for a curated set of resume templates. The page opens on a full-bleed video header, drops you into a filterable gallery, and hands the actual editing off to Canva.

No account wall. No form maze. Choose a voice — modern, minimal, or aesthetic — then hit **Start Creating Your CV**.

```text
land  →  filter a style  →  preview a card  →  open the editor
```

<p align="center">
  <img width="32%" alt="Aura CV — hero and first impression" src="https://github.com/user-attachments/assets/926d1078-8b77-4b76-a597-45b0b1b295d2" />
  <img width="32%" alt="Aura CV — template gallery" src="https://github.com/user-attachments/assets/f8cbeb86-a90a-4de8-9a00-6b83d67c4c9b" />
  <!-- <img width="32%" alt="Aura CV — third screenshot" src="PASTE_THIRD_SCREENSHOT_URL_HERE" /> -->
</p>

<p align="center">
  <sub>Hero · gallery. Uncomment the third image to sit another shot in the same row.</sub>
</p>

---

## Features

- **Cinematic landing.** Looping video background, logo lockup, and a single CTA: *Start Creating Your CV*.
- **Three curated lanes.** Modern, Minimalistic, and Aesthetic — plus an All view.
- **Glass filter bar.** Category buttons toggle the grid without a reload.
- **Named templates, not generic slots.** Each card has a style name, a category tag, and a preview.
- **One-click handoff.** *Start Creating Your CV* opens the matching Canva design in a new tab.
- **Static and fast.** HTML, CSS, and a small vanilla script. No framework tax on the gallery.
- **Deployed.** Live on Vercel at [aura-cv-pi.vercel.app](https://aura-cv-pi.vercel.app/).

---

## Template lanes

| Lane | The brief | A few of the looks |
| --- | --- | --- |
| **Modern** | Structure with a pulse. Good for product, engineering, and ops. | The Fresh Format, Creative Canvas, Infographic Innovator, Professional Palette, Contemporary Classic, Bold & Bright |
| **Minimalistic** | Type, whitespace, nothing extra. Good when the work should speak. | Sleek Simplicity, The Quiet Professional, Pure Precision, The Clean Cut, Whitespace Wonder, Chic Clarity |
| **Aesthetic** | Identity-forward layouts for design, content, and freelance work. | The Aesthetic Advocate, Artistic Touch, The Modern Artisan, Crafted Identity, The Artful Resume, Visual Vignettes |

Filters are driven by a class on each card (`modern`, `minimalist`, `aesthetic`) and a `data-filter` on the button.

---

## Stack

| Layer | Choice |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS, glassy filter controls, responsive grid |
| Behavior | Vanilla JavaScript (`public/js/main.js`) |
| Media | Looping header video, logo, template previews |
| Editing | Canva design links, opened in a new tab |
| Hosting | Vercel |

---

## Project layout

```text
aura-cv/
├── public/
│   ├── index.html          # hero, filters, template grid
│   ├── css/style.css       # layout, glass buttons, cards
│   ├── js/main.js          # filter + open-in-new-tab
│   └── images/             # logo, video, template previews
├── server/
│   └── server.js           # optional node entry
└── README.md
```

---

## Run it locally

The gallery is static. From the repo root:

```bash
git clone https://github.com/Aakashi06/aura-cv.git
cd aura-cv/public
python3 -m http.server 5173
```

Then open [http://localhost:5173](http://localhost:5173).

Node is fine too, if you already have it:

```bash
npx serve public
```

The video and images are referenced relatively (`images/video.mp4`, `images/logo.png`, `images/mod1.png`, …), so serve `public/` — do not open `index.html` as a `file://` URL if you want the media to behave.

---

## How a template gets wired

Each card is a small, dumb unit. The button does not know about Canva. It only reads `data-link`.

```html
<div class="template-card modern">
  <img src="images/mod1.png" alt="Modern CV Template" />
  <span class="template-category">Modern CV</span>
  <p>The Fresh Format</p>
  <button class="template-button" data-link="https://www.canva.com/design/...">
    Start Creating Your CV
  </button>
</div>
```

`main.js` does two jobs:

1. Show or hide `.template-card` nodes from the active filter.
2. `window.open(link, "_blank")` when a template button is clicked.

To add a template: drop a preview in `public/images/`, copy a card, set the category class, and paste the Canva view link into `data-link`.

---

## Scripts, in one place

| File | Responsibility |
| --- | --- |
| `public/index.html` | Video header, hero copy, filter buttons, template grid |
| `public/css/style.css` | Hero, glassy buttons, card grid |
| `public/js/main.js` | Filter state and external editor links |
| `server/server.js` | Optional server entry, separate from the static gallery |

---

## Deploy

The live site is [https://aura-cv-pi.vercel.app/](https://aura-cv-pi.vercel.app/).

On Vercel, set the output / root to `public` if the platform is serving the static gallery. Push to `main` and the demo follows.

---

## Roadmap

- [ ] Third gallery screenshot in the README row
- [ ] In-page preview before the Canva hop
- [ ] Search across template names
- [ ] Dark / light theme toggle
- [ ] ATS-friendly notes on each card

---

## Author

Built by [Aakashi06](https://github.com/Aakashi06).

If a template link dies or a preview looks off, open an issue — the card and the Canva design are the whole product.
