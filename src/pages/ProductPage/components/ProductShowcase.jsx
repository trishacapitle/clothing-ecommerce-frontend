import { useParams } from "react-router-dom";
import { useState } from "react";
import {BiPlus, BiMinus} from "react-icons/bi"
import { data } from "../../../assets/data";
import Pricetag from "../../../components/ui/Pricetag";
import StarRatings from "../../../components/ui/StarRatings";

const ProductShowcase = () => {
  const [qty, setQty] = useState(0);
  const [isSelected, setisSelected] = useState(false);

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
          <div>
            <hr className="border-black/20" />
            <div className="my-6">
              <p>Select Colors</p>
              <div className="product-selector mt-4 flex gap-2">
                <button className="color-option h-10 w-10 rounded-full border border-black/60 bg-amber-500 active:border-2 active:border-black"></button>
                <button className="color-option h-10 w-10 rounded-full border border-black/60 bg-green-800 active:border-2 active:border-black"></button>
                <button className="color-option h-10 w-10 rounded-full border border-black/60 bg-blue-900 active:border-2 active:border-black"></button>
              </div>
            </div>
            <hr className="border-black/20" />
            <div className="my-6">
              <p>Choose Size</p>

              <div className="product-selector mt-4 flex gap-2">
                <button
                  className={`font-primary color-option rounded-full bg-[#F0F0F0] px-8 py-3 ${isSelected}`}
                >
                  Small
                </button>
                <button
                  className={`font-primary color-option rounded-full bg-[#F0F0F0] px-8 py-3 ${isSelected}`}
                >
                  Medium
                </button>
                <button
                  className={`font-primary color-option rounded-full ${isSelected} bg-[#F0F0F0] px-8 py-3 ${isSelected}`}
                >
                  Large
                </button>
              </div>
            </div>
          </div>
          <hr className="border-black/20" />
          <div className="my-6 flex gap-3">
            <div className="qty-selector flex w-36 items-center justify-between rounded-full bg-black/10 px-4 py-2">
              <button
                className="decrease p-2 text-xl font-bold"
                onClick={handleDecrease}
              >
                <BiMinus />
              </button>
              <p>{qty}</p>
              <button
                className="increase p-2 text-xl font-bold"
                onClick={handleIncrease}
              >
                <BiPlus />
              </button>
            </div>
            <button className="grow font-primary add-to-cart qty-selector flex w-36 items-center justify-center rounded-full bg-black text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
