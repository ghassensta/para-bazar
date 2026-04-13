// src/sections/home/home-view-page.jsx
import HeroSection            from './components/HeroSection'
import CategoriesSection      from './components/CategoriesSection'
import PopularProductsSection from './components/PopularProductsSection'
import BonsPlansSection       from './components/BonsPlansSection'
import PromoBannersSection    from './components/PromoBannersSection'
import ProductsSection        from './components/ProductsSection'
import FideliteSection        from './components/FideliteSection'
import BlogSection            from './components/BlogSection'

export default function HomeViewPage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <div className='bg-white'>
        <PopularProductsSection />
        <BonsPlansSection />
        <PromoBannersSection />
        <ProductsSection />
        <FideliteSection />
        <BlogSection />
      </div>
    </>
  )
}