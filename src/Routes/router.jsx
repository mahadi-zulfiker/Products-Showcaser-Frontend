import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Products from "../Products/Products";
import Login from "../Auth/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router;