const { Router } = require("express");
const router = Router();

router.use("/auth", require("./auth"));
router.use("/categoria", require("./categoria"));
router.use("/producto", require("./producto"));

module.exports = router;
