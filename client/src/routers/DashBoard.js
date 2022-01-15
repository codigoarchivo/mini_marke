import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Aside from "../components/layouts/Aside";

import { Navbar } from "../components/layouts/Navbar";

import { CategoriaScreen } from "../components/market/categoria/CategoriaScreen";
import { ProductoScreen } from "../components/market/producto/ProductoScreen";

import "../components/layouts/AsideNavbar.css";

export const DashBoard = () => {
  const [change, setChange] = React.useState(false);
  return (
    <>
      <Navbar change={change} setChange={setChange} />
      <div className="asideRoutes">
        <div
          className="aside"
          style={change ? { width: "15%" } : { width: "5%" }}
        >
          <Aside change={change} />
        </div>

        <div
          className="routes"
          style={change ? { width: "85%" } : { width: "95%" }}
        >
          <Routes>
            <Route path="/categoria" element={<CategoriaScreen />} />
            <Route path="/producto" element={<ProductoScreen />} />
            <Route path="*" element={<Navigate to="/producto" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
