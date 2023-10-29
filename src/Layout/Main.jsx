import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Common/Navbar/Navbar";
import Footer from "../Pages/Common/Footer/Footer";

const Main = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
