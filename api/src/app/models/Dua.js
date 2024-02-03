const { DataTypes } = require("sequelize");
const dbConnect = require("../../dbConnect");

const Dua = dbConnect.define(
  "dua",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_id: DataTypes.INTEGER,
    subcat_id: DataTypes.INTEGER,
    dua_id: DataTypes.INTEGER,
    dua_name_bn: DataTypes.TEXT,
    dua_name_en: DataTypes.TEXT,
    top_bn: DataTypes.TEXT,
    top_en: DataTypes.TEXT,
    dua_arabic: DataTypes.TEXT,
    dua_indopak: DataTypes.TEXT,
    clean_arabic: DataTypes.TEXT,
    transliteration_bn: DataTypes.TEXT,
    transliteration_en: DataTypes.TEXT,
    translation_bn: DataTypes.TEXT,
    translation_en: DataTypes.TEXT,
    bottom_bn: DataTypes.TEXT,
    bottom_en: DataTypes.TEXT,
    refference_bn: DataTypes.TEXT,
    refference_en: DataTypes.TEXT,
    audio: DataTypes.TEXT,
  },
  {
    tableName: "dua",
    timestamps: false,
  }
);

module.exports = Dua;
