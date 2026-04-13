// src/sections/home/components/BonsPlansSection.jsx
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import banner1 from '../../../assets/images/para-banner-1.png'
import banner2 from '../../../assets/images/para-banner-2.png'
import banner3 from '../../../assets/images/para-banner-3.png'
import banner4 from '../../../assets/images/para-banner-4.png'

const PLANS = [
  { id: 1, img: banner1, path: '/promotions/offre-1' },
  { id: 2, img: banner2, path: '/promotions/offre-2' },
  { id: 3, img: banner3, path: '/promotions/offre-3' },
  { id: 4, img: banner4, path: '/promotions/offre-4' },
]

const RING_COLORS = [
  'hover:ring-brand-herb-300',
  'hover:ring-brand-serene-300',
  'hover:ring-brand-medical-300',
  'hover:ring-brand-azure-300',
]

function BannerCard({ plan, index }) {
  return (
    <Link
      to={plan.path}
      className={`group relative overflow-hidden rounded-card shadow-card ring-2 ring-transparent ${RING_COLORS[index]} transition-all duration-300 block h-40`}
    >
      <img
        src={plan.img}
        alt={`Bon plan ${plan.id}`}
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        onError={e => { e.target.style.display = 'none' }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)' }}
      />
    </Link>
  )
}

export default function BonsPlansSection() {
  return (
    <section className="relative overflow-hidden py-8 mb-4">

      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #EFF9EC 0%, #EDF5FB 40%, #EBF4FC 70%, #F0F7EA 100%)' }}
        />
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #B2E1A2, transparent 70%)' }}
        />
        <div
          className="absolute -top-10 right-1/3 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ADD2EE, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #AFCFED, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #B2D691, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3D6F32 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className=" mx-auto px-4">

        {/* ── Header ── */}
        <div className="flex flex-col items-center mb-5">
          <div className="flex items-center gap-5">
            <div className="flex gap-1">
              <div className="w-8 h-0.5 bg-brand-herb-300 rounded-full" />
              <div className="w-4 h-0.5 bg-brand-herb-200 rounded-full" />
              <div className="w-2 h-0.5 bg-brand-herb-100 rounded-full" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-azure-900 uppercase tracking-widest whitespace-nowrap">
              Nos Bons Plans
            </h2>
            <div className="flex gap-1">
              <div className="w-2 h-0.5 bg-brand-herb-100 rounded-full" />
              <div className="w-4 h-0.5 bg-brand-herb-200 rounded-full" />
              <div className="w-8 h-0.5 bg-brand-herb-300 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <p className="text-sm text-brand-serene-700 font-sans">
              Découvrez nos meilleures offres de la semaine
            </p>
            <Link
              to="/promotions"
              className="flex items-center gap-1 text-xs text-brand-herb font-bold uppercase tracking-wider hover:text-brand-herb-dark transition-colors border-b border-brand-herb-300 hover:border-brand-herb pb-0.5"
            >
              Voir Tout <FiArrowRight size={11} />
            </Link>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
          {PLANS.map((plan, i) => (
            <BannerCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex justify-center mt-5">
          <Link
            to="/promotions"
            className="inline-flex items-center gap-2 bg-brand-herb hover:bg-brand-herb-dark text-white font-semibold text-sm px-8 py-3 rounded-btn shadow-btn transition-colors"
          >
            Voir toutes les promotions
            <FiArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}