import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import { Mail, Phone, Send, Globe, CheckCircle2, ExternalLink } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Ravi.shankar@quantum-pulse.co.in',
    href: 'mailto:Ravi.shankar@quantum-pulse.co.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7569126971',
    href: 'tel:+917569126971',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'QuantumPulse LinkedIn',
    href: 'https://www.linkedin.com/in/quantum-pulse-062963413',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageWrapper>
      
      {/* 1. Hero (Dark Theme) */}
      <div className="pt-36 pb-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,200,46,0.08) 0%, transparent 70%)' }} />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-1.5 glass-green rounded-full px-2.5 py-0.5 mb-4 border border-qp-green/20">
              <span className="text-[9.5px] text-qp-green font-bold tracking-wider uppercase">Contact Us</span>
            </div>
            <h1 className="text-responsive-hero font-display font-bold text-white mb-6 leading-tight">
              Let's <span className="gradient-text text-glow-green">Connect</span>
            </h1>
            <p className="text-qp-gray max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
              Empowering the future of energy through intelligent battery technology. Let's build something great together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Main Form & Info Section (Light Theme) */}
      <section ref={formRef} className="section-padding bg-[#F8FAFC] relative overflow-hidden light-theme-selection">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#00C82E 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Info (Left column) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-display font-bold text-slate-800 mb-8 tracking-tight">Get In Touch</h2>

                <div className="space-y-4.5 mb-10">
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, x: -20 }}
                        animate={formInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4.5 bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-qp-green/30 transition-all duration-300 group"
                      >
                        <div className="w-11 h-11 rounded-lg bg-qp-green/10 border border-qp-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-qp-green/20 transition-all duration-300">
                          <Icon size={18} className="text-qp-green" />
                        </div>
                        <div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{info.label}</div>
                          <div className="text-sm font-bold text-slate-700 group-hover:text-qp-green transition-colors duration-300 break-all">
                            {info.value}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>

                {/* Map Coordinates Visual Placeholder (High-tech SVG Grid) */}
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
                  <div className="h-44 bg-[#0B1220] flex items-center justify-center relative">
                    <div className="absolute inset-0 animated-grid opacity-30" />
                    
                    {/* SVG Coordinates Blueprint */}
                    <svg viewBox="0 0 300 120" className="absolute inset-0 w-full h-full p-4 overflow-visible">
                      {/* Grid latitude lines */}
                      <path d="M 0 30 L 300 30 M 0 60 L 300 60 M 0 90 L 300 90" stroke="#162035" strokeWidth="1" />
                      {/* Global longitude arcs (representational) */}
                      <path d="M 50 0 C 80 40 80 80 50 120 M 150 0 C 180 40 180 80 150 120 M 250 0 C 280 40 280 80 250 120" stroke="#162035" strokeWidth="1" />

                      {/* Connection vector path between USA and India coordinates */}
                      <path d="M 60 40 Q 140 10 230 75" stroke="#00C82E" strokeWidth="1.5" strokeDasharray="4,4" className="animate-flow-line" />

                      {/* USA Node */}
                      <g transform="translate(60, 40)">
                        <circle cx="0" cy="0" r="10" fill="rgba(0, 200, 46, 0.15)" className="animate-pulse" />
                        <circle cx="0" cy="0" r="3.5" fill="#00C82E" />
                        <text x="8" y="3" fill="#6B7280" fontSize="8" fontWeight="700">USA</text>
                      </g>

                      {/* India Node */}
                      <g transform="translate(230, 75)">
                        <circle cx="0" cy="0" r="12" fill="rgba(0, 200, 46, 0.2)" className="animate-pulse" />
                        <circle cx="0" cy="0" r="4.5" fill="#00C82E" />
                        <text x="10" y="3" fill="#00C82E" fontSize="8" fontWeight="700">HQ (INDIA)</text>
                      </g>
                    </svg>

                    <div className="relative z-10 text-center pointer-events-none mt-8">
                      <div className="text-xs text-white font-bold tracking-widest uppercase mb-0.5">QuantumPulse Global</div>
                      <div className="text-[10px] text-qp-gray uppercase font-semibold">HQ Node Online</div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-semibold">
                      <Globe size={11} className="text-qp-green" />
                      <a href="https://quantum-pulse.co.in" className="hover:text-qp-green transition-colors">quantum-pulse.co.in</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form (Right column) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-2xl p-7.5 border border-slate-200 shadow-xl shadow-slate-100">
                <h3 className="text-xl font-display font-bold text-slate-800 mb-6.5 tracking-tight">Send a Message</h3>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-14"
                  >
                    <div className="w-14 h-14 rounded-full bg-qp-green/10 flex items-center justify-center mx-auto mb-4.5">
                      <CheckCircle2 size={32} className="text-qp-green animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We have received your inquiry and our team will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="full-name" className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          id="full-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400/80 focus:bg-white focus:border-qp-green focus:outline-none focus:ring-1 focus:ring-qp-green/20 transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email-address" className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          id="email-address"
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400/80 focus:bg-white focus:border-qp-green focus:outline-none focus:ring-1 focus:ring-qp-green/20 transition-all duration-200"
                          placeholder="email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company-name" className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Company</label>
                      <input
                        id="company-name"
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400/80 focus:bg-white focus:border-qp-green focus:outline-none focus:ring-1 focus:ring-qp-green/20 transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Subject *</label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400/80 focus:bg-white focus:border-qp-green focus:outline-none focus:ring-1 focus:ring-qp-green/20 transition-all duration-200"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400/80 focus:bg-white focus:border-qp-green focus:outline-none focus:ring-1 focus:ring-qp-green/20 transition-all duration-200 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-2 py-4 font-bold text-qp-dark bg-qp-green rounded-lg hover:bg-qp-green-light transition-all duration-300 shadow-green hover:shadow-green-lg"
                    >
                      <Send size={15} />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. LinkedIn Follow Box (Dark Theme) */}
      <section className="py-20 bg-qp-dark relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            className="glass rounded-2xl p-10 sm:p-14 border border-qp-green/10 max-w-2xl mx-auto"
          >
            <div className="w-14 h-14 rounded-xl bg-qp-green/10 border border-qp-green/20 flex items-center justify-center mx-auto mb-6">
              <ExternalLink size={26} className="text-qp-green" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3.5">Connect on LinkedIn</h3>
            <p className="text-qp-gray mb-8 leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
              Follow QuantumPulse on LinkedIn for the latest updates on AI battery intelligence, company news, and opportunities.
            </p>
            <a
              href="https://www.linkedin.com/in/quantum-pulse-062963413"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex gap-2 text-sm px-5 py-2.5"
            >
              <ExternalLink size={14} /> Follow on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  )
}
