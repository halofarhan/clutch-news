import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../view/BaseLayout";
import Home from "../view/Home";
import NewsDetail from "../view/NewsDetail";
import Category from "../view/Category";

const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/:category",
                element: <Category />
            },
            {
                path: "/:category/:id",
                element: <NewsDetail />
            },

        ]
    }
])

export default router