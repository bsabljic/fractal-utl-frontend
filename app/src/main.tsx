import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import './index.css'
import Overview from './pages/Overview'
import Results from './pages/Results'
import Metrics from './pages/Metrics'
import Methods from './pages/Methods'
import Curves from './pages/Curves'
import History from './pages/History'
import About from './pages/About'

function Tabs(){
  const tab = (to:string,label:string)=>(
    <NavLink to={to} className={({isActive}) =>
      `tab tab-bordered ${isActive ? 'tab-active' : ''}`}>{label}</NavLink>
  )
  return (
    <div className="tabs tabs-boxed bg-base-200 p-1 rounded-xl">
      {tab('/','Overview')}
      {tab('/results','Results')}
      {tab('/metrics','Metrics')}
      {tab('/methods','Methods')}
      {tab('/curves','Curves')}
      {tab('/history','History')}
      {tab('/about','About')}
    </div>
  )
}

function App(){
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Fractal-UTL Clinical Validator</h1>
        <p className="opacity-70 mb-6">RESEARCH EDITION v2 • PRODUCTION GRADE</p>
        <Tabs/>
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/results" element={<Results/>}/>
            <Route path="/metrics" element={<Metrics/>}/>
            <Route path="/methods" element={<Methods/>}/>
            <Route path="/curves" element={<Curves/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
        <footer className="mt-10 opacity-60 text-sm">
          Fractal-UTL • Production-grade: Retry + Timeout + Progress
        </footer>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
