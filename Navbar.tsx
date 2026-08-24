import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services & AMC' },
  { to: '/manufacturing', label: 'Manufacturing' },
  { to: '/industries', label: 'Industries' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/enquiry', label: 'Enquiry' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/megahoods-logo.png" alt="MEGAHOODS by Megaverks Technologies" className="h-11 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-700 hover:text-amber-600'}>
              {l.label}
            </NavLink>
          ))}
          <a href="tel:+919611071087" className="flex items-center gap-2 bg-amber-500 text-slate-950 font-semibold px-4 py-2 rounded-md hover:bg-amber-400">
            <Phone size={16} /> +91 96110 71087
          </a>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-slate-200 px-4 py-3 flex flex-col gap-3 text-sm bg-slate-50">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'text-amber-600 font-semibold' : 'text-slate-700'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
