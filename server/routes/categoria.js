const { Router } = require("express");

const { validateField } = require("../middlewares/validate-field");

const {
  getCategory,
  createCategory,
  filterCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoria");
const { check } = require("express-validator");

const router = Router();

router.get("/", getCategory);

router.post(
  "/",
  [
    check("nombre", "La nombre debe ser obligatoria").not().isEmpty(),
    check("descripcion", "La descripcion debe ser obligatoria").not().isEmpty(),
    validateField,
  ],
  createCategory
);

router.get("/name", filterCategory);

router.put(
  "/:id",
  [
    check("nombre", "La nombre debe ser obligatoria").not().isEmpty(),
    check("descripcion", "La descripcion debe ser obligatoria").not().isEmpty(),
    validateField,
  ],
  updateCategory
);

router.delete("/:id", deleteCategory);

module.exports = router;
