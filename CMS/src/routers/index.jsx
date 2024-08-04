import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
import AddForm from "../views/AddForm";
import EditForm from "../views/EditForm";
import AddUser from "../views/AddUser";
import Toastify from 'toastify-js'

const router = createBrowserRouter([
    {   
        path: "/login",
        element: <Login/>
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                Toastify({
                    text: "Please login first",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    stopOnFocus: true,
                    style: {
                        background: "#EF4C54",
                        color: "#17202A",
                        boxShadow: "0 5px 10px black",
                        fontWeight: "bold"
                    }
                }).showToast();
                return redirect('/login')
            }

            return null
        },
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