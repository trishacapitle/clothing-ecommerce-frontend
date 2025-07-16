import React from "react";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvinklein.png";

const Marquee = () => {
  const brands = [versace, zara, gucci, prada, calvinKlein];

  return (
    <div className="relative flex h-32 w-full overflow-hidden bg-black ">
      <div className="flex-center w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="flex-center animate-marquee whitespace-nowrap">
          {brands.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="brand logo"
              className="mx-12 h-8 object-contain"
            />
          ))}
        </div>
        <div className="flex-center animate-marquee-reverse absolute whitespace-nowrap">
          {brands.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="brand logo"
              className="mx-12 h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
