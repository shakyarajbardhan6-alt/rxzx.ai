export default function NoteView({ chapter, index, onBack }) {
  return (
    <div className="mt-6">
      <button
        onClick={onBack}
        className="text-sm text-ink/60 hover:text-ink mb-4 inline-flex items-center gap-1"
      >
        ← Back to chapters
      </button>

      <div className="bg-card border border-margin rounded-lg p-6 shadow-sm">
        <span className="text-xs font-semibold text-ink/40 tracking-wide">
          CH. {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-display text-2xl font-bold text-ink mt-1 mb-5">
          {chapter.chapter}
        </h2>

        <ul className="space-y-3">
          {chapter.points.map((point, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-highlight shrink-0" />
              <span className="text-ink/85 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
