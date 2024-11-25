import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  return (
    <>
      {isLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </>
  );
};

export default Main;
