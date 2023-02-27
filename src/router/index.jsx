import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
