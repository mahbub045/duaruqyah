const cors = require("cors");
const express = require("express");
const categoryRoute = require("../src/app/routes/category.route")
const duaRoute = require("../src/app/routes/dua.route")
const subCategoryRoute = require("../src/app/routes/sub_category.route")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/dua", duaRoute);
app.use("/api/v1/sub-category", subCategoryRoute);
module.exports = app;