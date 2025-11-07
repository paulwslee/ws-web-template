# WS Web Template — v4.5 (Next 16 + Tailwind v4 + shadcn/ui)

> Production-ready starter for modern React apps.

## ✨ Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- shadcn/ui (button, card, input, select…)
- `tailwindcss-animate` (transitions for modals/menus/toasts)

## 🚀 Quick Start

```bash
npm install
npm run dev
# http://localhost:3000
```

📁 Included

/components/ui/\* — shadcn components

/lib/utils.ts — cn() helper

app/globals.css — v4 style

@import "tailwindcss";
@plugin "tailwindcss-animate";
@custom-variant dark (&:is(.dark \*));

postcss.config.js

module.exports = {
plugins: { "@tailwindcss/postcss": {}, autoprefixer: {} },
};

🧩 Add more components
npx shadcn@latest add accordion alert-dialog badge dropdown-menu form sonner
🧪 Smoke Test

Page renders with card/button/input/select

animate-in fade-in-0 slide-in-from-bottom-5 works

HMR applies instantly on save

🛠 Scripts

dev — run local dev server

build — production build

start — run built app

❗ Troubleshooting

PostCSS error (tailwindcss plugin moved)
Install and set @tailwindcss/postcss in postcss.config.js.

Module not found @/components/ui/Button
Use lowercase path and named import:
import { Button } from "@/components/ui/button"

Unknown plugin tw-animate-css
Remove it. Use "tailwindcss-animate" instead and npm i -D tailwindcss-animate.
