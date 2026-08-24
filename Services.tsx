import { ClipboardList, PencilRuler, Factory, Wrench, ShieldCheck, Sparkles } from 'lucide-react'
import YouTubeEmbed from '../components/YouTubeEmbed'

const steps = [
  { icon: ClipboardList, title: '1. Site Survey & Kitchen HVAC Planning', text: 'Our engineers visit your site, assess the cooking load and layout, and plan the complete kitchen HVAC — exhaust hood sizing, CFM requirements, fresh-air balance and duct routing.' },
  { icon: PencilRuler, title: '2. In-House Design', text: '2D CAD (ZWCAD) and 3D CAD (SolidWorks) designs with CAM-ready drawings — every hood custom-engineered before a single sheet is cut.' },
  { icon: Factory, title: '3. In-House Manufacturing', text: 'CNC fiber laser cutting, AMADA punching & bending, TIG/MIG welding at our Rajajinagar, Bangalore facility — no outsourcing, full quality control.' },
  { icon: Wrench, title: '4. On-Site Installation', text: 'Our own 10–12 member experienced installation team handles electricals, ducting, AHU/blower erection and commissioning — on schedule.' },
  { icon: ShieldCheck, title: '5. After-Sales Support & AMC', text: 'Annual maintenance contracts, preventive maintenance visits and rapid breakdown support from our trained service engineers.' },
  { icon: Sparkles, title: '6. Kitchen Exhaust Cleaning Service', text: 'Scheduled hood, duct and filter cleaning to keep your system at peak performance and fire-safe — delivered on time, every time.' },
]

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest mb-2">SERVICES</p>
      <h1 className="text-4xl font-black mb-4">Sales, Installation, AMC & Kitchen Exhaust Cleaning</h1>
      <p className="text-slate-600 max-w-3xl mb-12">
        MEGAVERKS is not just a manufacturer — we are your end-to-end kitchen ventilation partner. From free site survey and kitchen HVAC planning to installation by our experienced engineering team and lifetime AMC support.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {steps.map(s => (
          <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-500/50 transition">
            <s.icon className="text-amber-600 mb-4" size={30} />
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <p className="text-sm text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-amber-50/70 border border-slate-200 rounded-xl p-6 mb-12">
        <img src="/images/kitchen-ventilation-hvac-design.jpg" alt="Kitchen ventilation and HVAC design for a commercial kitchen by MEGAVERKS" loading="lazy" className="rounded-lg object-cover aspect-[4/3] w-full" />
        <div>
          <h2 className="text-2xl font-bold mb-3">Why Our AMC & Support Matters</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>✅ Well-trained engineers for after-sales service and on-site support</li>
            <li>✅ Scheduled vent cleaning services delivered on committed timelines</li>
            <li>✅ Grease filter, AHU pre-filter and scrubber maintenance programs</li>
            <li>✅ Single accountable partner — manufacturer, installer and servicer</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">See Our Team <span className="text-amber-600">on Site</span></h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <YouTubeEmbed id="LJrXgFf-xyU" title="Rain, Day, Night — Team Megaverks Don't Stop | Exhaust Installation" />
        <YouTubeEmbed id="SRMqPW_O3PI" title="Megaverks HVAC — Vapour Hoods, AHU & GI Ducting Installation" />
      </div>

      <div className="text-center">
        <a href="https://wa.me/919611071087" target="_blank" rel="noreferrer" className="inline-block bg-amber-500 text-slate-950 font-bold px-8 py-3 rounded-md hover:bg-amber-400">Book a Free Site Survey</a>
      </div>
    </div>
  )
}
