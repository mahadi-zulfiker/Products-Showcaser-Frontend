import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Products from "../Products/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Products></Products>
            }
        ]
    }
])

export default router;