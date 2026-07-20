# rxzx.ai — Short Notes (Class 10–12)

React + Vite + Tailwind web app jo Class 10, 11, 12 ke sabhi subjects ke short revision notes dikhata hai.

## 1. Local setup

```bash
npm install
npm run dev
```

Browser me `http://localhost:5173` khol lo.

## 2. Notes add/edit karna

Sab content ek hi file me hai: **`src/data/notes.js`**

Har chapter is shape me hai:

```js
{
  chapter: "Chapter Name",
  points: [
    "short point 1",
    "short point 2",
  ],
}
```

Naya subject add karna ho to `notesData[class]` object me naya key add kar do, e.g.:

```js
11: {
  Accountancy: [
    { chapter: "Introduction to Accounting", points: [...] },
  ],
}
```

UI automatically naya subject/chapter dikha dega — koi extra code nahi likhna.

## 3. GitHub par push karna

```bash
git init
git add .
git commit -m "Initial commit: rxzx.ai notes app"
git branch -M main
git remote add origin https://github.com/<your-username>/rxzx.ai.git
git push -u origin main
```

## 4. Deploy (free)

**Vercel (recommended):**
1. vercel.com par GitHub se login karo
2. "Import Project" → `rxzx.ai` repo select karo
3. Framework: Vite auto-detect ho jayega → Deploy

**GitHub Pages:**
```bash
npm run build
npm i -D gh-pages
# package.json me add karo: "deploy": "gh-pages -d dist"
npm run deploy
```

## 5. Next steps (roadmap)

- [ ] Sabhi chapters ka poora content daalo (abhi sirf 2 sample chapters/subject hai)
- [ ] Bookmark/favourite chapters feature
- [ ] Dark mode
- [ ] PDF export ek button se
- [ ] Progress tracker (kitne chapters revise ho gaye)
