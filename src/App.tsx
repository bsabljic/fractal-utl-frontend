import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Results from './pages/Results';
import Curves from './pages/Curves';
import Methods from './pages/Methods';
import About from './pages/About';

export default function App(){
  return (
    <BrowserRouter>
      <div className='min-h-screen'>
        <Header/>
        <main className='max-w-6xl mx-auto px-4 py-6'>
          <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/results' element={<Results/>}/>
            <Route path='/curves' element={<Curves/>}/>
            <Route path='/methods' element={<Methods/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
function Header(){
  const nav = [['/','Overview'],['/results','Results'],['/curves','Curves'],['/methods','Methods'],['/about','About']];
  return <div className='border-b bg-white'><div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
    <div className='font-semibold'>Fractal-UTL Clinical Validator</div>
    <nav className='flex gap-4 text-sm'>{nav.map(([h,l])=><Link key={h} to={h} className='hover:underline'>{l}</Link>)}</nav>
  </div></div>
}
function Footer(){
  return <div className='border-t text-xs text-gray-600'><div className='max-w-6xl mx-auto px-4 py-4'>Fractal-UTL • Clinical-Grade v2.4 • UTL_v1.1</div></div>
}
