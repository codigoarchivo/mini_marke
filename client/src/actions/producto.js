import Swal from "sweetalert2";
import { fecthConToken } from "../helpers/fecth";
import { types } from "../types";

export const productoListLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken("producto/");
      const { product } = await resp.json();
      dispatch(listProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
};

const listProduct = (product) => ({
  type: types.productoList,
  payload: product,
});

export const productoListLoadingByCategoria = () => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken("categoria/");
      const { category } = await resp.json();
      dispatch(listProductByCategory(category));
    } catch (error) {
      console.log(error);
    }
  };
};

const listProductByCategory = (category) => ({
  type: types.proByCat,
  payload: category,
});

export const addNewProducto = (newItem) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken("producto", newItem, "POST");
      const init = await resp.json();

      const respN = await fecthConToken(`listid/${newItem.categoria}`);
      const body = await respN.json();

      if (body.ok) {
        const next = {
          ...init.product,
          categoria: body.product,
        };
        return dispatch(productAddNew(next));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const productAddNew = (newItem) => ({
  type: types.productoAdd,
  payload: newItem,
});

export const updateProducto = (newItem) => {
  return async (dispatch) => {
    try {
      // const { _id } = await getStates().category.activeSelect;
      const resp = await fecthConToken(
        `producto/${newItem._id}`,
        newItem,
        "PUT"
      );
      const init = await resp.json();

      const respN = await fecthConToken(
        `listid/${
          newItem.categoria._id ? newItem.categoria._id : newItem.categoria
        }`
      );
      const body = await respN.json();

      if (body.ok) {
        const next = {
          ...init.productUpdate,
          categoria: body.product,
        };
  
        dispatch(selectUdated(next));
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

export const deleteProducto = () => {
  return async (dispatch, getStates) => {
    const { _id } = await getStates().category.activeSelect;
    try {
      const resp = await fecthConToken(`producto/${_id}`, {}, "DELETE");
      const body = await resp.json();
      if (body.ok) {
        dispatch(selectDelete(_id));
      } else {
        Swal.fire("Error", body.msg, "error");
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

export const productoSearchLoading = (val) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken(`producto/name?v=${val}`);
      const body = await resp.json();
      if (body.ok) {
        dispatch(searchProduct(body.filterProduct));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const searchProduct = (product) => ({
  type: types.productoSearch,
  payload: product,
});

export const selectProducto = (item) => ({
  type: types.SelectActive,
  payload: item,
});

export const clearProducto = () => ({
  type: types.SelectClear,
});
