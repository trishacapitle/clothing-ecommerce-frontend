import { FaCircleCheck } from "react-icons/fa6";

const ReviewCard = ({ rating }) => {
  const { stars, name: customer, review } = rating;

  const filledStars = Math.floor(stars);
  const emptyStars = 5 - filledStars;
  const star = "★".repeat(filledStars) + "☆".repeat(emptyStars);

  return (
    <div className="font-primary m-2.5 h-60 w-100 items-center gap-4 rounded-3xl border border-black/10 p-7 hover:border-black/40 hover:shadow-xl hover:-translate-2 transition-all duration-300 ease-in-out">
      <p className="text-xl text-[gold]">{star}</p>
      <p className="flex items-center gap-1 text-xl font-bold">
        {customer}{" "}
        <span>
          <FaCircleCheck size={20} fill="#01AB31" />
        </span>
      </p>
      <p>{review}</p>
    </div>
  );
};

export default ReviewCard;
