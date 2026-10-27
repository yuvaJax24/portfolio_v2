import { motion } from 'motion/react'

export function AnimatedHeading({ text, className = '' }: { text: string; className?: string }) {
  return <h2 className={className} aria-label={text}>{text.split(' ').map((word, i) => (
    <span className="word-mask" aria-hidden="true" key={`${word}-${i}`}><motion.span
      initial={{ opacity: .82, filter: 'blur(1.5px)' }} whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: i * .045, ease: [.22, 1, .36, 1] }}>{word}&nbsp;</motion.span></span>
  ))}</h2>
}
