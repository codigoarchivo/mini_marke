import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  productoListLoading,
  productoListLoadingByCategoria,
  selectProducto,
} from "../../../actions/producto";

import { ProductoModal } from "./ProductoModal";
import { ProductoSearch } from "./ProductoSearch";

import { uiOpenModal } from "../../../actions/ui";

import { initialStateP } from "../../../helpers/initialState";

import "./producto.css";
import "../../../App.css";

export const ProductoList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ product }) => product);
  const [formList, setformList] = React.useState([]);

  React.useEffect(() => {
    if (list) {
      setformList(list);
    } else {
      setformList([]);
    }
  }, [list, setformList]);

  React.useEffect(() => {
    dispatch(productoListLoadingByCategoria());
    dispatch(productoListLoading());
  }, [dispatch]);

  const handleAddNew = (items) => {
    const item = Object.assign({ val: "new" }, items);
    dispatch(selectProducto(item));
    dispatch(uiOpenModal());
  };

  const handleUpdate = (items) => {
    const item = Object.assign({ val: "update" }, items);
    dispatch(selectProducto(item));
    dispatch(uiOpenModal());
  };

  const handleDelete = (items) => {
    const item = Object.assign({ val: "delete" }, items);
    dispatch(selectProducto(item));
    dispatch(uiOpenModal());
  };

  const handleDetails = (items) => {
    const item = Object.assign({ val: "details" }, items);
    dispatch(selectProducto(item));
    dispatch(uiOpenModal());
  };

  return (
    <>
      <div className="space">
        <div className="crud-table">
          <div className="clearfix">
            <div className="form-inline">
              <button
                onClick={() => handleAddNew(initialStateP)}
                className="btn btn-primary"
              >
                <span className="glyphicon glyphicon-plus"> </span>Add more user
              </button>
            </div>
            <div className="form-inline">
              <ProductoSearch />
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Categorias</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center">
              {formList.map((item, i) => (
                <tr key={i}>
                  <td>{item.categoria?.nombre}</td>
                  <td>{item.nombre}</td>
                  <td>{item.precio}</td>
                  <td>{item.stock}</td>
                  <td>{item.foto}</td>
                  <td>
                    <button
                      onClick={() => handleDetails(item)}
                      className="btn btn-primary mx-1"
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => handleUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-primary mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ProductoModal />
      </div>
    </>
  );
};
