import Header from '../components/header'
import Navbar from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}