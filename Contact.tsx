import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const faqs = [
  { q: 'What is the price of a commercial kitchen exhaust hood in India?', a: 'Custom SS304 kitchen exhaust hoods typically start from ₹3,500–₹8,500 per running foot depending on type (single plenum, double plenum, island), filters and accessories. Share your kitchen layout for a free exact quotation.' },
  { q: 'What is the difference between single plenum and double plenum hoods?', a: 'Single plenum hoods only extract fumes and grease-laden air. Double plenum hoods are double-skin construction that also supply fresh make-up air through vents inside the hood — better chef comfort and balanced kitchen HVAC.' },
  { q: 'Do you provide installation and AMC?', a: 'Yes — site survey, design, in-house fabrication, installation, commissioning, annual maintenance contracts (AMC) and scheduled kitchen exhaust cleaning, all by our own team of 10–12 experienced engineers.' },
  { q: 'Which steel grade is best for kitchen exhaust hoods?', a: 'SS304 is the industry standard for hygiene and corrosion resistance. We also fabricate in SS316, SS314 and SS202 to match budget and application.' },
  { q: 'Do you handle complete kitchen HVAC planning?', a: 'Yes. We plan and execute the full system — exhaust hoods, fresh air AHU, GI ducting, blowers, dry/wet electrostatic scrubbers and UV filtration — for central kitchens, cloud kitchens, hospitals, hotels and canteens across India.' },
  { q: 'Which areas do you serve?', a: 'We are based in Rajajinagar, Bengaluru, and execute projects across Bangalore, Chennai, Hyderabad, Mumbai, Delhi and all of India.' },
]

export default function Contact() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest mb-2">CONTACT</p>
      <h1 className="text-4xl font-black mb-4">Get a Free Site Survey & Quote</h1>
      <p className="text-slate-600 max-w-2xl mb-12">Call, WhatsApp or email us your kitchen layout — our engineers will respond with a design and quotation.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <a href="tel:+919611071087" className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-500/50 transition block">
          <Phone className="text-amber-600 mb-3" size={26} />
          <h2 className="font-semibold mb-1">Call Us</h2>
          <p className="text-sm text-slate-600">+91 96110 71087<br />+91 90192 71476</p>
        </a>
        <a href="https://wa.me/919611071087" target="_blank" rel="noreferrer" className="bg-white border border-slate-200 rounded-xl p-6 hover:border-green-500/50 transition block">
          <MessageCircle className="text-green-600 mb-3" size={26} />
          <h2 className="font-semibold mb-1">WhatsApp</h2>
          <p className="text-sm text-slate-600">Fastest response — send your kitchen layout photos and requirements.</p>
        </a>
        <a href="mailto:megaverks@gmail.com" className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-500/50 transition block">
          <Mail className="text-amber-600 mb-3" size={26} />
          <h2 className="font-semibold mb-1">Email</h2>
          <p className="text-sm text-slate-600">megaverks@gmail.com<br />megaventshoods@gmail.com</p>
        </a>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-16 flex gap-3 items-start">
        <MapPin className="text-amber-600 shrink-0 mt-1" size={22} />
        <div>
          <h2 className="font-semibold mb-1">Visit Our Facility</h2>
          <p className="text-sm text-slate-600 mb-2"><b>Office:</b> #M132, Ground Floor, Rajajinagar Industrial Estate, Bengaluru 560010 — <a href="https://maps.app.goo.gl/JvHH3xTABC8TVYjv8" target="_blank" rel="noreferrer" className="text-amber-600 font-semibold hover:underline">Google Maps →</a></p>
          <p className="text-sm text-slate-600"><b>Factory:</b> Magadi Road, Bengaluru — CNC fabrication & assembly — <a href="https://maps.app.goo.gl/YxTFYv71xEjDihRr5" target="_blank" rel="noreferrer" className="text-amber-600 font-semibold hover:underline">Google Maps →</a></p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Frequently Asked <span className="text-amber-600">Questions</span></h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="bg-white border border-slate-200 rounded-lg">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center">
              {f.q}
              <span className="text-amber-600">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="px-5 pb-4 text-sm text-slate-600">{f.a}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
