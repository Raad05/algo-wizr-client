import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Authentication/Login/Login";
import SignUp from "../../Components/Authentication/SignUp/SignUp";
import Category from "../../Components/Dynamic/Category/Category";
import Courses from "../../Components/Dynamic/Courses/Courses";
import Main from "../../layouts/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/home',
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params}`),
                element: <Category></Category>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
]);