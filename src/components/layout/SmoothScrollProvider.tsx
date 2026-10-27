import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, type PropsWithChildren } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.1 })
    lenis.on('scroll', ScrollTrigger.update)
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update); gsap.ticker.lagSmoothing(0)
    const context = gsap.context(() => {
      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .2 } })
      gsap.to('.hero-grid', { yPercent: 24, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } })
    })
    return () => { context.revert(); gsap.ticker.remove(update); lenis.destroy() }
  }, [])
  return children
}
