import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919611071087?text=Hi%20MEGAVERKS%2C%20I%20need%20a%20quote%20for%20a%20commercial%20kitchen%20exhaust%20hood%20%2F%20ventilation%20system."
      target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-green-400"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} /> <span className="hidden sm:inline">Get Free Quote</span>
    </a>
  )
}
