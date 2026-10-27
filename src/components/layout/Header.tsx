import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../../data/profile'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' })
    sections.forEach((s) => observer.observe(s)); return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const escape = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape)
  }, [open])
  const navigate = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <header className={`site-header ${open ? 'menu-open' : ''}`}><a href="#home" className="brand" aria-label="Yuvaprasath G, home"><span>YG</span><small>FULL—STACK<br />ENGINEER</small></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, id], i) => <button aria-label={label} key={id} onClick={() => navigate(id)} className={active === id ? 'active' : ''}><em>0{i + 1}</em>{label}</button>)}</nav>
    <a className="availability" href={`mailto:${profile.email}`}><i /> Available for conversation</a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-nav" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} aria-label="Mobile navigation">
      {navItems.map(([label, id], i) => <button aria-label={label} key={id} onClick={() => navigate(id)}><span>0{i + 1}</span>{label}</button>)}
    </motion.nav>}</AnimatePresence>
  </header>
}
