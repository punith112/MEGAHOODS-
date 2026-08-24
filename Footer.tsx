import { Link } from 'react-router'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold text-lg mb-2">MEGAVERKS <span className="text-amber-600">Technologies</span></div>
          <p className="text-slate-600">Commercial kitchen exhaust hood manufacturers in Bangalore — custom kitchen ventilation systems, AHU, GI ducting, scrubbers, installation & AMC across India.</p>
        </div>
        <div>
          <div className="font-semibold mb-3 text-amber-600">Products</div>
          <ul className="space-y-2 text-slate-600">
            <li><Link to="/products" className="hover:text-amber-600">Single Plenum Exhaust Hoods</Link></li>
            <li><Link to="/products" className="hover:text-amber-600">Double Plenum Hoods</Link></li>
            <li><Link to="/products" className="hover:text-amber-600">Triple Plenum Hoods</Link></li>
            <li><Link to="/products" className="hover:text-amber-600">Condensate Hoods</Link></li>
            <li><Link to="/products" className="hover:text-amber-600">AHU & Blowers</Link></li>
            <li><Link to="/products" className="hover:text-amber-600">GI Ducting & Scrubbers</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 text-amber-600">Company</div>
          <ul className="space-y-2 text-slate-600">
            <li><Link to="/services" className="hover:text-amber-600">Sales, Installation & AMC</Link></li>
            <li><Link to="/manufacturing" className="hover:text-amber-600">Manufacturing Facility</Link></li>
            <li><Link to="/industries" className="hover:text-amber-600">Industries We Serve</Link></li>
            <li><Link to="/projects" className="hover:text-amber-600">Completed Projects</Link></li>
            <li><Link to="/contact" className="hover:text-amber-600">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 text-amber-600">Contact</div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex gap-2 items-start"><Phone size={15} className="mt-0.5 text-amber-600" /> +91 96110 71087<br />+91 90192 71476</li>
            <li className="flex gap-2 items-start"><Mail size={15} className="mt-0.5 text-amber-600" /> megaverks@gmail.com<br />megaventshoods@gmail.com</li>
            <li className="flex gap-2 items-start"><MapPin size={15} className="mt-0.5 text-amber-600" /> <span><b>Office:</b> #M132, Rajajinagar Industrial Estate, Bengaluru 560010 · <a href="https://maps.app.goo.gl/JvHH3xTABC8TVYjv8" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">Map</a></span></li>
            <li className="flex gap-2 items-start"><MapPin size={15} className="mt-0.5 text-amber-600" /> <span><b>Factory:</b> Magadi Road, Bengaluru · <a href="https://maps.app.goo.gl/YxTFYv71xEjDihRr5" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">Map</a></span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Megaverks Technologies · Kitchen Exhaust Hood Manufacturers Bangalore · Kitchen HVAC Planning · Sales · Installation · AMC
      </div>
    </footer>
  )
}
