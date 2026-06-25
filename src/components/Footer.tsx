import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import logo from '../assets/quantumpulse.png'

const footerLinks = {
  Company: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Leadership', path: '/leadership' },
    { label: 'Careers', path: '/careers' },
  ],
  Solutions: [
    { label: 'AI Battery Monitoring', path: '/services' },
    { label: 'Predictive Maintenance', path: '/services' },
    { label: 'Battery Life Optimization', path: '/services' },
    { label: 'Energy Analytics', path: '/services' },
  ],
  Resources: [
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-qp-dark-2 border-t border-white/5">
      {/* CTA Strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                Ready to Revolutionize Your Battery Intelligence?
              </h3>
              <p className="text-qp-gray">Let's shape the digital future together.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-qp-dark bg-qp-green rounded-lg hover:bg-qp-green-light transition-all duration-300 shadow-green hover:shadow-green-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5 group">
              <img 
                src={logo} 
                alt="QuantumPulse Logo" 
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-qp-gray text-sm leading-relaxed mb-6 max-w-xs">
              Revolutionizing battery technology through artificial intelligence. 
              Empowering the future of energy through intelligent battery technology.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2.5 text-qp-gray">
                <Mail size={16} className="text-qp-green flex-shrink-0" />
                <a href="mailto:Ravi.shankar@quantum-pulse.co.in" className="hover:text-white transition-colors">
                  Ravi.shankar@quantum-pulse.co.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-qp-gray">
                <Phone size={16} className="text-qp-green flex-shrink-0" />
                <a href="tel:+917569126971" className="hover:text-white transition-colors">
                  +91 7569126971
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-qp-gray hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-qp-gray-light text-xs">
            © {new Date().getFullYear()} QuantumPulse. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-qp-gray-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
