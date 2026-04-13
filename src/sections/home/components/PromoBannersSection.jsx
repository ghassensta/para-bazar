import { Link } from 'react-router-dom'
import banner1 from '../../../assets/images/para-banner-1.png'
import banner2 from '../../../assets/images/para-banner-2.png'
import banner3 from '../../../assets/images/para-banner-3.png'

const BANNERS = [
  {
    id: 1,
    tag: 'Only This Week',
    title: 'We provide you the best quality products',
    desc: 'A family place for grocery',
    img: banner1,
    bg: 'bg-gray-50',
  },
  {
    id: 2,
    tag: 'Only This Week',
    title: 'We make your grocery shopping more exciting',
    desc: 'Shine the morning...',
    img: banner2,
    bg: 'bg-gray-50',
  },
  {
    id: 3,
    tag: 'Only This Week',
    title: 'The one supermarket that saves your money',
    desc: 'Breakfast made better',
    img: banner3,
    bg: 'bg-gray-50',
  },
]

export default function PromoBannersSection() {
  return (
    <section className=" mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BANNERS.map(banner => (
          <div
            key={banner.id}
            className={`${banner.bg} border border-gray-100 rounded-card overflow-hidden flex items-center justify-between gap-4 px-6 py-5 group hover:shadow-medical transition-shadow`}
          >
            <div className="flex-1 min-w-0">
              <span className="text-2xs font-bold text-brand-herb uppercase tracking-wide mb-1 block">
                {banner.tag}
              </span>
              <h3 className="font-heading text-gray-900 font-bold text-base leading-snug mb-1">
                {banner.title}
              </h3>
              <p className="text-xs text-gray-400 mb-4">{banner.desc}</p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-brand-herb transition-colors border border-gray-300 hover:border-brand-herb rounded-btn px-4 py-1.5"
              >
                Shop Now →
              </Link>
            </div>

            <div className="shrink-0 w-28 h-28">
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}