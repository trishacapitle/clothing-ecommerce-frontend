import { useParams } from "react-router-dom";
import { data } from "../assets/data";

import ProductShowcase from "../features/products/sections/ProductShowcase";
import ProductDetails from "../features/products/sections/ProductDetails";
import ProductReviews from "../features/products/sections/ProductReviews";
import Breadcrumb from "../components/ui/Breadcrumb";

const Product = () => {
  const { id } = useParams();
  const { products } = data;
  const selectedProduct = products.find((product) => product.id === Number(id));
  
  return (
    <div className="m-auto flex w-full flex-col p-4 md:w-[90dvw] lg:w-[80dvw]">
      <Breadcrumb />
      <ProductShowcase product={selectedProduct} />
      <div>
        <ProductDetails product={selectedProduct} />
        <ProductReviews product={selectedProduct} />
      </div>
    </div>
  );
};

export default Product;
