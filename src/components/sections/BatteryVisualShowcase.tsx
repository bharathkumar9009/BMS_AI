import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Activity, BarChart3, Cpu, Zap, Wrench, Globe, Sliders, Sun } from 'lucide-react'

// Define the 9 Battery systems
const systems = [
  { id: 'monitoring', label: 'Battery Monitoring', icon: Battery },
  { id: 'analytics', label: 'Battery Analytics', icon: BarChart3 },
  { id: 'storage', label: 'Energy Storage', icon: Zap },
  { id: 'ev', label: 'EV Batteries', icon: Activity },
  { id: 'intelligence', label: 'Battery Intelligence', icon: Cpu },
  { id: 'maintenance', label: 'Predictive Maintenance', icon: Wrench },
  { id: 'smart-systems', label: 'Smart Energy Systems', icon: Globe },
  { id: 'twin', label: 'Digital Twin', icon: Activity },
  { id: 'dashboard', label: 'Battery Dashboard', icon: Sliders },
]

export default function BatteryVisualShowcase() {
  const [activeTab, setActiveTab] = useState('monitoring')

  // Render SVG based on active system
  const renderSVG = () => {
    switch (activeTab) {
      case 'monitoring':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            {/* Monitor grid */}
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* 6 cell monitoring grid */}
            {[...Array(6)].map((_, i) => {
              const x = 30 + (i % 3) * 115
              const y = 30 + Math.floor(i / 3) * 105
              return (
                <g key={i} transform={`translate(${x}, ${y})`}>
                  <rect x="0" y="0" width="100" height="80" rx="6" fill="#0B1220" stroke="#162035" strokeWidth="1.5" />
                  <text x="10" y="20" fill="#6B7280" fontSize="9" fontWeight="700">CELL #0{i+1}</text>
                  
                  {/* Battery level indicator */}
                  <rect x="10" y="32" width="60" height="14" rx="2" fill="#162035" />
                  <motion.rect 
                    x="12" y="34" height="10" rx="1" fill="#00C82E"
                    animate={{ width: [15, 56, 15] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  
                  {/* Floating Stats */}
                  <text x="10" y="65" fill="#00C82E" fontSize="10" fontWeight="700" fontFamily="monospace">3.95 V</text>
                  <text x="90" y="65" textAnchor="end" fill="#6B7280" fontSize="9" fontWeight="500">28.2°C</text>
                  
                  {/* Status dot */}
                  <circle cx="90" cy="18" r="3" fill="#00C82E" />
                </g>
              )
            })}
          </svg>
        )
      case 'analytics':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Analytics coordinate grid */}
            <path d="M 40 40 L 40 210 L 360 210" stroke="#162035" strokeWidth="1.5" />
            <path d="M 40 80 L 360 80 M 40 120 L 360 120 M 40 160 L 360 160" stroke="#162035" strokeWidth="1" strokeDasharray="3,3" />
            
            {/* Analytics capacity degradation curve */}
            <motion.path 
              d="M 40 70 L 90 85 L 140 80 L 190 110 L 240 125 L 290 120 L 340 165" 
              stroke="#00C82E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            {/* Reference curve */}
            <path d="M 40 70 Q 190 100 340 130" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
            
            {/* Floating marker node */}
            <motion.circle 
              cx="190" cy="110" r="5" fill="#00C82E" 
              animate={{ scale: [1, 1.5, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <g transform="translate(198, 105)">
              <rect x="0" y="0" width="90" height="25" rx="4" fill="#0B1220" stroke="#00C82E" strokeWidth="1" />
              <text x="8" y="15" fill="#00C82E" fontSize="9" fontWeight="700" fontFamily="monospace">SOH: 88.4%</text>
            </g>

            <text x="45" y="32" fill="#6B7280" fontSize="9" fontWeight="700">CAPACITY RETENTION (CYCLES)</text>
          </svg>
        )
      case 'storage':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* ESS Grid outline */}
            <g transform="translate(40, 30)">
              {/* Stack 1 */}
              <rect x="0" y="0" width="70" height="150" rx="4" fill="#0B1220" stroke="#162035" strokeWidth="1.5" />
              <line x1="0" y1="35" x2="70" y2="35" stroke="#162035" />
              <line x1="0" y1="70" x2="70" y2="70" stroke="#162035" />
              <line x1="0" y1="105" x2="70" y2="105" stroke="#162035" />
              
              {/* LEDs */}
              <circle cx="15" cy="18" r="3" fill="#00C82E" className="animate-pulse" />
              <circle cx="15" cy="53" r="3" fill="#00C82E" />
              <circle cx="15" cy="88" r="3" fill="#00C82E" />
              <circle cx="15" cy="123" r="3" fill="#6B7280" opacity="0.4" />
            </g>

            <g transform="translate(130, 30)">
              {/* Stack 2 */}
              <rect x="0" y="0" width="70" height="150" rx="4" fill="#0B1220" stroke="#162035" strokeWidth="1.5" />
              <line x1="0" y1="35" x2="70" y2="35" stroke="#162035" />
              <line x1="0" y1="70" x2="70" y2="70" stroke="#162035" />
              <line x1="0" y1="105" x2="70" y2="105" stroke="#162035" />
              
              {/* LEDs */}
              <circle cx="15" cy="18" r="3" fill="#00C82E" />
              <circle cx="15" cy="53" r="3" fill="#00C82E" className="animate-pulse" />
              <circle cx="15" cy="88" r="3" fill="#00C82E" />
              <circle cx="15" cy="123" r="3" fill="#00C82E" />
            </g>

            {/* Power grid telemetry lines */}
            <path d="M 80 180 Q 160 210 240 180" stroke="#00C82E" strokeWidth="2" strokeDasharray="4,4" className="animate-flow-line" />
            
            {/* Grid control card */}
            <g transform="translate(240, 50)">
              <rect x="0" y="0" width="110" height="110" rx="6" fill="#0B1220" stroke="#00C82E" strokeWidth="1" />
              <text x="12" y="22" fill="#6B7280" fontSize="9" fontWeight="700">GRID STATUS</text>
              <text x="12" y="42" fill="#00C82E" fontSize="13" fontWeight="950">ACTIVE</text>
              
              <text x="12" y="72" fill="#6B7280" fontSize="8" fontWeight="600">INPUT POWER</text>
              <text x="12" y="85" fill="#white" fontSize="11" fontWeight="700" className="text-white font-mono">1.24 MW</text>
              
              <circle cx="95" cy="38" r="4" fill="#00C82E" className="animate-ping" />
              <circle cx="95" cy="38" r="4" fill="#00C82E" />
            </g>
          </svg>
        )
      case 'ev':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* EV pack cooling channels */}
            <g transform="translate(50, 40)">
              {/* Pack housing */}
              <rect x="0" y="0" width="300" height="140" rx="8" fill="#0B1220" stroke="#162035" strokeWidth="2" />
              
              {/* Cell modules stacked block */}
              <rect x="15" y="15" width="270" height="110" rx="4" stroke="#162035" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Coolant pipe flow loop */}
              <path d="M 25 35 L 275 35 Q 285 55 275 70 L 25 70 Q 15 90 25 105 L 275 105" stroke="rgba(0, 200, 46, 0.15)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 25 35 L 275 35 Q 285 55 275 70 L 25 70 Q 15 90 25 105 L 275 105" stroke="#00C82E" strokeWidth="2" strokeLinecap="round" strokeDasharray="8,8" className="animate-flow-line-fast" />

              {/* Sensor hotspots */}
              <circle cx="95" cy="70" r="3" fill="#00C82E" />
              <circle cx="210" cy="35" r="3" fill="#EAB308" className="animate-pulse" />
              <circle cx="170" cy="105" r="3" fill="#00C82E" />
              
              <text x="15" y="-10" fill="#6B7280" fontSize="10" fontWeight="700">EV COMPACT RACK MODEL</text>
            </g>
            
            <text x="65" y="215" fill="#6B7280" fontSize="9" fontWeight="600" letterSpacing="0.05em">COOLING CHANNELS / ACTIVE TEMPERATURE MGMT</text>
          </svg>
        )
      case 'intelligence':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Neural network analytics interface */}
            <g transform="translate(60, 40)">
              {/* Central node representing model */}
              <circle cx="140" cy="90" r="16" fill="rgba(0, 200, 46, 0.15)" stroke="#00C82E" strokeWidth="1.5" />
              <circle cx="140" cy="90" r="24" stroke="#00C82E" strokeWidth="1" strokeDasharray="3,3" className="animate-turbine-spin" />
              <Cpu size={14} className="text-qp-green" x="133" y="83" />
              
              {/* Input nodes */}
              <circle cx="40" cy="30" r="5" fill="#00C82E" />
              <circle cx="40" cy="90" r="5" fill="#00C82E" />
              <circle cx="40" cy="150" r="5" fill="#00C82E" />

              {/* Output nodes */}
              <circle cx="240" cy="50" r="5" fill="#00C82E" />
              <circle cx="240" cy="130" r="5" fill="#EAB308" />

              {/* Linkages */}
              <line x1="40" y1="30" x2="140" y2="90" stroke="#00C82E" strokeWidth="1.5" className="animate-flow-line" opacity="0.6" />
              <line x1="40" y1="90" x2="140" y2="90" stroke="#00C82E" strokeWidth="1.5" className="animate-flow-line-fast" opacity="0.6" />
              <line x1="40" y1="150" x2="140" y2="90" stroke="#00C82E" strokeWidth="1.5" className="animate-flow-line" opacity="0.6" />
              
              <line x1="140" y1="90" x2="240" y2="50" stroke="#00C82E" strokeWidth="1.5" className="animate-flow-line-reverse" opacity="0.6" />
              <line x1="140" y1="90" x2="240" y2="130" stroke="#EAB308" strokeWidth="1.5" opacity="0.6" />
              
              <text x="40" y="15" fill="#6B7280" fontSize="8" fontWeight="700">RAW BMS DATA</text>
              <text x="240" y="38" fill="#00C82E" fontSize="8" fontWeight="700">RUL PROJECTION</text>
              <text x="240" y="118" fill="#EAB308" fontSize="8" fontWeight="700">THERMAL ALERT</text>
            </g>
          </svg>
        )
      case 'maintenance':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Predictive Maintenance telemetry */}
            <g transform="translate(40, 30)">
              <rect x="0" y="0" width="320" height="150" rx="6" fill="#0B1220" stroke="#162035" strokeWidth="1.5" />
              
              {/* Live telemetry scanning line */}
              <motion.line 
                x1="0" y1="10" x2="320" y2="10" stroke="#00C82E" strokeWidth="1.5" opacity="0.3"
                animate={{ y: [15, 135, 15] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Thermal hotspots mesh map */}
              <circle cx="80" cy="70" r="25" fill="rgba(0, 200, 46, 0.05)" />
              <circle cx="80" cy="70" r="15" fill="rgba(0, 200, 46, 0.1)" />
              <circle cx="80" cy="70" r="5" fill="#00C82E" />

              <circle cx="220" cy="90" r="30" fill="rgba(234, 179, 8, 0.05)" />
              <circle cx="220" cy="90" r="18" fill="rgba(234, 179, 8, 0.1)" />
              <circle cx="220" cy="90" r="6" fill="#EAB308" />
              
              {/* Telemetry warnings */}
              <text x="225" y="65" fill="#EAB308" fontSize="8" fontWeight="700" fontFamily="monospace">HOT CELL DEGRADATION</text>
              <line x1="220" y1="90" x2="220" y2="70" stroke="#EAB308" strokeWidth="1" strokeDasharray="2,2" />
            </g>
            
            <text x="50" y="210" fill="#6B7280" fontSize="9" fontWeight="600" letterSpacing="0.05em">THERMAL ANOMALY AND AGEING SPOTS DETECTED IN RACKS</text>
          </svg>
        )
      case 'smart-systems':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Microgrid integration: Solar + Wind + ESS + load */}
            {/* Central hub */}
            <circle cx="200" cy="130" r="22" fill="#0B1220" stroke="#00C82E" strokeWidth="1.5" />
            <text x="200" y="133" textAnchor="middle" fill="#00C82E" fontSize="9" fontWeight="900">CORE</text>
            
            {/* Grid nodes */}
            <g transform="translate(60, 60)">
              <circle cx="0" cy="0" r="12" fill="#0B1220" stroke="#162035" />
              <Sun size={12} className="text-qp-green mx-auto" x="-6" y="-6" />
              <text x="0" y="22" textAnchor="middle" fill="#6B7280" fontSize="8" fontWeight="700">SOLAR</text>
            </g>

            <g transform="translate(340, 60)">
              <circle cx="0" cy="0" r="12" fill="#0B1220" stroke="#162035" />
              <Zap size={12} className="text-qp-green mx-auto" x="-6" y="-6" />
              <text x="0" y="22" textAnchor="middle" fill="#6B7280" fontSize="8" fontWeight="700">WIND</text>
            </g>

            <g transform="translate(200, 215)">
              <circle cx="0" cy="0" r="12" fill="#0B1220" stroke="#162035" />
              <Battery size={12} className="text-qp-green mx-auto" x="-6" y="-6" />
              <text x="0" y="22" textAnchor="middle" fill="#6B7280" fontSize="8" fontWeight="700">ESS</text>
            </g>

            {/* Grid lines flow */}
            <path d="M 72 68 L 180 120" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="4,4" className="animate-flow-line" />
            <path d="M 328 68 L 220 120" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="4,4" className="animate-flow-line-reverse" />
            <path d="M 200 152 L 200 203" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="4,4" className="animate-flow-line" />
          </svg>
        )
      case 'twin':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Digital twin side-by-side synchronization */}
            {/* Left side: Physical Pack */}
            <g transform="translate(40, 50)">
              <rect x="0" y="0" width="130" height="110" rx="6" fill="#0B1220" stroke="#162035" strokeWidth="1.5" />
              <text x="12" y="22" fill="#6B7280" fontSize="9" fontWeight="700">PHYSICAL BATTERY</text>
              <rect x="12" y="35" width="106" height="40" rx="3" fill="#162035" />
              
              {/* Sensor paths */}
              <circle cx="35" cy="55" r="3" fill="#00C82E" />
              <circle cx="95" cy="55" r="3" fill="#EAB308" />
              
              <text x="12" y="98" fill="#6B7280" fontSize="8" fontWeight="500">PACK Telemetry online</text>
            </g>

            {/* Sync connection path */}
            <path d="M 170 105 L 230 105" stroke="#00C82E" strokeWidth="2" strokeDasharray="4,4" className="animate-flow-line-fast" />

            {/* Right side: Digital twin */}
            <g transform="translate(230, 50)">
              <rect x="0" y="0" width="130" height="110" rx="6" fill="#0B1220" stroke="#00C82E" strokeWidth="1.5" />
              <text x="12" y="22" fill="#00C82E" fontSize="9" fontWeight="700">DIGITAL TWIN MODEL</text>
              <rect x="12" y="35" width="106" height="40" rx="3" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1" strokeDasharray="2,2" />
              
              {/* Synchronized simulation dots */}
              <circle cx="35" cy="55" r="3.5" fill="#00C82E" className="animate-pulse" />
              <circle cx="95" cy="55" r="3.5" fill="#EAB308" className="animate-pulse" />
              
              <text x="12" y="98" fill="#00C82E" fontSize="8" fontWeight="700" fontFamily="monospace">SOC: 94.2% SOH: 98.1%</text>
            </g>
            
            <text x="80" y="200" fill="#6B7280" fontSize="9" fontWeight="600" letterSpacing="0.05em">REAL-TIME DATA STREAM SYNC TO VIRTUAL TWIN MODEL</text>
          </svg>
        )
      case 'dashboard':
        return (
          <svg viewBox="0 0 400 260" className="w-full h-full text-qp-green" fill="none">
            <rect x="10" y="10" width="380" height="240" rx="8" fill="#0F1A2E" stroke="#00C82E" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Dashboard telemetry dials */}
            {/* Speedometer/Power dial 1 */}
            <g transform="translate(90, 80)">
              <circle cx="0" cy="0" r="45" stroke="#162035" strokeWidth="8" fill="none" />
              <motion.circle 
                cx="0" cy="0" r="45" stroke="#00C82E" strokeWidth="8" fill="none"
                strokeDasharray="283"
                animate={{ strokeDashoffset: [200, 80, 200] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                transform="rotate(-90)"
              />
              <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="monospace">94.2%</text>
              <text x="0" y="60" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="700">CHARGE SENSOR</text>
            </g>

            {/* Dial 2 */}
            <g transform="translate(290, 80)">
              <circle cx="0" cy="0" r="45" stroke="#162035" strokeWidth="8" fill="none" />
              <motion.circle 
                cx="0" cy="0" r="45" stroke="#00C82E" strokeWidth="8" fill="none"
                strokeDasharray="283"
                animate={{ strokeDashoffset: [50, 150, 50] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                transform="rotate(-90)"
              />
              <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="monospace">28.4°C</text>
              <text x="0" y="60" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="700">CELL TEMPERATURE</text>
            </g>

            {/* Charging metrics row */}
            <g transform="translate(30, 185)">
              <rect x="0" y="0" width="340" height="40" rx="4" fill="#0B1220" stroke="#162035" strokeWidth="1" />
              <text x="15" y="24" fill="#6B7280" fontSize="9" fontWeight="700">BMS LINK STATE:</text>
              <text x="110" y="24" fill="#00C82E" fontSize="10" fontWeight="950">ESTABLISHED</text>
              <text x="210" y="24" fill="#6B7280" fontSize="9" fontWeight="700">DISCHARGE RATIO:</text>
              <text x="305" y="24" fill="white" fontSize="10" fontWeight="700" fontFamily="monospace">0.12 C</text>
            </g>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-qp-dark relative overflow-hidden light-theme-selection border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-20 animated-grid pointer-events-none" />
      
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
            <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Product Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-responsive-heading font-display font-bold text-white mb-4">
            Battery Intelligence <span className="gradient-text">Systems Showcase</span>
          </h2>
          <p className="text-qp-gray max-w-2xl mx-auto text-sm sm:text-base">
            Click through our modular intelligence segments to explore the interactive visual architectures that power QuantumPulse.
          </p>
        </div>

        {/* Tab system grid (Desktop layout) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Tabs select list */}
          <div className="lg:col-span-4 relative">
            <div className="flex lg:flex-col gap-2 relative z-0">
              {systems.map((sys) => {
                const Icon = sys.icon
                const isActive = activeTab === sys.id
                return (
                  <button
                    key={sys.id}
                    onClick={() => setActiveTab(sys.id)}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-xs font-semibold transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qp-green focus-visible:ring-offset-2 focus-visible:ring-offset-qp-dark ${
                      isActive 
                        ? 'bg-qp-green text-qp-dark border-qp-green shadow-green' 
                        : 'bg-qp-dark-2 text-qp-gray-light border-white/5 hover:border-qp-green/25 hover:text-white'
                    }`}
                  >
                    <Icon size={14} className={isActive ? 'text-qp-dark' : 'text-qp-green'} />
                    <span>{sys.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Panel: Animated SVG Visual Board */}
          <div className="lg:col-span-8 bg-qp-dark-2 rounded-2xl border border-white/5 p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center max-w-[580px] mx-auto"
              >
                {renderSVG()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Accordion List (Mobile layout) */}
        <div className="lg:hidden space-y-3">
          {systems.map((sys) => {
            const Icon = sys.icon
            const isActive = activeTab === sys.id
            return (
              <div key={sys.id} className="rounded-xl border border-white/5 bg-qp-dark-2 overflow-hidden">
                <button
                  onClick={() => setActiveTab(isActive ? '' : sys.id)}
                  className={`w-full flex items-center justify-between px-4.5 py-3.5 text-xs font-bold transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-qp-green text-qp-dark' 
                      : 'text-qp-gray-light hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={14} className={isActive ? 'text-qp-dark' : 'text-qp-green'} />
                    <span>{sys.label}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] opacity-70"
                  >
                    ▼
                  </motion.span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5 p-4 bg-qp-dark-3/50 flex items-center justify-center min-h-[220px]"
                    >
                      <div className="w-full max-w-[340px]">
                        {renderSVG()}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
