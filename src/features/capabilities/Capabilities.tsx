import { ArrowUpRight } from 'lucide-react'
import { AnimatedHeading } from '../../components/animations/AnimatedHeading'
import { capabilities } from '../../data/skills'

export function Capabilities() {
  return <section className="capabilities section-pad"><div className="section-label"><span>06</span> CAPABILITIES / HOW I BUILD</div>
    <AnimatedHeading text="How I build." className="section-title" />
    <div className="capability-list">{capabilities.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight /></article>)}</div>
  </section>
}
