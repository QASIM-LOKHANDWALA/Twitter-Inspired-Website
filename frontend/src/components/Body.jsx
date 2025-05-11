import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Feed from "./Feed";
import Profile from "./Profile";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Feed />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
