# ClipCut

Dark, responsive website template for short-form video editing agencies and freelance editors. Static HTML/CSS/JS, no build step.

**Pages:** Home (hero + editing timeline, problem, how it works, recent work, numbers, quote), Work (filterable), Results (case studies), Contact, 404.

## Run locally

```bash
python3 -m http.server 8000
```

## Customize

- Colors and fonts: variables at the top of `css/styles.css` (`--accent` is the orange).
- Copy: edit the HTML directly.
- Video cards: duplicate an `<article class="clip">` block and swap the image in `img/` (9:16 portrait works best). The placeholder stills are AI-generated; replace them with frames from your own videos.
- Contact form: set the `<form action>` in `contact.html` to your Formspree/Netlify endpoint.
- 404: serve `404.html` as your host's not-found page.
