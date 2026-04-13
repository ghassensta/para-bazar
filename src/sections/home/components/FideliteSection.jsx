// src/sections/home/components/FideliteSection.jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight, FiStar, FiGift, FiTrendingUp, FiZap } from 'react-icons/fi'

const STATS = [
  { value: '+20%', label: 'de réduction max',     icon: FiStar },
  { value: '10 pts', label: 'par dinar dépensé',  icon: FiTrendingUp },
  { value: '3',    label: 'niveaux de fidélité',  icon: FiZap },
  { value: '1 an', label: 'cadeau anniversaire',  icon: FiGift },
]

export default function FideliteSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={ref} className="mx-auto px-4 mb-10">
      <div className="relative overflow-hidden rounded-card shadow-card flex flex-col md:flex-row min-h-[280px]"
        style={{ background: 'linear-gradient(135deg, #3D6F32 0%, #66B04B 50%, #88C45F 100%)' }}
      >

        {/* ── Cercles déco ── */}
        <motion.div
          className="absolute -top-14 -right-14 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.06)' }}
          animate={{ scale: [1, 1.07, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 right-32 w-52 h-52 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.04)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />

        {/* ── Image gauche ── */}
        <motion.div
          className="md:w-[38%] w-full h-52 md:h-auto shrink-0 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=500&fit=crop"
            alt="Carte fidélité"
            className="w-full h-full object-cover object-center"
          />
          {/* Fondu vers le contenu */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(to right, transparent 50%, #52903C 100%)' }}
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, #52903C 100%)' }}
          />
        </motion.div>

        {/* ── Contenu droite ── */}
        <div className="relative z-10 flex flex-col justify-center gap-5 px-8 py-10 md:py-12 flex-1">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-badge border border-white/30"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#EFF9EC', backdropFilter: 'blur(8px)' }}
            >
              <FiStar size={11} style={{ fill: '#EFF9EC' }} />
              Programme Fidélité
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h2
            {...fadeUp(0.2)}
            className="font-heading text-2xl md:text-3xl font-extrabold leading-tight max-w-sm"
            style={{ color: '#EFF9EC' }}
          >
            Chaque achat vous rapproche d'un cadeau
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            {...fadeUp(0.3)}
            className="font-sans text-sm leading-relaxed max-w-xs"
            style={{ color: '#B2E1A2' }}
          >
            Cumulez des points à chaque visite et débloquez des réductions exclusives, des cadeaux et un accès VIP.
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.85, y: 16 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.09, ease: 'backOut' }}
                  className="flex flex-col gap-1.5 rounded-input px-3 py-3 border border-white/20"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <Icon size={14} style={{ color: '#D9F0D0' }} />
                  <p className="font-heading font-extrabold text-xl leading-none" style={{ color: '#EFF9EC' }}>
                    {s.value}
                  </p>
                  <p className="font-sans text-2xs leading-tight" style={{ color: '#8DCE71' }}>
                    {s.label}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-3 flex-wrap">
            <Link
              to="/auth/register"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-2.5 rounded-btn shadow-btn transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: '#EFF9EC', color: '#3D6F32' }}
            >
              Rejoindre gratuitement
              <FiArrowRight size={13} />
            </Link>
            <Link
              to="/fidelite"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#D9F0D0' }}
            >
              En savoir plus <FiArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}