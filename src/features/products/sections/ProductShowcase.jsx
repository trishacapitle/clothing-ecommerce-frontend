import { useState } from "react";
import { BiCheck, BiMinus, BiPlus } from "react-icons/bi";
import Pricetag from "../../../components/ui/Pricetag";
import StarRatings from "../../../components/ui/StarRatings";

const ProductShowcase = ({product}) => {
  const [qty, setQty] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { name, rating, image } = product;

   if (!product) {
     return (
       <section className="flex-center mt-4 w-full">
         <p className="text-black/60">Product not found.</p>
       </section>
     );
   }

  const handleIncrease = () => {
    setQty((q)=>q+1);
  };

  const handleDecrease = () => {
    setQty((q)=>q-1);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <section className="flex-center mt-4 w-full">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="product-picture">
          <img
            src={`/${image}`}
            alt={`${name} image`}
            className="w-2xl rounded-3xl"
            loading="lazy"
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
          <Pricetag product={product} />
          <p className="text-black/60">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div>
            <hr className="border-black/20" />
            <div className="my-6">
              <p className="text-black/60">Select Colors</p>
              <div className="product-selector mt-4 flex gap-2">
                <button
                  onClick={() => handleSelectColor("amber")}
                  className="color-option flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 hover:bg-amber-500/60"
                >
                  {selectedColor === "amber" && (
                    <BiCheck size={20} fill="white" />
                  )}
                </button>
                <button
                  onClick={() => handleSelectColor("green")}
                  className="color-option flex h-10 w-10 items-center justify-center rounded-full bg-green-800 hover:bg-green-800/60"
                >
                  {selectedColor === "green" && (
                    <BiCheck size={20} fill="white" />
                  )}
                </button>
                <button
                  onClick={() => handleSelectColor("blue")}
                  className="color-option flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 hover:bg-blue-900/60"
                >
                  {selectedColor === "blue" && (
                    <BiCheck size={20} fill="white" />
                  )}
                </button>
              </div>
            </div>
            <hr className="border-black/20" />
            <div className="my-6">
              <p className="text-black/60">Choose Size</p>
              <div className="product-selector mt-4 flex gap-2">
                <button
                  onClick={() => handleSelectSize("Small")}
                  className={`font-primary color-option rounded-full bg-[#F0F0F0] px-8 py-3 transition-all duration-300 ease-in-out ${selectedSize === "Small" ? "bg-black text-white" : "bg-[#F0F0F0] text-black/60"}`}
                >
                  Small
                </button>
                <button
                  onClick={() => handleSelectSize("Medium")}
                  className={`font-primary color-option rounded-full bg-[#F0F0F0] px-8 py-3 transition-all duration-300 ease-in-out ${selectedSize === "Medium" ? "bg-black text-white" : "bg-[#F0F0F0] text-black/60"}`}
                >
                  Medium
                </button>
                <button
                  onClick={() => handleSelectSize("Large")}
                  className={`font-primary color-option rounded-full px-8 py-3 transition-all duration-300 ease-in-out ${selectedSize === "Large" ? "bg-black text-white" : "bg-[#F0F0F0] text-black/60"}`}
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
            <button className="font-primary add-to-cart qty-selector flex w-36 grow items-center justify-center rounded-full bg-black text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
