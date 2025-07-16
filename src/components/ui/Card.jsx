const Card = ({ product }) => {
  const { id, image, name, price, rating } = product;

  const numericId = Number(id);
  const isEven = numericId % 2 === 0;
  const originalPrice = price * 1.2;
  const discountPercentage = ((originalPrice - price) / originalPrice) * 100;

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  const stars = "★".repeat(filledStars) + "☆".repeat(emptyStars);

  return (
    <div className="font-primary flex h-fit w-72 flex-col gap-4">
      <div className="flex-center h-72 w-72">
        <img src={`/${image}`} alt={name} className="rounded-3xl" />
      </div>

      <div className="details flex flex-col gap-1">
        <h2 className="text-xl font-bold">{name}</h2>

        <div className="flex items-center gap-3">
          <span className="text-base text-[#FFC633]">{stars}</span>
          <span className="text-sm text-black/60">{rating}/5</span>
        </div>

        <div className="flex gap-2.5">
          <h1 className="text-2xl font-bold">${price}</h1>
          {isEven && (
            <div className="flex-center gap-2.5">
              <div className="text-2xl text-black/40 line-through font-bold">
                ${originalPrice}
              </div>
              <div className="text-base w-14 bg-[#FF3333]/10 rounded-full flex-center text-[#FF3333] px-3 h-8 font-medium">-{discountPercentage.toFixed(0)}% </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
