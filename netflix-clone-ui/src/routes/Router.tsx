import Cookies from "js-cookie";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import ProtectedRoute from "./ProtectedRoute";
import SignIn from "../pages/signIn/SignIn";
import ProfilePage from "../pages/profilePage/ProfilePage";
import App from "../App";

// Create the router configuration
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/signin",
        element: <SignIn />,
        index: true,
      },
      {
        element: <ProtectedRoute />,
        path: "/nf",
        children: [
          {
            path: "/nf/profile",
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "*",
        element: <p>404 Error - Nothing here...</p>,
      },
    ],
  },
]);

export default router;
