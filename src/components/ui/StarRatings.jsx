const StarRatings = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  const stars = "★".repeat(filledStars) + "☆".repeat(emptyStars);
  return (
    <div className="flex items-center gap-3">
      <span className="text-base text-[gold]">{stars}</span>
      <span className="text-sm text-black/60">{rating}/5</span>
    </div>
  );
};

export default StarRatings;
