import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Custom SVGs with animations for each service card
const illustrations = {
  monitoring: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Battery outline */}
      <rect x="15" y="15" width="45" height="30" rx="4" stroke="#00C82E" strokeWidth="1.5" />
      <rect x="61" y="23" width="3" height="14" rx="1" fill="#00C82E" />
      {/* Live charging animation */}
      <motion.rect 
        x="18" y="18" height="24" rx="2" fill="#00C82E"
        animate={{ width: [10, 38, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Waveform overlapping */}
      <path d="M 5 45 Q 15 10 30 35 T 55 15 T 80 50" stroke="#00C82E" strokeWidth="1.5" strokeLinecap="round" className="animate-flow-line opacity-95" />
      <circle cx="80" cy="50" r="3" fill="#00C82E" className="animate-pulse" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Gear rotation */}
      <g transform="translate(30, 30)" className="animate-turbine-spin" style={{ transformOrigin: 'center' }}>
        <circle cx="0" cy="0" r="14" stroke="#00C82E" strokeWidth="2" strokeDasharray="6,3" />
        <circle cx="0" cy="0" r="8" stroke="#00C82E" strokeWidth="1.5" />
      </g>
      {/* Small gear rotation (reverse) */}
      <g transform="translate(58, 42)" className="animate-flow-line-reverse" style={{ transformOrigin: 'center' }}>
        <circle cx="0" cy="0" r="8" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="4,2" />
        <circle cx="0" cy="0" r="4" stroke="#00C82E" strokeWidth="1" />
      </g>
      {/* Pulse warning radar */}
      <circle cx="70" cy="18" r="4" fill="#EAB308" />
      <circle cx="70" cy="18" r="8" stroke="#EAB308" strokeWidth="1" opacity="0.5" className="animate-pulse" />
      <line x1="30" y1="30" x2="70" y2="18" stroke="#00C82E" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
    </svg>
  ),
  optimization: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Loop flow */}
      <path d="M 20 30 Q 50 5 80 30 T 20 30" stroke="#6B7280" strokeWidth="1.5" opacity="0.3" />
      <path d="M 20 30 Q 50 5 80 30 T 20 30" stroke="#00C82E" strokeWidth="1.5" strokeLinecap="round" className="animate-flow-line-fast" />
      {/* Lightning bolt indicator */}
      <path d="M 50 18 L 46 32 L 53 32 L 48 44" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
      <circle cx="20" cy="30" r="3" fill="#00C82E" />
      <circle cx="80" cy="30" r="3" fill="#00C82E" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Graph lines */}
      <rect x="10" y="45" width="80" height="2" fill="#6B7280" opacity="0.3" />
      <line x1="10" y1="10" x2="10" y2="45" stroke="#6B7280" strokeWidth="1.5" opacity="0.3" />
      {/* Dynamic line chart */}
      <path d="M 10 40 L 30 25 L 50 35 L 70 12 L 90 20" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Chart points */}
      <circle cx="30" cy="25" r="2.5" fill="#00C82E" />
      <circle cx="50" cy="35" r="2.5" fill="#00C82E" />
      <circle cx="70" cy="12" r="3" fill="#00C82E" className="animate-pulse" />
      <circle cx="90" cy="20" r="2.5" fill="#00C82E" />
      {/* Bar columns */}
      <rect x="25" y="32" width="10" height="13" fill="#00C82E" opacity="0.15" />
      <rect x="65" y="18" width="10" height="27" fill="#00C82E" opacity="0.15" />
    </svg>
  ),
  safety: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Security shield outline */}
      <path d="M 50 10 Q 70 14 75 25 Q 75 42 50 52 Q 25 42 25 25 Q 30 14 50 10 Z" fill="none" stroke="#00C82E" strokeWidth="1.8" />
      <path d="M 50 14 Q 66 18 70 26 Q 70 38 50 47 Q 30 38 30 26 Q 34 18 50 14 Z" fill="rgba(0, 200, 46, 0.05)" />
      {/* Node pulse center */}
      <circle cx="50" cy="28" r="4" fill="#00C82E" />
      <circle cx="50" cy="28" r="9" stroke="#00C82E" strokeWidth="1.2" strokeDasharray="3,3" className="animate-turbine-spin-fast" />
      {/* Scan overlay */}
      <line x1="20" y1="20" x2="80" y2="20" stroke="#00C82E" strokeWidth="1" className="animate-flow-line opacity-50" />
    </svg>
  ),
  solutions: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* AI Network Brain Nodes */}
      <circle cx="50" cy="30" r="10" stroke="#00C82E" strokeWidth="1.5" className="animate-pulse" />
      {/* Surrounding nodes */}
      <circle cx="20" cy="20" r="3" fill="#00C82E" />
      <circle cx="80" cy="20" r="3" fill="#00C82E" />
      <circle cx="35" cy="48" r="3.5" fill="#00C82E" className="animate-pulse" />
      <circle cx="65" cy="48" r="3.5" fill="#00C82E" className="animate-pulse" />
      {/* Neural linkages */}
      <line x1="20" y1="20" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="80" y1="20" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="35" y1="48" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="65" y1="48" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="20" x2="35" y2="48" stroke="#00C82E" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="20" x2="65" y2="48" stroke="#00C82E" strokeWidth="1" opacity="0.3" />
      {/* Sparkles */}
      <circle cx="50" cy="30" r="2" fill="#00C82E" />
    </svg>
  ),
}

const services = [
  {
    illustration: illustrations.monitoring,
    title: 'AI Battery Monitoring',
    desc: 'Real-time monitoring and analysis of battery health, performance, temperature, and charging patterns.',
  },
  {
    illustration: illustrations.maintenance,
    title: 'Predictive Maintenance',
    desc: 'Advanced AI algorithms detect potential failures and maintenance requirements before they impact operations.',
  },
  {
    illustration: illustrations.optimization,
    title: 'Battery Life Optimization',
    desc: 'Intelligent charging and discharging recommendations to maximize battery lifespan and efficiency.',
  },
  {
    illustration: illustrations.analytics,
    title: 'Energy Analytics',
    desc: 'Comprehensive dashboards and reports that provide deep insights into battery usage and energy consumption.',
  },
  {
    illustration: illustrations.safety,
    title: 'Safety Intelligence',
    desc: 'Early detection of abnormal battery behavior to reduce risks and improve operational safety.',
  },
  {
    illustration: illustrations.solutions,
    title: 'AI Solutions',
    desc: 'Leveraging AI and machine learning to automate processes, improve decision-making, and unlock new business opportunities.',
  },
]

export default function ServicesHighlight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-qp-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0">
        <div className="animated-grid absolute inset-0 opacity-20" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-[0.03] bg-qp-green" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-6">
            <span className="text-xs text-qp-green font-medium tracking-wider uppercase">Our Solutions</span>
          </div>
          <h2 className="text-responsive-heading font-display font-bold text-white mb-4">
            Intelligent <span className="gradient-text">Battery Intelligence</span>
          </h2>
          <p className="text-qp-gray max-w-2xl mx-auto text-sm sm:text-base">
            By combining advanced analytics, machine learning, and battery expertise, we enable smarter, safer, and more sustainable energy solutions.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 border border-white/5 hover:border-qp-green/20 hover:shadow-card-hover transition-all duration-300 cursor-default flex flex-col justify-between h-full"
              style={{ '--hover-glow': `0 8px 40px rgba(0,200,46,0.12)` } as React.CSSProperties}
            >
              <div>
                {/* Custom SVG Illustration */}
                <div className="mb-6 flex items-center justify-center rounded-xl bg-[#162035]/40 border border-white/[0.04] p-4.5 group-hover:bg-[#162035]/65 group-hover:border-qp-green/10 transition-colors duration-300">
                  {svc.illustration}
                </div>

                <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-qp-green transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-sm text-qp-gray leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              {/* Interaction Details */}
              <div className="flex items-center gap-1.5 text-xs text-qp-green font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span>Explore technical specs</span>
                <ArrowRight size={12} className="animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <Link to="/services" className="btn-outline group">
            View All Services 
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
