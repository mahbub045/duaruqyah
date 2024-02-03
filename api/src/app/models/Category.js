const { DataTypes } = require("sequelize");
const dbConnect = require("../../dbConnect");

const Category = dbConnect.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cat_name_bn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cat_name_en: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    no_of_subcat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    no_of_dua: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cat_icon: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "category",
    timestamps: false,
  }
);

module.exports = Category;
