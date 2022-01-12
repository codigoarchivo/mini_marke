import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FormScreen } from "../components/auth/FormScreen";
import { MarketScreen } from "../components/market/MarketScreen";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startChecking } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

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
