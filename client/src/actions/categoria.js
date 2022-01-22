import Swal from "sweetalert2";
import { fecthConToken } from "../helpers/fecth";
import { types } from "../types";

export const categoriaListLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken("categoria/");
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
      } else {
        return Swal.fire(
          "Error",
          body.errors.descripcion
            ? body.errors.descripcion.msg
            : body.errors.nombre.msg,
          "error"
        );
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
        `categoria/${newItem._id}`,
        newItem,
        "PUT"
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(selectUdated(newItem));
      } else {
        return Swal.fire(
          "Error",
          body.errors.descripcion
            ? body.errors.descripcion.msg
            : body.errors.nombre.msg,
          "error"
        );
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

export const deletecategoria = () => {
  return async (dispatch, getStates) => {
    try {
      const { _id } = await getStates().category.activeSelect;
      const { list } = await getStates().product;

      const dupe = list.find(({ categoria }) => categoria._id === _id);

      if (dupe) {
        return Swal.fire("Error", "No se puede eliminar la Categoria", "error");
      } else {
        const resp = await fecthConToken(`categoria/${_id}`, {}, "DELETE");
        await resp.json();
        dispatch(selectDelete(_id));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const selectDelete = (_id) => ({
  type: types.SelectDelete,
  payload: _id,
});

export const categoriaSearchLoading = (serchText) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken(`categoria/name?v=${serchText}`);
      const body = await resp.json();
      if (body.ok) {
        dispatch(searchCategory(body.filterCategory));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const searchCategory = (category) => ({
  type: types.categoriaSearch,
  payload: category,
});

export const selectCategoria = (item) => ({
  type: types.SelectActive,
  payload: item,
});

export const clearCategoria = () => ({
  type: types.SelectClear,
});
