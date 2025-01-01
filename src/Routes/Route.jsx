
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Success from "../Pages/Success/Success";
import Kids from "../components/KidsProgram/Kids/Kids";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: "/course-details/:id",
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`/course.json`)
                    .then(res => res.json())
                    .then(data => data.find(item => item.id === Number(params.id)))
            },
            {
                path: '/success',
                element: <Success />
            },

            {
                path: '/service/:id',
                element: <>service</>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },
            {
                path: '/kids',
                element: <Kids />
            },

        ]
    }
])

export default router;
