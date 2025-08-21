import { useParams } from "react-router-dom";
import { data } from "../../../assets/data";
import Pricetag from "../../../components/ui/Pricetag";
import StarRatings from "../../../components/ui/StarRatings";

const ProductShowcase = () => {
  const { id } = useParams();
  console.log(id);
  const { products } = data;
  const selectedProduct = products.find((product) => product.id === Number(id));

  const { name, rating, image } =
    selectedProduct;

  return (
    <section className="mt-4 w-full flex-center">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="product-picture">
          <img
            src={`/${image}`}
            alt={`${name} image`}
            className="rounded-3xl w-2xl"
          />
        </div>
        <div className="product-details flex flex-col gap-2 leading-tight">
          <h1 className="font-secondary text-2xl sm:text-3xl tracking-wider uppercase">
            {name}
          </h1>
          {rating ? (
            <StarRatings rating={rating} />
          ) : (
            <span className="text-black/60 font-primary">No ratings yet</span>
          )}
          <Pricetag product={selectedProduct} />
          <p className="text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
