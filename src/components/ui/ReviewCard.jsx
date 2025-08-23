import { FaCircleCheck } from "react-icons/fa6";

const ReviewCard = ({ rating }) => {
  const { stars, name: customer, review, date } = rating;

  const filledStars = Math.floor(stars);
  const emptyStars = 5 - filledStars;
  const star = "★".repeat(filledStars) + "☆".repeat(emptyStars);

  return (
    <div className="font-primary m-2.5 h-fit w-56 items-center gap-4 rounded-3xl border border-black/10 p-7 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-black/40 hover:shadow-xl sm:h-60 sm:w-100">
      <p className="text-xl text-[gold]">{star}</p>
      <p className="flex items-center gap-1 font-bold sm:text-xl">
        {customer}{" "}
        <span>
          <FaCircleCheck size={16} fill="#01AB31" />
        </span>
      </p>
      <p className="text-sm sm:text-base">{review}</p>
      {date && <p className="text-sm sm:text-base text-black/60">{date}</p>}
    </div>
  );
};

export default ReviewCard;
