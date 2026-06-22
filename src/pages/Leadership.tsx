import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import { Briefcase, GraduationCap, Globe, Award, Clock } from 'lucide-react'

const timeline = [
  { company: 'Magna International', role: 'Software Engineer', current: false, year: 'USA' },
  { company: 'Generac Power Systems', role: 'Software Engineer', current: false, year: 'USA' },
  { company: 'ZF TRW', role: 'Software Engineer', current: false, year: 'USA' },
  { company: 'Toshiba', role: 'Software Engineer', current: false, year: 'India' },
  { company: 'Tech Mahindra', role: 'Software Engineer', current: false, year: 'India' },
  { company: 'QuantumPulse', role: 'Founder & Director', current: true, year: 'Present' },
]

export default function Leadership() {
  const profileRef = useRef(null)
  const profileInView = useInView(profileRef, { once: true, margin: '-80px' })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      
      {/* 1. Hero (Dark Theme) */}
      <div className="pt-36 pb-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Leadership</span>
            </div>
            <h1 className="text-responsive-hero font-display font-bold text-white mb-6 leading-tight">
              Meet Our <span className="gradient-text text-glow-green">Visionary Leader</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 2. Executive Profile (Light Theme) */}
      <section ref={profileRef} className="section-padding bg-[#F8FAFC] relative overflow-hidden light-theme-selection">
        {/* Subtle background detail */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Portrait & Core Credentials Card (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={profileInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-100 text-center">
                
                {/* Advanced SVG technical head vector graphic representational avatar */}
                <div className="relative w-36 h-36 mx-auto mb-6 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center overflow-hidden">
                  
                  {/* Rotating neural grid inside the head visual */}
                  <svg viewBox="0 0 100 100" className="w-24 h-24 overflow-visible">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#00C82E" strokeWidth="1" strokeDasharray="3,3" className="animate-turbine-spin" />
                    <circle cx="50" cy="50" r="22" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                    
                    {/* Interconnected circuit paths representing Computer Systems Systems Engineer */}
                    <path d="M 50 12 L 50 35" stroke="#00C82E" strokeWidth="1.5" />
                    <path d="M 50 35 L 35 50 L 50 65 L 50 88" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="2,2" />
                    <path d="M 35 50 L 65 50" stroke="#00C82E" strokeWidth="1.5" />
                    <path d="M 28 35 Q 50 42 72 35" stroke="#E2E8F0" strokeWidth="1.5" />
                    <path d="M 28 65 Q 50 58 72 65" stroke="#E2E8F0" strokeWidth="1.5" />

                    {/* Glowing nodes */}
                    <circle cx="50" cy="35" r="4.5" fill="#00C82E" />
                    <circle cx="50" cy="35" r="8.5" stroke="#00C82E" strokeWidth="1" opacity="0.4" className="animate-pulse" />
                    
                    <circle cx="35" cy="50" r="4" fill="#00C82E" />
                    <circle cx="65" cy="50" r="4" fill="#00C82E" />
                    <circle cx="50" cy="65" r="4.5" fill="#00C82E" />
                  </svg>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-qp-green border-2 border-white shadow" />
                </div>

                <h2 className="text-xl font-display font-bold text-slate-800 mb-1 tracking-tight">RAVI SHANKAR REDDY PASNOORI</h2>
                <div className="text-qp-green font-bold text-sm mb-4.5">Founder & Director</div>

                {/* Technical Badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {['AI Expert', 'Systems Engineer', 'Visionary Leader'].map(badge => (
                    <span key={badge} className="text-[10px] font-bold px-3 py-1 rounded-full text-qp-green bg-qp-green/10 border border-qp-green/20">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Executive Quick Stats */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                    <div className="text-lg font-bold text-qp-green">15+</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Years Exp</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                    <div className="text-lg font-bold text-qp-green">USA</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Master's</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center col-span-2">
                    <div className="text-sm font-bold text-qp-green">USA & INDIA</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Work Experience</div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Bio Content & Academic Profile (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={profileInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-2 mb-3.5">
                <Award size={16} className="text-qp-green" />
                <span className="text-xs text-qp-green font-bold tracking-wider uppercase">Executive Profile</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0B1220] mb-6 leading-tight">
                Dynamic & Intellectually Vibrant Professional
              </h3>

              {/* Bio descriptions (Verbatim as required) */}
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
                <p>
                  He is a dynamic and intellectually vibrant professional, distinguished by youthful vigor and visionary zeal. He is founder and director, prior to this he worked as software Engineer at Magna international, prior to that he worked as software engineer at Generac power systems, earlier in his career he worked as software engineer at ZF TRW, prior to that he worked with Toshiba, Tech Mahindra.
                </p>
                <p>
                  He got Master's degree in digital and computer systems & wireless communication earned in the United States, reflecting a formidable academic pedigree. And totally has 15 years experience as software engineer in India and United states of America.
                </p>
                <p>
                  He demonstrates a pronounced acumen for strategic sourcing and organizational development. His proficiency in target-driven execution and outcome optimization underscores his reputation as a results-oriented and forward-thinking leader.
                </p>
              </div>

              {/* Graphical attribute cards grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, label: 'Academic Excellence', desc: "Master's in Digital & Computer Systems (USA)" },
                  { icon: Globe, label: 'Global Experience', desc: 'Software Engineering across India & USA' },
                  { icon: Briefcase, label: 'Industry Veteran', desc: '15+ years across top tech companies' },
                ].map((attr) => {
                  const Icon = attr.icon
                  return (
                    <div key={attr.label} className="bg-white rounded-xl p-4.5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-8 h-8 rounded-lg bg-qp-green/10 flex items-center justify-center mb-3">
                        <Icon size={16} className="text-qp-green" />
                      </div>
                      <div className="text-xs font-bold text-slate-800 mb-1">{attr.label}</div>
                      <div className="text-[10px] text-slate-400 leading-normal font-medium">{attr.desc}</div>
                    </div>
                  )
                })}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Career Timeline (Dark Theme) */}
      <section ref={timelineRef} className="section-padding bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <Clock size={12} className="text-qp-green" />
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Career Journey</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Professional <span className="gradient-text text-glow-green">Timeline</span>
            </h2>
          </motion.div>

          {/* Timeline Layout */}
          <div className="relative max-w-2xl mx-auto">
            {/* Connecting lines */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-qp-green via-qp-green/50 to-transparent pointer-events-none" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex items-start gap-6 mb-6 last:mb-0"
              >
                {/* Visual node marker */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.current 
                    ? 'bg-qp-green shadow-green-lg' 
                    : 'bg-qp-dark-2 border border-qp-green/30 shadow'
                }`}>
                  {item.current 
                    ? <Briefcase size={18} className="text-qp-dark" />
                    : <div className="w-2.5 h-2.5 rounded-full bg-qp-green/75" />
                  }
                </div>

                {/* Experience Card */}
                <div className={`flex-1 rounded-xl p-5 border transition-all duration-300 ${
                  item.current 
                    ? 'glass-green border-qp-green/25 shadow-green' 
                    : 'glass border-white/5 hover:border-white/10'
                }`}>
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-1">
                    <div className="font-bold text-white text-base">
                      {item.company}
                      {item.current && (
                        <span className="ml-2.5 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-qp-green text-qp-dark">Current</span>
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-qp-green font-bold tracking-widest uppercase">{item.year}</div>
                  </div>
                  <div className={`text-sm ${item.current ? 'text-qp-green/90 font-semibold' : 'text-qp-gray'}`}>
                    {item.role}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </PageWrapper>
  )
}
