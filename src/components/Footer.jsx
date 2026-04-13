// src/components/Footer.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiFacebook, FiYoutube, FiInstagram,
  FiMapPin, FiMail, FiPhone, FiMessageCircle
} from 'react-icons/fi'
import logo from '../assets/images/para-bazar-logo.png'

// ── Data ─────────────────────────────────────────────────────
const PRODUCTS_LINKS = [
  { label: 'Prices drop',  path: '/promotions' },
  { label: 'New products', path: '/new-products' },
  { label: 'Best sales',   path: '/best-sales' },
  { label: 'Contact us',   path: '/contact' },
  { label: 'Sitemap',      path: '/sitemap' },
  { label: 'Stores',       path: '/stores' },
]

const COMPANY_LINKS = [
  { label: 'Delivery',                  path: '/delivery' },
  { label: 'Legal Notice',             path: '/legal' },
  { label: 'Terms and conditions of use', path: '/terms' },
  { label: 'About us',                 path: '/about' },
  { label: 'Secure payment',           path: '/secure-payment' },
  { label: 'Login',                    path: '/auth/login' },
]

const SOCIAL = [
  { icon: FiFacebook,  path: 'https://facebook.com',  label: 'Facebook' },
  { icon: FiYoutube,   path: 'https://youtube.com',   label: 'YouTube' },
  { icon: FiInstagram, path: 'https://instagram.com', label: 'Instagram' },
]

// ── Sub-components ────────────────────────────────────────────
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-heading font-bold text-gray-800 text-sm mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map(l => (
          <li key={l.label}>
            <Link
              to={l.path}
              className="text-sm text-gray-500 hover:text-brand-herb transition-colors font-sans"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Main Footer ───────────────────────────────────────────────
export default function Footer() {
  const [email, setEmail]     = useState('')
  const [agreed, setAgreed]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = () => {
    if (!email || !agreed) return
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── Main Grid ── */}
      <div className=" mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <Link to="/">
            <img src={logo} alt="BoroJaar" className="h-10 w-auto" />
          </Link>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-700 font-heading">
              ParaBazar — Mega Super Store
            </p>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              507-Union Trade Centre, Tunis
            </p>
          </div>

          <a
            href="mailto:sales@parabazar.tn"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-herb transition-colors"
          >
            <FiMail size={14} className="text-brand-herb shrink-0" />
            sales@parabazar.tn
          </a>

          <a
            href="tel:+21698765432"
            className="flex items-center gap-2 text-base font-bold text-brand-herb hover:text-brand-herb-dark transition-colors"
          >
            <FiPhone size={15} className="shrink-0" />
            (+216) 98 765-432
          </a>

          <div className="flex items-start gap-2 bg-brand-herb-50 border border-brand-herb-100 rounded-card px-3 py-2.5 mt-1">
            <FiMessageCircle size={16} className="text-brand-herb mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-brand-herb-800">Online Chat</p>
              <p className="text-2xs text-brand-herb-600">Get Expert Help</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <FooterCol title="Products"     links={PRODUCTS_LINKS} />

        {/* Our Company */}
        <FooterCol title="Our company"  links={COMPANY_LINKS} />

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-bold text-gray-800 text-sm mb-2">
            Subscribe to newsletter
          </h4>
          <p className="text-xs text-gray-400 font-sans mb-4 leading-relaxed">
            Subscribe to our latest newsletter to get news about special discounts.
          </p>

          {/* Input */}
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-input px-3 py-2.5 text-sm font-sans
                       focus:outline-none focus:ring-2 focus:ring-brand-herb-300 focus:border-brand-herb-300
                       placeholder-gray-400 text-gray-700 mb-3"
          />

          {/* Subscribe button */}
          <button
            onClick={handleSubscribe}
            className={`w-full py-2.5 rounded-btn text-sm font-bold tracking-wide transition-colors mb-3
              ${submitted
                ? 'bg-brand-medical text-white'
                : 'bg-brand-herb hover:bg-brand-herb-dark text-white shadow-btn'
              }`}
          >
            {submitted ? '✓ Subscribed!' : 'SUBSCRIBE'}
          </button>

          {/* Checkbox */}
          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="mt-0.5 accent-brand-herb cursor-pointer"
            />
            <span className="text-2xs text-gray-400 font-sans leading-relaxed group-hover:text-gray-600 transition-colors">
              I agree to the{' '}
              <Link to="/terms" className="text-brand-herb hover:underline">terms and conditions</Link>
              {' '}and the{' '}
              <Link to="/privacy" className="text-brand-herb hover:underline">privacy policy</Link>
            </span>
          </label>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-100">
        <div className=" mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Social */}
          <div className="flex items-center gap-3">
            {SOCIAL.map(s => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-brand-herb hover:text-brand-herb hover:bg-brand-herb-50 transition-all"
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 font-sans">
            © {new Date().getFullYear()} ParaBazar — E-commerce Template
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PP'].map(card => (
              <span
                key={card}
                className="bg-gray-50 border border-gray-200 text-gray-500 text-2xs font-bold px-2 py-1 rounded"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}