import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Authentication/Login/Login";
import SignUp from "../../Components/Authentication/SignUp/SignUp";
import Blog from "../../Components/Blog/Blog";
import Congratulations from "../../Components/Congratulations/Congratulations";
import Category from "../../Components/Dynamic/Category/Category";
import CourseDetails from "../../Components/Dynamic/CourseDetails/CourseDetails";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import GetPremium from "../../Components/GetPremium/GetPremium";
import Main from "../../layouts/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://algo-wizr-server.vercel.app/courses'),
                element: <Category></Category>
            },
            {
                path: '/home',
                loader: () => fetch('https://algo-wizr-server.vercel.app/courses'),
                element: <Category></Category>
            },
            {
                path: '/courses',
                loader: () => fetch('https://algo-wizr-server.vercel.app/courses'),
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://algo-wizr-server.vercel.app/category/${params.id}`),
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
    },
    {
        path: '/courses/:id',
        loader: ({ params }) => fetch(`https://algo-wizr-server.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>
    },
    {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`https://algo-wizr-server.vercel.app/courses/${params.id}`),
        element: <PrivateRoute><GetPremium></GetPremium></PrivateRoute>
    },
    {
        path: '/purchase-complete',
        element: <Congratulations></Congratulations>
    },
    {
        path: '/blogs',
        element: <Blog></Blog>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);