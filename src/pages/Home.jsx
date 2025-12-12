import BestSellers from "../components/BestSellers";
import BrandLogos from "../components/BrandLogos";
import CategorySection from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts"; 
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals"; 
import PromoBanner from "../components/PromoBanner";
import RecommendedProducts from "../components/RecommendedProducts";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
     
      <Hero />
      <CategorySection />
      <FeaturedProducts />
       <BestSellers />
       <PromoBanner />
       <RecommendedProducts />
       <NewArrivals />
       <BrandLogos/>
       <Testimonials/> 
        
    </>
  );
}

export default Home;
