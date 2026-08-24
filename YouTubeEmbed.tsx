interface Props {
  id: string
  title: string
}

export default function YouTubeEmbed({ id, title }: Props) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="px-4 py-3 text-sm text-slate-700 font-medium">{title}</div>
    </div>
  )
}
