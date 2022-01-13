import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CategoriaMarket } from "../components/market/CategoriaMarket";
import { ProductoMarket } from "../components/market/ProductoMarket";
import Aside from "../components/ui/Aside";
import { Navbar } from "../components/ui/Navbar";

import "../components/ui/AsideNavbar.css";

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
            <Route path="/categoria" element={<CategoriaMarket />} />
            <Route path="/producto" element={<ProductoMarket />} />
            <Route path="*" element={<Navigate to="/producto" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
