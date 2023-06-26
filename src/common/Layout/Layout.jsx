import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useProductData from "../../hooks/useProductData";

const Layout = () => {
  const { data } = useProductData("products/categories");

  return (
    <div className="h-[100svh] grid grid-rows-[4rem_1fr]">
      <header className="shadow-md flex items-center justify-between px-10">
        <h1 className="font-bold text-3xl">BEND DOWN SELECT</h1>
      </header>
      <main className="h-full grid grid-cols-[13rem_1fr]">
        <aside className="shadow-md p-5">
          <div className="grid gap-5 mb-5">
            <NavLink
              className={({ isActive }) => {
                return `${isActive && "bg-pink-200 rounded-md p-3"}`;
              }}
              to="/home/dashboard"
            >
              DASHBOARD
            </NavLink>
          </div>
          {data &&
            data.map((item, index) => (
              <div className="grid gap-5 mb-5" key={index}>
                <NavLink
                  to={item.toLowerCase()}
                  className={({ isActive }) => {
                    return `${isActive && "bg-pink-200 rounded-md p-3"}`;
                  }}
                >
                  {item.toUpperCase()}
                </NavLink>
              </div>
            ))}
        </aside>
        <section className="bg-[#ebf2ff] p-10">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
