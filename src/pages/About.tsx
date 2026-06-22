import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import { Target, Eye, Users, Award, TrendingUp, Lightbulb } from 'lucide-react'

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously pushing technological boundaries to create smarter energy solutions.' },
  { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in every project we deliver.' },
  { icon: Users, title: 'Collaboration', desc: 'We build strong partnerships with our clients to achieve shared success.' },
  { icon: TrendingUp, title: 'Growth', desc: 'We continuously learn, evolve, and help our clients grow through technology.' },
]

function SectionHeader({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  dark = true 
}: { 
  badge: string; 
  title: string; 
  highlight?: string; 
  subtitle?: string;
  dark?: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="mb-12"
    >
      <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 mb-4 border ${
        dark 
          ? 'glass-green border-qp-green/20' 
          : 'bg-qp-green/10 border-qp-green/25'
      }`}>
        <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">{badge}</span>
      </div>
      <h2 className={`text-responsive-heading font-display font-bold mb-4 ${
        dark ? 'text-white' : 'text-[#0B1220]'
      }`}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl leading-relaxed text-sm sm:text-base ${
          dark ? 'text-qp-gray' : 'text-slate-500'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default function About() {
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })
  const mvRef = useRef(null)
  const mvInView = useInView(mvRef, { once: true, margin: '-80px' })
  const valRef = useRef(null)
  const valInView = useInView(valRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      
      {/* 1. Hero Banner (Dark Theme) */}
      <div className="pt-36 pb-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">About QuantumPulse</span>
            </div>
            <h1 className="text-responsive-hero font-display font-bold text-white mb-6 leading-tight">
              Redefining <span className="gradient-text text-glow-green">Battery Intelligence</span>
            </h1>
            <p className="text-qp-gray max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              A next-generation AI startup driving the future of intelligent energy management.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Story Section (Light Theme) */}
      <section ref={storyRef} className="section-padding bg-white relative overflow-hidden light-theme-selection">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Story Copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <SectionHeader badge="Our Story" title="Who" highlight="We Are" dark={false} />
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
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
            </motion.div>

            {/* AI Tech Visual (Light mode) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-white rounded-2xl p-7.5 border border-slate-200 shadow-xl shadow-slate-100">
                <div className="text-center mb-6">
                  <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2.5">AI Technology Core</div>
                  
                  {/* Rotating visual core */}
                  <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center mx-auto relative bg-slate-50">
                    <div className="w-14 h-14 rounded-full border border-qp-green/20 flex items-center justify-center animate-turbine-spin">
                      <div className="w-8 h-8 rounded-full bg-qp-green/10 border border-qp-green/30 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-qp-green animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual Technology Layers */}
                {['Machine Learning', 'Battery Analytics', 'Predictive AI', 'Real-time BMS', 'Edge Computing'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: 20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 mb-3 bg-slate-50 border border-slate-100 rounded-xl px-4.5 py-3.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-qp-green flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{tech}</span>
                    
                    {/* Performance percentage bar */}
                    <div className="ml-auto w-20 h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-qp-green rounded-full"
                        initial={{ width: 0 }}
                        animate={storyInView ? { width: `${75 + i * 5}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Dark Theme) */}
      <section ref={mvRef} className="section-padding bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mvInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="glass rounded-xl p-6.5 border border-white/5 hover:border-qp-green/20 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-qp-green/10 border border-qp-green/20 flex items-center justify-center mb-6 flex-shrink-0">
                <Target size={22} className="text-qp-green" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-qp-gray leading-relaxed text-sm sm:text-base mt-auto">
                To revolutionize battery technology through artificial intelligence by delivering predictive, efficient, and reliable battery management. And to empower organizations with innovative technology solutions that simplify operations, enhance productivity, and create sustainable business growth.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={mvInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-xl p-6.5 border border-white/5 hover:border-qp-green/20 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-qp-green/10 border border-qp-green/20 flex items-center justify-center mb-6 flex-shrink-0">
                <Eye size={22} className="text-qp-green" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-qp-gray leading-relaxed text-sm sm:text-base mt-auto">
                To become a global leader in AI-driven battery intelligence, accelerating the world's transition to sustainable energy. And to get recognized as global technology company known for innovation, excellence, and customer-centric digital solutions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Values (Light Theme) */}
      <section ref={valRef} className="section-padding bg-[#F8FAFC] relative overflow-hidden light-theme-selection">
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 bg-qp-green/10 border border-qp-green/20 rounded-full px-2.5 py-0.5 mb-4">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Values</span>
            </div>
            <h2 className="text-responsive-heading font-display font-bold text-[#0B1220] mb-4">
              Core <span className="gradient-text">Principles</span>
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
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-xl p-5.5 border border-slate-200/80 hover:border-qp-green/25 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 text-center h-full flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-qp-green/10 border border-qp-green/25 flex items-center justify-center mx-auto mb-4.5 group-hover:bg-qp-green/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Icon size={20} className="text-qp-green" />
                  </div>
                  <h3 className="text-slate-800 font-bold mb-2.5 group-hover:text-qp-green transition-colors duration-300 text-base">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mt-auto">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </PageWrapper>
  )
}
