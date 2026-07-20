import { classList } from '../data/notes.js'

const classColor = {
  10: 'bg-tab10',
  11: 'bg-tab11',
  12: 'bg-tab12',
}

export default function Sidebar({
  activeClass,
  setActiveClass,
  subjects,
  activeSubject,
  setActiveSubject,
}) {
  return (
    <aside className="md:w-56 w-full flex md:flex-col gap-2 md:gap-3">
      <div className="flex md:flex-col gap-2 md:gap-2 w-full">
        {classList.map((cls) => (
          <button
            key={cls}
            onClick={() => setActiveClass(cls)}
            className={`flex-1 md:flex-none text-left px-4 py-2.5 rounded-l-md md:rounded-l-none md:rounded-r-md font-display font-semibold text-sm transition
              ${
                activeClass === cls
                  ? `${classColor[cls]} text-white shadow-sm`
                  : 'bg-white text-ink/70 hover:bg-white/80 border border-margin'
              }`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <div className="hidden md:block border-t border-margin my-2" />

      <nav className="flex md:flex-col gap-2 flex-wrap">
        {subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => setActiveSubject(subj)}
            className={`text-left px-3 py-2 rounded-md text-sm font-medium transition
              ${
                activeSubject === subj
                  ? 'bg-ink text-white'
                  : 'text-ink/70 hover:bg-margin/40'
              }`}
          >
            {subj}
          </button>
        ))}
      </nav>
    </aside>
  )
}
