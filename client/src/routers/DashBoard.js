import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Aside from "../components/layouts/Aside";

import { Navbar } from "../components/layouts/Navbar";

import { CategoriaScreen } from "../components/market/categoria/CategoriaScreen";
import { ProductoScreen } from "../components/market/producto/ProductoScreen";

import "../components/layouts/AsideNavbar.css";

export const DashBoard = () => {
  return (
    <>
      <Navbar />
      <div className="asideRoutes">
        <div className="aside">
          <Aside />
        </div>

        <div className="routes">
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
