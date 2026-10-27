import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { AnimatedHeading } from '../../components/animations/AnimatedHeading'
import { skillGroups } from '../../data/skills'

export function Skills() {
  const groups = Object.entries(skillGroups)
  const [selected, setSelected] = useState(groups[0][0])
  const skills = groups.find(([name]) => name === selected)?.[1] ?? []
  return <section id="stack" className="skills section-pad">
    <div className="section-label"><span>05</span> TOOLKIT / ENGINEERING STACK</div>
    <div className="skills-layout"><div className="skills-intro"><AnimatedHeading text="The tools I use." className="section-title" /><p>A practical stack for building, testing, and shipping complete products.</p>
      <div className="skill-tabs" role="tablist" aria-label="Skill categories">{groups.map(([name], i) => <button role="tab" aria-selected={selected === name} className={selected === name ? 'active' : ''} onClick={() => setSelected(name)} key={name}><span>0{i + 1}</span>{name}</button>)}</div>
    </div><div className="skill-stage"><AnimatePresence mode="wait"><motion.div key={selected} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .35 }}><p className="skill-stage-label">{selected} / {String(skills.length).padStart(2, '0')}</p>
      <div className="skill-grid">{skills.map((skill, i) => <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * .035 }} key={skill}><span>{String(i + 1).padStart(2, '0')}</span><strong>{skill}</strong></motion.div>)}</div>
    </motion.div></AnimatePresence></div></div>
  </section>
}
