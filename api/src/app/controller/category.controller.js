const { getCategoryService } = require("../services/category.service");

exports.getCategory = async (req, res) => {
  const category = await getCategoryService();
  console.log(category);
  res.status(200).json(category);
  // res.status(200).json({ status: "Seccess", message: "Seccessfully Get Category", category: category });
};
