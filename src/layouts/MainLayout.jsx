import { Outlet } from "react-router-dom";
import DiscountTab from "../components/DiscountTab";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div>
        <DiscountTab />
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
