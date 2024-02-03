const { DataTypes } = require("sequelize");
const dbConnect = require("../../dbConnect");

const subCategory = dbConnect.define(
  "sub-category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_id: DataTypes.INTEGER,
    subcat_id: DataTypes.INTEGER,
    subcat_name_bn: DataTypes.TEXT,
    subcat_name_en: DataTypes.TEXT,
    no_of_dua: DataTypes.INTEGER,
  },
  {
    tableName: "sub_category",
    timestamps: false,
  }
);

module.exports = subCategory;
