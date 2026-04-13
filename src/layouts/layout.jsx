// src/layouts/layout.jsx
import Header      from '../components/header'
import Navbar      from '../components/Navbar'
import TrustBadges from '../components/TrustBadges'
import Footer      from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <TrustBadges />
      <Footer />
    </div>
  )
}