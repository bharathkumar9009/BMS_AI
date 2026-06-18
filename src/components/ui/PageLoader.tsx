import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[999] bg-qp-dark flex flex-col items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-50" />

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center gap-8"
      >
        {/* Logo icon */}
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(0,200,46,0.3)',
              '0 0 60px rgba(0,200,46,0.7)',
              '0 0 20px rgba(0,200,46,0.3)',
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-20 h-20 rounded-2xl bg-qp-dark-2 border border-qp-green/30 flex items-center justify-center"
        >
          <Zap size={40} className="text-qp-green fill-qp-green" />
        </motion.div>

        {/* Brand name */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-display font-bold text-white mb-1"
          >
            Quantum<span className="text-qp-green">Pulse</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-qp-gray tracking-widest uppercase"
          >
            AI Battery Intelligence
          </motion.p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-qp-dark-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-qp-green-dark via-qp-green to-qp-green-light rounded-full"
            style={{ boxShadow: '0 0 10px #00C82E' }}
          />
        </div>

        {/* Status text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="text-xs text-qp-green/60 tracking-widest uppercase"
        >
          Initializing AI Systems...
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-qp-green"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, -80],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
