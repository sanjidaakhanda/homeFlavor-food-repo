import Main from "../../Layout/Main";
import AllMenus from "../../Pages/AllMenus/AllMenus";

import Blog from "../../Pages/Blog/Blog";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MenuDetail from "../../Pages/MenuDetail/MenuDetail";
import Reviews from "../../Pages/Reviews/Reviews";
import ShowReview from "../../Pages/ShowReview/ShowReview";

import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },

      { path: "/signup", element: <Signup></Signup> },
      {
        path: "/menus/:id",
        element: <MenuDetail></MenuDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menus/${params.id}`),
      },
      {
        path: "/menus",
        element: <AllMenus></AllMenus>,
      },
      {
        path: "/reviews/:id",
        element: <Reviews></Reviews>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menus/${params.id}`),
      },
      {
        path: "/reviews",
        element: <ShowReview></ShowReview>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
export default router;
