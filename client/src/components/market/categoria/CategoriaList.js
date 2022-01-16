import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  categoriaListLoading,
  selectCategoria,
} from "../../../actions/categoria";

import { CategoriaModal } from "./CategoriaModal";
import { CategoriaSearch } from "./CategoriaSearch";

import { uiOpenModal } from "../../../actions/ui";

import { initialState } from "../../../helpers/initialState";

import "./categoria.css";
import "../../../App.css";

export const CategoriaList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ category }) => category);

  const [formvalues, setformvalues] = React.useState([]);

  React.useEffect(() => {
    if (list) {
      setformvalues(list);
    } else {
      setformvalues([]);
    }
  }, [list, setformvalues]);

  React.useEffect(() => {
    dispatch(categoriaListLoading());
  }, [dispatch]);

  const handleAddNew = (items) => {
    const item = Object.assign({ val: "new" }, items);
    dispatch(selectCategoria(item));
    dispatch(uiOpenModal());
  };

  const handleUpdate = (items) => {
    const item = Object.assign({ val: "update" }, items);
    dispatch(selectCategoria(item));
    dispatch(uiOpenModal());
  };

  const handleDelete = (items) => {
    const item = Object.assign({ val: "delete" }, items);
    dispatch(selectCategoria(item));
    dispatch(uiOpenModal());
  };

  const handleDetails = (items) => {
    const item = Object.assign({ val: "details" }, items);
    dispatch(selectCategoria(item));
    dispatch(uiOpenModal());
  };

  return (
    <>
      <div className="space">
        <div className="crud-table">
          <div className="clearfix">
            <div className="form-inline">
              <button
                onClick={() => handleAddNew(initialState)}
                className="btn btn-primary"
              >
                <span className="glyphicon glyphicon-plus"> </span>Add more user
              </button>
            </div>
            <div className="form-inline">
              <CategoriaSearch />
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Categorias</th>
                <th>Detalles</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center">
              {formvalues.map((item) => (
                <tr key={item.nombre}>
                  <td>{item.nombre}</td>
                  <td>{item.descripcion}</td>
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
        <CategoriaModal />
      </div>
    </>
  );
};
