import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

export function InteractiveCursor() {
  const x = useSpring(useMotionValue(-50), { stiffness: 450, damping: 36 })
  const y = useSpring(useMotionValue(-50), { stiffness: 450, damping: 36 })
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e: PointerEvent) => setActive(Boolean((e.target as HTMLElement).closest('a,button,[data-cursor]')))
    window.addEventListener('pointermove', move); document.addEventListener('pointerover', over)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerover', over) }
  }, [x, y])
  return <motion.div className="custom-cursor" style={{ x, y }} animate={{ scale: active ? 2.5 : 1, opacity: active ? .35 : .75 }} aria-hidden="true" />
}
