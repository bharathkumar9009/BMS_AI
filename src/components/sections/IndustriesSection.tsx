import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Car, Sun, Building2, Grid3X3, Factory } from 'lucide-react'

const industries = [
  { icon: Car, label: 'Electric Vehicles (EV)', desc: 'AI-powered BMS for EV battery optimization' },
  { icon: Sun, label: 'Renewable Energy Storage', desc: 'Intelligent grid-scale battery management' },
  { icon: Factory, label: 'Manufacturing', desc: 'Industrial battery intelligence systems' },
  { icon: Grid3X3, label: 'Smart Grids', desc: 'Grid-connected battery analytics' },
  { icon: Building2, label: 'Industrial Equipment', desc: 'Heavy-duty battery monitoring solutions' },
]

export default function IndustriesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden light-theme-selection">
      {/* Decorative clean radial mesh */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-qp-green/10 border border-qp-green/20 rounded-full px-4 py-1.5 mb-6">
            <Zap size={12} className="text-qp-green fill-qp-green" />
            <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-responsive-heading font-display font-bold text-[#0B1220] mb-4">
            Powering <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            From electric vehicles to renewable energy — our AI battery intelligence platform serves critical industries worldwide.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group bg-white rounded-2xl p-6 text-center w-[210px] sm:w-[220px] border border-slate-200/80 shadow-sm hover:shadow-md hover:border-qp-green/30 transition-all duration-300 cursor-default"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-qp-green/10 border border-qp-green/25 flex items-center justify-center mx-auto mb-4.5 group-hover:bg-qp-green/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-qp-green" />
                </div>
                
                {/* Title */}
                <div className="text-sm font-bold text-slate-800 group-hover:text-qp-green transition-colors duration-300 mb-2.5 leading-snug">
                  {ind.label}
                </div>
                
                {/* Desc */}
                <div className="text-xs text-slate-500 leading-relaxed">
                  {ind.desc}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
