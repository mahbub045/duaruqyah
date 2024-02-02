const { Sequelize, DataTypes } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelize = new Sequelize("sqlite::memory:");

const Dua = dbConnect.define("dua", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
  },
  cat_id: {
    type: DataTypes.INTEGER,
  },
  subcat_id: {
    type: DataTypes.INTEGER,
  },
  dua_id: {
    type: DataTypes.INTEGER,
  },
  dua_name_bn: {
    type: DataTypes.STRING,
  },
  dua_name_en: {
    type: DataTypes.STRING,
  },
  top_bn: {
    type: DataTypes.STRING,
  },
  top_en: {
    type: DataTypes.STRING,
  },
  dua_arabic: {
    type: DataTypes.STRING,
  },
  dua_indopak: {
    type: DataTypes.STRING,
  },
  clean_arabic: {
    type: DataTypes.STRING,
  },
  transliteration_bn: {
    type: DataTypes.STRING,
  },
  transliteration_en: {
    type: DataTypes.STRING,
  },
  translation_bn: {
    type: DataTypes.STRING,
  },
  translation_en: {
    type: DataTypes.STRING,
  },
  bottom_bn: {
    type: DataTypes.STRING,
  },
  bottom_en: {
    type: DataTypes.STRING,
  },
  refference_bn: {
    type: DataTypes.STRING,
  },
  refference_en: {
    type: DataTypes.STRING,
  },
  audio: {
    type: DataTypes.STRING,
  },
});
module.exports = Dua;
