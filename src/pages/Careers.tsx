import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import { Cpu, Code, Coffee, ArrowRight, MapPin, Clock, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const jobs = [
  {
    icon: Cpu,
    title: 'AI Developers',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    desc: 'Join our AI team to develop cutting-edge machine learning models for battery intelligence and predictive analytics.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Battery Analytics'],
    highlight: true,
  },
  {
    icon: Code,
    title: 'Embedded Developer / Electrical Background',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    desc: 'Work on embedded systems and battery management firmware with a focus on real-time data acquisition and control.',
    skills: ['C/C++', 'Embedded Systems', 'CAN Bus', 'BMS', 'Electrical Engineering'],
    highlight: false,
  },
  {
    icon: Coffee,
    title: 'Java Developer',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    desc: 'Build scalable backend systems and APIs for our battery intelligence platform using modern Java frameworks.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Cloud'],
    highlight: false,
  },
]

export default function Careers() {
  const jobsRef = useRef(null)
  const jobsInView = useInView(jobsRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      
      {/* 1. Hero (Dark Theme) */}
      <div className="pt-36 pb-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Join Our Team</span>
            </div>
            <h1 className="text-responsive-hero font-display font-bold text-white mb-6 leading-tight">
              Build the Future of <span className="gradient-text text-glow-green">Energy AI</span>
            </h1>
            <p className="text-qp-gray max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              We're looking for passionate engineers and technologists to join our mission of revolutionizing battery intelligence through artificial intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Why Work With Us (Light Theme) */}
      <section className="section-padding bg-white relative overflow-hidden light-theme-selection">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6.5">
            {[
              { icon: Users, title: 'Collaborative Culture', desc: 'Work with a passionate team driving real innovation in AI and energy technology.' },
              { icon: Cpu, title: 'Cutting-edge Tech', desc: 'Use the latest AI, ML, and battery technologies in a fast-paced startup environment.' },
              { icon: MapPin, title: 'Flexible Work', desc: 'Remote-friendly environment that values results and work-life balance.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6.5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-qp-green/10 border border-qp-green/20 flex items-center justify-center mx-auto mb-4.5 flex-shrink-0">
                    <Icon size={20} className="text-qp-green" />
                  </div>
                  <h3 className="text-slate-800 font-bold mb-2.5 text-base">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mt-auto">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Open Positions (Dark Theme) */}
      <section ref={jobsRef} className="section-padding bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <Zap size={12} className="text-qp-green fill-qp-green" />
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Open Positions</span>
            </div>
            <h2 className="text-responsive-heading font-display font-bold text-white mb-4">
              We're <span className="gradient-text text-glow-green">Hiring</span>
            </h2>
          </motion.div>

          {/* Hiring Cards List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, i) => {
              const Icon = job.icon
              return (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ scale: 1.01 }}
                  className={`group glass rounded-xl p-6 border transition-all duration-300 ${
                    job.highlight 
                      ? 'border-qp-green/30 shadow-green' 
                      : 'border-white/5 hover:border-qp-green/25'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-6">
                    <div className="flex items-start gap-4.5">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        job.highlight 
                          ? 'bg-qp-green shadow-green-lg' 
                          : 'bg-qp-green/10 border border-qp-green/20'
                      }`}>
                        <Icon size={22} className={job.highlight ? 'text-qp-dark' : 'text-qp-green'} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-lg font-display font-semibold text-white">{job.title}</h3>
                          {job.highlight && (
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-qp-green text-qp-dark font-display">Featured</span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-1.5">
                          <span className="flex items-center gap-1.5 text-xs text-qp-gray font-medium">
                            <Clock size={11} className="text-qp-green" /> {job.type}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-qp-gray font-medium">
                            <MapPin size={11} className="text-qp-green" /> {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-qp-dark bg-qp-green rounded-lg hover:bg-qp-green-light transition-all duration-300 shadow-green whitespace-nowrap w-full sm:w-auto self-stretch sm:self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qp-green focus-visible:ring-offset-2 focus-visible:ring-offset-qp-dark"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>

                  <p className="text-sm text-qp-gray leading-relaxed mb-6">{job.desc}</p>

                  <div className="flex flex-wrap gap-2.5">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold px-3 py-1 rounded-full text-qp-green bg-qp-green/10 border border-qp-green/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* General application card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-14"
          >
            <div className="glass rounded-xl p-7 border border-white/5 max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-bold text-white mb-3">Don't See Your Role?</h3>
              <p className="text-qp-gray text-sm mb-6.5 max-w-lg mx-auto">
                We're always looking for talented individuals who are passionate about AI and energy technology. Send us your resume!
              </p>
              <Link to="/contact" className="btn-outline group text-sm px-5 py-2.5">
                Send Your Resume 
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </PageWrapper>
  )
}
