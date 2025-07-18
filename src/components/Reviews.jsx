import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { data } from "../assets/products.js";
import ReviewCard from "./ui/ReviewCard";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const { ratings } = data;

  return (
    <section className="m-auto mt-20">
      <div className="header mx-[10dvw] flex justify-between">
        <h1 className="font-secondary text-5xl uppercase">
          Our Happy Customers
        </h1>
      </div>
      <div className="customer-reviews flex-center my-10">
        <Marquee
          speed={50}
          pauseOnHover
          gradient={true}
          gradientColor={"white"}
          gradientWidth={200}
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
