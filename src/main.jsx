import React from "react";
import ReactDOM from "react-dom/client";
import 'sweetalert2/dist/sweetalert2.css';

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./authprovider/AuthProvider.jsx";
import router from "./routers/Routre.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    
   
   <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>
);
