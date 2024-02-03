const { getSubCat } = require("../controller/sub_category.controller");

const router = require("express").Router();
router.route("/").get(getSubCat);

module.exports = router;
