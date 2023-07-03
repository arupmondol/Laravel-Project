import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path : "/",
    element : <MainLayOut></MainLayOut>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
      },
      {
        path: "/register",
        element : <Register></Register>
      }
    ]
  }
])