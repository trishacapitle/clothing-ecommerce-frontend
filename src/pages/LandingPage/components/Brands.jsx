import Marquee from "react-fast-marquee";
import versace from "/versace.png";
import zara from "/zara.png";
import gucci from "/gucci.png";
import prada from "/prada.png";
import calvinKlein from "/calvinklein.png";

const Brands = () => {
  const brands = [versace, zara, gucci, prada, calvinKlein];

  return (
    <section className="flex sm:h-32 h-24 bg-black">
      <Marquee
        pauseOnHover
        speed={100}
        gradientWidth={200}
        gradientColor="black"
        gradient={true}
      >
        {[...brands, ...brands].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="brand logo"
            className="mx-10 inline-block h-8 object-contain"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Brands;
