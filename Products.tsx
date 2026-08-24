import { Check } from 'lucide-react'
import YouTubeEmbed from '../components/YouTubeEmbed'
import ReadMore from '../components/ReadMore'
import ImageScroller from '../components/ImageScroller'

const uvImages = [
  { src: '/images/uv/uv-exhaust-hood-grease-elimination-display.jpg', alt: 'Commercial kitchen UV exhaust hood with UV lamps and baffle filters by MEGAHOODS' },
  { src: '/images/uv/uv-exhaust-hood-uv-lamps-baffle-chamber.jpg', alt: 'UV-C lamps glowing inside exhaust hood baffle chamber' },
  { src: '/images/uv/uv-exhaust-hood-side-view-baffle-filters.jpg', alt: 'Side view of UV exhaust hood with stainless baffle filters' },
  { src: '/images/uv/uv-exhaust-hood-exhibition-demo-unit.jpg', alt: 'UV exhaust hood demo unit displayed at exhibition by Megaverks' },
  { src: '/images/uv/uv-cassette-filter-bank-inside-hood.jpg', alt: 'UV cassette filter bank mounted inside exhaust hood plenum' },
  { src: '/images/uv/uv-lamps-glowing-inside-exhaust-hood.jpg', alt: 'Closeup of UV lamps behind baffle filters inside kitchen exhaust hood' },
]

const islandImages = [
  { src: '/images/island/island-type-exhaust-hood-central-kitchen-cooking-line.jpg', alt: 'Island type exhaust hood over central kitchen cooking line by MEGAHOODS' },
  { src: '/images/island/island-type-exhaust-hood-double-sided-cooking-range.jpg', alt: 'Island type exhaust hood spanning double-sided cooking range' },
  { src: '/images/island/double-island-exhaust-hoods-central-kitchen.jpg', alt: 'Double island exhaust hoods in central kitchen with MEGAVERKS branding' },
  { src: '/images/island/island-hood-live-commercial-kitchen-megaverks.jpg', alt: 'Island hood in live commercial kitchen during service' },
  { src: '/images/island/island-exhaust-hood-over-dosa-tawa-station.jpg', alt: 'Island exhaust hood over dosa tawa and bulk cooking station' },
  { src: '/images/island/island-type-hood-busy-restaurant-kitchen.jpg', alt: 'Island type hood in busy restaurant kitchen' },
  { src: '/images/island/megaverks-branded-island-hood-baffle-filters-closeup.jpg', alt: 'MEGAVERKS branded island hood with baffle filters closeup' },
  { src: '/images/island/island-hood-installation-canteen-kitchen.jpg', alt: 'Island hood installation in canteen kitchen' },
  { src: '/images/island/twin-island-hoods-with-led-lighting.jpg', alt: 'Twin island hoods with integrated LED lighting' },
]

const boxImages = [
  { src: '/images/box/box-type-hood-baffle-filters-exhaust-capture.jpg', alt: 'Box type hood with baffle filters — strong exhaust fume capture' },
  { src: '/images/box/box-type-hood-over-cooking-range-kitchen.jpg', alt: 'Box type hood installed over commercial cooking range' },
  { src: '/images/box/box-type-hood-with-led-lighting-underside.jpg', alt: 'Box hood underside with baffle filters and LED lighting' },
  { src: '/images/box/box-hood-connected-to-gi-duct-and-grille.jpg', alt: 'Box hood connected to GI duct and fresh-air grille' },
  { src: '/images/box/box-type-hood-ceiling-suspended-chains.jpg', alt: 'Ceiling-suspended box type exhaust hood' },
]

const condensateImages = [
  { src: '/images/condensate/condensate-hood-underside-stainless-panels.jpg', alt: 'Condensate hood underside with removable stainless panels by MEGAHOODS' },
  { src: '/images/condensate/condensate-hood-with-gi-ducting-installation.jpg', alt: 'Condensate hood connected to GI ducting at installation site' },
  { src: '/images/condensate/condensate-hood-jindal-stainless-fabrication.jpg', alt: 'Condensate hood fabricated in Jindal stainless steel' },
]

const uvPoints = [
  'Protect, purify, prevent — UV innovation for safe and fresh kitchen spaces',
  'UV solutions for fire safety and odor elimination',
  'Radiant defense: UV systems for grease-free, odorless kitchen environments',
  'UV-C lamps neutralize grease vapour — no grease accumulation in exhaust ducts & blowers',
  'Retrofit cassettes or factory-fitted inside new MEGAHOODS hoods',
]

const specs = [
  'Rugged construction in Stainless Steel SS304 / SS316 / SS314 / SS202',
  'TIG welded with seamless finish',
  'IP-rated operating controls and lighting',
  'Optimum hood elevation angles for maximum exhaust suction and fresh-air discharge',
  'Ergonomically designed oil drain cups',
  'Specially designed grease baffle filters',
  'Optional fire suppression, UV filtration and water-wash systems',
  'Designs governed by NFPA 96 (fire safety & construction) and ASHRAE Standard 154',
]

const hoods = [
  {
    name: 'Classic Hoods — Single Plenum',
    img: '/images/cards/wall-canopy-hood.jpg',
    alt: 'SS304 wall type single plenum exhaust hood manufactured by MEGAVERKS',
    types: ['Wall Type Hood', 'Box Type Hood', 'Wall Type Low Ceiling Hood', 'Island Type Low Ceiling Hood', 'Box Hoods Single Plenum', 'Low Ceiling Economical Hood'],
    desc: 'MEGA classic hoods are mounted above cooking equipment placed along the wall, with the rear end flushed to the wall. They perform the core job of ventilating the kitchen by extracting fumes, gases and hot air — an economical, reliable choice for restaurants, canteens and cloud kitchens.',
  },
  {
    name: 'Premium Hoods — Double Plenum',
    img: '/images/premium-double-plenum-hood-perforated-plenum.jpg',
    alt: 'Double plenum exhaust hood with fresh-air perforated plenum and baffle filters',
    types: ['Island Hood', 'Box Type Hood', 'Condensate Hood', 'Box / Low Ceiling Double Plenum Hoods', 'Condensate Hoods Double Skin', 'Box Type Island Type Hood', 'Box / Low Ceiling Double Skin Hoods'],
    desc: 'MEGA premium hoods are mounted above equipment along the wall or at the centre of the kitchen. Double-skin construction (fresh air IN, impure air OUT) extracts fumes while pushing fresh make-up air through vents inside the hood — superior chef comfort and balanced kitchen HVAC.',
  },
  {
    name: 'Premium Hoods — Triple Plenum',
    img: '/images/cards/triple-plenum-hood.jpg',
    alt: 'Triple plenum kitchen hood with fresh air diffusers and exhaust ducting',
    types: ['Box / Low Ceiling Triple Plenum Hoods'],
    desc: 'Our top-tier triple plenum design delivers maximum capture efficiency with dedicated exhaust, fresh-air supply and front-duct plenums — engineered for high-load hotel kitchens, central kitchens and convention halls.',
  },
]

const variants = [
  { name: 'Box Hood — Single Plenum', img: '/images/box/box-type-hood-baffle-filters-exhaust-capture.jpg', alt: 'Box type exhaust hood with baffle filters capturing cooking fumes' },
  { name: 'Island Hood', img: '/images/cards/island-hood.jpg', alt: 'Island type commercial kitchen exhaust hood' },
  { name: 'Condensate Hood', img: '/images/condensate/condensate-hood-underside-stainless-panels.jpg', alt: 'Condensate exhaust hood underside with stainless steel panels' },
  { name: 'Low Ceiling Hood', img: '/images/cards/low-ceiling-hood.jpg', alt: 'Low ceiling economical kitchen exhaust hood' },
]

const systems = [
  {
    name: 'Air Handling Units (AHU / FAHU)',
    img: '/images/air-handling-unit-pre-filters.jpg',
    alt: 'Air handling unit with pre-filters for kitchen fresh air',
    desc: 'Exhaust and fresh-air AHUs with washable pre-filters, designed for make-up air and balanced ventilation in commercial kitchens.',
  },
  {
    name: 'Blowers — Exhaust / Fresh Air',
    img: '/images/rooftop-exhaust-blower-ahu.jpg',
    alt: 'Rooftop kitchen exhaust blower and AHU installation',
    desc: 'High-static exhaust and fresh-air blowers sized to your duct run and cooking load, roof- or floor-mounted with vibration isolation.',
  },
  {
    name: 'GI Ducting — Insulated / Painted',
    img: '/images/new/1000738522.jpg',
    alt: 'GI ducting and kitchen exhaust hoods installed by MEGAHOODS',
    desc: 'Factory-fabricated GI ducting — insulated or painted — for exhaust and fresh air, installed with proper slopes, access panels and fire-safe routing.',
  },
  {
    name: 'Scrubbers, UV & Filters',
    img: '/images/cards/baffle-grease-filter.jpg',
    alt: 'Grease baffle filters in commercial kitchen exhaust hood',
    desc: 'Wet / dry electrostatic scrubbers, UV filter systems, FAHU/EXAHU filters and isolators for grease, smoke and odour control at the discharge.',
  },
]

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest mb-2">PRODUCTS</p>
      <h1 className="text-4xl font-black mb-4">Commercial Kitchen Exhaust Hoods & Ventilation Systems</h1>
      <p className="text-slate-600 max-w-3xl mb-12">
        Every MEGAVERKS hood is custom-designed to your kitchen layout and cooking load, then fabricated in-house in stainless steel and installed by our own team. Choose from classic single plenum, premium double plenum and triple plenum designs — plus complete AHU, blower, GI ducting and scrubber systems.
      </p>

      <h2 className="text-2xl font-bold mb-6">Technical Specification <span className="text-amber-600">(All Hoods)</span></h2>
      <ul className="grid md:grid-cols-2 gap-3 mb-16">
        {specs.map(s => (
          <li key={s} className="flex gap-3 bg-white border border-slate-200 rounded-md p-4 text-sm text-slate-700">
            <Check className="text-amber-600 shrink-0" size={18} /> {s}
          </li>
        ))}
      </ul>

      {hoods.map(h => (
        <section key={h.name} className="grid md:grid-cols-2 gap-8 items-center mb-16 bg-amber-50/70 border border-slate-200 rounded-xl p-6">
          <img src={h.img} alt={h.alt} loading="lazy" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <div>
            <h2 className="text-2xl font-bold mb-3">{h.name}</h2>
            <ReadMore text={h.desc} />
            <div className="flex flex-wrap gap-2">
              {h.types.map(t => <span key={t} className="text-xs bg-slate-100 border border-slate-300 rounded-full px-3 py-1 text-slate-700">{t}</span>)}
            </div>
          </div>
        </section>
      ))}

      <section className="mb-16 bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-3">Island Type <span className="text-amber-600">Exhaust Hoods</span></h2>
        <ul className="grid md:grid-cols-2 gap-3 mb-8">
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Suspended over island / central cooking lines — extraction from all sides</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Single, double &amp; triple plenum options with fresh-air supply</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Integrated LED lighting and MEGA-VENTS baffle filters</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Ideal for central kitchens, mega kitchens, canteens &amp; live counters</li>
        </ul>
        <ImageScroller items={islandImages} caption="Island type exhaust hoods by MEGAHOODS" />
      </section>

      <section className="mb-16 bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-3">Condensate <span className="text-amber-600">Hoods</span></h2>
        <ul className="grid md:grid-cols-2 gap-3 mb-8">
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Captures steam &amp; condensation over dishwashers, steamers and boiling lines</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Fabricated in Jindal stainless steel with removable access panels</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Integrated condensate drainage — keeps walls and ceilings dry</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Single &amp; double skin options, sized to your equipment line</li>
        </ul>
        <ImageScroller items={condensateImages} caption="Condensate hoods by MEGAHOODS" />
      </section>

      <section className="mb-16 bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-3">Box Type <span className="text-amber-600">Exhaust Hoods</span></h2>
        <ul className="grid md:grid-cols-2 gap-3 mb-8">
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Deep capture chamber — excellent capture of exhaust fumes &amp; smoke from heavy cooking</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> MEGA-VENTS baffle filters with oil drain arrangement</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Ceiling-suspended or wall-flushed installation, with GI ducting</li>
          <li className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700"><Check className="text-amber-600 shrink-0" size={18} /> Proven in restaurants, canteens, cloud &amp; central kitchens</li>
        </ul>
        <ImageScroller items={boxImages} caption="Box type exhaust hoods by MEGAHOODS" />
      </section>

      <h2 className="text-3xl font-bold mb-8 mt-4">Hood <span className="text-amber-600">Variants</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {variants.map(v => (
          <figure key={v.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-amber-500/60 transition-colors">
            <img src={v.img} alt={v.alt} loading="lazy" className="w-full aspect-square object-cover" />
            <figcaption className="p-3 text-sm font-medium text-slate-800 text-center">{v.name}</figcaption>
          </figure>
        ))}
      </div>

      <section className="grid md:grid-cols-2 gap-8 items-center mb-16 bg-white border border-slate-200 rounded-xl p-6">
        <img src="/images/cards/baffle-grease-filter.jpg" alt="MEGA-VENTS baffle grease filter for commercial kitchen exhaust hood" loading="lazy" className="rounded-lg object-cover aspect-[4/3] w-full" />
        <div>
          <h2 className="text-2xl font-bold mb-4">MEGA-VENTS <span className="text-amber-600">Baffle Grease Filters</span></h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2"><Check className="text-amber-600 shrink-0" size={18} /> Mechanical baffle design — high-efficiency grease separation</li>
            <li className="flex gap-2"><Check className="text-amber-600 shrink-0" size={18} /> Stainless steel construction built for Indian kitchen loads</li>
            <li className="flex gap-2"><Check className="text-amber-600 shrink-0" size={18} /> Removable, washable & dishwasher-safe — easy maintenance</li>
            <li className="flex gap-2"><Check className="text-amber-600 shrink-0" size={18} /> Sized & configured to your hood by our engineers</li>
          </ul>
        </div>
      </section>

      <section className="mb-16 bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-3">UV <span className="text-amber-600">Exhaust Hoods</span></h2>
        <p className="text-slate-600 text-sm mb-5 max-w-2xl">UV-C lights inside the exhaust hood break down grease vapour at source — eliminating grease accumulation in exhaust ducts and blowers, cutting fire risk and duct-cleaning costs.</p>
        <ul className="grid md:grid-cols-2 gap-3 mb-8">
          {uvPoints.map(p => (
            <li key={p} className="flex gap-3 bg-amber-50/70 border border-slate-200 rounded-md p-4 text-sm text-slate-700">
              <Check className="text-amber-600 shrink-0" size={18} /> {p}
            </li>
          ))}
        </ul>
        <ImageScroller items={uvImages} caption="UV-C system inside MEGAHOODS exhaust hood" />
      </section>

      <h2 className="text-3xl font-bold mb-8 mt-4">AHU, Blowers, Ducting & <span className="text-amber-600">Scrubbers</span></h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {systems.map(s => (
          <div key={s.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <img src={s.img} alt={s.alt} loading="lazy" className="w-full aspect-[16/10] object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
              <ReadMore text={s.desc} />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <YouTubeEmbed id="zbCb5_3xvgY" title="Megaverks Restaurant Kitchen Exhaust — Double Plenum / AHU / Dry Scrubber / GI Ducting" />
      </div>

      <div className="text-center bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30 rounded-xl p-10">
        <h2 className="text-2xl font-bold mb-3">Need Exhaust Hood Options & Accessories?</h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">Fire suppression, UV filtration, water-wash hoods, oil drain cups, custom baffle filters — configured to your exact kitchen specification.</p>
        <a href="https://wa.me/919611071087" target="_blank" rel="noreferrer" className="inline-block bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-md hover:bg-amber-400">Request a Quote on WhatsApp</a>
      </div>
    </div>
  )
}
