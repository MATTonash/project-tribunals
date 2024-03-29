import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
