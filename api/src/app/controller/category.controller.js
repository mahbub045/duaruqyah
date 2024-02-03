const e = require("express");
const { getCategoryService } = require("../services/category.service");
const Category = require("../models/Category");

exports.getCategory = async (req, res) => {
  const category = await getCategoryService();
  res.status(200).json(category);

};

exports.postCategory = async (req, res) => {
  const payload = req.body;
  const data = await Category.build(payload);
  res.status(200).json(data);
}
