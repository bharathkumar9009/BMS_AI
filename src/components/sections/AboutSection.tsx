import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-[#F8FAFC] relative overflow-hidden light-theme-selection">
      {/* Background visual detail */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} 
      />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Information & Mission/Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            {/* Pill Section Title */}
            <div className="inline-flex items-center gap-2 bg-qp-green/10 border border-qp-green/20 rounded-full px-4.5 py-1.5 mb-6">
              <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Who We Are</span>
            </div>

            {/* Display Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-responsive-heading font-display font-bold text-[#0B1220] mb-6 leading-tight">
              Next-Generation <span className="gradient-text">AI Startup</span>
            </h2>

            {/* Text description (Verbatim as requested) */}
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
              <p>
                Quantum Pulse is a next-generation AI startup focused on delivering intelligent, scalable, and innovative technology solutions. We help businesses accelerate growth, improve efficiency, and embrace digital transformation through cutting-edge AI software services.
              </p>
              <p>
                Battery AI is an innovative technology startup focused on transforming battery management and energy storage through Artificial Intelligence. We develop intelligent solutions that help businesses, manufacturers, and energy providers optimize battery performance, extend battery life, improve safety, and reduce operational costs.
              </p>
              <p>
                Our team of passionate developers work together to create solutions that drive measurable results and long-term success, Leveraging AI and machine learning to automate processes, improve decision-making, and unlock new business opportunities.
              </p>
              <p>
                At Quantum Pulse whether you're a startup, SME, or enterprise, we are committed to deliver innovative solutions that drive success in a rapidly evolving AI world. We build strong partnerships with our clients to achieve shared success. We continuously learn, evolve, and help our clients grow through technology, striving for the highest standards in every project we deliver as we operate with transparency, honesty, and accountability, embracing emerging technologies to create impactful solutions.
              </p>
            </div>

            {/* Mission & Vision grid cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              
              {/* Mission Card (Verbatim text) */}
              <div className="bg-white rounded-xl p-5.5 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-qp-green/10 flex items-center justify-center">
                    <Target size={16} className="text-qp-green" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">Our Mission</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  To revolutionize battery technology through artificial intelligence by delivering predictive, efficient, and reliable battery management. And to empower organizations with innovative technology solutions that simplify operations, enhance productivity, and create sustainable business growth.
                </p>
              </div>

              {/* Vision Card (Verbatim text) */}
              <div className="bg-white rounded-xl p-5.5 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-qp-green/10 flex items-center justify-center">
                    <Eye size={16} className="text-qp-green" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">Our Vision</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  To become a global leader in AI-driven battery intelligence, accelerating the world's transition to sustainable energy. And to get recognized as global technology company known for innovation, excellence, and customer-centric digital solutions.
                </p>
              </div>

            </div>

            {/* Action Link */}
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-qp-green border border-qp-green/30 hover:border-qp-green rounded-lg hover:bg-qp-green/5 transition-all duration-300 hover:translate-x-0.5">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right Column: Interactive AI Battery Twin Diagram (SVG) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-100 p-6">
              
              {/* Header inside mock dashboard */}
              <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
                <div>
                  <div className="text-xs font-bold text-slate-800 tracking-wide uppercase">AI Battery Twin Core</div>
                  <div className="text-[10px] text-slate-400 font-mono">MODEL ID: QP-BMS-99X</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-qp-green animate-ping" />
                  <span className="text-[10px] text-qp-green font-bold font-mono">ANALYSING</span>
                </div>
              </div>

              {/* High-Tech SVG Battery Twin */}
              <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto overflow-visible">
                {/* Grid backdrop */}
                <path d="M 20 20 L 380 20 M 20 60 L 380 60 M 20 100 L 380 100 M 20 140 L 380 140 M 20 180 L 380 180 M 20 220 L 380 220 M 20 260 L 380 260" stroke="#F1F5F9" strokeWidth="1" />
                <path d="M 50 10 L 50 280 M 110 10 L 110 280 M 170 10 L 170 280 M 230 10 L 230 280 M 290 10 L 290 280 M 350 10 L 350 280" stroke="#F1F5F9" strokeWidth="1" />

                {/* 4 Stacked Cells */}
                {/* Cell 1 */}
                <g transform="translate(60, 40)">
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="rgba(0, 200, 46, 0.03)" />
                  {/* Energy bar inside cell */}
                  <motion.rect 
                    x="2" y="2" height="32" rx="4" fill="url(#cell-bar-grad)"
                    initial={{ width: 0 }}
                    animate={inView ? { width: 230 } : {}}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                  {/* Text index */}
                  <text x="12" y="22" fill="#0B1220" fontSize="10" fontWeight="700" fontFamily="monospace">CELL #01</text>
                  <text x="268" y="22" textAnchor="end" fill="#00C82E" fontSize="10" fontWeight="700" fontFamily="monospace">3.92V</text>
                </g>

                {/* Cell 2 */}
                <g transform="translate(60, 90)">
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="rgba(0, 200, 46, 0.03)" />
                  <motion.rect 
                    x="2" y="2" height="32" rx="4" fill="url(#cell-bar-grad)"
                    initial={{ width: 0 }}
                    animate={inView ? { width: 210 } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <text x="12" y="22" fill="#0B1220" fontSize="10" fontWeight="700" fontFamily="monospace">CELL #02</text>
                  <text x="268" y="22" textAnchor="end" fill="#00C82E" fontSize="10" fontWeight="700" fontFamily="monospace">3.88V</text>
                </g>

                {/* Cell 3 */}
                <g transform="translate(60, 140)">
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="rgba(0, 200, 46, 0.03)" />
                  <motion.rect 
                    x="2" y="2" height="32" rx="4" fill="url(#cell-bar-grad)"
                    initial={{ width: 0 }}
                    animate={inView ? { width: 245 } : {}}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                  <text x="12" y="22" fill="#0B1220" fontSize="10" fontWeight="700" fontFamily="monospace">CELL #03</text>
                  <text x="268" y="22" textAnchor="end" fill="#00C82E" fontSize="10" fontWeight="700" fontFamily="monospace">3.95V</text>
                </g>

                {/* Cell 4 */}
                <g transform="translate(60, 190)">
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <rect x="0" y="0" width="280" height="36" rx="6" fill="rgba(0, 200, 46, 0.03)" />
                  <motion.rect 
                    x="2" y="2" height="32" rx="4" fill="url(#cell-bar-warn-grad)"
                    initial={{ width: 0 }}
                    animate={inView ? { width: 140 } : {}}
                    transition={{ duration: 1.5, delay: 0.9 }}
                  />
                  <text x="12" y="22" fill="#0B1220" fontSize="10" fontWeight="700" fontFamily="monospace">CELL #04</text>
                  <text x="268" y="22" textAnchor="end" fill="#EAB308" fontSize="10" fontWeight="700" fontFamily="monospace">3.61V</text>
                </g>

                {/* AI Overlay Neural Network lines */}
                {/* Node 1 at cell 1 */}
                <circle cx="160" cy="58" r="4" fill="#00C82E" />
                <circle cx="160" cy="58" r="8" stroke="#00C82E" strokeWidth="1.2" opacity="0.5" className="animate-pulse" />
                
                {/* Node 2 at cell 2 */}
                <circle cx="280" cy="108" r="4" fill="#00C82E" />
                
                {/* Node 3 at cell 3 */}
                <circle cx="120" cy="158" r="4" fill="#00C82E" />
                <circle cx="120" cy="158" r="8" stroke="#00C82E" strokeWidth="1.2" opacity="0.5" className="animate-pulse" />

                {/* Node 4 at cell 4 */}
                <circle cx="210" cy="208" r="4" fill="#EAB308" />
                <circle cx="210" cy="208" r="8" stroke="#EAB308" strokeWidth="1.2" opacity="0.5" className="animate-pulse" />

                {/* Network connection paths */}
                <path d="M 160 58 L 280 108 M 280 108 L 210 208 M 120 158 L 160 58 M 120 158 L 210 208" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.75" />

                {/* Anomaly Callout Pill */}
                <g transform="translate(225, 230)" className="cursor-default">
                  <rect x="0" y="0" width="130" height="34" rx="6" fill="#FEF2F2" stroke="#FEE2E2" strokeWidth="1" />
                  <circle cx="14" cy="17" r="4" fill="#EF4444" className="animate-pulse" />
                  <text x="26" y="16" fill="#EF4444" fontSize="9" fontWeight="700">ANOMALY RESOLVED</text>
                  <text x="26" y="27" fill="#7F1D1D" fontSize="8" fontWeight="500">AI re-balanced Cell #04</text>
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="cell-bar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00C82E" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00C82E" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="cell-bar-warn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EAB308" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Dashboard metrics footer inside the card */}
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Average Temperature</div>
                  <div className="text-sm font-bold text-slate-800">27.5 °C</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Health Status</div>
                  <div className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-qp-green" />
                    EXCELLENT
                  </div>
                </div>
              </div>

            </div>

            {/* Float items around the card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 z-20"
            >
              <div className="text-xs font-bold text-qp-green">98.1%</div>
              <div className="text-[9px] text-slate-400 font-semibold tracking-wide uppercase">Prediction Accuracy</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3.5 z-20"
            >
              <div className="text-xs font-bold text-qp-green">15+ Years</div>
              <div className="text-[9px] text-slate-400 font-semibold tracking-wide uppercase">Engineering Expertise</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
