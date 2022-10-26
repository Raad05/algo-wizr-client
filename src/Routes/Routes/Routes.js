import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
]);