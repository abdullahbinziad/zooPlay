import React from "react";
import "./header.css";
import {
 
  Typography,
 
  MenuItem,
 
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  CodeBracketSquareIcon,
  TagIcon,
  BoltSlashIcon,
  BookmarkIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const  NavList=()=> {


  const navListItems = [
    {
      label: "Home",
      icon: HomeIcon,
      path: "/",
    },
    {
      label: "All Toys",
      icon: BoltSlashIcon,
      path: "/alltoys",
    },
    {
      label: "My Toys",
      icon: TagIcon,
      path: "/mytoys",
    },
    {
      label: "Blogs",
      icon: BookmarkIcon,
      path:"/blogs"
    },
  
  ];



  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex justify-between  gap-3 ">
            <Link className="flex  gap-3" to={`${path}`}>
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </Link>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default NavList;