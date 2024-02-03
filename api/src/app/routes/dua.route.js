const { getDua } = require("../controller/dua.controller");

const router = require("express").Router();
router.route("/").get(getDua);

module.exports = router;
