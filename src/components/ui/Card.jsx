import Pricetag from "./Pricetag";

const Card = ({ product }) => {
  const { image, name, rating} = product;

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  const stars = "★".repeat(filledStars) + "☆".repeat(emptyStars);

  return (
    <div className="font-primary my-5 flex h-fit w-72 cursor-pointer flex-col gap-4 rounded-3xl border border-black/0 p-5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-black/40 hover:shadow-lg">
      <div className="flex-center">
        <img src={`/${image}`} alt={name} className="h-72 w-72 rounded-3xl" />
      </div>

      <div className="details flex flex-col gap-1">
        <h2 className="text-xl font-bold">{name}</h2>

        {rating && (
          <div className="flex items-center gap-3">
            <span className="text-base text-[gold]">{stars}</span>
            <span className="text-sm text-black/60">{rating}/5</span>
          </div>
        )}

        <Pricetag product={product} />
      </div>
    </div>
  );
};

export default Card;
