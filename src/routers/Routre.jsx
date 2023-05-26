import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";

import MyProfile from "../components/pages/profile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import SingleToys from "../components/pages/SingleToys";

import Error404 from "../components/pages/error/Error404";
import MyToys from "../components/pages/profile/MyToys";
import UpdateToys from "../components/pages/profile/UpdateToys";
import AddNewToy from "../components/pages/profile/AddNewToy";
import AllToys from "../components/pages/toys/AllToys";
import Blogs from "../components/pages/blog/Blogs";
import Zoologin from "../components/pages/home/Zoologin";




 const router = createBrowserRouter([{
    path:'',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
           
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/alltoys',
            element: <AllToys></AllToys>,
            loader:()=> fetch('https://zooplay-server.vercel.app/toys')
            
        },
        {
            path:'/mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
       
            
        },
        {
            path:'/zoologin',
            element: <Zoologin></Zoologin>
       
            
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>,
       
            
        },
        {
            path:'/addNewToys',
            element: <PrivateRoute><AddNewToy></AddNewToy></PrivateRoute>,
           
            
        },
        {
            path:'/updateToys/:id',
            element: <UpdateToys></UpdateToys>,
            loader: ({params})=> fetch(`https://zooplay-server.vercel.app/toys/${params.id}`)
            
        },
        {
            path:'/toy/:id',
            element: <PrivateRoute><SingleToys></SingleToys></PrivateRoute>,
            loader: ({params})=> fetch(`https://zooplay-server.vercel.app/toys/${params.id}`)
        },
        {
            path:'/register',
            element: <Register></Register>
        },
      
        {
            path:'/profile',
            element: <MyProfile></MyProfile>
        },
        
    ]
},

{
    path:'*',
    element:<Error404></Error404>

}



])
export default router;
