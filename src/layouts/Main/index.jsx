import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <main className="flex items-center bg-gradient-to-l  from-slate-300 via-emerald-500 to-green-300 justify-center h-screen w-full ">
      <Outlet />
    </main>
  );
};
