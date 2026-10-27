import { motion } from 'motion/react'
import type { PropsWithChildren } from 'react'

export function ScrollReveal({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  return <motion.div className={className} initial={{ opacity: .76, y: 8, filter: 'blur(1.5px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-8%' }} transition={{ duration: .6, delay, ease: [.2, .8, .2, 1] }}>{children}</motion.div>
}
