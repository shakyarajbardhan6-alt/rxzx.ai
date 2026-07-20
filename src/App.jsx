import { useMemo, useState } from 'react'
import { notesData } from './data/notes.js'
import Sidebar from './components/Sidebar.jsx'
import ChapterGrid from './components/ChapterGrid.jsx'
import NoteView from './components/NoteView.jsx'

export default function App() {
  const [activeClass, setActiveClass] = useState(10)
  const [activeSubject, setActiveSubject] = useState('Maths')
  const [openChapterIndex, setOpenChapterIndex] = useState(null)
  const [query, setQuery] = useState('')

  const subjects = Object.keys(notesData[activeClass])
  const chapters = notesData[activeClass][activeSubject] || []

  const handleSetClass = (cls) => {
    setActiveClass(cls)
    setActiveSubject(Object.keys(notesData[cls])[0])
    setOpenChapterIndex(null)
  }

  const handleSetSubject = (subj) => {
    setActiveSubject(subj)
    setOpenChapterIndex(null)
  }

  // simple search across every class/subject/chapter
  const searchResults = useMemo(() => {
    if (!query.trim()) return null
    const q = query.toLowerCase()
    const results = []
    for (const cls of Object.keys(notesData)) {
      for (const subj of Object.keys(notesData[cls])) {
        notesData[cls][subj].forEach((ch, i) => {
          if (
            ch.chapter.toLowerCase().includes(q) ||
            ch.points.some((p) => p.toLowerCase().includes(q))
          ) {
            results.push({ cls, subj, chapter: ch, index: i })
          }
        })
      }
    }
    return results
  }, [query])

  return (
    <div className="min-h-screen text-ink font-body">
      <header className="border-b border-margin bg-white/70 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight">
              rxzx<span className="text-tab11">.ai</span>
            </h1>
            <p className="text-[10px] text-ink/40 -mt-0.5">
              Powered by Raj Bardhan
            </p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any chapter or topic…"
            className="w-64 sm:w-80 px-3 py-2 text-sm rounded-md border border-margin bg-white focus:outline-none focus:ring-2 focus:ring-tab11"
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-8 flex flex-col md:flex-row gap-8">
        {!query.trim() && (
          <Sidebar
            activeClass={activeClass}
            setActiveClass={handleSetClass}
            subjects={subjects}
            activeSubject={activeSubject}
            setActiveSubject={handleSetSubject}
          />
        )}

        <section className="flex-1">
          {query.trim() ? (
            <>
              <h2 className="font-display text-lg font-semibold mb-1">
                Results for "{query}"
              </h2>
              <p className="text-sm text-ink/50 mb-4">
                {searchResults.length} chapter(s) found
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {searchResults.map((r, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuery('')
                      handleSetClass(Number(r.cls))
                      handleSetSubject(r.subj)
                      setOpenChapterIndex(r.index)
                    }}
                    className="text-left bg-card border border-margin rounded-lg p-4 hover:shadow-md transition"
                  >
                    <span className="text-xs font-semibold text-ink/40">
                      Class {r.cls} · {r.subj}
                    </span>
                    <h3 className="font-display font-semibold mt-1">
                      {r.chapter.chapter}
                    </h3>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-lg font-semibold">
                  Class {activeClass} · {activeSubject}
                </h2>
                <span className="text-xs text-ink/40">
                  {chapters.length} chapters
                </span>
              </div>

              {openChapterIndex === null ? (
                <ChapterGrid
                  chapters={chapters}
                  onOpen={(i) => setOpenChapterIndex(i)}
                />
              ) : (
                <NoteView
                  chapter={chapters[openChapterIndex]}
                  index={openChapterIndex}
                  onBack={() => setOpenChapterIndex(null)}
                />
              )}
            </>
          )}
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-5 py-8 text-xs text-ink/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span>
          Built for quick revision — add more chapters in{' '}
          <code>src/data/notes.js</code>.
        </span>
        <span className="font-medium text-ink/50">
          Powered by <span className="text-tab11">Raj Bardhan</span>
        </span>
      </footer>
    </div>
  )
}
