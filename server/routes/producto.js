const { Router } = require("express");

const {
  getProducto,
  createProducto,
  filterProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/producto");

const router = Router();

router.get("/", getProducto);

router.post("/", createProducto);

router.get("/name", filterProducto);

router.put("/:id", updateProducto);

router.delete("/:id", deleteProducto);

module.exports = router;
