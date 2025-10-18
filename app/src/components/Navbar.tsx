import { NavLink } from "react-router-dom";

const NavItem = ({to, children}:{to:string, children:React.ReactNode}) => (
  <NavLink
    to={to}
    className={({isActive}) =>
      `px-3 py-2 rounded-lg hover:bg-white/5 ${isActive ? 'text-white bg-white/10' : 'text-slate-300'}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-[#0b1220]/70">
      <div className="container-xxl flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-gradient-to-tr from-brand-400 to-brand-200"></div>
          <div className="font-semibold">Fractal-UTL Clinical Validator</div>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Overview</NavItem>
          <NavItem to="/results">Results</NavItem>
          <NavItem to="/metrics">Metrics</NavItem>
          <NavItem to="/methods">Methods</NavItem>
          <NavItem to="/curves">Curves</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
      </div>
    </div>
  );
}
