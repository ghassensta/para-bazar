import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center gap-4 px-4">
      <p className="text-7xl font-heading font-bold text-brand-herb-100">404</p>
      <h1 className="font-heading text-2xl font-bold text-gray-800">Page not found</h1>
      <p className="text-gray-400 text-sm text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-brand-herb text-white px-6 py-2.5 rounded-btn shadow-btn hover:bg-brand-herb-dark transition-colors text-sm font-semibold"
      >
        Back to Home
      </Link>
    </div>
  )
}