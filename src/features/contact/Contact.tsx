import { ArrowUpRight, Check, Copy, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { MagneticButton } from '../../components/ui/MagneticButton'
import { profile } from '../../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <section id="contact" className="contact section-pad"><div className="section-label light"><span>07</span> CONTACT / START A CONVERSATION</div>
    <p className="contact-kicker">HAVE AN IDEA?</p><h2>Let’s build something <em>useful</em> together.</h2>
    <div className="contact-actions"><MagneticButton href={`mailto:${profile.email}`} className="contact-cta">Start a conversation <ArrowUpRight /></MagneticButton>
      <button className="copy-email" onClick={copy}>{copied ? <Check /> : <Copy />}{copied ? 'Copied' : profile.email}</button></div>
    <footer><div><strong>YUVAPRASATH G</strong><span>FULL-STACK SOFTWARE ENGINEER</span></div><nav aria-label="Social links"><a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></nav><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer>
  </section>
}
