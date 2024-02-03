const Category = require("../models/Category");

const getCategoryService = async () => {
  const category = await Category.findAll();
  return category;
};
module.exports = { getCategoryService };
