import { Link } from 'react-router'
import { ArrowRight, Factory, Wrench, ShieldCheck, ClipboardList, Fan, Flame, Wind, Sparkles } from 'lucide-react'
import YouTubeEmbed from '../components/YouTubeEmbed'
import ReadMore from '../components/ReadMore'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '12+', label: 'Experienced Engineers & Installation Team' },
  { value: '200+', label: 'Installations & Counting Across India' },
  { value: '100%', label: 'In-House CNC Fabrication' },
]

const highlights = [
  { icon: Factory, title: 'Own Manufacturing Facility', text: 'CNC fiber laser, AMADA punching & bending, TIG/MIG welding — every hood fabricated in-house at our Bangalore facility.' },
  { icon: Wrench, title: 'Sales + On-Site Installation', text: 'End-to-end: site survey, kitchen HVAC planning, design, fabrication, installation and commissioning by our own team.' },
  { icon: ShieldCheck, title: 'After-Sales Support & AMC', text: 'Annual maintenance contracts, scheduled exhaust cleaning and rapid service support from 10–12 experienced engineers.' },
  { icon: ClipboardList, title: 'Free Site Survey & Quote', text: 'Share your kitchen layout — we design the complete exhaust, fresh-air and ducting system to match your cooking load.' },
]

const products = [
  { icon: Flame, title: 'Exhaust Hoods', text: 'Classic single plenum, premium double plenum, triple plenum, island, box, low-ceiling & condensate hoods in SS304.' },
  { icon: Wind, title: 'AHU & Fresh Air Units', text: 'Exhaust / fresh-air air handling units with pre-filters for balanced kitchen ventilation.' },
  { icon: Fan, title: 'Blowers & GI Ducting', text: 'Exhaust and fresh-air blowers, insulated / painted GI ducting, fabricated and installed by us.' },
  { icon: Sparkles, title: 'Scrubbers & UV Filters', text: 'Wet / dry electrostatic scrubbers and UV filtration systems for grease, smoke and odour control.' },
]

const industries = ['Restaurants & Restaurant Chains', 'Hotels & Resorts', 'Hospital Canteens', 'School & College Canteens', 'Hostel Canteens', 'Convention Halls', 'Central Kitchens', 'Cloud Kitchens', 'Concept Kitchens', 'Corporate Canteens', 'Airports', 'Industrial Kitchens']

const gallery = [
  { src: '/images/commercial-kitchen-exhaust-hood-installation-bangalore.jpg', alt: 'Commercial kitchen exhaust hood installation in Bangalore by MEGAHOODS' },
  { src: '/images/premium-double-plenum-hood-perforated-plenum.jpg', alt: 'Premium double plenum exhaust hood with perforated fresh-air plenum' },
  { src: '/images/kitchen-exhaust-system-ahu-ducting.jpg', alt: 'Kitchen exhaust system with AHU and GI ducting' },
  { src: '/images/new/1000738505.jpg', alt: 'Island type exhaust hood installed in modern commercial kitchen by MEGAHOODS' },
  { src: '/images/new/1000738522.jpg', alt: 'Multiple kitchen exhaust hoods with GI ducting by MEGAHOODS' },
  { src: '/images/new/1000738527.jpg', alt: 'Rooftop GI ducting elbows for kitchen exhaust by MEGAHOODS' },
  { src: '/images/new/1000738530.jpg', alt: 'Fresh air blowers with pre-filter boxes installed by MEGAHOODS' },
  { src: '/images/new/1000738512.jpg', alt: 'MEGAVERKS air handling unit rooftop installation' },
  { src: '/images/new/restaurant-kitchen-island-hood-chefs.jpg', alt: 'Island hood over live restaurant kitchen cooking line by MEGAHOODS' },
  { src: '/images/new/baffle-filter-hood-fire-suppression-piping.jpg', alt: 'Exhaust hood with baffle filters and fire suppression piping' },
  { src: '/images/new/live-kitchen-exhaust-hood-ducting.jpg', alt: 'Live kitchen exhaust hood connected to GI ducting' },
  { src: '/images/new/wall-canopy-hood-closeup.jpg', alt: 'Wall canopy stainless steel exhaust hood closeup' },
  { src: '/images/new/compact-kitchen-wall-hood.jpg', alt: 'Compact commercial kitchen wall exhaust hood installation' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img src="/images/industrial-central-kitchen-exhaust-hood-line.jpg" alt="Industrial central kitchen exhaust hood line manufactured by MEGAVERKS Bangalore" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-slate-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <p className="text-amber-600 font-semibold tracking-widest mb-4">COMMERCIAL KITCHEN VENTILATION SPECIALISTS · BANGALORE, INDIA</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl">
            Commercial Kitchen Exhaust Hood Manufacturers in <span className="text-amber-600">Bangalore</span>
          </h1>
          <ul className="mt-6 space-y-2 text-lg text-slate-700">
            <li>✅ Custom SS304 exhaust hoods & double plenum hoods</li>
            <li>✅ AHU, blowers, GI ducting & dry scrubbers</li>
            <li>✅ Own factory — design, fabrication, installation & AMC</li>
            <li>✅ Stainless steel grades — kitchen-compliance material used for all hoods</li>
            <li>✅ 200+ installations and counting across India</li>
            <li>✅ GI, MS & SS ducting with fire-resistant, rust-proof coatings</li>
            <li>✅ Every system installed, checked & efficiency-tested for best performance</li>
          </ul>
          <ReadMore className="mt-3 max-w-2xl" text="MEGAVERKS Technologies designs, manufactures and installs complete commercial kitchen ventilation systems — exhaust hoods, fresh-air AHU, GI ducting, blowers, wet/dry electrostatic scrubbers and UV filtration — for restaurants, hotels, hospitals, schools, hostels, convention halls, central kitchens and cloud kitchens across India. 10+ years of experience with a dedicated team of 10–12 engineers and installers." />
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/919611071087" target="_blank" rel="noreferrer" className="bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-md hover:bg-amber-400 flex items-center gap-2">
              Get Free Site Survey <ArrowRight size={18} />
            </a>
            <Link to="/products" className="border border-slate-300 px-6 py-3 rounded-md font-semibold hover:border-amber-400 hover:text-amber-600">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 -mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-black text-amber-600">{s.value}</div>
            <div className="text-sm text-slate-600 mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Why us */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-2">Sales, Manufacturing, Installation & AMC — <span className="text-amber-600">All Under One Roof</span></h2>
        <p className="text-slate-600 max-w-2xl mb-10">Unlike resellers, MEGAVERKS manufactures every hood in our own facility and installs it with our own 10–12 member team of experienced engineers — one accountable partner for the life of your kitchen.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(h => (
            <div key={h.title} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-amber-500/50 transition">
              <h.icon className="text-amber-600 mb-4" size={28} />
              <h3 className="font-semibold mb-2">{h.title}</h3>
              <ReadMore text={h.text} />
            </div>
          ))}
        </div>
      </section>

      {/* Products teaser */}
      <section className="bg-amber-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-10">Complete Kitchen Ventilation <span className="text-amber-600">Systems</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <Link to="/products" key={p.title} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-amber-500/60 transition group">
                <p.icon className="text-amber-600 mb-4" size={28} />
                <h3 className="font-semibold mb-2 group-hover:text-amber-600">{p.title}</h3>
                <ReadMore text={p.text} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-2">Watch MEGAVERKS <span className="text-amber-600">in Action</span></h2>
        <p className="text-slate-600 mb-10">Real installations and product showcases — straight from our YouTube channel.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <YouTubeEmbed id="zbCb5_3xvgY" title="Restaurant Kitchen Exhaust — Double Plenum / AHU / Dry Scrubber / GI Ducting" />
          <YouTubeEmbed id="SRMqPW_O3PI" title="Megaverks HVAC — Vapour Hoods, AHU & GI Ducting Installation" />
          <YouTubeEmbed id="LJrXgFf-xyU" title="Rain, Day, Night — Team Megaverks Don't Stop | Exhaust Installation" />
        </div>
        <a href="https://youtube.com/@megaverkstechnologiesinstallat" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 text-amber-600 font-semibold hover:gap-3 transition-all">
          Subscribe to our YouTube channel <ArrowRight size={18} />
        </a>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">News & <span className="text-amber-600">Recent Updates</span></h2>
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-xl p-6">
          <img src="/images/new/1000738504.jpg" alt="MEGAHOODS by Megaverks Technologies at India MSME Conclave 2025 Bengaluru exhibition" loading="lazy" className="rounded-lg object-cover w-full" />
          <div>
            <div className="text-amber-600 text-sm font-semibold mb-2">EXHIBITION · MAY 30 – JUNE 1, 2025</div>
            <h3 className="text-xl font-bold mb-3">MEGAHOODS at India MSME Conclave 2025</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>🏆 Recognized for outstanding participation & contribution as an exhibitor</li>
              <li>📍 Tripura Vasini, Palace Grounds, Bengaluru</li>
              <li>🤝 Organized by FKCCI, KASSIA & Peenya Industries Association</li>
            </ul>
            <ReadMore className="mt-3" text="MEGAHOODS by Megaverks Technologies showcased its commercial kitchen exhaust hoods and ventilation systems at the India MSME Conclave 2025, meeting industry leaders, hoteliers and kitchen consultants from across Karnataka." />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-2">Recent <span className="text-amber-600">Installations</span></h2>
        <p className="text-slate-600 mb-10">Real projects — fabricated and installed by the MEGAVERKS team.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map(g => (
            <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="rounded-lg border border-slate-200 object-cover aspect-[4/3] w-full hover:scale-[1.02] transition" />
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-amber-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Industries We <span className="text-amber-600">Serve</span></h2>
          <div className="flex flex-wrap gap-3">
            {industries.map(i => (
              <span key={i} className="bg-white border border-slate-300 rounded-full px-4 py-2 text-sm text-slate-700">{i}</span>
            ))}
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 mt-8 text-amber-600 font-semibold hover:gap-3 transition-all">
            See how we serve each industry <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Planning a New Kitchen or Upgrading Ventilation?</h2>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">Share your kitchen layout or requirement — our engineers will design, fabricate and install the complete exhaust and fresh-air system.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919611071087" target="_blank" rel="noreferrer" className="bg-green-500 text-white font-bold px-6 py-3 rounded-md hover:bg-green-400">WhatsApp Us</a>
          <a href="tel:+919611071087" className="bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-md hover:bg-amber-400">Call +91 96110 71087</a>
        </div>
      </section>
    </div>
  )
}
