/* 
  Rutas de categoria
  host + /api/categoria
*/
const { response } = require("express");
const Categoria = require("../models/Categoria");

const getCategory = async (req, res = response) => {
  try {
    const category = await Categoria.find().sort({ nombre: 1 });
    res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const createCategory = async (req, res = response) => {
  try {
    const product = await Categoria.findOne({ nombre: req.body.nombre });

    if (product) {
      return res.status(403).json({
        ok: false,
        msg: "La categoria ya existe",
      });
    } else {
      const category = await Categoria.create(req.body);
      res.status(201).json({
        ok: true,
        category,
      });
    }
    
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const filterCategory = async (req, res = response) => {
  try {
    const filterCategory = await Categoria.find({
      $or: [{ nombre: new RegExp(req.query.v, "i") }],
    }).sort({ nombre: 1 });

    res.status(200).json({
      ok: true,
      filterCategory,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const updateCategory = async (req, res = response) => {
  try {
    // id params
    const category = await Categoria.findById(req.params.id).sort({
      nombre: 1,
    });

    if (!category) {
      return res.status(404).json({
        ok: false,
        msg: "Not Found",
      });
    }

    // update
    const categoryUpdate = await Categoria.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true,
      }
    );

    res.status(200).json({
      ok: true,
      categoryUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
  }
};

const deleteCategory = async (req, res = response) => {
  try {
    // delete
    await Categoria.findByIdAndDelete(req.params.id);

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
  getCategory,
  createCategory,
  filterCategory,
  updateCategory,
  deleteCategory,
};
