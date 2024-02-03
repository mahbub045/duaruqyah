const {
  getCategory,
  postCategory,
} = require("../controller/category.controller");

const router = require("express").Router();
router.route("/").get(getCategory);
router.route("/").post(postCategory);

module.exports = router;
