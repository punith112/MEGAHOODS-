const machines = [
  { name: 'CNC Fiber Laser', detail: '1KW & 2KW fiber laser cutting for precise SS/GI profiles' },
  { name: 'CNC Punching — AMADA', detail: 'High-speed precision punching' },
  { name: 'CNC Bending — AMADA & ADH', detail: 'Press brake bending for seamless hood panels' },
  { name: 'TIG Welding × 2', detail: 'Seamless stainless steel finish welding' },
  { name: 'MIG Welding × 2', detail: 'Structural and GI fabrication' },
  { name: 'Stud Welding Machine', detail: 'Fastener integration for hood assemblies' },
]

const design = [
  { name: '2D CAD — ZWCAD', detail: 'Detailed fabrication & installation drawings' },
  { name: '3D CAD — SolidWorks', detail: '3D hood and system modeling before manufacture' },
  { name: 'CAM Software — MFT', detail: 'Machine-ready programs for CNC production' },
]

export default function Manufacturing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-amber-600 font-semibold tracking-widest mb-2">MANUFACTURING</p>
      <h1 className="text-4xl font-black mb-4">Our In-House Manufacturing Facility — Bangalore</h1>
      <p className="text-slate-600 max-w-3xl mb-12">
        ISO-certified, world-class manufacturing processes. Every MEGAVERKS hood is designed in 2D/3D CAD, cut on CNC fiber lasers, punched and bent on AMADA machines, and TIG-welded to a seamless finish — all under one roof at Rajajinagar Industrial Estate, Bengaluru.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <img src="/images/jindal-ss304-hood-fabrication.jpg" alt="Jindal SS304 stainless steel hood fabrication at MEGAVERKS factory" loading="lazy" className="rounded-xl border border-slate-200 w-full object-cover aspect-[4/3]" />
        <img src="/images/new/1000738509.jpg" alt="GI duct fabrication at MEGAVERKS manufacturing facility Bangalore" loading="lazy" className="rounded-xl border border-slate-200 w-full object-cover aspect-[4/3]" />
      </div>
      <p className="text-xs text-slate-500 mb-12">Genuine Jindal Stainless (JSLU SS) sheets and in-house GI duct fabrication — quality raw material, traceable source.</p>

      <h2 className="text-2xl font-bold mb-6">Machine <span className="text-amber-600">Capability</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {machines.map(m => (
          <div key={m.name} className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-amber-600 mb-2">{m.name}</h3>
            <p className="text-sm text-slate-600">{m.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">In-House Design <span className="text-amber-600">Capability</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {design.map(d => (
          <div key={d.name} className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-amber-600 mb-2">{d.name}</h3>
            <p className="text-sm text-slate-600">{d.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Process <span className="text-amber-600">Flow</span></h2>
      <div className="flex flex-wrap items-center gap-3 mb-16 text-sm">
        {['Raw Material Storage', 'Manufacturing Shop Floor', 'Quality Check', 'FG Boxed & Packed', 'Dispatch & Installation'].map((p, i, arr) => (
          <span key={p} className="flex items-center gap-3">
            <span className="bg-white border border-amber-500/40 rounded-full px-4 py-2">{p}</span>
            {i < arr.length - 1 && <span className="text-amber-600">→</span>}
          </span>
        ))}
      </div>

      <img src="/images/factory-ahu-blower-ducting-installation.jpg" alt="Factory AHU blower and ducting installation by MEGAVERKS" loading="lazy" className="rounded-xl border border-slate-200 w-full max-h-[480px] object-cover" />
    </div>
  )
}
