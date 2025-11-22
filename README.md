# Dick Fit — Figma‑style static site (RAG demo)

## Deploy (GitHub Pages)
Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)`.
Jeśli korzystasz z `docs/`, ustaw `/docs` i przenieś pliki do `docs/`.

## Integracja z RAG
Edytuj `assets/app.js` i ustaw:
```js
window.RAG_ENDPOINT = 'https://your-n8n-or-backend/webhook/rag'
```
Widget wysyła JSON `{ question, contextHints, top_k }` i oczekuje `{ answer }`.

## Motto
Zostawiliśmy bezpieczne hasło „Push Hard. Laugh Harder.” — możesz je podmienić w `index.html`.
