import { useContext } from "react";
import BestSellers from "../components/BestSellers";
import BrandLogos from "../components/BrandLogos";
import CategorySection from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts"; 
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals"; 
import PromoBanner from "../components/PromoBanner";
import RecommendedProducts from "../components/RecommendedProducts";
import Testimonials from "../components/Testimonials";
import { CartContext } from "../context/CartContext";

function Home() {
   const { addToCart } = useContext(CartContext);
  return (
    <>
     
      <Hero />
      <CategorySection />
      <FeaturedProducts addToCart={addToCart} />
       <BestSellers addToCart={addToCart}/>
       <PromoBanner />
       <RecommendedProducts addToCart={addToCart}/>
       <NewArrivals addToCart={addToCart}/>
       <BrandLogos/>
       <Testimonials/> 
        
    </>
  );
}

export default Home;
