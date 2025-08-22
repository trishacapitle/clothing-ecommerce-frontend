import { useParams } from "react-router-dom";
import { useState } from "react";
import { data } from "../../../assets/data";
import Pricetag from "../../../components/ui/Pricetag";
import StarRatings from "../../../components/ui/StarRatings";

const ProductShowcase = () => {
  const [ qty, setQty ] = useState(0);

  const { id } = useParams();
  const { products } = data;
  const selectedProduct = products.find((product) => product.id === Number(id));

  const { name, rating, image } = selectedProduct;

  const handleIncrease = () => {
    const res = qty + 1;
    setQty(res);
  };

  const handleDecrease = () => {
    const res = qty - 1;
    setQty(res);
  };

  return (
    <section className="flex-center mt-4 w-full">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="product-picture">
          <img
            src={`/${image}`}
            alt={`${name} image`}
            className="w-2xl rounded-3xl"
          />
        </div>
        <div className="product-details flex flex-col gap-2 leading-tight">
          <h1 className="font-secondary text-2xl tracking-wider uppercase sm:text-3xl">
            {name}
          </h1>
          {rating ? (
            <StarRatings rating={rating} />
          ) : (
            <span className="font-primary text-black/60">No ratings yet</span>
          )}
          <Pricetag product={selectedProduct} />
          <p className="text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="border-black/20 my-2" />
          <div className="product-selector flex gap-2">
            <div className="color-option active:border-2 active:border-black h-10 w-10 rounded-full border border-black/60 bg-amber-500"></div>
            <div className="color-option active:border-2 active:border-black h-10 w-10 rounded-full border border-black/60 bg-green-800"></div>
            <div className="color-option active:border-2 active:border-black h-10 w-10 rounded-full border border-black/60 bg-blue-900"></div>
          </div>
          <hr className="border-black/20 my-2" />
          <div className="qty-selector flex w-32 items-center justify-between rounded-full bg-black/10 px-4 py-2">
            <button
              className="decrease px-2 text-xl font-bold"
              onClick={handleDecrease}
            >
              -
            </button>
            <p>{qty}</p>
            <button
              className="increase px-2 text-xl font-bold"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
