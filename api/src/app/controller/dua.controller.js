const { getDuaService } = require("../services/dua.service");

exports.getDua = async (req, res) => {
  const category = await getDuaService();
  res.status(200).json(category);
};
