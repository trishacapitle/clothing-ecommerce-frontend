import DiscountTab from "./components/DiscountTab";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <main>
      <DiscountTab />
      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <Categories />
      <Reviews />
    </main>
  );
};

export default App;
