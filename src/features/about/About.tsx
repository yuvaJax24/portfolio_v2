import { AnimatedHeading } from '../../components/animations/AnimatedHeading'
import { ScrollReveal } from '../../components/animations/ScrollReveal'

export function About() {
  return <section id="about" className="about section-pad">
    <div className="section-label"><span>01</span> ABOUT / APPROACH</div>
    <div className="about-layout">
      <div className="about-sticky"><AnimatedHeading text="Ideas into reliable products." className="section-title" /><p className="mono-note">BEYOND THE INTERFACE</p>
        <div className="about-visual" role="img" aria-label="Diagram connecting frontend, backend, devices, and cloud engineering">
          <span className="about-orbit orbit-a" /><span className="about-orbit orbit-b" /><i className="node node-a" /><i className="node node-b" /><i className="node node-c" />
          <strong>FULL<br />STACK</strong><small>FRONTEND · BACKEND<br />DEVICES · CLOUD</small>
        </div>
      </div>
      <div className="about-copy">
        <ScrollReveal><p className="lead">I turn complex ideas into simple, dependable products.</p></ScrollReveal>
        <ScrollReveal delay={.08}><p>For 5+ years, I’ve built web apps, enterprise platforms, and desktop software with React, TypeScript, Node.js, and Electron.</p></ScrollReveal>
        <ScrollReveal delay={.12}><p>My work spans healthcare, aviation, fintech, and enterprise SaaS—from biometric kiosks to real-time business platforms.</p></ScrollReveal>
        <div className="about-facts">
          <ScrollReveal><div><strong>5+</strong><span>Years building<br />production software</span></div></ScrollReveal>
          <ScrollReveal delay={.08}><div><strong>04</strong><span>Product domains<br />explored deeply</span></div></ScrollReveal>
          <ScrollReveal delay={.16}><div><strong>↔</strong><span>Interface to cloud<br />end-to-end thinking</span></div></ScrollReveal>
        </div>
      </div>
    </div>
  </section>
}
