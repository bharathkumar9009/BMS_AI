import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-qp-dark relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-30" />
      {/* Large glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-8">
            <Zap size={12} className="text-qp-green fill-qp-green" />
            <span className="text-xs text-qp-green font-medium tracking-wider uppercase">
              QuantumPulse — Where Innovation Meets Intelligence
            </span>
          </div>

          <h2 className="text-responsive-heading font-display font-bold text-white mb-6">
            Let's Shape the <span className="gradient-text">Digital Future</span>
          </h2>

          <p className="text-qp-gray max-w-2xl mx-auto mb-4 leading-relaxed">
            Empowering the future of energy through intelligent battery technology.
          </p>

          <p className="text-lg font-semibold text-qp-green mb-10 italic">
            "Innovating Today, Powering Tomorrow."
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              Start Your Journey <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-outline text-base px-10 py-4">
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
