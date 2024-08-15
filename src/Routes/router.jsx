import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <div>fgf</div>
            }
        ]
    }
])

export default router;