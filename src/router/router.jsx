import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Find from "../pages/Find";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Myadd from "../pages/Myadd";
import Edit from "../pages/Edit";
import Tutordtl from "../pages/Tutordtl";
import Booked from "../pages/Booked";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        Component: Home,
      },
        {
          path: '/find-tutor',
          Component: Find,
        },
        {
          path: '/tutordtl/:id',
          Component: Tutordtl,
        },
        {
          path: '/find-tutor/:language',
          Component: Find,
        },
        {
          path: '/add',
          Component: Add,
        },
        {
          path: '/my-added',
          Component: Myadd,
        },
        {
          path: '/edit/:id',
          Component: Edit,
        },
        {
          path: '/booked',
          Component: Booked,
        },
        {
          path: '/signup',
          Component: Reg,
        },
        {
          path: '/login',
          Component: Login,
        },
    ]
  },
]);