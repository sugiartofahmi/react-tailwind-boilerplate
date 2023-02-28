import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Router from "./router";
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Navbar />
      <Suspense fallback="Loading...">
        <Router />
      </Suspense>
    </Suspense>
  );
};

export default App;
