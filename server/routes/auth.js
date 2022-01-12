/* 
  Rutas de usuarios / auth
  host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { validateField } = require("../middlewares/validate-field");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.post(
  "/new",
  [
    // Check information
    check("name", "El nombre debe ser obligatorio").not().isEmpty(),
    check("email", "El email debe ser obligatorio").isEmail(),
    check(
      "password",
      "El password debe ser obligatorio minimo 6 caracteres"
    ).isLength({ min: 6 }),
    // Show information
    validateField,
  ],

  createUser
);

router.post(
  "/",
  [
    // Check information
    check("email", "El email debe ser obligatorio").isEmail(),
    check(
      "password",
      "El password debe ser obligatorio minimo 6 caracteres"
    ).isLength({ min: 6 }),
    // Show information
    validateField,
  ],
  loginUser
);

router.get("/renew", [validateJWT], revalidateToken);

module.exports = router;
