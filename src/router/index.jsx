import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Skills = lazy(() => import("../views/Skills"));
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "skills",
    element: <Skills />,
  },
]);

export default Router;
