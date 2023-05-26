import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { UserContext } from "../authprovider/AuthProvider";


const PrivateRoute = (children) => {

  const  location= useLocation()
 const{user,loading} = useContext(UserContext)
    
if(loading){
    return <HashLoader className="my-32 mx-auto w-3/4" color="#36d7b7" />
}

if(user){
    return children.children; 
}

else return <Navigate to="/login" state={{from: location }} replace></Navigate>
    
};

export default PrivateRoute;