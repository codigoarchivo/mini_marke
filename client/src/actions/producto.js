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
  return async (dispatch, getState) => {
    try {
      const resp = await fecthConToken("producto", newItem, "POST");
      const body = await resp.json();

      if (!body.ok) {
        return;
      }

      const nResp = await fecthConToken(`categoria/${body.product.categoria}`);
      const newC = await nResp.json();

      const newProduct = {
        ...body.product,
        categoria: {
          descripcion: newC.product.descripcion,
          nombre: newC.product.nombre,
          _id: newC.product._id,
        },
      };

      dispatch(productAddNew(newProduct));
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
      const resp = await fecthConToken(
        `producto/${newItem._id}`,
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

export const deleteProducto = (delItem) => {
  return async (dispatch) => {
    try {
      const resp = await fecthConToken(
        `producto/${delItem._id}`,
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
