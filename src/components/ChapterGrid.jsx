export default function ChapterGrid({ chapters, onOpen }) {
  if (!chapters || chapters.length === 0) {
    return (
      <p className="text-ink/50 italic mt-6">
        Notes coming soon for this subject — add them in{' '}
        <code className="bg-margin/40 px-1 rounded">src/data/notes.js</code>.
      </p>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-6">
      {chapters.map((ch, i) => (
        <button
          key={ch.chapter}
          onClick={() => onOpen(i)}
          className="text-left bg-card border border-margin rounded-lg p-4 hover:-translate-y-0.5 hover:shadow-md transition group"
        >
          <span className="text-xs font-semibold text-ink/40 tracking-wide">
            CH. {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="font-display font-semibold text-ink mt-1 group-hover:underline">
            {ch.chapter}
          </h3>
          <p className="text-xs text-ink/50 mt-2">
            {ch.points.length} key points
          </p>
        </button>
      ))}
    </div>
  )
}
