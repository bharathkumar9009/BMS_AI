import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import { CheckCircle2, Lightbulb, Shield, Leaf, Users, Star, Award, TrendingUp, Heart, Zap } from 'lucide-react'
import BatteryVisualShowcase from '../components/sections/BatteryVisualShowcase'

const features = [
  'Advanced AI & Machine Learning Technology',
  'Real-Time Monitoring and Alerts',
  'Improved Battery Performance',
  'Reduced Maintenance Costs',
  'Enhanced Safety and Reliability',
  'Scalable and Secure Solutions',
  'Sustainable Energy Focus',
  'Innovative and future-ready solutions',
  'Experienced and dedicated technology professionals',
  'Customer-focused development approach',
  'High-quality project delivery',
  'Scalable and cost-effective services',
  'Long-term support and maintenance',
]

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously pushing technological boundaries to create smarter energy solutions. We embrace emerging technologies to create impactful solutions.' },
  { icon: Shield, title: 'Reliability', desc: 'Delivering dependable and accurate battery intelligence for critical operations.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Supporting clean energy initiatives and reducing environmental impact.' },
  { icon: Heart, title: 'Customer Success', desc: 'Building long-term partnerships through exceptional service and measurable results.' },
  { icon: Star, title: 'Integrity', desc: 'We operate with transparency, honesty, and accountability.' },
  { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in every project we deliver.' },
  { icon: Users, title: 'Collaboration', desc: 'We build strong partnerships with our clients to achieve shared success.' },
  { icon: TrendingUp, title: 'Growth', desc: 'We continuously learn, evolve, and help our clients grow through technology.' },
]

export default function Portfolio() {
  const featRef = useRef(null)
  const featInView = useInView(featRef, { once: true, margin: '-80px' })
  const valRef = useRef(null)
  const valInView = useInView(valRef, { once: true, margin: '-80px' })
  const taglineRef = useRef(null)
  const taglineInView = useInView(taglineRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      
      {/* 1. Hero (Dark Theme) */}
      <div className="pt-36 pb-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Portfolio & Values</span>
            </div>
            <h1 className="text-responsive-hero font-display font-bold text-white mb-6 leading-tight">
              Why Choose <span className="gradient-text text-glow-green">QuantumPulse?</span>
            </h1>
            <p className="text-qp-gray max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              Discover what sets us apart and the core values that drive everything we do.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Why Choose List (Light Theme) */}
      <section ref={featRef} className="section-padding bg-white relative overflow-hidden light-theme-selection">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-1.5 bg-qp-green/10 border border-qp-green/20 rounded-full px-2.5 py-0.5 mb-4">
              <Zap size={12} className="text-qp-green fill-qp-green" />
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Our Strengths</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[#0B1220] mb-4">
              Why Choose <span className="gradient-text">QuantumPulse?</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-sm sm:text-base">
              We combine cutting-edge AI technology with deep domain expertise to deliver unmatched battery intelligence solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, x: -20 }}
                animate={featInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4.5 bg-white rounded-xl p-5 border border-slate-200/80 hover:border-qp-green/30 hover:shadow shadow-sm transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-qp-green/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 size={18} className="text-qp-green" />
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-qp-green transition-colors duration-300">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Showcase */}
      <BatteryVisualShowcase />

      {/* 3. Core Values (Dark Theme) */}
      <section ref={valRef} className="section-padding bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Values</span>
            </div>
            <h2 className="text-responsive-heading font-display font-bold text-white mb-4">
              Our Core <span className="gradient-text text-glow-green">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={valInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group glass rounded-xl p-5.5 border border-white/5 hover:border-qp-green/25 hover:shadow-card-hover transition-all duration-300 text-center h-full flex flex-col items-center"
                >
                  <div className="w-13 h-13 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(0,200,46,0.15), rgba(0,200,46,0.05))', border: '1px solid rgba(0,200,46,0.25)' }}>
                    <Icon size={22} className="text-qp-green" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2.5 group-hover:text-qp-green transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-xs text-qp-gray leading-relaxed mt-auto">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Tagline Statement (Light Theme) */}
      <section ref={taglineRef} className="section-padding bg-[#F8FAFC] relative overflow-hidden light-theme-selection">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={taglineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-10 sm:p-14 border border-slate-200 shadow-xl shadow-slate-100 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-slate-600 font-bold mb-4.5 leading-relaxed">
                Empowering the future of energy through intelligent battery technology.
              </p>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-qp-green italic mb-8">
                "Innovating Today, Powering Tomorrow."
              </h3>
              <div className="text-slate-400 text-xs sm:text-sm font-bold tracking-wider uppercase">
                QuantumPulse — Where Innovation Meets Intelligence
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  )
}
