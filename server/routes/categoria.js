const { Router } = require("express");

const {
  getCategory,
  createCategory,
  filterCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoria");

const router = Router();

router.get("/", getCategory);

router.post("/", createCategory);

router.get("/name", filterCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
