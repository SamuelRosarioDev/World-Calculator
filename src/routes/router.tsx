import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Fibonacci from "../pages/Fibonacci";
import MathBasic from "../pages/MathBasic";

const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/fibonacci", element: <Fibonacci /> },
    { path: "/mathbasic", element: <MathBasic /> }
])

export default routes