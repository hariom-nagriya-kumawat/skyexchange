import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MobileAppLayout from '../layout';
import Login from '../pages/login';
import Home from '../pages/home';
import InPlay from '../pages/inPlay';
import MultiMarkets from '../pages/multiMarkets';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MobileAppLayout />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "in-play",
                element: <InPlay />
            },
            {
                path: "multi-markets",
                element: <MultiMarkets />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const RootRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RootRouter
