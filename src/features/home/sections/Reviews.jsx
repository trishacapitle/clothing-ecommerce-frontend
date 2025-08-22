import { data } from "../../../assets/data";
import ReviewCard from "../../../components/ui/ReviewCard";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const { ratings } = data;

  return (
    <section className="m-auto my-20">
      <div className="header mx-4 flex justify-between sm:mx-[10dvw]">
        <h1 className="font-secondary text-4xl uppercase sm:text-5xl">
          Our Happy Customers
        </h1>
      </div>
      <div className="customer-reviews flex-center my-10">
        <Marquee
          speed={50}
          pauseOnClick
          gradient={true}
          gradientColor={"white"}
          gradientWidth={100}
        >
          {ratings.map((rating, index) => (
            <ReviewCard key={index} rating={rating} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Reviews;
