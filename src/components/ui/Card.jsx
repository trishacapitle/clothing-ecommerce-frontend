const Card = ({ product }) => {
  const { image, name, price, rating, discount, originalPrice } = product;

  const discountPercentage = ((originalPrice - price) / originalPrice) * 100;

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  const stars = "★".repeat(filledStars) + "☆".repeat(emptyStars);

  return (
    <div className="font-primary flex h-fit w-72 cursor-pointer flex-col gap-4 rounded-3xl border border-black/0 p-5 transition-all duration-300 ease-in-out hover:border-black/40 hover:shadow-lg hover:-translate-y-2 my-5">
      <div className="flex-center">
        <img src={`/${image}`} alt={name} className="w-72 h-72 rounded-3xl" />
      </div>

      <div className="details flex flex-col gap-1">
        <h2 className="text-xl font-bold">{name}</h2>

        <div className="flex items-center gap-3">
          <span className="text-base text-[gold]">{stars}</span>
          <span className="text-sm text-black/60">{rating}/5</span>
        </div>

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
      </div>
    </div>
  );
};

export default Card;
