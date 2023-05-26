import React, { useContext } from "react";
import "./header.css";
import {
  Navbar,
  MobileNav,
  Typography,

  IconButton,
  Button,

} from "@material-tailwind/react";
import {
  
  Bars2Icon,
 
} from "@heroicons/react/24/outline";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";
import { UserContext } from "../../authprovider/AuthProvider";
import { Link } from "react-router-dom";
import logo from './../../assets/logo.png';

const MyNav=()=> {

const {user}= useContext(UserContext)


  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div id="order-nav " className="relative z-10 bg-white shadow-lg  sticky top-0">
      <div className="rounded-none   mx-auto md:w-3/4 p-2   lg:pl-6">
        <div className="relative mx-auto flex justify-between items-center text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
         <Link to='/'>   <img className="w-24" src={logo} alt="zooPlay" /></Link>
          </Typography>
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        <div>
        {
        user? <ProfileMenu></ProfileMenu>
         :   <div className="flex gap-1">
         <Link to='/login'><Button size="sm" variant="outlined" className="">Login</Button></Link>
         <Link to='/register'><Button size="sm" className="ml-1 bg-zooSecondary">SignUp</Button></Link>
         </div>
      }
     
        </div>
         
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList />
        </MobileNav>
      </div>
    </div>
  );
}

export default MyNav;
