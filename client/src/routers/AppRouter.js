import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { FormScreen } from "../components/auth/FormScreen";
import { MarketScreen } from "../market/MarketScreen";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  
  const { checking } = useSelector(({ auth }) => auth);

  if (!checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <FormScreen />
                </PublicRoute>
              }
            />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <MarketScreen />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
