const Dua = require("../models/Dua");

const getDuaService = async () => {
  const dua = await Dua.findAll();
  return dua;
};
module.exports = { getDuaService };

