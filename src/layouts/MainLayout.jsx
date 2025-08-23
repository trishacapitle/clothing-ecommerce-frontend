import { Outlet } from "react-router-dom";
import DiscountTab from "../components/ui/DiscountTab";
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
