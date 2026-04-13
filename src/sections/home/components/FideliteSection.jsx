// src/sections/home/components/FideliteSection.jsx
import { Link } from 'react-router-dom'
import {
  FiStar, FiGift, FiPercent, FiArrowRight,
  FiCheck, FiShoppingBag, FiAward, FiTrendingUp, FiZap
} from 'react-icons/fi'

// ── Data ─────────────────────────────────────────────────────
const AVANTAGES = [
  {
    icon: FiPercent,
    title: 'Réductions Exclusives',
    desc: 'Jusqu\'à -20% sur tous vos achats dès le premier achat.',
    color: 'text-brand-herb-700',
    bg: 'bg-brand-herb-50',
    border: 'border-brand-herb-200',
    iconBg: 'bg-brand-herb-100',
  },
  {
    icon: FiGift,
    title: 'Cadeaux & Surprises',
    desc: 'Un cadeau offert à chaque anniversaire et palier atteint.',
    color: 'text-brand-serene-700',
    bg: 'bg-brand-serene-50',
    border: 'border-brand-serene-200',
    iconBg: 'bg-brand-serene-100',
  },
  {
    icon: FiTrendingUp,
    title: 'Points Cumulables',
    desc: '1 DT dépensé = 10 points échangeables en bons d\'achat.',
    color: 'text-brand-azure-700',
    bg: 'bg-brand-azure-50',
    border: 'border-brand-azure-200',
    iconBg: 'bg-brand-azure-100',
  },
  {
    icon: FiAward,
    title: 'Accès VIP',
    desc: 'Ventes privées et offres réservées aux membres fidèles.',
    color: 'text-brand-medical-700',
    bg: 'bg-brand-medical-50',
    border: 'border-brand-medical-200',
    iconBg: 'bg-brand-medical-100',
  },
]

const PALIERS = [
  {
    name: 'Silver',
    points: '0 – 500 pts',
    discount: '5%',
    perks: ['Réduction 5%', 'Points x1', '-'],
    gradient: 'from-gray-100 to-gray-50',
    badge: 'bg-gray-200 text-gray-600',
    dot: 'bg-gray-400',
  },
  {
    name: 'Gold',
    points: '500 – 2000 pts',
    discount: '10%',
    perks: ['Réduction 10%', 'Points x2', 'Cadeau anniversaire'],
    gradient: 'from-yellow-50 to-amber-50',
    badge: 'bg-yellow-100 text-yellow-700',
    dot: 'bg-yellow-400',
    highlight: true,
  },
  {
    name: 'Platinum',
    points: '2000+ pts',
    discount: '20%',
    perks: ['Réduction 20%', 'Points x3', 'Accès VIP + Cadeaux'],
    gradient: 'from-brand-herb-50 to-brand-medical-50',
    badge: 'bg-brand-herb-100 text-brand-herb-700',
    dot: 'bg-brand-herb',
    best: true,
  },
]

const STEPS = [
  { num: 1, icon: FiShoppingBag, title: 'Inscrivez-vous',     desc: 'Créez votre compte gratuitement en 1 minute.' },
  { num: 2, icon: FiZap,         title: 'Achetez & cumulez',  desc: 'Gagnez des points à chaque achat effectué.' },
  { num: 3, icon: FiGift,        title: 'Profitez',           desc: 'Échangez vos points contre des avantages.' },
]

// ─────────────────────────────────────────────────────────────
export default function FideliteSection() {
  return (
    <section className="relative overflow-hidden py-10 mb-4">

      {/* ── Background identique à BonsPlansSection ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #EFF9EC 0%, #EDF5FB 40%, #EBF4FC 70%, #F0F7EA 100%)' }}
        />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #B2E1A2, transparent 70%)' }}
        />
        <div className="absolute -top-10 right-1/3 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ADD2EE, transparent 70%)' }}
        />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #AFCFED, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #B2D691, transparent 70%)' }}
        />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3D6F32 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* ── Header — même style que BonsPlansSection ── */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-5">
            <div className="flex gap-1">
              <div className="w-8 h-0.5 bg-brand-herb-300 rounded-full" />
              <div className="w-4 h-0.5 bg-brand-herb-200 rounded-full" />
              <div className="w-2 h-0.5 bg-brand-herb-100 rounded-full" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-azure-900 uppercase tracking-widest whitespace-nowrap">
              Carte Fidélité
            </h2>
            <div className="flex gap-1">
              <div className="w-2 h-0.5 bg-brand-herb-100 rounded-full" />
              <div className="w-4 h-0.5 bg-brand-herb-200 rounded-full" />
              <div className="w-8 h-0.5 bg-brand-herb-300 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <p className="text-sm text-brand-serene-700 font-sans">
              Gagnez des points et profitez d'avantages exclusifs à chaque achat
            </p>
            <Link
              to="/fidelite"
              className="flex items-center gap-1 text-xs text-brand-herb font-bold uppercase tracking-wider hover:text-brand-herb-dark transition-colors border-b border-brand-herb-300 hover:border-brand-herb pb-0.5 whitespace-nowrap"
            >
              En savoir plus <FiArrowRight size={11} />
            </Link>
          </div>
        </div>

        {/* ── 4 Avantages ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {AVANTAGES.map(a => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className={`bg-white border ${a.border} rounded-card shadow-card p-4 flex flex-col gap-3 hover:shadow-medical transition-shadow group`}
              >
                <div className={`w-10 h-10 ${a.iconBg} rounded-input flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className={a.color} />
                </div>
                <div>
                  <p className={`font-heading font-bold text-sm ${a.color} mb-1`}>{a.title}</p>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{a.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Steps + Paliers (2 colonnes) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

          {/* Steps */}
          <div className="bg-white border border-gray-100 rounded-card shadow-card p-6">
            <h3 className="font-heading font-bold text-gray-800 text-base mb-5">
              Comment ça marche ?
            </h3>
            <div className="flex flex-col gap-4">
              {STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 bg-brand-herb-50 border border-brand-herb-200 rounded-card flex items-center justify-center">
                        <Icon size={16} className="text-brand-herb" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-herb text-white text-2xs font-bold rounded-full flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="font-heading font-semibold text-sm text-gray-800">{step.title}</p>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">{step.desc}</p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="absolute left-9 w-0.5 h-4 bg-brand-herb-100 mt-10" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Paliers */}
          <div className="bg-white border border-gray-100 rounded-card shadow-card p-6">
            <h3 className="font-heading font-bold text-gray-800 text-base mb-5">
              Nos paliers de fidélité
            </h3>
            <div className="flex flex-col gap-3">
              {PALIERS.map(p => (
                <div
                  key={p.name}
                  className={`bg-gradient-to-r ${p.gradient} border ${p.best ? 'border-brand-herb-300' : 'border-gray-100'} rounded-input p-3 flex items-center gap-4 ${p.best ? 'ring-1 ring-brand-herb-200' : ''}`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${p.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-heading font-bold text-sm text-gray-800">{p.name}</span>
                      {p.best && (
                        <span className="text-2xs font-bold bg-brand-herb text-white px-2 py-0.5 rounded-badge">
                          Top
                        </span>
                      )}
                    </div>
                    <p className="text-2xs text-gray-400 font-sans">{p.points}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-heading font-bold text-brand-herb text-lg leading-none">{p.discount}</p>
                    <p className="text-2xs text-gray-400 font-sans">réduction</p>
                  </div>
                  <div className="hidden sm:flex flex-col gap-0.5 border-l border-gray-200 pl-4 shrink-0">
                    {p.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <FiCheck size={10} className={perk === '-' ? 'text-gray-200' : 'text-brand-herb'} />
                        <span className={`text-2xs font-sans ${perk === '-' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {perk === '-' ? 'Non inclus' : perk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="bg-brand-herb rounded-card p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-medical">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-card flex items-center justify-center shrink-0">
              <FiStar size={22} className="text-white" />
            </div>
            <div className="text-white">
              <p className="font-heading font-bold text-lg leading-tight">
                Rejoignez le programme fidélité
              </p>
              <p className="text-brand-herb-100 text-xs font-sans mt-0.5">
                Inscription gratuite — Avantages immédiats dès le premier achat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/auth/register"
              className="bg-white text-brand-herb-700 font-bold text-sm px-6 py-2.5 rounded-btn hover:bg-brand-herb-50 transition-colors whitespace-nowrap shadow-btn"
            >
              Créer mon compte
            </Link>
            <Link
              to="/fidelite"
              className="flex items-center gap-1.5 border border-white/40 text-white font-semibold text-sm px-4 py-2.5 rounded-btn hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              En savoir plus <FiArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}