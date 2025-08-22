import { BiX } from "react-icons/bi";
import { useState } from "react";

const DiscountTab = () => {
const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="discount-tab flex-center font-primary h-9 bg-black sm:text-sm text-xs text-white">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#" className="underline">Sign Up Now</a>
          </p>
          <button className="absolute right-10" onClick={handleClose}>
            <BiX size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountTab;
