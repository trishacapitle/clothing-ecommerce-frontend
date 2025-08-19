
const Pricetag = ({ product }) => {
  const { price, discount, originalPrice } = product;

  const discountPercentage = ((originalPrice - price) / originalPrice) * 100;

  return (
    <div className="flex gap-2.5">
      <h1 className="text-2xl font-bold">${price}</h1>
      {discount && (
        <div className="flex-center gap-2.5">
          <div className="text-2xl font-bold text-black/40 line-through">
            ${originalPrice}
          </div>
          <div className="flex-center h-8 w-14 rounded-full bg-[#FF3333]/10 px-3 text-base font-medium text-[#FF3333]">
            -{discountPercentage.toFixed(0)}%{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricetag