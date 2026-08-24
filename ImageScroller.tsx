import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Item = { src: string; alt: string }

export default function ImageScroller({ items, caption }: { items: Item[]; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * Math.min(420, ref.current.clientWidth * 0.8), behavior: 'smooth' })
  }
  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 [scrollbar-width:thin]"
      >
        {items.map(i => (
          <figure key={i.src} className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] bg-white border border-slate-200 rounded-xl overflow-hidden">
            <img src={i.src} alt={i.alt} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            {caption && <figcaption className="p-3 text-xs text-slate-600 text-center">{caption}</figcaption>}
          </figure>
        ))}
      </div>
      <button aria-label="Scroll left" onClick={() => scroll(-1)}
        className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white/95 border border-slate-300 rounded-full p-2 shadow hover:border-amber-500">
        <ChevronLeft size={20} />
      </button>
      <button aria-label="Scroll right" onClick={() => scroll(1)}
        className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white/95 border border-slate-300 rounded-full p-2 shadow hover:border-amber-500">
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
