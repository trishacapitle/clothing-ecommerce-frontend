import ProductShowcase from "./components/ProductShowcase";
import ProductDetails from "./components/ProductDetails";
import ProductReviews from "./components/ProductReviews";
import Breadcrumb from "../../components/ui/Breadcrumb";

const Product = () => {
  return (
    <div className="flex flex-col w-full md:w-[90dvw] lg:w-[80dvw] m-auto p-4">
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
