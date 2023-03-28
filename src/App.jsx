import { Suspense } from "react";
import { RouterProvider } from "react-router";
import Router from "./router";
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Suspense fallback="Loading...">
        <RouterProvider router={Router} />
      </Suspense>
    </Suspense>
  );
};

export default App;
