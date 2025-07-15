import bg from "../assets/landing_page.png";
import vector from "../assets/vector.png";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="flex-center relative h-[100dvh] w-full">
      <img src={bg} alt="hero image" className="absolute top-0 -z-99" />
      <div className="content flex-center h-full w-[80dvw] gap-24">
        <div className="flex flex-1/2 flex-col gap-8">
          <h1 className="font-secondary text-6xl uppercase">
            find clothes that matches your style
          </h1>
          <p className="font-primary text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button title="Shop Now" color="white" bg="black" width={50} />
          <div className="shop-performance font-primary flex-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">200+</h1>
              <p className="">International Brands</p>
            </div>
            <hr className="h-20 w-[1px] border-0 bg-black/60" />
            <div>
              <h1 className="text-4xl font-bold">2000+</h1>
              <p className="">High-Quality Products</p>
            </div>
            <hr className="h-20 w-[1px] border-0 bg-black/60" />
            <div>
              <h1 className="text-4xl font-bold">30,000+</h1>
              <p className="">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="relative h-full flex-1/2">
          <img
            src={vector}
            alt="vector image"
            className="absolute top-50 w-14 translate-y-1/2"
          />
          <img
            src={vector}
            alt="vector image"
            className="absolute top-10 right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
