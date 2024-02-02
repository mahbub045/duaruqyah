const Category = require("../models/Category");

const getCategoryService = async () => {
  const category = await Category.findAll();
  console.log(category);
  return category;
};
module.exports = { getCategoryService };
