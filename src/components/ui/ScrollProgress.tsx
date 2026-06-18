import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-qp-green z-[100] origin-left"
      style={{ scaleX: scrollYProgress, boxShadow: '0 0 10px #00C82E' }}
    />
  )
}
