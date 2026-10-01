# ClipCut

Dark-themed, responsive website template for short-form video editing agencies and freelance editors (static HTML/CSS/JS, no build step).

**Pages:** Home (hero, problem, how it works, featured work, stats), Work, Results / case studies, Contact, 404.

## Run locally

```bash
python3 -m http.server 8000
```

## Customize

- Colors, radius, font: CSS variables at the top of `css/styles.css`.
- Copy: edit the HTML directly.
- Video cards: copy an `<article class="vcard">` block; change `--h` (0–360) for the thumbnail hue. Swap the gradient for a real thumbnail via `background-image`.
- Contact form: set the `<form action>` in `contact.html` to your Formspree/Netlify endpoint.
- 404: host `404.html` as your server's not-found page (GitHub Pages and Netlify pick it up automatically).
