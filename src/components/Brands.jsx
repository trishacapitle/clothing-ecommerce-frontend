import Marquee from "react-fast-marquee";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvinklein.png";

const Brands = () => {
  const brands = [versace, zara, gucci, prada, calvinKlein];

  return (
    <div className="flex h-32 bg-black">
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
    </div>
  );
};

export default Brands;
