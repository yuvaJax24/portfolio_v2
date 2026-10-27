import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatedHeading } from '../../components/animations/AnimatedHeading'
import { projects } from '../../data/projects'
import { ProjectVisual } from './ProjectVisual'

gsap.registerPlugin(Draggable)

export function Projects() {
  const track = useRef<HTMLDivElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  const moveTo = (index: number) => {
    const next = Math.max(0, Math.min(projects.length - 1, index)); const width = viewport.current?.clientWidth ?? 0
    activeRef.current = next; setActive(next); gsap.to(track.current, { x: -next * width, duration: .8, ease: 'power3.out' })
  }
  useEffect(() => { activeRef.current = active }, [active])
  useEffect(() => {
    if (!track.current || !viewport.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = track.current; const vp = viewport.current
    const drag = Draggable.create(el, { type: 'x', edgeResistance: .82, inertia: false,
      bounds: { minX: -(projects.length - 1) * vp.clientWidth, maxX: 0 },
      onDragEnd() { moveTo(Math.round(-this.x / vp.clientWidth)) },
    })[0]
    const resize = () => moveTo(activeRef.current); window.addEventListener('resize', resize)
    return () => { drag.kill(); window.removeEventListener('resize', resize) }
  }, [])
  return <section id="projects" className="projects section-pad">
    <div className="section-label"><span>03</span> SELECTED WORK / CASE STUDIES</div>
    <div className="projects-head"><AnimatedHeading text="Selected work." className="section-title" />
      <div className="gallery-controls"><span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span><button onClick={() => moveTo(active - 1)} disabled={active === 0} aria-label="Previous project"><ArrowLeft /></button><button onClick={() => moveTo(active + 1)} disabled={active === projects.length - 1} aria-label="Next project"><ArrowRight /></button></div>
    </div>
    <div className="project-viewport" ref={viewport} tabIndex={0} onKeyDown={(e) => { if (e.key === 'ArrowRight') moveTo(active + 1); if (e.key === 'ArrowLeft') moveTo(active - 1) }} aria-label="Featured project gallery. Use left and right arrow keys to navigate.">
      <div className="project-track" ref={track}>{projects.map((project) => <article className="project-slide" key={project.id}>
        <ProjectVisual project={project} />
        <div className="project-content"><div className="project-meta"><span>{project.index}</span>{project.domain}</div><h3>{project.title}</h3><p>{project.description}</p>
          <h4>Engineering contribution</h4><ul className="contributions">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
          <ul className="tag-list">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>{project.note && <small className="project-note">{project.note}</small>}
        </div>
      </article>)}</div>
    </div>
    <div className="project-dots" aria-label="Choose a project">{projects.map((project, i) => <button key={project.id} className={active === i ? 'active' : ''} onClick={() => moveTo(i)} aria-label={`View ${project.title}`}><span /></button>)}</div>
  </section>
}
