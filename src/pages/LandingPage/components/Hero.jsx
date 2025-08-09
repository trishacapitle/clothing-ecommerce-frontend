import bg from "/landing_page.png";
import bgMobile from "/landing_page_mobile.png";
import vector from "/vector.png";
import Button from "../../../components/ui/Button";

const Hero = () => {
  return (
    <section className="sm:flex-center col-center relative w-full bg-[#F2F0F1] sm:h-[660px]">
      <img
        src={bg}
        alt="hero image"
        className="absolute bottom-0 hidden sm:flex"
      />
      <div className="content flex-center z-50 h-full gap-24 px-4 sm:w-[80dvw] sm:px-0">
        <div className="mt-10 flex flex-1/2 flex-col gap-5 sm:mt-0 sm:gap-8">
          <h1 className="font-secondary text-4xl uppercase sm:text-6xl">
            find clothes that matches your style
          </h1>
          <p className="font-primary text-sm text-black/60 sm:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            title="Shop Now"
            className="h-14 w-full grow bg-black px-20 text-white sm:w-fit"
          />
          <div className="shop-performance font-primary flex-center justify-between">
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">200+</h1>
              <p className="text-xs text-black/60 sm:text-base">
                International Brands
              </p>
            </div>
            <hr className="h-20 w-[1px] border-0 bg-black/10" />
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">2000+</h1>
              <p className="text-xs text-black/60 sm:text-base">
                High-Quality Products
              </p>
            </div>
            <hr className="h-20 w-[1px] border-0 bg-black/10" />
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">30,000+</h1>
              <p className="text-xs text-black/60 sm:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden h-full flex-1/2 sm:inline-block">
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
      <div className="relative w-full">
        <img
          src={vector}
          alt="vector image"
          className="absolute top-50 left-5 w-14 translate-y-1/2 sm:hidden"
        />
        <img
          src={vector}
          alt="vector image"
          className="absolute top-10 right-5 sm:hidden"
        />
        <img
          src={bgMobile}
          alt="landing page background image for mobile devices"
          className="w-full sm:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
