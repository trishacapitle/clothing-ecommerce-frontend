import ProductShowcase from "./components/ProductShowcase";
import ProductDetails from "./components/ProductDetails";
import ProductReviews from "./components/ProductReviews";
import Breadcrumb from "../../components/ui/Breadcrumb";

const Product = () => {
  return (
    <div>
      <Breadcrumb  />
      <ProductShowcase />
      <div>
        <ProductDetails />
        <ProductReviews />
      </div>
    </div>
  );
};

export default Product;
