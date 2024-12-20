import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className=" text-gray-800 urbanist">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
