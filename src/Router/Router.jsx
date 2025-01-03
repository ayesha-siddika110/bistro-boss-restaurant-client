import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRouter from "./PrivetRouter/PrivetRouter";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts>Hello world!</MainLayouts>,
      errorElement: <h1 className="text-7xl">Page not found</h1>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/ourMenu",
          element: <PrivetRouter><OurMenu></OurMenu></PrivetRouter>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ]
    },
  ]);