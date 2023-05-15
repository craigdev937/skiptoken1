import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Skip } from "../containers/Skip";
import { Lazy } from "../containers/Lazy";
import { Home } from "../containers/Home";
import { Products } from "../containers/Products";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Skip />,
        errorElement: <NotFound />
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/lazy",
        element: <Lazy />,
        errorElement: <NotFound />
    },
    {
        path: "/products",
        element: <Products />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


