import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts>Hello world!</MainLayouts>,
      errorElement: <h1 className="text-7xl">Page not found</h1>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);