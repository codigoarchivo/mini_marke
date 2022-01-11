/* 
  Rutas de producto
  host + /api/producto
*/
const { response } = require("express");
const Producto = require("../models/Producto");

const getProducto = async (req, res = response) => {
  try {
    const product = await Producto.find().populate("categoria");
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
      $or: [{ nombre: new RegExp(req.query.v, "i") }],
    })
      .populate("categoria")
      .sort({ createAt: -1 });

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
    const product = await Producto.findById(req.params.id).populate(
      "categoria"
    );
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
    // id params
    const product = await Producto.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        ok: false,
        msg: "Not Found",
      });
    }

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

module.exports = {
  getProducto,
  createProducto,
  filterProducto,
  updateProducto,
  deleteProducto,
};