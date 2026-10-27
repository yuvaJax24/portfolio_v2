import { motion } from 'motion/react'
import { ArrowDownRight, Github, Linkedin } from 'lucide-react'
import { MagneticButton } from '../../components/ui/MagneticButton'
import { profile } from '../../data/profile'

const words = ['Building', 'Digital', 'Experiences', 'That', 'Matter.']

export function Hero() {
  return <section id="home" className="hero section-pad">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-kicker"><span>PORTFOLIO / 2026</span><span>CHENNAI, INDIA · 13.08° N</span></div>
    <h1 aria-label="Building Digital Experiences That Matter.">{words.map((word, i) => <span className={`hero-word hero-word-${i}`} key={word} aria-hidden="true"><motion.span initial={{ y: '110%', rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: .9, delay: .12 + i * .1, ease: [.16, 1, .3, 1] }}>{word}</motion.span></span>)}</h1>
    <div className="hero-bottom">
      <motion.div className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .85 }}>
        <p>Full-stack engineer building reliable web, desktop, and cloud products.</p>
        <div className="hero-actions"><MagneticButton href="#projects">Explore my work <ArrowDownRight size={17} /></MagneticButton>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="View GitHub"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn"><Linkedin /></a></div>
      </motion.div>
      <motion.div className="hero-orbit" initial={{ scale: .6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .65, duration: 1 }} aria-hidden="true">
        <span className="orbit-text">YUVAPRASATH G · FULL-STACK ENGINEER · </span><div className="orbit-core"><b>5+</b><small>YEARS</small></div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight /></a>
  </section>
}
