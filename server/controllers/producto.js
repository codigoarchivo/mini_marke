/* 
  Rutas de producto
  host + /api/producto
*/
const { response } = require("express");
const Categoria = require("../models/Categoria");
const Producto = require("../models/Producto");

const getProducto = async (req, res = response) => {
  try {
    const product = await Producto.find()
      .populate("categoria")
      .sort({ nombre: 1 });
    res.status(200).json({
      ok: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const createProducto = async (req, res = response) => {
  try {
    const product = await Producto.create(req.body);
    res.status(201).json({
      ok: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const filterProducto = async (req, res = response) => {
  try {
    const filterProduct = await Producto.find({
      $or: [
        { nombre: new RegExp(req.query.v, "i") },
        // TODO buscar como hacer filtro categoria
        // { categoria: new RegExp(req.query.v, "i") },
      ],
    })
      .populate("categoria")
      .sort({ nombre: 1 });
    res.status(200).json({
      ok: true,
      filterProduct,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const updateProducto = async (req, res = response) => {
  try {
    // id params
    const product = await Producto.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        ok: false,
        msg: "Not Found",
      });
    }

    // update
    const productUpdate = await Producto.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true,
      }
    );

    res.status(200).json({
      ok: true,
      productUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const deleteProducto = async (req, res = response) => {
  try {
    // delete
    await Producto.findByIdAndDelete(req.params.id);

    res.status(200).json({
      ok: true,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const getCategoryByid = async (req, res = response) => {
  try {
    const product = await Categoria.findById(req.params.id);
    res.status(200).json({
      ok: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

module.exports = {
  getProducto,
  createProducto,
  filterProducto,
  updateProducto,
  deleteProducto,
  getCategoryByid,
};
