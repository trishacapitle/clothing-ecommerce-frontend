import Hamburger from "hamburger-react";
import { BiChevronDown, BiSearch, BiCart, BiUserCircle } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, toggleOpen] = useState(false);

  const handleMenuToggle = () => {
    toggleOpen(!isOpen);
  };

  return (
    <nav className="relative m-auto flex h-16 items-center justify-between gap-10 p-5 sm:h-24 sm:w-[80dvw] sm:p-6">
      <div className="menu-mobile flex items-center gap-2">
        <button onClick={handleMenuToggle} className="sm:hidden">
          <Hamburger size={24} />
        </button>
        <ul
          className={`font-primary absolute top-16 left-0 z-99 w-[100dvw] gap-4 bg-white p-8 font-bold shadow-lg col-center ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <li className="flex items-center">
            <a href="#">Shop </a>
            <BiChevronDown />
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
        <h1 className="font-secondary text-3xl tracking-wide uppercase">
          Shop.co
        </h1>
      </div>
      <ul className="menu font-primary hidden gap-6 text-black sm:flex">
        <li>
          <a
            href="#"
            className="flex-center transition-colors duration-300 ease-in-out hover:text-black/60"
          >
            Shop{" "}
            <span>
              <BiChevronDown size={20} />
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex-center transition duration-300 ease-in-out hover:text-black/60"
          >
            On Sale
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex-center transition duration-300 ease-in-out hover:text-black/60"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex-center transition duration-300 ease-in-out hover:text-black/60"
          >
            Brands
          </a>
        </li>
      </ul>
      <div className="search-bar hidden h-12 grow items-center gap-3 rounded-full bg-(--secondary-color) p-4 sm:flex">
        <BiSearch size={20} />
        <input
          type="text"
          placeholder=" Search for products..."
          className="flex-grow bg-transparent outline-none"
        />
      </div>
      <div className="flex gap-3.5">
        <BiSearch size={20} className="sm:hidden" />
        <BiCart size={20} />
        <BiUserCircle size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
