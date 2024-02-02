const { getCategory } = require("../controller/category.controller");

const router = require("express").Router();
router.route("/").get(getCategory);

module.exports = router;
