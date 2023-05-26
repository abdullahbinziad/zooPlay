import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MyNav from "../components/header/MyNav";

const MainLayout = () => {
  return (
    <div className="">
   <MyNav></MyNav>
    <div className="md:w-5/6 p-2 mx-auto">
    <Outlet></Outlet>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
