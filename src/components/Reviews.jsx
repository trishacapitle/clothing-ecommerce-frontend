import { data } from "../assets/products.js";
import ReviewCard from "./ui/ReviewCard";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const { ratings } = data;

  return (
    <section className="m-auto mt-20">
      <div className="header sm:mx-[10dvw] mx-4 flex justify-between">
        <h1 className="font-secondary sm:text-5xl text-4xl uppercase">
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
