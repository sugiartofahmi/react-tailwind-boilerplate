import { Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <main className="flex items-center bg-gradient-to-r  from-slate-300 via-emerald-500 to-green-300 justify-center h-screen w-full ">
      <Outlet />
    </main>
  );
};
