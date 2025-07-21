import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="relative m-auto w-[100dvw] px-4 sm:px-[10dvw]">
      <div className="absolute bottom-0 left-0 -z-99 h-[100dvh] w-full bg-[#F0F0F0] sm:h-[500px]"></div>
      <div className="newsletter mb-12 flex flex-col items-center justify-between gap-8 rounded-3xl bg-black p-6 text-white sm:flex-row sm:gap-48 sm:p-9">
        <h1 className="font-secondary text-3xl uppercase sm:text-4xl">
          stay upto date about our latest offers
        </h1>
        <div className="font-primary flex w-full flex-col gap-4">
          <div className="flex items-center gap-4 rounded-full bg-white px-4 py-4 text-black/40">
            <TfiEmail strokeWidth={1.5} size={20} />
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full border-none bg-transparent text-sm text-black outline-none placeholder:text-black/40 sm:text-base"
            />
          </div>
          <button className="w-full rounded-full bg-white py-4 text-sm font-medium text-black transition-all duration-300 ease-in-out hover:-translate-1 sm:text-base">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="footer mb-12 flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-28">
        <div className="flex w-60 flex-col gap-4 sm:gap-6">
          <h1 className="font-secondary text-3xl uppercase">shop.co</h1>
          <p className="font-primary text-sm text-black/60">
            We have the clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4">
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
        <div className="flex w-full flex-wrap justify-around gap-9.5 sm:justify-between">
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <p className="font-bold tracking-[.2em] uppercase">Company</p>
            <p className="text-black/60 hover:text-black">About</p>
            <p className="text-black/60 hover:text-black">Features</p>
            <p className="text-black/60 hover:text-black">Works</p>
            <p className="text-black/60 hover:text-black">Careers</p>
          </div>
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <p className="font-bold tracking-[.2em] uppercase">Help</p>
            <p className="text-black/60 hover:text-black">Customer Support</p>
            <p className="text-black/60 hover:text-black">Delivery Details</p>
            <p className="text-black/60 hover:text-black">Terms & Conditions</p>
            <p className="text-black/60 hover:text-black">Privacy Policy</p>
          </div>
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <p className="font-bold tracking-[.2em] uppercase">FAQ</p>
            <p className="text-black/60 hover:text-black">Account</p>
            <p className="text-black/60 hover:text-black">Manage Deliveries</p>
            <p className="text-black/60 hover:text-black">Orders</p>
            <p className="text-black/60 hover:text-black">Payments</p>
          </div>
          <div className="font-primary flex flex-col gap-4 text-sm sm:text-base">
            <p className="font-bold tracking-[.2em] uppercase">Resources</p>
            <p className="text-black/60 hover:text-black">Free eBooks</p>
            <p className="text-black/60 hover:text-black">
              Development Tutorial
            </p>
            <p className="text-black/60 hover:text-black">How to - Blog</p>
            <p className="text-black/60 hover:text-black">Youtube Playlist</p>
          </div>
        </div>
      </div>
      <hr className="border-black/10" />
      <div className="font-primary mt-5 flex items-center justify-between pb-16">
        <p className="text-xs text-black sm:text-sm w-[50%] ">
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
