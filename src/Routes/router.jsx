import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>sg</div>,
        children: [
            {
                index: true,
                element: <div>fgf</div>
            }
        ]
    }
])

export default router;