import { BiX } from "react-icons/bi";
const DiscountTab = () => {
  return (
    <div className="flex-center font-primary bg-black h-9 text-sm text-white">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </p>
      <BiX size={20} className="absolute right-0"/>
    </div>
  );
};

export default DiscountTab;
