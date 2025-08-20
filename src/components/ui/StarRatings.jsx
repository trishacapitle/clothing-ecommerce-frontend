const StarRatings = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  const stars = "★".repeat(filledStars) + "☆".repeat(emptyStars);
  return (
    <div className="flex items-center gap-3">
      <span className="text-base sm:text-lg text-[gold]">{stars}</span>
      <span className="text-sm sm:text-base">
        {rating}
        <span className="text-black/60">/5</span>
      </span>
    </div>
  );
};

export default StarRatings;
