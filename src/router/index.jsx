import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Skills = lazy(() => import("../views/Skills"));
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
};

export default Router;
