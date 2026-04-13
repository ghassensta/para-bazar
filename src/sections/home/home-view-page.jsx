import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import PopularProductsSection from './components/PopularProductsSection'
import PromoBannersSection from './components/PromoBannersSection'
import ProductsSection from './components/ProductsSection'
import BlogSection from './components/BlogSection'

export default function HomeViewPage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularProductsSection />
      <PromoBannersSection />
      <ProductsSection />
      <BlogSection />
    </>
  )
}