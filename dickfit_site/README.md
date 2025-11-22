
# Dick Fit — Demo strony do testów RAG-bota

Statyczna strona z dokumentami (PDF/XLSX) i prostym widżetem czatu.
Możesz ją **za darmo** wdrożyć na GitHub Pages, Netlify lub Vercel.

## 1) Szybkie wdrożenie — GitHub Pages (najprostsze)
1. Utwórz repozytorium na GitHub, np. `dickfit-site`.
2. Skopiuj zawartość folderu do repo (index.html, assets/, data/ ...).
3. Wejdź w **Settings → Pages** i ustaw **Branch: main / root**.
4. Po chwili strona będzie dostępna pod adresem `https://twoj-login.github.io/dickfit-site`.

## 2) Netlify (drag & drop)
1. Wejdź na https://app.netlify.com/drop i **upuść** cały folder.
2. Netlify nada URL w formie `https://nazwa-losowa.netlify.app`.
3. (Opcjonalnie) Zmień nazwę strony w ustawieniach.

## 3) Vercel
1. Zaloguj się do Vercel i **Importuj** repozytorium z GitHuba.
2. Framework: **Other**, Build Command: **(none)**, Output: **/**.
3. Deploy — gotowe.

## Konfiguracja RAG (N8N / własny backend)
- W pliku `assets/app.js` ustaw `window.RAG_ENDPOINT` na swój webhook/endpoint.
- Format żądania (przykład):
  ```json
  { "question": "Jakie są godziny otwarcia?", "contextHints": ["regulamin","cennik"] }
  ```
- Odpowiedź oczekiwana:
  ```json
  { "answer": "Jesteśmy otwarci 6:00–23:00, 7 dni w tygodniu." }
  ```

## Zawartość
- `index.html` — layout strony, linki do dokumentów, widżet czatu
- `assets/styles.css` — proste style
- `assets/app.js` — logika mock czatu + integracja z RAG
- `data/` — dokumenty PDF i Excel używane przez bota (wgrane w paczce)

## Uwaga
To demo, dane i dokumenty są **fikcyjne** i służą wyłącznie do testów.
