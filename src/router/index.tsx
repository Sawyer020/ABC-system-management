import React, { Children, lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"
// import User from "../views/User"
import Login from "../views/Login"

//Lazy Loading: only load resources when needing
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page3_1 = lazy(() => import("../views/Page3_1"))
const Page3_2 = lazy(() => import("../views/Page3_2"))
const Page3_3 = lazy(() => import("../views/Page3_3"))
const Page4_1 = lazy(() => import("../views/Page4_1"))
const Page4_2 = lazy(() => import("../views/Page4_2"))
const Page5 = lazy(() => import("../views/Page5"))


//Navigate for redirect
import { Navigate } from "react-router-dom"

// * Method 2: Using 'array' *

//wrap the element, using{} to take every element from comp
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

// All pages go under path:"/" as the children router
const routes = [
    
    // Nested router begins--->
    {
        path: "/",
        element: <Navigate to="/page1" />
    },

    // All pages go under path:"/" as the children router
    // Home is the entire page
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page3_1",
                element: withLoadingComponent(<Page3_1 />)
            },
            {
                path: "/page3/page3_2",
                element: withLoadingComponent(<Page3_2 />)
            },
            {
                path: "/page3/page3_3",
                element: withLoadingComponent(<Page3_3 />)
            },
            {
                path: "/page4/page4_1",
                element: withLoadingComponent(<Page4_1 />)
            },
            {
                path: "/page4/page4_2",
                element: withLoadingComponent(<Page4_2 />)
            },
            {
                path: "/page5",
                element: withLoadingComponent(<Page5 />)
            },
        ]
    },
    // <------- Nested router ends

    {
      path:"/login",
      element: <Login />
    },

    // If the user access the path not existed, redirect to page1
    {
        path:"*",
        element:<Navigate to="/page1" />
    }

    //     {
    //         path:"/home",
    //         element: <Home />
    //     },
    //     {
    //         path:"/about",
    //         element: withLoadingComponent(<About />)
    //     }
    //     ,{
    //         path:"/user",
    //         element: withLoadingComponent(<User />)
    //     }
]

export default routes


/*
Test 1:
  Bug: 
    A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.
  Fix: 
    lazy loading need a loading component to wrap the element: <React.Suspense></React.Suspense>
*/