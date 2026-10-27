import { motion, useMotionValue, useSpring } from 'motion/react'
import type { MouseEvent, PropsWithChildren } from 'react'

export function MagneticButton({ href, children, className = '', external = false }: PropsWithChildren<{ href: string; className?: string; external?: boolean }>) {
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 })
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 14 })
  const move = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * .16); y.set((e.clientY - r.top - r.height / 2) * .16)
  }
  const reset = () => { x.set(0); y.set(0) }
  return <motion.a href={href} style={{ x, y }} onMouseMove={move} onMouseLeave={reset} className={`magnetic-button ${className}`}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}</motion.a>
}
