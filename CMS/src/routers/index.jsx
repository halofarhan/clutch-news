import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
import AddForm from "../views/AddForm";
import EditForm from "../views/EditForm";
import AddUser from "../views/AddUser";

const router = createBrowserRouter([
    {   
        path: "/login",
        element: <Login/>
    },
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-article",
                element: <AddForm/>
            },
            {
                path: "/edit-article/:id",
                element: <EditForm/>
            },
            {
                path: "/add-user",
                element: <AddUser/>
            }

        ]
    }
])

export default router