import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import Button from "../../../components/ui/Button";

const Footer = () => {
  return (
    <div className="relative mt-60 w-[100dvw] bg-[#F0F0F0] px-4 sm:mt-40 sm:px-[10dvw]">
      <div className="newsletter flex -translate-y-1/2 flex-col items-center justify-between gap-8 rounded-3xl bg-black p-6 text-white sm:flex-row sm:p-9">
        <h1 className="font-secondary text-3xl uppercase md:text-4xl">
          stay upto date about our latest offers
        </h1>
        <div className="font-primary flex w-full max-w-md flex-col gap-4 md:w-[80%]">
          <div className="flex items-center gap-4 rounded-full bg-white px-4 py-4 text-black/40">
            <TfiEmail strokeWidth={1.5} size={20} />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full border-none bg-transparent text-sm text-black outline-none placeholder:text-black/40 sm:text-base"
            />
          </div>
          <Button
            className="h-14 w-full bg-white py-4 text-sm font-medium text-black hover:shadow-[5px_8px_0px_0px_rgba(100,100,100)] sm:text-base"
            title="Subscribe to Newsletter"
          />
        </div>
      </div>
      <div className="footer flex -translate-y-1/10 flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-4 text-center sm:w-60 sm:gap-6 sm:text-left">
          <h1 className="font-secondary text-3xl uppercase">shop.co</h1>
          <p className="font-primary text-sm text-black/60">
            We have the clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex justify-center gap-4 sm:justify-start">
            <div className="flex-center h-7 w-7 rounded-full border border-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-black/40 hover:shadow-xl">
              <BiLogoTwitter />
            </div>
            <BiLogoFacebookCircle
              size={28}
              className="flex-center h-7 w-7 rounded-full border border-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-black/40 hover:shadow-xl"
            />
            <div className="flex-center h-7 w-7 rounded-full border border-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-black/40 hover:shadow-xl">
              <BiLogoInstagram />
            </div>
            <div className="flex-center h-7 w-7 rounded-full border border-black/20 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-black/40 hover:shadow-xl">
              <BiLogoGithub />
            </div>
          </div>
        </div>
        <div className="mx-4 grid grid-cols-2 gap-6 md:grid-cols-4 cursor-pointer">
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <p className="font-bold tracking-[.2em] uppercase">Company</p>
            <p className="text-black/60 hover:text-black">About</p>
            <p className="text-black/60 hover:text-black">Features</p>
            <p className="text-black/60 hover:text-black">Works</p>
            <p className="text-black/60 hover:text-black">Careers</p>
          </div>
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <a className="font-bold tracking-[.2em] uppercase">Help</a>
            <a className="text-black/60 hover:text-black">Customer Support</a>
            <a className="text-black/60 hover:text-black">Delivery Details</a>
            <a className="text-black/60 hover:text-black">Terms & Conditions</a>
            <a className="text-black/60 hover:text-black">Privacy Policy</a>
          </div>
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <a className="font-bold tracking-[.2em] uppercase">FAQ</a>
            <a className="text-black/60 hover:text-black">Account</a>
            <a className="text-black/60 hover:text-black">Manage Deliveries</a>
            <a className="text-black/60 hover:text-black">Orders</a>
            <a className="text-black/60 hover:text-black">Payments</a>
          </div>
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <a className="font-bold tracking-[.2em] uppercase">Resources</a>
            <a className="text-black/60 hover:text-black">Free eBooks</a>
            <a className="text-black/60 hover:text-black">
              Development Tutorial
            </a>
            <a className="text-black/60 hover:text-black">How to - Blog</a>
            <a className="text-black/60 hover:text-black">Youtube Playlist</a>
          </div>
        </div>
      </div>
      <hr className="border-black/10" />
      <div className="font-primary flex items-center justify-between py-5">
        <p className="w-[50%] text-xs text-black sm:text-sm">
          Shop.co © 2025. Coded by{" "}
          <a
            href="https://trishacapitle.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold hover:text-blue-800"
          >
            AshDev
          </a>{" "}
          using React + Vite and Tailwind CSS. Credits to{" "}
          <a
            href="https://www.figma.com/@hamzauix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold hover:text-blue-800"
          >
            HamzaUIX
          </a>{" "}
          for the design.
        </p>
        <div className="flex-center flex-wrap sm:gap-4">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/paypal.png" alt="Paypal" />
          <img src="/applePay.png" alt="Apple Pay" />
          <img src="/gPay.png" alt="Google Pay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
