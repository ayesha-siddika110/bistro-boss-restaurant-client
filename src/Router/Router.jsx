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
import OurShop from "../Pages/OurShop/OurShop";
import Cart from "../Pages/Dashboard/Sidebar/Cart/Cart";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";


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
        {
          path: "/ourShop",
          element: <OurShop></OurShop>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard/myCart',
          element: <Cart></Cart>
        },
        // {
        //   path: '/dashboard',
        //   element: <Dashboard></Dashboard>
        // },
        {
          path: '/dashboard/allUsers',
          element: <AllUsers></AllUsers>
          
        }
      ]

    }
  ]);