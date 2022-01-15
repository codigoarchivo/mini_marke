import React from "react";
import { ProductoList } from "./ProductoList";

export const ProductoScreen = () => {
  return (
    <>
      <div className="cont-scree">
        <h1>Productos</h1>
        <hr />
        <ProductoList />
      </div>
    </>
  );
};
