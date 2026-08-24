const caseStudies = [
  {
    name: 'Recent Rooftop Installations (2025–26)',
    location: 'Bengaluru & Across India',
    type: 'GI Ducting, AHU, Blowers & Scrubbers',
    scope: ['Rooftop GI ducting & elbows', 'Fresh air AHU with pre-filters', 'Centrifugal blowers', 'Electrostatic scrubbers', 'Facade-mounted vertical ducting'],
    images: [
      '/images/new/1000738527.jpg', '/images/new/1000738530.jpg', '/images/new/1000738529.jpg',
      '/images/new/1000738526.jpg', '/images/new/1000738528.jpg', '/images/new/1000738524.jpg',
      '/images/new/1000738525.jpg', '/images/new/1000738523.jpg', '/images/new/1000738521.jpg',
      '/images/new/1000738520.jpg', '/images/new/1000738518.jpg', '/images/new/1000738517.jpg',
      '/images/new/1000738513.jpg', '/images/new/1000738512.jpg', '/images/new/1000738514.jpg',
      '/images/new/1000738516.jpg', '/images/new/1000738511.jpg',
    ],
    alt: 'Rooftop GI ducting, AHU and blower installation by MEGAHOODS Megaverks',
  },
  {
    name: '1947 Restaurant, Jayanagar',
    location: 'Bangalore',
    type: 'Restaurant Kitchen',
    scope: ['Double Plenum Hoods — Medium to Heavy Cooking', 'Box Hood — Medium to Heavy Cooking', 'Lights / Baffle Filters / Grease Cups', 'Live Cooking Counter — Triple Plenum Hoods'],
    images: Array.from({ length: 11 }, (_, i) => `/images/projects/1947-restaurant-jayanagar-installation-${String(i + 1).padStart(2, '0')}.jpg`),
    alt: '1947 Restaurant Jayanagar kitchen exhaust hood installation by MEGAVERKS',
  },
  {
    name: 'Royal Menakshi Mall — Multi Cuisine Restaurant',
    location: 'Bengaluru',
    type: 'Mall Restaurant Kitchen',
    scope: ['Island Type Double Plenum — Both-Side Cooking', 'Triple Plenum Hoods', 'Live Cooking Counter Ventilation'],
    images: Array.from({ length: 4 }, (_, i) => `/images/projects/royal-menakshi-mall-restaurant-installation-${String(i + 1).padStart(2, '0')}.jpg`),
    alt: 'Royal Menakshi Mall multi cuisine restaurant island double plenum hood installation',
  },
  {
    name: 'Dormitory Canteen',
    location: 'Bangalore',
    type: 'Dormitory / Hostel Canteen Kitchen',
    scope: ['Condensate Hood — Bulk Steaming Area', 'Wall Hoods — Medium to Heavy Cooking', 'Lights / Baffle Filters / Grease Cups'],
    images: Array.from({ length: 4 }, (_, i) => `/images/projects/dormitory-canteen-kitchen-installation-${String(i + 1).padStart(2, '0')}.jpg`),
    alt: 'Dormitory canteen kitchen condensate hood and wall hood installation',
  },
  {
    name: 'Vijaynagar Club',
    location: 'Bangalore',
    type: 'Club House Kitchen',
    scope: ['GI Ducting / Blowers / Fresh Air Filters', 'Fresh Air Grills', 'Box Hood — Medium to Heavy Cooking', 'Lights / Baffle Filters / Grease Cups'],
    images: Array.from({ length: 5 }, (_, i) => `/images/projects/vijaynagar-club-kitchen-installation-${String(i + 1).padStart(2, '0')}.jpg`),
    alt: 'Vijaynagar Club house kitchen box hood and GI ducting installation',
  },
  {
    name: 'Exhaust Ducting, Blowers & Box Hoods',
    location: 'Various Sites',
    type: 'Equipment & Ducting Installations',
    scope: ['Exhaust GI Ducting', 'Centrifugal Blowers', 'MEGAVENTS Box Hoods'],
    images: Array.from({ length: 7 }, (_, i) => `/images/projects/exhaust-ducting-blower-equipment-installation-${String(i + 1).padStart(2, '0')}.jpg`),
    alt: 'Exhaust GI ducting, centrifugal blower and box hood installations',
  },
]

const clients = [
  { name: '1947 Jayanagara', location: 'Bangalore', type: 'Restaurant' },
  { name: 'Lullu Dorm Canteen', location: 'Bangalore', type: 'Hostel / Dorm Canteen' },
  { name: 'Vijaynagar Club House', location: 'Bangalore', type: 'Club House Kitchen' },
  { name: 'Varu Grand', location: 'Bangalore', type: 'Restaurant' },
  { name: "Stella's Bar and Kitchen", location: 'Bangalore', type: 'Resto Bar' },
  { name: 'Pizza Bakery', location: 'Kolar', type: 'Restaurant Chain' },
  { name: 'Garudos', location: 'Nallajerla, Vijayawada', type: 'Restaurant' },
  { name: 'Udupi Grand', location: 'Kalasipalyam', type: 'Restaurant' },
  { name: 'Krishna Cafe', location: 'Bangalore', type: 'Café' },
  { name: 'Groot — Bharathiya City Mall', location: 'Bengaluru', type: 'Mall Food Outlet' },
  { name: 'White Horse, 1522', location: 'Bangalore', type: 'Resto Bar' },
  { name: 'Guru R K Resto Bar', location: 'Doddaballapur', type: 'Resto Bar' },
  { name: 'Orchid International Canteen', location: 'Bangalore', type: 'School Canteen' },
  { name: 'Forum Mall Food Kitchen', location: 'Bengaluru', type: 'Mall Kitchen' },
]

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest mb-2">INSTALLATIONS</p>
      <h1 className="text-4xl font-black mb-4">Installations Done — Real Projects, Real Kitchens</h1>
      <p className="text-slate-600 max-w-3xl mb-16">
        Every project below was designed, manufactured at our Bangalore facility and installed by our own engineering team — from double plenum hoods and live-cooking counters to complete GI ducting, blowers and fresh-air systems.
      </p>

      {caseStudies.map(c => (
        <section key={c.name} className="mb-20">
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <h2 className="text-2xl font-bold">{c.name}</h2>
            <span className="text-amber-600 text-sm font-semibold">{c.type} · {c.location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {c.scope.map(s => <span key={s} className="text-xs bg-slate-100 border border-slate-300 rounded-full px-3 py-1 text-slate-700">{s}</span>)}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.images.map((src, i) => (
              <img key={src} src={src} alt={`${c.alt} — photo ${i + 1}`} loading="lazy"
                className="rounded-lg border border-slate-200 object-cover aspect-[4/3] w-full hover:scale-[1.02] transition" />
            ))}
          </div>
        </section>
      ))}

      <h2 className="text-3xl font-bold mb-6">More <span className="text-amber-600">Clients</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map(p => (
          <div key={p.name} className="bg-white border border-slate-200 rounded-lg p-5 hover:border-amber-500/50 transition">
            <div className="text-xs text-amber-600 font-semibold mb-1">{p.type}</div>
            <h3 className="font-semibold">{p.name}</h3>
            <div className="text-sm text-slate-600">{p.location}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
