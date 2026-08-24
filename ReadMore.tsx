import { useState } from 'react'

interface Props {
  text: string
  className?: string
}

export default function ReadMore({ text, className = '' }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className={className}>
      <button onClick={() => setOpen(!open)} className="text-amber-600 text-sm font-semibold hover:underline">
        {open ? '− Read less' : '+ Read more'}
      </button>
      {open && <p className="text-sm text-slate-600 mt-2">{text}</p>}
    </div>
  )
}
