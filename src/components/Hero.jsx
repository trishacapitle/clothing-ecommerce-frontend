import bg from "/landing_page.png";
import vector from "/vector.png";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="flex-center relative h-[660px] w-full bg-[#F2F0F1]">
      <img src={bg} alt="hero image" className="absolute" />
      <div className="content flex-center z-99 h-full w-[80dvw] gap-24">
        <div className="flex flex-1/2 flex-col gap-8">
          <h1 className="font-secondary text-6xl uppercase">
            find clothes that matches your style
          </h1>
          <p className="font-primary text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button title="Shop Now" className="h-14 bg-black px-20 text-white" />
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
            className="absolute top-50 w-14 translate-y-1/2 animate-bounce"
          />
          <img
            src={vector}
            alt="vector image"
            className="absolute top-10 right-10 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
