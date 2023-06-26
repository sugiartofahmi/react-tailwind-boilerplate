import { AuthLayout, MainLayout } from "@/layouts";
import { Login, Me, Register } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/me",
    element: <MainLayout />,
    children: [{ path: "/me", element: <Me /> }],
  },
]);

export default router;
