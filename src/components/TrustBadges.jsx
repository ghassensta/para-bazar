// src/components/TrustBadges.jsx
import { FiTruck, FiRefreshCw, FiShield, FiGift, FiHeadphones } from 'react-icons/fi'

const BADGES = [
  {
    icon: FiTruck,
    title: 'Free Shipping',
    desc: 'For all Orders Over $100',
    color: 'text-brand-herb',
    bg: 'bg-brand-herb-50',
  },
  {
    icon: FiRefreshCw,
    title: '30 Days Returns',
    desc: 'For an Exchange Product',
    color: 'text-brand-azure',
    bg: 'bg-brand-azure-50',
  },
  {
    icon: FiShield,
    title: 'Secured Payment',
    desc: 'Payment Cards Accepted',
    color: 'text-brand-serene',
    bg: 'bg-brand-serene-50',
  },
  {
    icon: FiGift,
    title: 'Special Gifts',
    desc: 'Our First Product Order',
    color: 'text-brand-medical',
    bg: 'bg-brand-medical-50',
  },
  {
    icon: FiHeadphones,
    title: 'Support 24/7',
    desc: 'Contact us Anytime',
    color: 'text-brand-herb',
    bg: 'bg-brand-herb-50',
  },
]

export default function TrustBadges() {
  return (
    <section className="border-t border-b border-gray-100 bg-white py-8">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {BADGES.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className={`w-14 h-14 rounded-card ${badge.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={22} className={badge.color} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-gray-800">
                    {badge.title}
                  </p>
                  <p className="text-2xs text-gray-400 font-sans mt-0.5">
                    {badge.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}