import React from "react";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvinklein.png";

const Marquee = () => {
  const brands = [versace, zara, gucci, prada, calvinKlein];

  return (
    <div className="flex-center relative flex h-32 w-full overflow-hidden bg-black">
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
  );
};

export default Marquee;
