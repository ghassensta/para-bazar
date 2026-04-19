import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export default function StarRating({ rating }) {

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        i <= Math.floor(rating)
          ? <FaStar key={i} size={11} className="text-amber-400" />
          : i - 0.5 === rating
          ? <FaStarHalfAlt key={i} size={11} className="text-amber-400" />
          : <FaRegStar key={i} size={11} className="text-amber-300" />
      ))}
      <span className="text-[10px] text-brand-serene-600 ml-1">({rating})</span>
    </div>
  )
}