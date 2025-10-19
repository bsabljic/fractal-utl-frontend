import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './index.css'
import Overview from './pages/Overview'
import Results from './pages/Results'
import Methods from './pages/Methods'
import Curves from './pages/Curves'
import Metrics from './pages/Metrics'
import History from './pages/History'
import About from './pages/About'

function AppShell() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="navbar bg-base-100 shadow">
        <div className="container-xxl flex gap-4">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">Fractal-UTL</NavLink>
          <div className="flex-1" />
          <NavLink to="/" className="btn btn-ghost">Overview</NavLink>
          <NavLink to="/metrics" className="btn btn-ghost">Metrics</NavLink>
          <NavLink to="/curves" className="btn btn-ghost">Curves</NavLink>
          <NavLink to="/results" className="btn btn-ghost">Results</NavLink>
          <NavLink to="/methods" className="btn btn-ghost">Methods</NavLink>
          <NavLink to="/history" className="btn btn-ghost">History</NavLink>
          <NavLink to="/about" className="btn btn-ghost">About</NavLink>
        </div>
      </div>
      <main className="container-xxl py-6">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/curves" element={<Curves />} />
          <Route path="/results" element={<Results />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="mt-10 py-6 text-center text-sm text-slate-400">
        © 2025 Fractal-UTL — Clinical Validator Demo
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  </React.StrictMode>,
)
