# ER:LC Roleplay Server Idea Generator  
**Next.js + TailwindCSS + OpenAI API**

Ein Web‑Tool, das automatisch Ideen für einen ER:LC Roleplay Server generiert.  
Der Nutzer beantwortet einige Fragen (Sprache, Stadt, Themen, Stil usw.), und am Ende erstellt die KI einen passenden Server‑Namen + Konzept.

---

## 🚀 Features

### 💡 **KI‑basiertes Server‑Konzept**
- Fragt wichtige Infos ab (Sprache, Stadt, Thema, Stil)
- Generiert automatisch:
  - Server‑Name
  - Beschreibung
  - Rollenideen
  - Departments
  - Story‑Ansatz

### 🎨 **Modernes Frontend**
- Next.js 14 App Router
- TailwindCSS Styling
- Komponenten wie:
  - `Button.tsx`
  - `ProgressBar.tsx`

### ⚙️ **Backend‑API**
- `/api/generate` ruft OpenAI an
- Validiert Input
- Gibt generiertes Konzept zurück

### 📁 **Saubere Projektstruktur**

```
src/
├── components/
│ ├── Button.tsx
│ └── ProgressBar.tsx
├── lib/
│ └── openai.ts
├── pages/
│ ├── api/
│ │ └── generate.ts
│ └── index.tsx
├── styles/
│ └── globals.css
└── types/
└── index.d.ts

.env.local
next.config.js
tailwind.config.js
package.json
tsconfig.json
```

## 🛠️ Installation

```bash
git clone https://github.com/DEINUSERNAME/erlc-generator.git
cd erlc-generator
npm install
```

## 🔧 Entwicklung starten
- npm run dev


## 🔐 Environment Variables
Erstelle eine Datei .env.local:
OPENAI_API_KEY=your_openai_api_key_here


## 📦 Build
```bash
npm run build
npm start
```

### 🤝 Mitmachen
Pull Requests und Verbesserungen sind willkommen!
