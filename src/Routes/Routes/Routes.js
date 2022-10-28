import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Authentication/Login/Login";
import SignUp from "../../Components/Authentication/SignUp/SignUp";
import Category from "../../Components/Dynamic/Category/Category";
import Main from "../../layouts/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Category></Category>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
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