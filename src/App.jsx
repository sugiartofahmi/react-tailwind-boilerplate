import Router from "./router";
import MainLayout from "./layouts/MainLayout";
import { Suspense } from "react";
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <h1>test</h1>
      <MainLayout>
        <Suspense fallback="Loading...">
          <Router />
        </Suspense>
      </MainLayout>
    </Suspense>
  );
};

export default App;
