import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Activity, Thermometer, Battery, Shield, TrendingUp, Zap } from 'lucide-react'

// Helper component for count-up animation
function Counter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '')

  useEffect(() => {
    let start = 0
    const end = numericValue
    if (isNaN(end)) return

    const totalMiliseconds = duration * 1000
    const incrementTime = 30
    const steps = Math.ceil(totalMiliseconds / incrementTime)
    const stepValue = end / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      start += stepValue
      if (currentStep >= steps) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [numericValue, duration])

  // format count
  const formattedCount = numericValue % 1 === 0 ? Math.floor(count) : count.toFixed(1)
  return <span>{formattedCount}{suffix}</span>
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Metric status cyclers for real-time feel
  const [soc, setSoc] = useState(94.2)
  const [temp, setTemp] = useState(28.4)

  useEffect(() => {
    const interval = setInterval(() => {
      setSoc(prev => {
        const next = prev + (Math.random() * 0.4 - 0.2)
        return Math.min(Math.max(next, 93.5), 95.0)
      })
      setTemp(prev => {
        const next = prev + (Math.random() * 0.2 - 0.1)
        return Math.min(Math.max(next, 28.0), 28.9)
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative min-h-[90vh] lg:h-screen lg:min-h-[600px] lg:max-h-[820px] flex items-center overflow-hidden bg-qp-dark py-12 lg:py-0">
      {/* Background visual layers */}
      <div className="absolute inset-0 z-0">
        <div className="animated-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-hero-mesh" />
        {/* Radial green glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-[0.06] bg-qp-green" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[140px] opacity-[0.08] bg-qp-green" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Marketing Details */}
            <div className="lg:col-span-6 text-left">
              {/* AI Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-3 border border-qp-green/20"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qp-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-qp-green"></span>
                </span>
                <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">
                  AI Battery Intelligence Platform
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl sm:text-4xl lg:text-[2.85rem] font-display font-bold text-white mb-3 leading-[1.15]"
              >
                Powering Smarter <br />
                <span className="gradient-text text-glow-green">Energy with AI</span>
              </motion.h1>

              {/* Subtext */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg font-semibold text-qp-green/95 mb-3"
              >
                Powering the Future Through Innovation
              </motion.h2>

              {/* Company Story Text (Verbatim as required) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-qp-gray-light leading-relaxed mb-5.5 max-w-xl text-xs sm:text-sm"
              >
                QuantumPulse was founded with a vision to bridge the gap between business challenges and technological innovation. Our AI-powered platform analyzes real-time battery data, predicts performance issues before they occur, and provides actionable insights for efficient energy management.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-8"
              >
                <Link 
                  to="/services" 
                  className="btn-primary group text-sm px-5 py-2.5 w-full sm:w-auto justify-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qp-green focus-visible:ring-offset-2 focus-visible:ring-offset-qp-dark"
                >
                  Explore Solutions 
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline text-sm px-5 py-2.5 w-full sm:w-auto justify-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qp-green focus-visible:ring-offset-2 focus-visible:ring-offset-qp-dark"
                >
                  Get Demo
                </Link>
              </motion.div>

              {/* Stats Counters Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/5"
              >
                {[
                  { value: '99.7%', label: 'Prediction Accuracy' },
                  { value: '40%', label: 'Maintenance Cost Reduction' },
                  { value: '30%', label: 'Battery Life Extension' },
                  { value: '24/7', label: 'Real-time Monitoring' },
                ].map((stat) => (
                  <div key={stat.label} className="text-left">
                    <div className="text-xl sm:text-2xl font-display font-bold text-white mb-0.5">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-[11px] text-qp-gray leading-snug">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Interactive Cinematic SVG Energy Ecosystem */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[380px] lg:h-[450px] w-full">
              {/* Outer soft ambient glows */}
              <div className="absolute w-[85%] h-[85%] rounded-full bg-radial-gradient from-qp-green/10 to-transparent pointer-events-none filter blur-2xl" />

              {/* Ecosystem Canvas */}
              <div className="relative w-full h-full max-w-[540px] flex items-center justify-center">
                
                {/* SVG Visual Model */}
                <svg viewBox="0 0 540 420" fill="none" className="w-full h-auto overflow-visible select-none">
                  
                  {/* Define Gradients & Markers */}
                  <defs>
                    <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C82E" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0F1A2E" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="solar-panel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B1220" />
                      <stop offset="100%" stopColor="#162035" />
                    </linearGradient>
                    <linearGradient id="ess-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0B1220" />
                    </linearGradient>
                  </defs>

                  {/* 1. Connections/Grid Flow Lines (Background flow) */}
                  
                  {/* Solar Panel flow to Battery Core */}
                  <path d="M 90 320 Q 150 260 210 240" stroke="#00C82E" strokeWidth="2.5" strokeLinecap="round" className="animate-flow-line opacity-70" />
                  
                  {/* Wind Turbine flow to Battery Core */}
                  <path d="M 170 180 Q 200 220 210 240" stroke="#00C82E" strokeWidth="2.5" strokeLinecap="round" className="animate-flow-line-fast opacity-80" />
                  
                  {/* Battery Core flow to EV Charging */}
                  <path d="M 320 280 Q 360 320 400 320" stroke="#00C82E" strokeWidth="2.5" strokeLinecap="round" className="animate-flow-line opacity-80" />

                  {/* Battery Core flow to Cloud/AI Platform */}
                  <path d="M 270 200 L 270 120" stroke="#00C82E" strokeWidth="2" strokeDasharray="4,4" className="animate-flow-line-reverse opacity-60" />
                  
                  {/* AI Cloud Platform to Left/Right metrics */}
                  <path d="M 270 100 Q 180 80 120 120" stroke="#00C82E" strokeWidth="1.5" className="animate-flow-line-reverse opacity-45" />
                  <path d="M 270 100 Q 360 80 420 120" stroke="#00C82E" strokeWidth="1.5" className="animate-flow-line opacity-45" />

                  {/* 2. Solar Panel Array (Bottom Left) */}
                  <g transform="translate(40, 290)">
                    {/* Glowing panels outline */}
                    <polygon points="10,40 50,15 90,40 50,65" fill="url(#solar-panel-grad)" stroke="#00C82E" strokeWidth="1.5" className="opacity-90" />
                    <line x1="50" y1="15" x2="50" y2="65" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
                    <line x1="10" y1="40" x2="90" y2="40" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
                    {/* Reflection lines */}
                    <line x1="30" y1="28" x2="70" y2="52" stroke="#00C82E" strokeWidth="1" opacity="0.4" />
                    
                    {/* Solar glow */}
                    <circle cx="50" cy="40" r="18" fill="#00C82E" className="animate-sun-glow pointer-events-none" style={{ mixBlendMode: 'screen' }} />
                    <text x="50" y="-8" textAnchor="middle" fill="#6B7280" fontSize="10" fontWeight="600" letterSpacing="0.05em">SOLAR</text>
                  </g>

                  {/* 3. Wind Turbine (Left/Center) */}
                  <g transform="translate(170, 110)">
                    {/* Turbine Mast */}
                    <line x1="0" y1="120" x2="0" y2="25" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />
                    <line x1="0" y1="120" x2="0" y2="25" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
                    {/* Foundation */}
                    <path d="M -15 120 L 15 120" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />
                    
                    {/* Rotating Blades */}
                    <g className="animate-turbine-spin-fast" style={{ transformOrigin: '0px 25px' }}>
                      <circle cx="0" cy="25" r="5" fill="#00C82E" />
                      {/* Blade 1 */}
                      <path d="M 0 25 Q 5 0 0 -50 Q -5 0 0 25" fill="#00C82E" fillOpacity="0.8" />
                      {/* Blade 2 (120 deg rotated) */}
                      <g transform="rotate(120, 0, 25)">
                        <path d="M 0 25 Q 5 0 0 -50 Q -5 0 0 25" fill="#00C82E" fillOpacity="0.8" />
                      </g>
                      {/* Blade 3 (240 deg rotated) */}
                      <g transform="rotate(240, 0, 25)">
                        <path d="M 0 25 Q 5 0 0 -50 Q -5 0 0 25" fill="#00C82E" fillOpacity="0.8" />
                      </g>
                    </g>
                    <text x="0" y="142" textAnchor="middle" fill="#6B7280" fontSize="10" fontWeight="600" letterSpacing="0.05em">WIND</text>
                  </g>

                  {/* 4. Central AI Battery Energy Storage System (ESS) Rack */}
                  <g transform="translate(225, 200)">
                    {/* ESS Casing */}
                    <rect x="0" y="0" width="90" height="110" rx="8" fill="url(#ess-grad)" stroke="#00C82E" strokeWidth="2" className="shadow-lg" />
                    <rect x="-5" y="-5" width="100" height="120" rx="12" stroke="#00C82E" strokeWidth="1" strokeDasharray="3,6" opacity="0.3" />
                    
                    {/* Modular Battery Rack 1 */}
                    <g transform="translate(8, 12)">
                      <rect x="0" y="0" width="74" height="22" rx="4" fill="#0B1220" stroke="#00C82E" strokeWidth="1" opacity="0.7" />
                      {/* Level cells indicators */}
                      <rect x="6" y="7" width="10" height="8" rx="1.5" fill="#00C82E" className="animate-pulse" />
                      <rect x="20" y="7" width="10" height="8" rx="1.5" fill="#00C82E" className="animate-pulse" />
                      <rect x="34" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <rect x="48" y="7" width="10" height="8" rx="1.5" fill="#00C82E" opacity="0.2" />
                      {/* Status led */}
                      <circle cx="68" cy="11" r="2.5" fill="#00C82E" className="animate-ping" />
                      <circle cx="68" cy="11" r="2.5" fill="#00C82E" />
                    </g>

                    {/* Modular Battery Rack 2 */}
                    <g transform="translate(8, 44)">
                      <rect x="0" y="0" width="74" height="22" rx="4" fill="#0B1220" stroke="#00C82E" strokeWidth="1" opacity="0.7" />
                      <rect x="6" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <rect x="20" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <rect x="34" y="7" width="10" height="8" rx="1.5" fill="#00C82E" className="animate-pulse" />
                      <rect x="48" y="7" width="10" height="8" rx="1.5" fill="#00C82E" className="animate-pulse" />
                      <circle cx="68" cy="11" r="2.5" fill="#00C82E" />
                    </g>

                    {/* Modular Battery Rack 3 */}
                    <g transform="translate(8, 76)">
                      <rect x="0" y="0" width="74" height="22" rx="4" fill="#0B1220" stroke="#00C82E" strokeWidth="1" opacity="0.7" />
                      <rect x="6" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <rect x="20" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <rect x="34" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <rect x="48" y="7" width="10" height="8" rx="1.5" fill="#00C82E" />
                      <circle cx="68" cy="11" r="2.5" fill="#00C82E" />
                    </g>
                    
                    <text x="45" y="128" textAnchor="middle" fill="#6B7280" fontSize="10" fontWeight="600" letterSpacing="0.05em">STORAGE CORE</text>
                  </g>

                  {/* 5. EV Charging & Vehicle (Bottom Right) */}
                  <g transform="translate(390, 270)">
                    {/* EV Charging Station */}
                    <rect x="0" y="25" width="22" height="45" rx="4" fill="#162035" stroke="#00C82E" strokeWidth="1.5" />
                    <rect x="5" y="32" width="12" height="12" rx="1" fill="#0B1220" />
                    <path d="M 11 38 L 11 44 M 9 40 L 11 38 L 13 40" stroke="#00C82E" strokeWidth="1" />
                    
                    {/* Charging wire connecting to vehicle */}
                    <path d="M 22 47 Q 32 40 45 45" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="3,3" />

                    {/* EV Smart Car Graphic Outline */}
                    <g transform="translate(45, 20)">
                      {/* Car Body outline */}
                      <path d="M 5 25 L 12 14 L 38 14 L 48 20 L 65 25 Q 70 28 68 36 L 5 36 Z" fill="#0B1220" stroke="#00C82E" strokeWidth="1.8" />
                      {/* Windows */}
                      <path d="M 14 17 L 24 17 L 24 23 L 11 23 Z" fill="#162035" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
                      <path d="M 27 17 L 36 17 L 43 23 L 27 23 Z" fill="#162035" stroke="#00C82E" strokeWidth="1" opacity="0.6" />
                      {/* Wheels */}
                      <circle cx="18" cy="36" r="8" fill="#0B1220" stroke="#6B7280" strokeWidth="2" />
                      <circle cx="18" cy="36" r="3" fill="#00C82E" />
                      <circle cx="50" cy="36" r="8" fill="#0B1220" stroke="#6B7280" strokeWidth="2" />
                      <circle cx="50" cy="36" r="3" fill="#00C82E" />
                    </g>
                    
                    <text x="40" y="78" textAnchor="middle" fill="#6B7280" fontSize="10" fontWeight="600" letterSpacing="0.05em">EV ECOSYSTEM</text>
                  </g>

                  {/* 6. AI Brain / Network Hub Cloud (Top Center) */}
                  <g transform="translate(270, 75)">
                    <circle cx="0" cy="0" r="16" fill="rgba(0, 200, 46, 0.15)" stroke="#00C82E" strokeWidth="1.5" />
                    <path d="M -6 -4 Q 0 -12 6 -4 Q 12 -4 8 4 Q 0 8 -8 4 Q -12 -2 -6 -4 Z" fill="none" stroke="#00C82E" strokeWidth="1.5" />
                    <circle cx="0" cy="-6" r="2.5" fill="#00C82E" className="animate-pulse-node" />
                    <circle cx="6" cy="4" r="2.5" fill="#00C82E" className="animate-pulse-node" />
                    <circle cx="-6" cy="4" r="2.5" fill="#00C82E" className="animate-pulse-node" />
                    
                    <text x="0" y="-22" textAnchor="middle" fill="#00C82E" fontSize="10" fontWeight="700" letterSpacing="0.1em">QUANTUM AI</text>
                  </g>

                  {/* Floating flow particles (little data packets traveling paths) */}
                  <circle cx="0" cy="0" r="4.5" fill="#00C82E" className="glow-green">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 90 320 Q 150 260 210 240" />
                  </circle>
                  <circle cx="0" cy="0" r="4.5" fill="#00C82E" className="glow-green">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 170 180 Q 200 220 210 240" />
                  </circle>
                  <circle cx="0" cy="0" r="4.5" fill="#00C82E" className="glow-green">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 320 280 Q 360 320 400 320" />
                  </circle>
                  
                </svg>

                {/* Floating Metrics Widgets (Framer Motion Overlay) */}
                <motion.div
                  className="absolute top-[35%] left-[2%] glass rounded-lg p-2.5 shadow-lg border border-qp-green/15 z-20 cursor-default"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Battery size={13} className="text-qp-green" />
                    <span className="text-[10px] text-qp-gray uppercase font-semibold">SOC</span>
                  </div>
                  <div className="text-sm font-bold text-white">{soc.toFixed(1)}%</div>
                  <div className="text-[9px] text-qp-green font-medium">CHARGING</div>
                </motion.div>

                <motion.div
                  className="absolute top-[8%] right-[8%] glass rounded-lg p-2.5 shadow-lg border border-qp-green/15 z-20 cursor-default"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Activity size={13} className="text-qp-green" />
                    <span className="text-[10px] text-qp-gray uppercase font-semibold">SOH</span>
                  </div>
                  <div className="text-sm font-bold text-white">98.1%</div>
                  <div className="text-[9px] text-qp-green font-medium">OPTIMAL</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[28%] left-[2%] glass rounded-lg p-2.5 shadow-lg border border-qp-green/15 z-20 cursor-default"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <TrendingUp size={13} className="text-qp-green" />
                    <span className="text-[10px] text-qp-gray uppercase font-semibold">RUL</span>
                  </div>
                  <div className="text-sm font-bold text-white">2,847h</div>
                  <div className="text-[9px] text-qp-gray">ESTIMATED</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[40%] right-[2%] glass rounded-lg p-2.5 shadow-lg border border-qp-green/15 z-20 cursor-default"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Thermometer size={13} className="text-qp-green" />
                    <span className="text-[10px] text-qp-gray uppercase font-semibold">TEMP</span>
                  </div>
                  <div className="text-sm font-bold text-white">{temp.toFixed(1)}°C</div>
                  <div className="text-[9px] text-qp-green font-medium">NOMINAL</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[10%] left-[30%] glass rounded-lg p-2.5 shadow-lg border border-qp-green/15 z-20 cursor-default"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Shield size={13} className="text-qp-green" />
                    <span className="text-[10px] text-qp-gray uppercase font-semibold">HEALTH</span>
                  </div>
                  <div className="text-sm font-bold text-qp-green">GOOD</div>
                  <div className="text-[9px] text-qp-gray">SAFETY INDEX</div>
                </motion.div>

                <motion.div
                  className="absolute top-[16%] left-[28%] glass rounded-lg p-2.5 shadow-lg border border-qp-green/15 z-20 cursor-default"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Zap size={13} className="text-qp-green" />
                    <span className="text-[10px] text-qp-gray uppercase font-semibold">CYCLES</span>
                  </div>
                  <div className="text-sm font-bold text-white">1,204</div>
                  <div className="text-[9px] text-qp-gray">COUNT</div>
                </motion.div>
                
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Bottom overlay fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-qp-dark to-transparent pointer-events-none" />

      {/* Scroll mouse indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="text-[10px] text-qp-gray tracking-widest uppercase font-semibold">Scroll</div>
        <div className="w-0.5 h-6 bg-gradient-to-b from-qp-green to-transparent rounded-full" />
      </motion.div>
    </section>
  )
}
