import Swal from "sweetalert2";
import { fecthConToken } from "../helpers/fecth";
import { types } from "../types";

export const categoriaListLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken("/categoria/");
      const { category } = await resp.json();
      dispatch(listCategory(category));
    } catch (error) {
      console.log(error);
    }
  };
};

const listCategory = (category) => ({
  type: types.categoriaList,
  payload: category,
});

export const addNewCategoria = (newItem) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken("categoria", newItem, "POST");
      const body = await resp.json();

      if (body.ok) {
        dispatch(categoryAddNew(body.category));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const categoryAddNew = (newItem) => ({
  type: types.categoriaAdd,
  payload: newItem,
});

export const updatecategoria = (newItem) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken(
        `/categoria/${newItem._id}`,
        newItem,
        "PUT"
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(selectUdated(newItem));
      } else {
        // TODO agregar validaciones
        // Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const selectUdated = (newItem) => ({
  type: types.SelectUpdate,
  payload: newItem,
});

export const deletecategoria = (delItem) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken(
        `/categoria/${delItem._id}`,
        {},
        "DELETE"
      );
      const body = await resp.json();
      if (body.ok) {
        dispatch(selectDelete());
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const selectDelete = () => ({
  type: types.SelectDelete,
});

export const selectCategoria = (item) => ({
  type: types.SelectActive,
  payload: item,
});
