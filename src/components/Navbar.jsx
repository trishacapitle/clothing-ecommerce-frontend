import { BiChevronDown, BiSearch, BiCart, BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="flex-center m-auto h-24 w-[80dvw] justify-between gap-10">
      <h1 className="font-secondary items-center text-3xl tracking-wide uppercase">
        Shop.co
      </h1>
      <ul className="menu flex gap-6 text-black font-primary">
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
      <div className="search-bar flex h-12 grow items-center gap-3 rounded-full bg-(--secondary-color) p-4">
        <BiSearch size={20} />
        <input
          type="text"
          placeholder=" Search for products..."
          className="flex-grow bg-transparent outline-none"
        />
      </div>
      <div className="flex gap-3.5">
        <BiCart size={20} />
        <BiUserCircle size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
