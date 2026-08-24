import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Manufacturing from './pages/Manufacturing'
import Industries from './pages/Industries'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img src="/images/new/restaurant-kitchen-island-hood-chefs.jpg" alt="" className="w-full h-full object-cover opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-slate-50/90" />
      </div>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
