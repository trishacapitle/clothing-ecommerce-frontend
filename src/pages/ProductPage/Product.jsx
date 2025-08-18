import ProductShowcase from "./components/ProductShowcase";
import ProductDetails from "./components/ProductDetails";
import ProductReviews from "./components/ProductReviews";

const Product = () => {
  return (
    <div>
      <ProductShowcase />
      <div>
        <ProductDetails />
        <ProductReviews />
      </div>
    </div>
  );
};

export default Product;
