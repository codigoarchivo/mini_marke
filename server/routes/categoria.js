const { Router } = require("express");

const {
  getCategory,
  createCategory,
  filterCategory,
  updateCategory,
  deleteCategory,
  getCategoryByid,
} = require("../controllers/categoria");

const router = Router();

router.get("/", getCategory);

router.get("/:id", getCategoryByid);

router.post("/", createCategory);

router.get("/name/", filterCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
