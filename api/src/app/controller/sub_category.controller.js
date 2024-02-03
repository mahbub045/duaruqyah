const getSubCatService = require("../services/sub_category.service");

exports.getSubCat = async (req, res) => {
  const subCat = await getSubCatService();
  res.status(200).json(subCat);
};
