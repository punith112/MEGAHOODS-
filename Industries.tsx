const industries = [
  { name: 'Restaurants & Restaurant Chains', img: '/images/restaurant-kitchen-ventilation-system.jpg', alt: 'Restaurant kitchen ventilation system with exhaust hood', text: 'High-efficiency exhaust hoods and compact fresh-air systems for single outlets and multi-city restaurant chains — consistent spec, repeatable rollout.' },
  { name: 'Hotels & Resorts', img: '/images/hotel-kitchen-steamers-hood.jpg', alt: 'Hotel kitchen steamers under double plenum exhaust hood', text: 'Premium double plenum hoods, condensate hoods and scrubbers for banquet, all-day dining and specialty kitchens.' },
  { name: 'Hospital Canteens', img: '/images/hospital-canteen-kitchen-hood.jpg', alt: 'Hospital canteen kitchen exhaust hood installation', text: 'Hygienic SS304 systems with easy-clean filters and AMC support that meets hospital compliance standards.' },
  { name: 'School & College Canteens', img: '/images/commercial-kitchen-exhaust-hood-installation-bangalore.jpg', alt: 'School and college canteen kitchen ventilation', text: 'Durable, safe ventilation for institutional kitchens serving hundreds of meals a day.' },
  { name: 'Hostel Canteens', img: '/images/double-plenum-hood-fresh-air-kitchen.jpg', alt: 'Hostel canteen kitchen with exhaust hood and fresh air', text: 'Economical low-ceiling hoods and reliable exhaust systems for hostel and dormitory kitchens.' },
  { name: 'Convention Halls & Convention Kitchens', img: '/images/kitchen-exhaust-system-ahu-ducting.jpg', alt: 'Convention hall kitchen exhaust and AHU ducting', text: 'High-capacity mega-kitchen ventilation for convention centres, exhibition centres and event catering.' },
  { name: 'Central Kitchens & Cloud Kitchens', img: '/images/industrial-central-kitchen-exhaust-hood-line.jpg', alt: 'Central kitchen and cloud kitchen exhaust hood line', text: 'Industrial-scale hood lines, GI ducting and scrubbers engineered for round-the-clock production.' },
  { name: 'Concept Kitchens & Corporate Canteens', img: '/images/kitchen-ventilation-hvac-design.jpg', alt: 'Concept kitchen HVAC design by MEGAVERKS', text: 'Bespoke kitchen HVAC planning for concept kitchens, corporate cafeterias and food courts.' },
]

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest mb-2">INDUSTRIES</p>
      <h1 className="text-4xl font-black mb-4">Kitchen Ventilation for Every Food-Service Sector</h1>
      <p className="text-slate-600 max-w-3xl mb-12">
        We have designed, manufactured and installed kitchen exhaust and HVAC systems for restaurants, restaurant chains, hotels, hospitals, schools, hostels, convention halls, central kitchens, cloud kitchens and concept kitchens across India.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {industries.map(i => (
          <div key={i.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-amber-500/50 transition">
            <img src={i.img} alt={i.alt} loading="lazy" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <h2 className="font-semibold text-lg mb-2">{i.name}</h2>
              <p className="text-sm text-slate-600">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
