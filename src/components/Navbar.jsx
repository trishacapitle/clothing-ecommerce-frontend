import { BiChevronDown, BiSearch, BiCart, BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="flex items-center m-auto sm:h-24 sm:w-[80dvw] w-full justify-between gap-10 sm:p-6 p-5">
      <h1 className="font-secondary items-center text-3xl tracking-wide uppercase ml-10 sm:ml-0">
        Shop.co
      </h1>
      <ul className="menu sm:flex hidden gap-6 text-black font-primary">
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
      <div className="search-bar sm:flex hidden h-12 grow items-center gap-3 rounded-full bg-(--secondary-color) p-4">
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
