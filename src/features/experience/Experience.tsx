import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { AnimatedHeading } from '../../components/animations/AnimatedHeading'

const chapters = [
  { phase: 'Foundation', title: 'Web product engineering', copy: 'Building responsive React interfaces, typed application logic, backend integrations, and dependable delivery practices.', tags: ['React', 'TypeScript', 'Node.js'] },
  { phase: 'Expansion', title: 'Enterprise & healthcare systems', copy: 'Working with complex workflows, reusable application foundations, gateway integrations, and structured data.', tags: ['Next.js', 'NestJS', 'PostgreSQL'] },
  { phase: 'Specialization', title: 'Kiosk, identity & real-time', copy: 'Engineering Electron journeys that coordinate biometric SDKs, hardware, offline states, security, and live event streams.', tags: ['Electron', 'SignalR', 'Biometrics'] },
  { phase: 'Now / Next', title: 'Intelligent product experiences', copy: 'Exploring voice, agents, and AI-assisted workflows while continuing to raise the bar for architecture and interaction.', tags: ['AI Agents', 'ElevenLabs', 'Cloud'] },
]

export function Experience() {
  const [open, setOpen] = useState(2)
  return <section id="experience" className="experience section-pad">
    <div className="section-label"><span>02</span> EXPERIENCE / TRAJECTORY</div>
    <AnimatedHeading text="Experience through real products." className="section-title wide-title" />
    <p className="experience-note">A project-based view of my work. Company names and dates are omitted because they were not provided.</p>
    <div className="timeline">{chapters.map((item, i) => <article className={open === i ? 'open' : ''} key={item.title}>
      <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
        <span className="timeline-index">0{i + 1}</span><span><small>{item.phase}</small>{item.title}</span>{open === i ? <X /> : <Plus />}
      </button>
      <div className="timeline-detail"><div><p>{item.copy}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></div>
    </article>)}</div>
  </section>
}
