<div align="center">

# Aura CV

**Craft your dream CV. A few clicks. A lasting first impression.**

A curated template gallery with a cinematic landing, three distinct styles, and a one-click path into the editor.

<br />

[![Live](https://img.shields.io/badge/live-aura--cv--pi.vercel.app-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://aura-cv-pi.vercel.app/)
[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/Aakashi06/aura-cv)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/Aakashi06/aura-cv)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://github.com/Aakashi06/aura-cv)
[![Canva](https://img.shields.io/badge/edit%20in-Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white)](https://aura-cv-pi.vercel.app/)

<br />

[Live demo](https://aura-cv-pi.vercel.app/) · [Source](https://github.com/Aakashi06/aura-cv) · [Author](https://github.com/Aakashi06)

</div>

---

## What it does

Aura CV opens on a full-bleed video header, then hands you a filterable gallery of crafted resume templates. Pick a voice — modern, minimal, or aesthetic — and **Start Creating Your CV** opens that design in Canva.

```text
land  →  filter a style  →  preview a card  →  open the editor
```

<p align="center">
  <img width="48%" alt="Aura CV hero" src="https://github.com/user-attachments/assets/926d1078-8b77-4b76-a597-45b0b1b295d2" />
  <img width="48%" alt="Aura CV template gallery" src="https://github.com/user-attachments/assets/f8cbeb86-a90a-4de8-9a00-6b83d67c4c9b" />
</p>

<p align="center">
  <sub>Hero · template gallery</sub>
</p>

---

## Features

- **Cinematic landing.** Looping video background, logo lockup, and a clear call to action.
- **Three curated lanes.** Modern, Minimalistic, and Aesthetic, plus an All view.
- **Instant filters.** Glass buttons switch the grid in place, with no reload.
- **Named templates.** Every card carries a style name, a category tag, and a preview.
- **One-click editing.** Each card opens its matching Canva design in a new tab.
- **Light and fast.** HTML, CSS, and a small vanilla script. Live on Vercel.

---

## Template lanes

| Lane | The brief | Looks |
| --- | --- | --- |
| **Modern** | Structured layouts with a pulse. Strong for product, engineering, and ops. | The Fresh Format, Creative Canvas, Infographic Innovator, Professional Palette, Contemporary Classic, Bold & Bright |
| **Minimalistic** | Type and whitespace, kept precise. Strong when the work should speak. | Sleek Simplicity, The Quiet Professional, Pure Precision, The Clean Cut, Whitespace Wonder, Chic Clarity |
| **Aesthetic** | Identity-forward layouts for design, content, and freelance work. | The Aesthetic Advocate, Artistic Touch, The Modern Artisan, Crafted Identity, The Artful Resume, Visual Vignettes |

Each card uses a category class (`modern`, `minimalist`, `aesthetic`). Filter buttons read `data-filter` and show the matching set.

---

## Stack

| Layer | Choice |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS, glass controls, responsive grid |
| Behavior | Vanilla JavaScript (`public/js/main.js`) |
| Media | Header video, logo, template previews |
| Editing | Canva designs, opened in a new tab |
| Hosting | Vercel |

---

## Project layout

```text
aura-cv/
├── public/
│   ├── index.html        # hero, filters, template grid
│   ├── css/style.css     # layout, glass buttons, cards
│   ├── js/main.js        # filter + open in a new tab
│   └── images/           # logo, video, template previews
├── server/
│   └── server.js
└── README.md
```

---

## Run it locally

```bash
git clone https://github.com/Aakashi06/aura-cv.git
cd aura-cv/public
python3 -m http.server 5173
```

Open [http://localhost:5173](http://localhost:5173).

Or with Node:

```bash
npx serve public
```

Serve the `public/` folder so the video and previews resolve (`images/video.mp4`, `images/logo.png`, `images/mod1.png`).

---

## Add a template

A card is a preview, a name, and a link. The button only reads `data-link`.

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

`main.js` does two things:

1. Shows the cards that match the active filter.
2. Opens the card link in a new tab.

Drop a preview into `public/images/`, copy a card, set the category class, and paste the Canva view link into `data-link`.

---

## Live

[https://aura-cv-pi.vercel.app/](https://aura-cv-pi.vercel.app/)

Point the Vercel root at `public`. Pushes to `main` update the demo.

---

## Author

Built by [Aakashi06](https://github.com/Aakashi06).
