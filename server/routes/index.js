const { Router } = require("express");
const { getCategoryByid } = require("../controllers/producto");

const router = Router();

router.use("/auth", require("./auth"));
router.use("/categoria", require("./categoria"));
router.use("/producto", require("./producto"));

router.get("/listid/:id", getCategoryByid);

module.exports = router;
