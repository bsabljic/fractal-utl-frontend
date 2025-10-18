#!/bin/bash
echo "🚀 Installing Fractal-UTL UI (local setup)..."

# 1️⃣ Install Tailwind + DaisyUI
npm install -D tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p

# 2️⃣ Configure Tailwind
cat > tailwind.config.cjs <<'EOF'
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        secondary: "#22D3EE",
      },
    },
  },
  plugins: [require("daisyui")],
};
EOF

# 3️⃣ Add global CSS
mkdir -p src
cat > src/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark light;
}
html, body, #root {
  height: 100%;
  margin: 0;
}
EOF

# 4️⃣ Add basic tabbed layout
mkdir -p src/pages
cat > src/App.tsx <<'EOF'
import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Overview from './pages/Overview'
import Results from './pages/Results'
import Metrics from './pages/Metrics'
import Methods from './pages/Methods'
import Curves from './pages/Curves'
import History from './pages/History'
import About from './pages/About'

export default function App() {
  const tabs = [
    { name: "Overview", path: "/" },
    { name: "Results", path: "/results" },
    { name: "Metrics", path: "/metrics" },
    { name: "Methods", path: "/methods" },
    { name: "Curves", path: "/curves" },
    { name: "History", path: "/history" },
    { name: "About", path: "/about" }
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base-200 text-base-content">
        <div className="tabs tabs-boxed justify-center my-6">
          {tabs.map((t) => (
            <NavLink
              key={t.path}
              to={t.path}
              className={({ isActive }) =>
                `tab ${isActive ? "tab-active bg-primary text-white" : ""}`
              }
            >
              {t.name}
            </NavLink>
          ))}
        </div>

        <div className="max-w-5xl mx-auto p-6 bg-base-100 rounded-xl shadow-md">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/results" element={<Results />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/curves" element={<Curves />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
EOF

# 5️⃣ Add empty pages
for page in Overview Results Metrics Methods Curves History About; do
  cat > src/pages/${page}.tsx <<EOF
import React from 'react'
export default function ${page}() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">${page}</h1>
      <p>Content for ${page} page goes here.</p>
    </div>
  )
}
EOF
done

# 6️⃣ Add router entry
cat > src/main.tsx <<'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
EOF

# 7️⃣ Install react-router
npm install react-router-dom

echo "✅ Fractal-UTL UI installed successfully!"
echo "👉 Run: npm run dev"
