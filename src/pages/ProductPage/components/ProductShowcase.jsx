import { useParams } from "react-router-dom";
import { data } from "../../../assets/data";
import Pagination from "../../CategoryPage/ui/Pagination";
import StarRatings from "../../../components/ui/StarRatings";
import Pricetag from "../../../components/ui/Pricetag";

const ProductShowcase = () => {
  const { id } = useParams();
  console.log(id);
  const { products } = data;
  const selectedProduct = products.find((product) => product.id === Number(id));

  console.log(selectedProduct);

  const { name, rating, image } =
    selectedProduct;

  return (
    <section>
      <Pagination />
      <div>
        <div className="product-picture">
          <img src={`/${image}`} alt="product picture" />
        </div>
        <div className="product-details">
          <h1>{name}</h1>
          {rating ? (
            <StarRatings rating={rating} />
          ) : (
            <span>No ratings yet</span>
          )}
          <Pricetag product={selectedProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
