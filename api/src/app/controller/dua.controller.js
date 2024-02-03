const { getDuaService } = require("../services/dua.service");

exports.getDua = async (req, res) => {
  const dua = await getDuaService();
  res.status(200).json(dua);
};
