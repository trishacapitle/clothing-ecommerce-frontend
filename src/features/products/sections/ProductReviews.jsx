import ReviewCard from "../../../components/ui/ReviewCard";

const ProductReviews = ({ product }) => {
  return (
    <div className="flex">
      {product.review?.map((r) => (
        <ReviewCard
          key={r.id}
          rating={{
            stars: r.productRating,
            name: r.customerName,
            review: r.productReview,
            date: r.reviewDate
          }}
        />
      ))}
    </div>
  );
};


export default ProductReviews;
