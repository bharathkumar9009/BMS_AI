import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import { MessageSquare, Car, Sun, Factory, Database, Smartphone, Grid3X3, Building2, Zap } from 'lucide-react'

// Custom SVGs with animations for battery services
const batteryIllustrations = {
  monitoring: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      <rect x="15" y="15" width="45" height="30" rx="4" stroke="#00C82E" strokeWidth="1.5" />
      <rect x="61" y="23" width="3" height="14" rx="1" fill="#00C82E" />
      <motion.rect 
        x="18" y="18" height="24" rx="2" fill="#00C82E"
        animate={{ width: [10, 38, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <path d="M 5 45 Q 15 10 30 35 T 55 15 T 80 50" stroke="#00C82E" strokeWidth="1.5" strokeLinecap="round" className="animate-flow-line opacity-95" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      <g transform="translate(30, 30)" className="animate-turbine-spin" style={{ transformOrigin: 'center' }}>
        <circle cx="0" cy="0" r="14" stroke="#00C82E" strokeWidth="2" strokeDasharray="6,3" />
        <circle cx="0" cy="0" r="8" stroke="#00C82E" strokeWidth="1.5" />
      </g>
      <g transform="translate(58, 42)" className="animate-flow-line-reverse" style={{ transformOrigin: 'center' }}>
        <circle cx="0" cy="0" r="8" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="4,2" />
      </g>
      <circle cx="70" cy="18" r="4" fill="#EAB308" />
      <circle cx="70" cy="18" r="8" stroke="#EAB308" strokeWidth="1" opacity="0.5" className="animate-pulse" />
      <line x1="30" y1="30" x2="70" y2="18" stroke="#00C82E" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
    </svg>
  ),
  optimization: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      <path d="M 20 30 Q 50 5 80 30 T 20 30" stroke="#6B7280" strokeWidth="1.5" opacity="0.2" />
      <path d="M 20 30 Q 50 5 80 30 T 20 30" stroke="#00C82E" strokeWidth="1.5" strokeLinecap="round" className="animate-flow-line-fast" />
      <path d="M 50 18 L 46 32 L 53 32 L 48 44" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
      <circle cx="20" cy="30" r="3" fill="#00C82E" />
      <circle cx="80" cy="30" r="3" fill="#00C82E" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      <rect x="10" y="45" width="80" height="2" fill="#6B7280" opacity="0.2" />
      <path d="M 10 40 L 30 25 L 50 35 L 70 12 L 90 20" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="25" r="2.5" fill="#00C82E" />
      <circle cx="50" cy="35" r="2.5" fill="#00C82E" />
      <circle cx="70" cy="12" r="3" fill="#00C82E" className="animate-pulse" />
      <circle cx="90" cy="20" r="2.5" fill="#00C82E" />
    </svg>
  ),
  safety: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      <path d="M 50 10 Q 70 14 75 25 Q 75 42 50 52 Q 25 42 25 25 Q 30 14 50 10 Z" fill="none" stroke="#00C82E" strokeWidth="1.8" />
      <path d="M 50 14 Q 66 18 70 26 Q 70 38 50 47 Q 30 38 30 26 Q 34 18 50 14 Z" fill="rgba(0, 200, 46, 0.05)" />
      <circle cx="50" cy="28" r="4" fill="#00C82E" />
      <circle cx="50" cy="28" r="9" stroke="#00C82E" strokeWidth="1.2" strokeDasharray="3,3" className="animate-turbine-spin-fast" />
    </svg>
  ),
}

// Custom SVGs with animations for technology services
const techIllustrations = {
  customSoftware: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Code window */}
      <rect x="15" y="10" width="70" height="40" rx="4" stroke="#00C82E" strokeWidth="1.5" />
      <line x1="15" y1="20" x2="85" y2="20" stroke="#00C82E" strokeWidth="1" opacity="0.5" />
      {/* Dots */}
      <circle cx="23" cy="15" r="2" fill="#00C82E" />
      <circle cx="29" cy="15" r="2" fill="#00C82E" opacity="0.6" />
      <circle cx="35" cy="15" r="2" fill="#00C82E" opacity="0.3" />
      {/* Animated cursor line */}
      <motion.line 
        x1="25" y1="30" x2="45" y2="30" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <line x1="25" y1="38" x2="65" y2="38" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  aiSolutions: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      <circle cx="50" cy="30" r="10" stroke="#00C82E" strokeWidth="1.5" className="animate-pulse" />
      <circle cx="20" cy="20" r="3" fill="#00C82E" />
      <circle cx="80" cy="20" r="3" fill="#00C82E" />
      <circle cx="35" cy="48" r="3.5" fill="#00C82E" className="animate-pulse" />
      <circle cx="65" cy="48" r="3.5" fill="#00C82E" className="animate-pulse" />
      <line x1="20" y1="20" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="80" y1="20" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="35" y1="48" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
      <line x1="65" y1="48" x2="50" y2="30" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
    </svg>
  ),
  itConsulting: (
    <svg viewBox="0 0 100 60" fill="none" className="w-full h-12 overflow-visible">
      {/* Speech boxes / consulting layout */}
      <rect x="10" y="12" width="45" height="24" rx="4" fill="none" stroke="#00C82E" strokeWidth="1.5" />
      <path d="M 40 36 L 40 42 L 34 36 Z" fill="#0B1220" stroke="#00C82E" strokeWidth="1.5" />
      
      <rect x="45" y="24" width="45" height="24" rx="4" fill="none" stroke="#00C82E" strokeWidth="1.5" />
      <path d="M 60 24 L 60 18 L 66 24 Z" fill="#0B1220" stroke="#00C82E" strokeWidth="1.5" />
      {/* Nodes connecting */}
      <circle cx="32" cy="24" r="2.5" fill="#00C82E" className="animate-pulse" />
      <circle cx="68" cy="36" r="2.5" fill="#00C82E" className="animate-pulse" />
      <line x1="32" y1="24" x2="68" y2="36" stroke="#00C82E" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  ),
}

const batteryServices = [
  {
    illustration: batteryIllustrations.monitoring,
    title: 'AI Battery Monitoring',
    desc: 'Real-time monitoring and analysis of battery health, performance, temperature, and charging patterns.',
    tags: ['Real-time', 'Analytics', 'Health'],
  },
  {
    illustration: batteryIllustrations.maintenance,
    title: 'Predictive Maintenance',
    desc: 'Advanced AI algorithms detect potential failures and maintenance requirements before they impact operations.',
    tags: ['Predictive', 'AI', 'Safety'],
  },
  {
    illustration: batteryIllustrations.optimization,
    title: 'Battery Life Optimization',
    desc: 'Intelligent charging and discharging recommendations to maximize battery lifespan and efficiency.',
    tags: ['Optimization', 'Efficiency', 'ML'],
  },
  {
    illustration: batteryIllustrations.analytics,
    title: 'Energy Analytics',
    desc: 'Comprehensive dashboards and reports that provide deep insights into battery usage and energy consumption.',
    tags: ['Dashboard', 'Insights', 'Reports'],
  },
  {
    illustration: batteryIllustrations.safety,
    title: 'Safety Intelligence',
    desc: 'Early detection of abnormal battery behavior to reduce risks and improve operational safety.',
    tags: ['Safety', 'Detection', 'Alerts'],
  },
]

const techServices = [
  {
    illustration: techIllustrations.customSoftware,
    title: 'Custom Software Development',
    desc: 'Designing and developing secure, scalable, and high-performance software tailored to business requirements.',
    tags: ['Custom', 'Scalable', 'Secure'],
  },
  {
    illustration: techIllustrations.aiSolutions,
    title: 'Artificial Intelligence Solutions',
    desc: 'Leveraging AI and machine learning to automate processes, improve decision-making, and unlock new business opportunities.',
    tags: ['AI/ML', 'Automation', 'Analytics'],
  },
  {
    illustration: techIllustrations.itConsulting,
    title: 'IT Consulting',
    desc: 'Offering strategic technology guidance to help businesses make informed decisions and achieve digital transformation goals.',
    tags: ['Strategy', 'Digital', 'Consulting'],
  },
]

const industries = [
  { icon: Car, label: 'Electric Vehicles (EV)' },
  { icon: Sun, label: 'Renewable Energy Storage' },
  { icon: MessageSquare, label: 'Telecommunications' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Database, label: 'Data Centers' },
  { icon: Smartphone, label: 'Consumer Electronics' },
  { icon: Grid3X3, label: 'Smart Grids' },
  { icon: Building2, label: 'Industrial Equipment' },
]

function ServiceCard({ 
  svc, 
  index, 
  inView, 
  dark = true 
}: { 
  svc: any; 
  index: number; 
  inView: boolean;
  dark?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group rounded-2xl p-7.5 border transition-all duration-300 flex flex-col justify-between h-full ${
        dark 
          ? 'glass border-white/5 hover:border-qp-green/25 hover:shadow-card-hover' 
          : 'bg-white border-slate-200/80 hover:border-qp-green/30 hover:shadow-lg hover:shadow-slate-100'
      }`}
    >
      <div className="flex flex-col">
        <div className={`w-full rounded-xl flex items-center justify-center p-4 mb-5 border transition-all duration-300 ${
          dark 
            ? 'bg-[#162035]/35 border-white/[0.04] group-hover:bg-[#162035]/60' 
            : 'bg-slate-50 border-slate-100 group-hover:bg-slate-50'
        }`}>
          {svc.illustration}
        </div>
        <div>
          <h3 className={`text-lg font-display font-semibold group-hover:text-qp-green transition-colors duration-300 mb-2.5 ${
            dark ? 'text-white' : 'text-slate-800'
          }`}>
            {svc.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-1">
            {svc.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full text-qp-green bg-qp-green/10 border border-qp-green/20 font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className={`text-sm leading-relaxed mt-4 ${
        dark ? 'text-qp-gray' : 'text-slate-500'
      }`}>
        {svc.desc}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const batteryRef = useRef(null)
  const batteryInView = useInView(batteryRef, { once: true, margin: '-80px' })
  const techRef = useRef(null)
  const techInView = useInView(techRef, { once: true, margin: '-80px' })
  const indRef = useRef(null)
  const indInView = useInView(indRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      
      {/* 1. Hero Banner (Dark Theme) */}
      <div className="pt-36 pb-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2.5 glass-green rounded-full px-4.5 py-1.5 mb-6 border border-qp-green/20">
              <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Our Services</span>
            </div>
            <h1 className="text-responsive-hero font-display font-bold text-white mb-6 leading-tight">
              Intelligent <span className="gradient-text text-glow-green">Battery Solutions</span>
            </h1>
            <p className="text-qp-gray max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              Comprehensive AI-powered services for battery intelligence, energy analytics, and digital transformation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Battery AI Services (Light Theme) */}
      <section ref={batteryRef} className="section-padding bg-white relative overflow-hidden light-theme-selection">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={batteryInView ? { opacity: 1, y: 0 } : {}}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-qp-green/10 border border-qp-green/20 rounded-full px-4.5 py-1.5 mb-6">
              <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Battery AI Services</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[#0B1220] mb-4">
              AI-Powered <span className="gradient-text">Battery Intelligence</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-sm sm:text-base">
              By combining advanced analytics, machine learning, and battery expertise, we enable smarter, safer, and more sustainable energy solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {batteryServices.map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} index={i} inView={batteryInView} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Services (Dark Theme) */}
      <section ref={techRef} className="section-padding bg-qp-dark-2 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 glass-green rounded-full px-4.5 py-1.5 mb-6 border border-qp-green/20">
              <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Technology Services</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Digital <span className="gradient-text text-glow-green">Transformation</span>
            </h2>
            <p className="text-qp-gray max-w-2xl text-sm sm:text-base">
              Leveraging machine learning and custom engineering to digitize operations and scale business models.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} index={i} inView={techInView} dark={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries (Light Theme) */}
      <section ref={indRef} className="section-padding bg-[#F8FAFC] relative overflow-hidden light-theme-selection">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={indInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-qp-green/10 border border-qp-green/20 rounded-full px-4 py-1.5 mb-6">
              <Zap size={12} className="text-qp-green fill-qp-green" />
              <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Sectors</span>
            </div>
            <h2 className="text-responsive-heading font-display font-bold text-[#0B1220] mb-4">
              Industries <span className="gradient-text">We Serve</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={indInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group bg-white rounded-2xl p-6.5 text-center border border-slate-200/80 hover:border-qp-green/30 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-qp-green/10 border border-qp-green/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-qp-green/20 transition-all duration-300">
                    <Icon size={20} className="text-qp-green" />
                  </div>
                  <div className="text-sm font-bold text-slate-800 group-hover:text-qp-green transition-colors duration-300 leading-snug">
                    {ind.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </PageWrapper>
  )
}
