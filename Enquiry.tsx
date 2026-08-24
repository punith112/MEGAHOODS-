import { useState } from 'react'
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react'

const productOptions = [
  'Single Plenum Exhaust Hood',
  'Double Plenum Exhaust Hood',
  'Triple Plenum Exhaust Hood',
  'Island Type Hood',
  'Box Type Hood',
  'Condensate Hood',
  'Low Ceiling Hood',
  'UV Exhaust Hood',
  'MEGA-VENTS Baffle Filters',
  'AHU / Fresh Air Unit',
  'Blowers',
  'GI / MS / SS Ducting',
  'Dry Scrubber / ESP',
  'AMC / Service',
]

export default function Enquiry() {
  const [f, setF] = useState({ name: '', phone: '', email: '', message: '' })
  const [products, setProducts] = useState<string[]>([])
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value })
  const toggle = (p: string) =>
    setProducts(products.includes(p) ? products.filter(x => x !== p) : [...products, p])

  const text = () =>
    `New Website Enquiry — MEGAHOODS%0A%0AName: ${encodeURIComponent(f.name)}%0APhone: ${encodeURIComponent(f.phone)}%0AEmail: ${encodeURIComponent(f.email || '-')}%0AProducts: ${encodeURIComponent(products.join(', ') || '-')}%0A%0AMessage:%0A${encodeURIComponent(f.message)}`

  const whatsapp = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(`https://wa.me/919019271476?text=${text()}`, '_blank')
  }
  const email = () => {
    const subject = `Website Enquiry — ${products.join(', ') || 'General'} — ${f.name}`
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || '-'}\nProducts: ${products.join(', ') || '-'}\n\nMessage:\n${f.message}`
    window.location.href = `mailto:megaverks@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const input = 'w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-500'

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest text-sm mb-2">ENQUIRY</p>
      <h1 className="text-4xl font-extrabold mb-3">Send Us an <span className="text-amber-600">Enquiry</span></h1>
      <p className="text-slate-600 mb-10 max-w-2xl text-sm">Select the products you need and hit send — your enquiry reaches us instantly on <b>WhatsApp +91 90192 71476</b>. Our engineers respond within one working day.</p>

      <div className="grid md:grid-cols-5 gap-8">
        <form onSubmit={whatsapp} className="md:col-span-3 bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your Name *" value={f.name} onChange={set('name')} className={input} />
            <input required placeholder="Phone / WhatsApp *" value={f.phone} onChange={set('phone')} className={input} />
          </div>
          <input type="email" placeholder="Email" value={f.email} onChange={set('email')} className={input} />

          <div>
            <p className="text-sm font-semibold mb-2">Select Products / Services</p>
            <div className="flex flex-wrap gap-2">
              {productOptions.map(p => (
                <button type="button" key={p} onClick={() => toggle(p)}
                  className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${products.includes(p) ? 'bg-amber-500 border-amber-500 text-slate-950 font-semibold' : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-amber-500'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          <textarea required rows={4} placeholder="Tell us about your kitchen — size, equipment, location *" value={f.message} onChange={set('message')} className={input} />

          <div className="flex flex-wrap gap-3">
            <button type="submit" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-md hover:bg-green-400">
              <MessageCircle size={16} /> Send on WhatsApp
            </button>
            <button type="button" onClick={email} className="inline-flex items-center gap-2 border border-slate-300 font-semibold px-6 py-3 rounded-md hover:border-amber-500 hover:text-amber-600">
              <Send size={16} /> Email Instead
            </button>
          </div>
        </form>

        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold flex items-center gap-2 mb-2"><MessageCircle size={16} className="text-green-600" /> WhatsApp</h3>
            <p className="text-sm text-slate-600">+91 90192 71476<br />+91 96110 71087</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold flex items-center gap-2 mb-2"><MapPin size={16} className="text-amber-600" /> Office — Rajajinagar</h3>
            <p className="text-sm text-slate-600 mb-3">#M132, Ground Floor, Rajajinagar Industrial Estate, Bengaluru 560010</p>
            <a href="https://maps.app.goo.gl/JvHH3xTABC8TVYjv8" target="_blank" rel="noreferrer" className="text-sm font-semibold text-amber-600 hover:underline">Open in Google Maps →</a>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold flex items-center gap-2 mb-2"><MapPin size={16} className="text-amber-600" /> Factory — Magadi Road</h3>
            <p className="text-sm text-slate-600 mb-3">Manufacturing facility, Magadi Road, Bengaluru — CNC fabrication, welding & assembly. Factory visits welcome.</p>
            <a href="https://maps.app.goo.gl/YxTFYv71xEjDihRr5" target="_blank" rel="noreferrer" className="text-sm font-semibold text-amber-600 hover:underline">Open in Google Maps →</a>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold flex items-center gap-2 mb-2"><Mail size={16} className="text-amber-600" /> Email</h3>
            <p className="text-sm text-slate-600">megaverks@gmail.com<br />megaventshoods@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
