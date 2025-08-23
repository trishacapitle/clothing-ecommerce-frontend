import Hero from "../features/home/sections/Hero";
import Brands from "../features/home/sections/Brands";
import Products from "../features/home/sections/Products";
import Categories from "../features/home/sections/Categories";
import Reviews from "../features/home/sections/Reviews";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Products />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Landing;
